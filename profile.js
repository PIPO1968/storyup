const editForm = document.getElementById('edit-form');

editForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const updatedStory = {
        title: document.getElementById('edit-title').value,
        text: document.getElementById('edit-text').value,
        language: document.getElementById('edit-language').value,
        type: document.getElementById('edit-type').value
    };

    db.ref('stories/' + currentEditId).update(updatedStory)
        .then(() => {
            alert('Historia actualizada');
            document.getElementById('edit-form-container').style.display = 'none';
            location.reload();
        })
        .catch((error) => {
            alert('Error al actualizar: ' + error.message);
        });
});
let currentEditId = null;

function editStory(id, title, text, language, type) {
    currentEditId = id;
    document.getElementById('edit-title').value = title;
    document.getElementById('edit-text').value = text;
    document.getElementById('edit-language').value = language;
    document.getElementById('edit-type').value = type;
    document.getElementById('edit-form-container').style.display = 'block';
}
const db = firebase.database();
const userInfo = document.getElementById('user-info');
const myStories = document.getElementById('my-stories');
const logoutBtn = document.getElementById('logout-btn');

firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    const nickname = user.isAnonymous ? 'Anónimo' : user.email.split('@')[0];

    userInfo.innerText = `Usuario: ${nickname}`;
    let storyCount = 0;
    let totalLikes = 0;

    db.ref('stories').once('value', (snapshot) => {
        myStories.innerHTML = '';
        snapshot.forEach((childSnapshot) => {
            const story = childSnapshot.val();
            if (story.nickname === nickname) {
                storyCount++;
                totalLikes += story.likes || 0;
                const div = document.createElement('div');
                div.classList.add('story');
                // Escapar comillas simples y dobles para evitar errores en los argumentos
                const safeTitle = story.title.replace(/'/g, "&#39;").replace(/"/g, '&quot;');
                const safeText = story.text.replace(/'/g, "&#39;").replace(/"/g, '&quot;');
                div.innerHTML = `
                                            <h3>${safeTitle}</h3>
                                            <p>${safeText}</p>
                                            <small>${story.language} / ${story.type}</small>
                                            <br>
                                            <button onclick="editStory('${childSnapshot.key}', '${safeTitle}', '${safeText}', '${story.language}', '${story.type}')">✏️ Editar</button>
                                            <button onclick="deleteStory('${childSnapshot.key}')">🗑️ Eliminar</button>
                                            <hr>
                                        `;
                myStories.appendChild(div);
            }
        });
        const countDisplay = document.createElement('p');
        countDisplay.innerText = `Total de historias publicadas: ${storyCount}`;
        const likesDisplay = document.createElement('p');
        likesDisplay.innerText = `Total de likes recibidos: ${totalLikes}`;
        myStories.prepend(likesDisplay);
        myStories.prepend(countDisplay);
    });

});

function deleteStory(storyId) {
    const confirmDelete = confirm('¿Estás seguro de que quieres eliminar esta historia?');
    if (confirmDelete) {
        db.ref('stories/' + storyId).remove()
            .then(() => {
                alert('Historia eliminada');
                location.reload(); // Recarga la página para actualizar el feed
            })
            .catch((error) => {
                alert('Error al eliminar: ' + error.message);
            });
    }
}

logoutBtn.addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
        window.location.href = 'login.html';
    });
});

const db = firebase.database();
const container = document.getElementById('pending-stories');
const logoutBtn = document.getElementById('logout-btn');

firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    db.ref('pendingStories').once('value', (snapshot) => {
        container.innerHTML = '';
        let hasPending = false;
        snapshot.forEach((childSnapshot) => {
            const story = childSnapshot.val();
            const storyId = childSnapshot.key;

            // Filtrar solo las historias con approved: false
            if (story.approved === false) {
                hasPending = true;
                const div = document.createElement('div');
                div.classList.add('story');
                div.innerHTML = `
          <h3>${story.title}</h3>
          <p>${story.text}</p>
          <small><strong>Autor:</strong> ${story.nickname || 'Anónimo'}<br>
          <strong>Idioma:</strong> ${story.language}<br>
          <strong>Tipo:</strong> ${story.type}</small>
          <br>
          <button onclick="approveStory('${storyId}', ${JSON.stringify(story).replace(/\"/g, '&quot;')})">✅ Aprobar</button>
          <button onclick="deletePendingStory('${storyId}')">🗑️ Eliminar</button>
          <hr>
        `;
                container.appendChild(div);
            }
        });
        if (!hasPending) {
            container.innerHTML = '<p>No hay historias pendientes de aprobación.</p>';
        }
    });
});

function approveStory(id, story) {
    // Mover la historia a 'stories' y eliminar de 'pendingStories'
    db.ref('stories').push(story).then(() => {
        db.ref('pendingStories/' + id).remove().then(() => {
            alert('Historia aprobada');
            location.reload();
        });
    });
}

function deletePendingStory(id) {
    if (confirm('¿Eliminar esta historia pendiente?')) {
        db.ref('pendingStories/' + id).remove().then(() => {
            alert('Historia eliminada');
            location.reload();
        });
    }
}

logoutBtn.addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
        window.location.href = 'login.html';
    });
});

// Inicializar Firebase Messaging y solicitar token
const messaging = firebase.messaging();

messaging.requestPermission()
    .then(() => messaging.getToken())
    .then((token) => {
        console.log('Token de notificación:', token);
        // Aquí puedes guardar el token en tu base de datos si quieres enviarle notificaciones personalizadas
    })
    .catch((err) => {
        console.error('No se pudo obtener permiso para notificaciones:', err);
    });
// Solicitar permiso de notificaciones
Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
        console.log('Permiso de notificaciones concedido');
    } else {
        console.log('Permiso denegado');
    }
});
// Ocultar splash screen al cargar la página
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
function loadFeaturedStories() {
    db.ref('stories').orderByChild('likes').limitToLast(3).once('value', (snapshot) => {
        const container = document.getElementById('featured-stories');
        container.innerHTML = '';
        snapshot.forEach((childSnapshot) => {
            const story = childSnapshot.val();
            const div = document.createElement('div');
            div.classList.add('story');
            div.innerHTML = `
				<h3>⭐ ${story.title}</h3>
				<p>${story.text}</p>
				<small><strong>${story.nickname}</strong> — ${story.language} / ${story.type}</small>
				<hr>
			`;
            container.prepend(div);
        });
    });
}

loadFeaturedStories();

const db = firebase.database();
const form = document.getElementById('storyForm');
const messageDiv = document.getElementById('message');
const feed = document.getElementById('feed');
const filterLanguage = document.getElementById('filter-language');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const text = document.getElementById('content').value;
    const language = document.getElementById('language').value;
    const type = document.getElementById('authorType').value;
    const user = firebase.auth().currentUser;
    let nickname = 'Anónimo';
    nickname = user.displayName;
}
    const newStoryRef = db.ref('pendingStories').push();
newStoryRef.set({
    title,
	< small > <strong>${story.nickname}</strong> — ${ story.language } / ${ story.type }</small >
// Ocultar splash screen al cargar la página
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Simulación de historias destacadas (sin Firebase)
function loadFeaturedStories() {
    // Aquí puedes agregar historias de ejemplo si lo deseas
}
loadFeaturedStories();

const form = document.getElementById('storyForm');
const messageDiv = document.getElementById('message');

form?.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulación de guardado de historia
    messageDiv.textContent = '¡Historia enviada! (Simulación, sin backend)';
    form.reset();
});

// Cierre de sesión simulado
document.getElementById('logout-btn')?.addEventListener('click', () => {
    window.location.href = 'login.html';
});
<br>
    <button onclick="likeStory('${childSnapshot.key}')">❤️ Like</button>
    <span id="likes-${childSnapshot.key}">${story.likes || 0} likes</span>
    <hr>
        `;
        feed.appendChild(div);
                // Escuchar cambios en los likes en tiempo real
                db.ref('stories/' + childSnapshot.key + '/likes').on('value', (likeSnap) => {
                    const likeCount = likeSnap.val() || 0;
        const likeElem = document.getElementById('likes-' + childSnapshot.key);
        if (likeElem) likeElem.innerText = likeCount + ' likes';
                });
            }
        });
    });

        function likeStory(storyId) {
        const storyRef = db.ref('stories/' + storyId + '/likes');
        storyRef.transaction((currentLikes) => {
            return (currentLikes || 0) + 1;
        });
    }

        if (filterLanguage) {
            filterLanguage.addEventListener('change', () => {
                const selected = filterLanguage.value;
                loadStories(selected);
            });
        // Cargar todas al inicio
        loadStories('all');
    }

        // ...código de Realtime Database y filtro de idioma ya presente arriba...

        const logoutBtn = document.getElementById('logout-btn');

    logoutBtn.addEventListener('click', () => {
            firebase.auth().signOut().then(() => {
                alert('Sesión cerrada');
                window.location.href = 'login.html';
            }).catch((error) => {
                alert(error.message);
            });
    });

}

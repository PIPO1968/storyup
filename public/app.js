
// Utilidades para JWT
function getToken() {
    return localStorage.getItem('token');
}

function setToken(token) {
    localStorage.setItem('token', token);
}

function removeToken() {
    localStorage.removeItem('token');
}

// Ocultar splash screen al cargar la página
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    loadFeaturedStories();
    loadStories('all');
});

// Cargar historias destacadas
async function loadFeaturedStories() {
    const container = document.getElementById('featured-stories');
    if (!container) return;
    container.innerHTML = '';
    const res = await fetch('/api/stories');
    const stories = await res.json();
    // Ordenar por likes descendente y tomar las 3 más populares
    const top = (stories || []).sort((a, b) => (b.likes || 0) - (a.likes || 0)).slice(0, 3);
    top.forEach(story => {
        const div = document.createElement('div');
        div.classList.add('story');
        div.innerHTML = `
            <h3>⭐ ${story.title}</h3>
            <p>${story.content}</p>
            <small><strong>${story.nickname || 'Anónimo'}</strong> — ${story.language || ''} / ${story.type || ''}</small>
            <hr>
        `;
        container.appendChild(div);
    });
}

// Cargar historias al feed principal
async function loadStories(language = 'all') {
    const feed = document.getElementById('feed');
    if (!feed) return;
    feed.innerHTML = '';
    const res = await fetch('/api/stories');
    let stories = await res.json();
    if (language !== 'all') {
        stories = stories.filter(story => story.language === language);
    }
    stories.reverse().forEach(story => {
        const div = document.createElement('div');
        div.classList.add('story');
        div.innerHTML = `
            <h3>${story.title}</h3>
            <p>${story.content}</p>
            <small><strong>${story.nickname || 'Anónimo'}</strong> — ${story.language || ''} / ${story.type || ''}</small>
            <button onclick="likeStory(${story.id})">❤️ Like</button>
            <span id="likes-${story.id}">${story.likes || 0} likes</span>
            <hr>
        `;
        feed.appendChild(div);
    });
}

// Like a story
async function likeStory(storyId) {
    const token = getToken();
    const res = await fetch(`/api/stories/${storyId}/like`, {
        method: 'POST',
        headers: {
            'Authorization': token ? `Bearer ${token}` : ''
        }
    });
    if (res.ok) {
        // Actualizar likes en el DOM
        const storyRes = await fetch(`/api/stories/${storyId}`);
        const story = await storyRes.json();
        const likeElem = document.getElementById('likes-' + storyId);
        if (likeElem) likeElem.innerText = (story.likes || 0) + ' likes';
    } else {
        alert('Debes iniciar sesión para dar like.');
    }
}

// Enviar nueva historia
const form = document.getElementById('storyForm');
const messageDiv = document.getElementById('message');
form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const language = document.getElementById('language').value;
    const type = document.getElementById('authorType').value;
    const token = getToken();
    const res = await fetch('/api/stories', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ? `Bearer ${token}` : ''
        },
        body: JSON.stringify({ title, content, language, type })
    });
    if (res.ok) {
        messageDiv.textContent = '¡Historia enviada!';
        form.reset();
        loadStories('all');
        loadFeaturedStories();
    } else {
        messageDiv.textContent = 'Error al enviar la historia. ¿Estás logueado?';
    }
});

// Filtro de idioma
const filterLanguage = document.getElementById('filter-language');
filterLanguage?.addEventListener('change', () => {
    const selected = filterLanguage.value;
    loadStories(selected);
});

// Cierre de sesión
const logoutBtn = document.getElementById('logout-btn');
logoutBtn?.addEventListener('click', () => {
    removeToken();
    window.location.href = 'login.html';
});

// profile.js
// Mostrar datos del usuario logueado y permitir cerrar sesión

document.addEventListener('DOMContentLoaded', function () {
    // Obtener usuario logueado
    const user = JSON.parse(localStorage.getItem('storyup_logged'));
    const userInfo = document.getElementById('user-info');
    const logoutBtn = document.getElementById('logout-btn');

    if (!user) {
        // Si no hay usuario logueado, redirigir a login
        window.location.href = 'login.html';
        return;
    }

    // Mostrar datos del usuario
    userInfo.innerHTML = `
        <strong>Nombre:</strong> ${user.name}<br>
        <strong>Email:</strong> ${user.email}<br>
        <strong>Idioma preferido:</strong> ${user.language}
    `;

    // Cerrar sesión
    logoutBtn.addEventListener('click', function () {
        localStorage.removeItem('storyup_logged');
        window.location.href = 'login.html';
    });

    // (Opcional) Mostrar imagen de perfil si existe
    const img = document.getElementById('profile-image');
    const imgData = localStorage.getItem('profile_image_' + user.email);
    if (imgData) {
        img.src = imgData;
        img.style.display = 'block';
    }

    // Guardar imagen de perfil
    const imgInput = document.getElementById('profile-image-input');
    if (imgInput) {
        imgInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function (evt) {
                localStorage.setItem('profile_image_' + user.email, evt.target.result);
                img.src = evt.target.result;
                img.style.display = 'block';
            };
            reader.readAsDataURL(file);
        });
    }

    // --- Historias ---
    const storiesDiv = document.getElementById('my-stories');
    const storyForm = document.getElementById('story-form');

    function getAllStories() {
        return JSON.parse(localStorage.getItem('storyup_stories') || '[]');
    }
    function saveAllStories(stories) {
        localStorage.setItem('storyup_stories', JSON.stringify(stories));
    }

    function renderStories() {
        const stories = getAllStories();
        // Mostrar solo las historias del usuario
        const myStories = stories.filter(s => s.author === user.email);
        if (myStories.length === 0) {
            storiesDiv.innerHTML = '<p>No has publicado ninguna historia aún.</p>';
            return;
        }
        storiesDiv.innerHTML = myStories.map((story, idx) => `
            <div class="story-block" style="border:1.5px solid #6366f1;padding:1em;margin-bottom:1em;border-radius:10px;background:#232526;">
                <h3 style="color:#a5b4fc;">${story.title}</h3>
                <p>${story.text}</p>
                <div style="font-size:0.95em;color:#aaa;">Idioma: ${story.language} · Tipo: ${story.type}</div>
                <div style="margin-top:8px;">
                    <button class="like-btn" data-id="${story.id}" style="background:#6366f1;color:#fff;border:none;padding:6px 16px;border-radius:6px;cursor:pointer;">
                        👍 Me gusta (<span class="like-count">${story.likes || 0}</span>)
                    </button>
                </div>
            </div>
        `).join('');
        // Añadir listeners a los botones de like
        document.querySelectorAll('.like-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const id = this.getAttribute('data-id');
                let stories = getAllStories();
                const idx = stories.findIndex(s => s.id === id);
                if (idx !== -1) {
                    // Likes públicos: cada usuario puede dar like una vez por historia
                    let liked = JSON.parse(localStorage.getItem('storyup_likes_' + user.email) || '[]');
                    if (liked.includes(id)) return; // Ya dio like
                    stories[idx].likes = (stories[idx].likes || 0) + 1;
                    saveAllStories(stories);
                    liked.push(id);
                    localStorage.setItem('storyup_likes_' + user.email, JSON.stringify(liked));
                    renderStories();
                }
            });
        });
    }

    if (storyForm) {
        storyForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const title = document.getElementById('story-title').value.trim();
            const text = document.getElementById('story-text').value.trim();
            const language = document.getElementById('story-language').value;
            const type = document.getElementById('story-type').value;
            if (!title || !text) return;
            // Crear historia
            const stories = getAllStories();
            const id = 's' + Date.now() + Math.floor(Math.random()*1000);
            stories.unshift({
                id,
                author: user.email,
                title,
                text,
                language,
                type,
                likes: 0
            });
            saveAllStories(stories);
            storyForm.reset();
            renderStories();
        });
    }

    renderStories();
});

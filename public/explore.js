// explore.js
// Mostrar todas las historias públicas, con autor, likes y botón de like si el usuario está logueado

document.addEventListener('DOMContentLoaded', function () {
    const feed = document.getElementById('public-feed');
    const user = JSON.parse(localStorage.getItem('storyup_logged'));

    function getAllStories() {
        return JSON.parse(localStorage.getItem('storyup_stories') || '[]');
    }
    function getUserByEmail(email) {
        const users = JSON.parse(localStorage.getItem('storyup_users') || '[]');
        return users.find(u => u.email === email);
    }
    function saveAllStories(stories) {
        localStorage.setItem('storyup_stories', JSON.stringify(stories));
    }

    function renderFeed() {
        const stories = getAllStories();
        if (stories.length === 0) {
            feed.innerHTML = '<p>No hay historias públicas aún.</p>';
            return;
        }
        feed.innerHTML = stories.map(story => {
            const author = getUserByEmail(story.author);
            const authorName = story.anonymous ? 'Anónimo' : (author ? author.name : 'Anónimo');
            return `
                <div class="story-block" style="border:1.5px solid #6366f1;padding:1em;margin-bottom:1em;border-radius:10px;background:#232526;">
                    <h3 style="color:#a5b4fc;">${story.title}</h3>
                    <p>${story.text}</p>
                    <div style="font-size:0.95em;color:#aaa;">Idioma: ${story.language} · Tipo: ${story.type}</div>
                    <div style="font-size:0.95em;color:#aaa;">Autor: ${authorName}</div>
                    <div style="margin-top:8px;">
                        <button class="like-btn" data-id="${story.id}" style="background:#6366f1;color:#fff;border:none;padding:6px 16px;border-radius:6px;cursor:pointer;" ${user ? '' : 'disabled'}>
                            👍 Me gusta (<span class="like-count">${story.likes || 0}</span>)
                        </button>
                    </div>
                </div>
            `;
        }).join('');
        // Añadir listeners a los botones de like
        if (user) {
            document.querySelectorAll('.like-btn').forEach(btn => {
                btn.addEventListener('click', function () {
                    const id = this.getAttribute('data-id');
                    let stories = getAllStories();
                    const idx = stories.findIndex(s => s.id === id);
                    if (idx !== -1) {
                        let liked = JSON.parse(localStorage.getItem('storyup_likes_' + user.email) || '[]');
                        if (liked.includes(id)) return; // Ya dio like
                        stories[idx].likes = (stories[idx].likes || 0) + 1;
                        saveAllStories(stories);
                        liked.push(id);
                        localStorage.setItem('storyup_likes_' + user.email, JSON.stringify(liked));
                        renderFeed();
                    }
                });
            });
        }
    }

    renderFeed();
});

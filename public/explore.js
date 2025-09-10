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
            let authorName = story.anonymous ? 'Anónimo' : (author ? author.name : 'Anónimo');
            let authorHtml = authorName;
            if (!story.anonymous && author) {
                authorHtml = `<a href="profile.html?user=${encodeURIComponent(author.email)}" style="color:#a5b4fc;text-decoration:underline;">${authorName}</a>`;
            }
            // Mostrar idioma y tipo legibles
            const langMap = {
                es: 'Español', en: 'English', zh: 'Chino', hi: 'Hindi', ar: 'Árabe', pt: 'Portugués', ru: 'Ruso', ja: 'Japonés', de: 'Alemán', fr: 'Francés', it: 'Italiano', tr: 'Turco', ko: 'Coreano', vi: 'Vietnamita', pl: 'Polaco', nl: 'Neerlandés', fa: 'Persa', th: 'Tailandés', uk: 'Ucraniano', ro: 'Rumano', el: 'Griego', hu: 'Húngaro', sv: 'Sueco', cs: 'Checo', he: 'Hebreo'
            };
            const typeMap = { real: 'Real', ficcion: 'Ficción', diario: 'Diario', confesion: 'Confesión' };
            const idioma = langMap[story.language] || story.language;
            const tipo = typeMap[story.type] || story.type;
            return `
                <div class="story-block" style="border:1.5px solid #6366f1;padding:1em;margin-bottom:1em;border-radius:10px;background:#232526;">
                    <h3 style="color:#a5b4fc;">${story.title}</h3>
                    <p>${story.text}</p>
                    <div style="font-size:0.95em;color:#aaa;">Idioma: ${idioma} · Tipo: ${tipo}</div>
                    <div style="font-size:0.95em;color:#aaa;">Autor: ${authorHtml}</div>
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

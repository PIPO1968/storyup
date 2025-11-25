// moderation.js
// Moderación de historias: mostrar todas las historias de usuarios, permitir editar y borrar

document.addEventListener('DOMContentLoaded', function () {
    const user = JSON.parse(localStorage.getItem('storyup_logged'));
    const adminEmails = ["pipocanarias@hotmail.com", "piporgz68@gmail.com"];
    const isMod = user && (user.role === 'moderador' || adminEmails.includes(user.email));
    const storiesDiv = document.getElementById('pending-stories');
    const logoutBtn = document.getElementById('logout-btn');

    if (!isMod) {
        storiesDiv.innerHTML = '<p style="color:#ef4444;">Acceso solo para moderadores.</p>';
        if (logoutBtn) logoutBtn.style.display = 'none';
        return;
    }

    function getAllStories() {
        return JSON.parse(localStorage.getItem('storyup_stories') || '[]');
    }
    function saveAllStories(stories) {
        localStorage.setItem('storyup_stories', JSON.stringify(stories));
    }

    function getFriends(email) {
        return JSON.parse(localStorage.getItem('storyup_friends_' + email) || '[]');
    }

    function renderStories() {
        const stories = getAllStories();
        const friends = getFriends(user.email);
        // Solo historias de amigos
        const friendStories = stories.filter(story => friends.includes(story.author));
        if (friendStories.length === 0) {
            storiesDiv.innerHTML = '<p>No hay historias de tus amigos para moderar.</p>';
            return;
        }
        storiesDiv.innerHTML = `<ul style='padding-left:0;list-style:none;'>${friendStories.map((story, idx) => {
            return `<li style='margin-bottom:10px;display:flex;align-items:center;'><span style='min-width:2em;text-align:right;color:#a5b4fc;font-weight:bold;display:inline-block;'>${idx + 1}.</span> <a href='#' class='mod-story-link' data-idx='${idx}' style='color:#6366f1;text-decoration:underline;font-weight:bold;margin-left:0.5em;'>${story.title}</a><div class='mod-story-detail' style='display:none;'></div></li>`;
        }).join('')}</ul>`;

        document.querySelectorAll('.mod-story-link').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const idx = parseInt(this.getAttribute('data-idx'));
                const stories = getAllStories();
                const friends = getFriends(user.email);
                const friendStories = stories.filter(story => friends.includes(story.author));
                const story = friendStories[idx];
                const detailDiv = this.nextElementSibling;
                if (detailDiv.style.display === 'block') {
                    detailDiv.style.display = 'none';
                    detailDiv.innerHTML = '';
                } else {
                    document.querySelectorAll('.mod-story-detail').forEach(div => { div.style.display = 'none'; div.innerHTML = ''; });
                    detailDiv.innerHTML = `
                        <div class='story-block' style='border:1.5px solid #6366f1;padding:1em;margin-top:8px;border-radius:10px;background:#232526;'>
                            <h3 style='color:#a5b4fc;'>${story.title}</h3>
                            <div>${story.text}</div>
                            <div style='font-size:0.95em;color:#aaa;'>Idioma: ${story.language} · Tipo: ${story.type}</div>
                            <div style='font-size:0.95em;color:#aaa;'>Autor: ${story.author}</div>
                            <div style='margin-top:8px;display:flex;gap:8px;flex-wrap:wrap;'>
                                <button class='edit-story-btn' data-idx='${idx}' style='background:#fbbf24;color:#232526;border:none;padding:6px 16px;border-radius:6px;cursor:pointer;'>✏️ Editar</button>
                                <button class='delete-story-btn' data-idx='${idx}' style='background:#ef4444;color:#fff;border:none;padding:6px 16px;border-radius:6px;cursor:pointer;'>🗑️ Borrar</button>
                            </div>
                        </div>
                    `;
                    detailDiv.style.display = 'block';
                    // Editar historia
                    detailDiv.querySelector('.edit-story-btn').onclick = function () {
                        const newTitle = prompt('Nuevo título:', story.title);
                        if (newTitle !== null && newTitle.trim() !== '') {
                            story.title = newTitle.trim();
                        }
                        const newText = prompt('Nuevo texto:', story.text);
                        if (newText !== null && newText.trim() !== '') {
                            story.text = newText.trim();
                        }
                        saveAllStories(stories);
                        renderStories();
                    };
                    // Borrar historia
                    detailDiv.querySelector('.delete-story-btn').onclick = function () {
                        if (!confirm('¿Seguro que quieres borrar esta historia?')) return;
                        stories.splice(idx, 1);
                        saveAllStories(stories);
                        renderStories();
                    };
                }
            });
        });
    }

    renderStories();

    if (logoutBtn) {
        logoutBtn.onclick = function () {
            localStorage.removeItem('storyup_logged');
            window.location.href = 'login.html';
        };
    }
});

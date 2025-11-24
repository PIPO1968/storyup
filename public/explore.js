// explore.js
// Mostrar todas las historias públicas, con autor, likes y botón de like si el usuario está logueado

document.addEventListener('DOMContentLoaded', function () {
    const feed = document.getElementById('public-feed');
    const user = JSON.parse(localStorage.getItem('storyup_logged'));

    async function renderFeed() {
        feed.innerHTML = '<p>Cargando historias...</p>';
        const res = await fetch('/api/stories');
        const stories = res.ok ? await res.json() : [];
        if (!stories.length) {
            feed.innerHTML = '<p>No hay historias públicas aún.</p>';
            return;
        }
        // Mostrar solo las 10 más recientes
        const lastStories = stories.slice(0, 10);
        feed.innerHTML = `<ul id="story-list" style="padding-left:0;list-style:none;">${lastStories.map((story, idx) => {
            const num = idx + 1;
            return `<li style="margin-bottom:10px;display:flex;align-items:center;"><span style="min-width:2em;text-align:right;color:#a5b4fc;font-weight:bold;display:inline-block;">${num}.</span> <a href="#" class="story-link" data-idx="${idx}" style="color:#6366f1;text-decoration:underline;font-weight:bold;margin-left:0.5em;">${story.title}</a><div class="story-detail" style="display:none;"></div></li>`;
        }).join('')}</ul>`;

        // Añadir listeners a los enlaces
        document.querySelectorAll('.story-link').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const idx = parseInt(this.getAttribute('data-idx'));
                const story = lastStories[idx];
                // No hay datos de usuario, solo email
                let authorName = story.anonymous ? 'Anónimo' : (story.author || 'Anónimo');
                let authorHtml = authorName;
                if (!story.anonymous && story.author) {
                    authorHtml = `<a href="profile.html?user=${encodeURIComponent(story.author)}" style="color:#a5b4fc;text-decoration:underline;">${authorName}</a>`;
                }
                const langMap = {
                    es: 'Español', en: 'English', zh: 'Chino', hi: 'Hindi', ar: 'Árabe', pt: 'Portugués', ru: 'Ruso', ja: 'Japonés', de: 'Alemán', fr: 'Francés', it: 'Italiano', tr: 'Turco', ko: 'Coreano', vi: 'Vietnamita', pl: 'Polaco', nl: 'Neerlandés', fa: 'Persa', th: 'Tailandés', uk: 'Ucraniano', ro: 'Rumano', el: 'Griego', hu: 'Húngaro', sv: 'Sueco', cs: 'Checo', he: 'Hebreo'
                };
                const typeMap = { real: 'Real', ficcion: 'Ficción', diario: 'Diario', confesion: 'Confesión' };
                const idioma = langMap[story.language] || story.language;
                const tipo = typeMap[story.type] || story.type;
                // Mostrar detalle debajo del link
                const detailDiv = this.nextElementSibling;
                if (detailDiv.style.display === 'block') {
                    detailDiv.style.display = 'none';
                    detailDiv.innerHTML = '';
                } else {
                    // Cerrar otros detalles abiertos
                    document.querySelectorAll('.story-detail').forEach(div => { div.style.display = 'none'; div.innerHTML = ''; });
                    detailDiv.innerHTML = `
                        <div class="story-block" style="border:1.5px solid #6366f1;padding:1em;margin-top:8px;border-radius:10px;background:#232526;">
                            <h3 style="color:#a5b4fc;">${story.title}</h3>
                            <p>${story.content}</p>
                            <div style="font-size:0.95em;color:#aaa;">Idioma: ${idioma} · Tipo: ${tipo}</div>
                            <div style="font-size:0.95em;color:#aaa;">Autor: ${authorHtml}</div>
                        </div>
                    `;
                    detailDiv.style.display = 'block';
                }
            });
        });
    }

    renderFeed();
});

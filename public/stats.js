// stats.js
// Estadísticas globales de StoryUp

document.addEventListener('DOMContentLoaded', async function () {
    const statsList = document.getElementById('stats-list');

    try {
        // Obtener datos desde PostgreSQL
        const [usersResponse, historiasResponse] = await Promise.all([
            fetch('/api/users'),
            fetch('/api/historias')
        ]);

        const users = await usersResponse.json();
        const stories = await historiasResponse.json();

        // Total de historias y usuarios
        const totalHistorias = stories.length;
        const totalUsuarios = users.length;

        // Top 3 usuarios con más historias
        let userStoryCount = {};
        stories.forEach(s => {
            userStoryCount[s.author] = (userStoryCount[s.author] || 0) + 1;
        });
        let topStoryUsersArr = Object.entries(userStoryCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([email, count]) => {
                const u = users.find(u => u.email === email);
                return { name: u ? u.name : email, count };
            });

        // Top 3 usuarios con más likes recibidos
        let userLikesCount = {};
        stories.forEach(s => {
            userLikesCount[s.author] = (userLikesCount[s.author] || 0) + (s.likes || 0);
        });
        let topLikesUsersArr = Object.entries(userLikesCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([email, count]) => {
                const u = users.find(u => u.email === email);
                return { name: u ? u.name : email, count };
            });

        // Top 3 idiomas más usados
        let langCount = {};
        stories.forEach(s => {
            langCount[s.language] = (langCount[s.language] || 0) + 1;
        });
        const langMap = {
            es: 'Español', en: 'English', zh: 'Chino', hi: 'Hindi', ar: 'Árabe', pt: 'Portugués', ru: 'Ruso', ja: 'Japonés', de: 'Alemán', fr: 'Francés', it: 'Italiano', tr: 'Turco', ko: 'Coreano', vi: 'Vietnamita', pl: 'Polaco', nl: 'Neerlandés', fa: 'Persa', th: 'Tailandés', uk: 'Ucraniano', ro: 'Rumano', el: 'Griego', hu: 'Húngaro', sv: 'Sueco', cs: 'Checo', he: 'Hebreo'
        };
        let topLangsArr = Object.entries(langCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([k, v]) => `${langMap[k] || k} <span style='color:#38bdf8;font-weight:bold;'>(${v})</span>`);

        // Ranking por tipo de historia (Top 3 más likes)
        const typeMap = { real: 'Real', ficcion: 'Ficción', diario: 'Diario', confesion: 'Confesión' };
        let topByType = {};
        Object.keys(typeMap).forEach(type => {
            const filtered = stories.filter(s => s.type === type);
            if (filtered.length > 0) {
                const topArr = filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0)).slice(0, 3);
                topByType[type] = topArr.map(story => {
                    const author = users.find(u => u.email === story.author);
                    const authorName = story.anonymous ? 'Anónimo' : (author ? author.name : story.author);
                    return { title: story.title, likes: story.likes || 0, author: authorName };
                });
            }
        });

        // Ranking de usuarios y moderadores con más amigos
        // Nota: Esta funcionalidad requiere una API de amigos agregada
        let friendsCount = users.map(u => {
            return { email: u.email, name: u.name, role: u.role, count: 0 }; // Temporalmente 0 hasta implementar API de amigos
        });
        // Top 3 usuarios normales
        let topUserFriendsArr = friendsCount.filter(u => u.role !== 'moderador').sort((a, b) => b.count - a.count).slice(0, 3);
        // Top 3 moderadores
        let topModFriendsArr = friendsCount.filter(u => u.role === 'moderador').sort((a, b) => b.count - a.count).slice(0, 3);

        // Añadir al HTML
        let rankingHTML = '';
        Object.keys(typeMap).forEach(type => {
            if (topByType[type]) {
                rankingHTML += `<li><strong>Top 3 ${typeMap[type]} con más likes:</strong><ul style='margin:0 0 0 1em;padding:0;'>` +
                    topByType[type].map(story => `<li>"${story.title}" por ${story.author} <span style='color:#38bdf8;font-weight:bold;'>(${story.likes} likes)</span></li>`).join('') +
                    `</ul></li>`;
            }
        });

        statsList.innerHTML = `
        <li><strong>Total de historias publicadas:</strong> ${totalHistorias}</li>
        <li><strong>Total de usuarios registrados:</strong> ${totalUsuarios}</li>
        <li><strong>Top 3 usuarios con más historias:</strong><ul style='margin:0 0 0 1em;padding:0;'>
            ${topStoryUsersArr.length === 0 ? '<li>-</li>' : topStoryUsersArr.map(u => `<li>${u.name} <span style='color:#38bdf8;font-weight:bold;'>(${u.count})</span></li>`).join('')}
        </ul></li>
        <li><strong>Top 3 usuarios con más likes recibidos:</strong><ul style='margin:0 0 0 1em;padding:0;'>
            ${topLikesUsersArr.length === 0 ? '<li>-</li>' : topLikesUsersArr.map(u => `<li>${u.name} <span style='color:#38bdf8;font-weight:bold;'>(${u.count})</span></li>`).join('')}
        </ul></li>
        <li><strong>Top 3 idiomas más usados:</strong><ul style='margin:0 0 0 1em;padding:0;'>
            ${topLangsArr.length === 0 ? '<li>-</li>' : topLangsArr.map(l => `<li>${l}</li>`).join('')}
        </ul></li>
        <li><strong>Top 3 usuarios con más amigos:</strong><ul style='margin:0 0 0 1em;padding:0;'>
            ${topUserFriendsArr.length === 0 ? '<li>-</li>' : topUserFriendsArr.map(u => `<li>${u.name || u.email} <span style='color:#38bdf8;font-weight:bold;'>(${u.count})</span></li>`).join('')}
        </ul></li>
        <li><strong>Top 3 moderadores con más amigos:</strong><ul style='margin:0 0 0 1em;padding:0;'>
            ${topModFriendsArr.length === 0 ? '<li>-</li>' : topModFriendsArr.map(u => `<li>${u.name || u.email} <span style='color:#38bdf8;font-weight:bold;'>(${u.count})</span></li>`).join('')}
        </ul></li>
    ` + rankingHTML;
    });

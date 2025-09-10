// stats.js
// Estadísticas globales de StoryUp

document.addEventListener('DOMContentLoaded', function () {
    const statsList = document.getElementById('stats-list');
    const users = JSON.parse(localStorage.getItem('storyup_users') || '[]');
    const stories = JSON.parse(localStorage.getItem('storyup_stories') || '[]');

    // Total de historias y usuarios
    const totalHistorias = stories.length;
    const totalUsuarios = users.length;

    // Usuario con más historias
    let userStoryCount = {};
    stories.forEach(s => {
        userStoryCount[s.author] = (userStoryCount[s.author] || 0) + 1;
    });
    let topStoryUser = Object.entries(userStoryCount).sort((a, b) => b[1] - a[1])[0];
    let topStoryUserName = topStoryUser ? (users.find(u => u.email === topStoryUser[0])?.name || topStoryUser[0]) : '-';

    // Usuario con más likes recibidos
    let userLikesCount = {};
    stories.forEach(s => {
        userLikesCount[s.author] = (userLikesCount[s.author] || 0) + (s.likes || 0);
    });
    let topLikesUser = Object.entries(userLikesCount).sort((a, b) => b[1] - a[1])[0];
    let topLikesUserName = topLikesUser ? (users.find(u => u.email === topLikesUser[0])?.name || topLikesUser[0]) : '-';

    // Idiomas más usados
    let langCount = {};
    stories.forEach(s => {
        langCount[s.language] = (langCount[s.language] || 0) + 1;
    });
    const langMap = {
        es: 'Español', en: 'English', zh: 'Chino', hi: 'Hindi', ar: 'Árabe', pt: 'Portugués', ru: 'Ruso', ja: 'Japonés', de: 'Alemán', fr: 'Francés', it: 'Italiano', tr: 'Turco', ko: 'Coreano', vi: 'Vietnamita', pl: 'Polaco', nl: 'Neerlandés', fa: 'Persa', th: 'Tailandés', uk: 'Ucraniano', ro: 'Rumano', el: 'Griego', hu: 'Húngaro', sv: 'Sueco', cs: 'Checo', he: 'Hebreo'
    };
    let topLangs = Object.entries(langCount).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([k, v]) => `${langMap[k] || k} (${v})`).join(', ');

    // Ranking por tipo de historia (más likes)
    const typeMap = { real: 'Real', ficcion: 'Ficción', diario: 'Diario', confesion: 'Confesión' };
    let topByType = {};
    Object.keys(typeMap).forEach(type => {
        const filtered = stories.filter(s => s.type === type);
        if (filtered.length > 0) {
            const top = filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0))[0];
            const author = users.find(u => u.email === top.author);
            const authorName = top.anonymous ? 'Anónimo' : (author ? author.name : top.author);
            topByType[type] = {
                title: top.title,
                likes: top.likes || 0,
                author: authorName
            };
        }
    });

    // Añadir al HTML
    let rankingHTML = '';
    Object.keys(typeMap).forEach(type => {
        if (topByType[type]) {
            rankingHTML += `<li><strong>${typeMap[type]} con más likes:</strong> "${topByType[type].title}" por ${topByType[type].author} (${topByType[type].likes} likes)</li>`;
        }
    });

    statsList.innerHTML = `
        <li><strong>Total de historias publicadas:</strong> ${totalHistorias}</li>
        <li><strong>Total de usuarios registrados:</strong> ${totalUsuarios}</li>
        <li><strong>Usuario con más historias:</strong> ${topStoryUserName} (${topStoryUser ? topStoryUser[1] : 0})</li>
        <li><strong>Usuario con más likes recibidos:</strong> ${topLikesUserName} (${topLikesUser ? topLikesUser[1] : 0})</li>
        <li><strong>Idiomas más usados:</strong> ${topLangs || '-'}</li>
    ` + rankingHTML;
});

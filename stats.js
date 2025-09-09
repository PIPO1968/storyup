const db = firebase.database();
const statsList = document.getElementById('stats-list');

let totalStories = 0;
let totalLikes = 0;
let languages = {};
let types = {};

db.ref('stories').once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        const story = childSnapshot.val();
        totalStories++;
        totalLikes += story.likes || 0;

        languages[story.language] = (languages[story.language] || 0) + 1;
        types[story.type] = (types[story.type] || 0) + 1;
    });

    statsList.innerHTML = `
    <li>Total de historias: ${totalStories}</li>
    <li>Total de likes: ${totalLikes}</li>
    <li>Idiomas más usados: ${formatTop(languages)}</li>
    <li>Tipos de historia más frecuentes: ${formatTop(types)}</li>
  `;
});

function formatTop(obj) {
    return Object.entries(obj)
        .sort((a, b) => b[1] - a[1])
        .map(([key, val]) => `${key} (${val})`)
        .join(', ');
}

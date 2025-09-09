const db = firebase.database();
const feed = document.getElementById('public-feed');

function loadFeaturedStories() {
    db.ref('stories').orderByChild('likes').limitToLast(5).once('value', (snapshot) => {
        feed.innerHTML = '';
        snapshot.forEach((childSnapshot) => {
            const story = childSnapshot.val();
            const div = document.createElement('div');
            div.classList.add('story');
            div.innerHTML = `
        <h3>⭐ ${story.title}</h3>
        <p>${story.text}</p>
        <small><strong>${story.nickname}</strong> — ${story.language} / ${story.type}</small>
        <span>${story.likes || 0} likes</span>
        <hr>
      `;
            feed.prepend(div);
        });
    });
}

loadFeaturedStories();

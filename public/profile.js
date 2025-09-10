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
                <div style="font-size:0.95em;color:#aaa;">${story.anonymous ? 'Autor: Anónimo' : 'Autor: ' + user.name}</div>
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
            const anonymous = document.getElementById('story-anonymous').checked;
            if (!title || !text) return;
            // Crear historia
            const stories = getAllStories();
            const id = 's' + Date.now() + Math.floor(Math.random() * 1000);
            stories.unshift({
                id,
                author: user.email,
                title,
                text,
                language,
                type,
                likes: 0,
                anonymous
            });
            saveAllStories(stories);
            storyForm.reset();
            renderStories();
        });
    }

    // --- Amistad ---
    const urlParams = new URLSearchParams(window.location.search);
    const profileEmail = urlParams.get('user') || user.email;
    const isOwnProfile = profileEmail === user.email;
    const friendActions = document.getElementById('friend-actions');
    const friendRequestsDiv = document.getElementById('friend-requests');
    const friendListDiv = document.getElementById('friend-list');

    function getAllUsers() {
        return JSON.parse(localStorage.getItem('storyup_users') || '[]');
    }
    function getUserByEmail(email) {
        return getAllUsers().find(u => u.email === email);
    }
    function getFriends(email) {
        return JSON.parse(localStorage.getItem('storyup_friends_' + email) || '[]');
    }
    function setFriends(email, friends) {
        localStorage.setItem('storyup_friends_' + email, JSON.stringify(friends));
    }
    function getRequests(email) {
        return JSON.parse(localStorage.getItem('storyup_requests_' + email) || '[]');
    }
    function setRequests(email, reqs) {
        localStorage.setItem('storyup_requests_' + email, JSON.stringify(reqs));
    }

    // Mostrar botón de amistad si es perfil ajeno
    if (!isOwnProfile) {
        const alreadyFriends = getFriends(user.email).includes(profileEmail);
        const alreadyRequested = getRequests(profileEmail).includes(user.email);
        if (alreadyFriends) {
            friendActions.innerHTML = '<span style="color:#43c6ac;">Ya sois amigos</span>';
        } else if (alreadyRequested) {
            friendActions.innerHTML = '<span style="color:#aaa;">Solicitud enviada</span>';
        } else {
            friendActions.innerHTML = '<button id="add-friend-btn" style="background:#43c6ac;color:#fff;border:none;padding:8px 18px;border-radius:8px;cursor:pointer;">Solicitar amistad</button>';
            document.getElementById('add-friend-btn').onclick = function() {
                let reqs = getRequests(profileEmail);
                if (!reqs.includes(user.email)) {
                    reqs.push(user.email);
                    setRequests(profileEmail, reqs);
                    friendActions.innerHTML = '<span style="color:#aaa;">Solicitud enviada</span>';
                }
            };
        }
    }

    // Mostrar solicitudes recibidas y lista de amigos solo en perfil propio
    if (isOwnProfile) {
        // Solicitudes recibidas
        const reqs = getRequests(user.email);
        if (reqs.length > 0) {
            friendRequestsDiv.innerHTML = '<h3>Solicitudes de amistad</h3>' + reqs.map(email => {
                const u = getUserByEmail(email);
                const name = u ? u.name : email;
                return `<div style="margin-bottom:8px;">${name} <button class="accept-friend" data-email="${email}" style="margin-left:8px;">Aceptar</button> <button class="reject-friend" data-email="${email}">Rechazar</button></div>`;
            }).join('');
            // Listeners aceptar/rechazar
            document.querySelectorAll('.accept-friend').forEach(btn => {
                btn.onclick = function() {
                    const email = this.getAttribute('data-email');
                    // Añadir a amigos mutuos
                    let myFriends = getFriends(user.email);
                    let theirFriends = getFriends(email);
                    if (!myFriends.includes(email)) myFriends.push(email);
                    if (!theirFriends.includes(user.email)) theirFriends.push(user.email);
                    setFriends(user.email, myFriends);
                    setFriends(email, theirFriends);
                    // Quitar solicitud
                    let reqs = getRequests(user.email).filter(e => e !== email);
                    setRequests(user.email, reqs);
                    location.reload();
                };
            });
            document.querySelectorAll('.reject-friend').forEach(btn => {
                btn.onclick = function() {
                    const email = this.getAttribute('data-email');
                    let reqs = getRequests(user.email).filter(e => e !== email);
                    setRequests(user.email, reqs);
                    location.reload();
                };
            });
        } else {
            friendRequestsDiv.innerHTML = '';
        }
        // Lista de amigos
        const friends = getFriends(user.email);
        if (friends.length > 0) {
            friendListDiv.innerHTML = '<h3>Mis amigos</h3>' + friends.map(email => {
                const u = getUserByEmail(email);
                const name = u ? u.name : email;
                return `<div style="margin-bottom:6px;"><a href="profile.html?user=${encodeURIComponent(email)}" style="color:#a5b4fc;text-decoration:underline;">${name}</a></div>`;
            }).join('');
        } else {
            friendListDiv.innerHTML = '<h3>Mis amigos</h3><p>No tienes amigos aún.</p>';
        }
    }

    renderStories();
});

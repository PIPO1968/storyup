// seguidores.js
// Muestra un desplegable con todos los nicks de usuarios inscritos en StoryUp

document.addEventListener('DOMContentLoaded', function () {
    const userListDiv = document.getElementById('seguidores-lista');
    if (!userListDiv) return;
    const users = JSON.parse(localStorage.getItem('storyup_users') || '[]');
    if (users.length === 0) {
        userListDiv.innerHTML = '<p>No hay usuarios registrados.</p>';
        return;
    }
    userListDiv.innerHTML = `
        <label for="seguidores-select" style="font-weight:bold;">Selecciona un usuario:</label>
        <select id="seguidores-select" style="margin-left:10px;">
            <option value="">-- Nicks de usuarios --</option>
            ${users.map(u => `<option value="${u.email}">${u.name || u.email}</option>`).join('')}
        </select>
        <div id="seguidores-info" style="margin-top:16px;"></div>
    `;
    const select = document.getElementById('seguidores-select');
    const infoDiv = document.getElementById('seguidores-info');
    const logged = JSON.parse(localStorage.getItem('storyup_logged'));
    function getRequests(email) {
        return JSON.parse(localStorage.getItem('storyup_requests_' + email) || '[]');
    }
    function setRequests(email, reqs) {
        localStorage.setItem('storyup_requests_' + email, JSON.stringify(reqs));
    }
    select.addEventListener('change', function () {
        const email = this.value;
        if (!email) {
            infoDiv.innerHTML = '';
            return;
        }
        const user = users.find(u => u.email === email);
        if (!user) {
            infoDiv.innerHTML = '<p>Usuario no encontrado.</p>';
            return;
        }
        if (!logged || logged.email === email) {
            infoDiv.innerHTML = `<strong>Nick:</strong> ${user.name || user.email}<br><strong>Email:</strong> ${user.email}`;
            return;
        }
        // Verificar si ya es amigo o ya hay solicitud
        const myFriends = JSON.parse(localStorage.getItem('storyup_friends_' + logged.email) || '[]');
        const alreadyFriends = myFriends.includes(email);
        const alreadyRequested = getRequests(email).includes(logged.email);
        let btnHtml = '';
        if (alreadyFriends) {
            btnHtml = '<span style="color:#43c6ac;">Ya sois amigos</span>';
        } else if (alreadyRequested) {
            btnHtml = '<span style="color:#aaa;">Solicitud enviada</span>';
        } else {
            btnHtml = `<button id="add-friend-btn" style="background:#43c6ac;color:#fff;border:none;padding:8px 18px;border-radius:8px;cursor:pointer;">Solicitar amistad</button>`;
        }
        infoDiv.innerHTML = `<strong>Nick:</strong> ${user.name || user.email}<br><strong>Email:</strong> ${user.email}<br>${btnHtml}`;
        if (!alreadyFriends && !alreadyRequested) {
            document.getElementById('add-friend-btn').onclick = function () {
                let reqs = getRequests(email);
                if (!reqs.includes(logged.email)) {
                    reqs.push(logged.email);
                    setRequests(email, reqs);
                    infoDiv.innerHTML += '<br><span style="color:#aaa;">Solicitud enviada</span>';
                }
            };
        }
    });
});

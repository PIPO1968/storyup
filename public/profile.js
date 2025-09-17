// profile.js
// Mostrar datos del usuario logueado y permitir cerrar sesión

document.addEventListener('DOMContentLoaded', async function () {
    // --- GESTIÓN DE PERFIL Y DATOS PERSONALES ---
    const user = JSON.parse(localStorage.getItem('storyup_logged') || 'null');
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    // Elementos del DOM
    const userInfo = document.getElementById('user-info');
    const img = document.getElementById('profile-image');
    const imgInput = document.getElementById('profile-image-input');
    const nameInput = document.getElementById('profile-name-input');
    const languageInput = document.getElementById('profile-language-input');
    const saveBtn = document.getElementById('save-profile-btn');

    // Cargar datos de perfil desde backend y rellenar formulario automáticamente
    let originalName = '';
    let originalLanguage = '';
    async function loadProfile() {
        const res = await fetch('/api/profile?email=' + encodeURIComponent(user.email));
        if (!res.ok) return;
        const data = await res.json();
        if (userInfo) {
            userInfo.innerHTML = `
                <strong>Nombre:</strong> <span id="profile-name">${data.name || ''}</span><br>
                <strong>Email:</strong> ${data.email}<br>
                <strong>Idioma preferido:</strong> <span id="profile-language">${data.language || ''}</span>
            `;
        }
        if (img && data.profile_image) {
            img.src = data.profile_image;
            img.style.display = 'block';
        }
        if (nameInput) {
            nameInput.value = data.name || '';
            originalName = data.name || '';
        }
        if (languageInput) {
            languageInput.value = data.language || '';
            originalLanguage = data.language || '';
        }
        if (saveBtn) saveBtn.style.display = 'none';
    }

    // Mostrar botón guardar solo si hay cambios
    function checkProfileChanges() {
        if (!saveBtn) return;
        const nameChanged = nameInput && nameInput.value.trim() !== originalName;
        const langChanged = languageInput && languageInput.value.trim() !== originalLanguage;
        saveBtn.style.display = (nameChanged || langChanged) ? 'inline-block' : 'none';
    }
    if (nameInput) nameInput.addEventListener('input', checkProfileChanges);
    if (languageInput) languageInput.addEventListener('input', checkProfileChanges);

    // Guardar cambios de datos personales
    if (saveBtn) {
        saveBtn.onclick = async function () {
            const name = nameInput ? nameInput.value.trim() : '';
            const language = languageInput ? languageInput.value.trim() : '';
            await fetch('/api/profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: user.email, name, language })
            });
            await loadProfile();
        };
    }

    // Guardar imagen de perfil en backend
    if (imgInput) {
        imgInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = async function (evt) {
                const base64 = evt.target.result;
                await fetch('/api/profile', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: user.email, profile_image: base64 })
                });
                if (img) {
                    img.src = base64;
                    img.style.display = 'block';
                }
            };
            reader.readAsDataURL(file);
        });
    }

    // Botón de cerrar sesión
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.onclick = function () {
            sessionStorage.removeItem('storyup_logged');
            sessionStorage.removeItem('storyup_last_activity');
            window.location.href = 'login.html';
        };
    }

    // Cargar perfil al iniciar
    loadProfile();

    // --- Amistad ---
    const urlParams = new URLSearchParams(window.location.search);
    const profileEmail = urlParams.get('user') || user.email;
    const isOwnProfile = profileEmail === user.email;
    const friendActions = document.getElementById('friend-actions');
    const friendRequestsDiv = document.getElementById('friend-requests');
    const friendListDiv = document.getElementById('friend-list');

    // ...existing code: solo una definición de cada función utilitaria de amistad/perfil...

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
            document.getElementById('add-friend-btn').onclick = function () {
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
                btn.onclick = function () {
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
                btn.onclick = function () {
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

    // --- Panel de admin para gestión de moderadores ---
    const adminEmails = ["pipocanarias@hotmail.com", "piporgz68@gmail.com"];
    const adminPanel = document.getElementById('admin-panel');
    const modWordsPanel = document.getElementById('mod-words-panel');
    if (adminPanel && adminEmails.includes(user.email)) {
        adminPanel.innerHTML = `
            <h2>Gestión de moderadores</h2>
            <input type="text" id="search-user" placeholder="Buscar usuario por email o nombre" style="width:60%;margin-bottom:8px;">
            <div id="user-results"></div>
        `;
        // Palabras prohibidas globales para moderador
        modWordsPanel.innerHTML = `
            <h3>Palabras prohibidas para amigos moderados</h3>
            <textarea id="mod-banned-words" placeholder="Escribe aquí las palabras prohibidas, separadas por comas o una por línea" style="width:100%;min-height:60px;margin-bottom:8px;"></textarea>
            <button id="save-banned-words" style="margin-bottom:16px;">Guardar palabras prohibidas</button>
            <div id="banned-words-msg" style="color:#22c55e;font-weight:bold;"></div>
        `;
        // Cargar y guardar palabras prohibidas
        const bannedWordsInput = document.getElementById('mod-banned-words');
        const saveBannedBtn = document.getElementById('save-banned-words');
        const bannedMsg = document.getElementById('banned-words-msg');
        // Cargar si existen
        const bannedKey = 'mod_banned_words_' + user.email;
        bannedWordsInput.value = (localStorage.getItem(bannedKey) || '').replace(/,/g, '\n');
        saveBannedBtn.onclick = function () {
            const words = bannedWordsInput.value.split(/,|\n/).map(w => w.trim().toLowerCase()).filter(Boolean);
            localStorage.setItem(bannedKey, words.join(','));
            bannedMsg.textContent = 'Palabras prohibidas guardadas';
            setTimeout(() => bannedMsg.textContent = '', 2000);
        };
        // ...gestión de moderadores (igual que antes)...
        const searchInput = document.getElementById('search-user');
        const userResults = document.getElementById('user-results');
        function renderUserResults(query) {
            const users = JSON.parse(localStorage.getItem('storyup_users') || '[]');
            const results = users.filter(u => u.email.includes(query) || (u.name && u.name.toLowerCase().includes(query.toLowerCase())));
            userResults.innerHTML = results.length === 0 ? '<p>No hay resultados.</p>' : results.map(u => {
                const isMod = u.role === 'moderador';
                return `<div style="margin-bottom:6px;">${u.name} (${u.email})
                    <button class="mod-btn" data-email="${u.email}" data-action="${isMod ? 'remove' : 'add'}" style="margin-left:12px;">${isMod ? 'Quitar moderador' : 'Hacer moderador'}</button>
                </div>`;
            }).join('');
            document.querySelectorAll('.mod-btn').forEach(btn => {
                btn.onclick = function () {
                    const email = this.getAttribute('data-email');
                    const action = this.getAttribute('data-action');
                    let users = JSON.parse(localStorage.getItem('storyup_users') || '[]');
                    const idx = users.findIndex(u => u.email === email);
                    if (idx !== -1) {
                        if (action === 'add') users[idx].role = 'moderador';
                        else delete users[idx].role;
                        localStorage.setItem('storyup_users', JSON.stringify(users));
                        renderUserResults(searchInput.value);
                    }
                };
            });
        }
        searchInput.addEventListener('input', function () {
            renderUserResults(this.value.trim());
        });
    }

    // --- Bloqueo de palabras prohibidas en historias de amigos moderados ---
    // ...existing code limpio y bien estructurado...
    // (Este bloque debe contener solo funciones y lógica bien cerrada, sin fragmentos sueltos)
});
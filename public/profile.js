// profile.js
// Mostrar datos del usuario logueado y permitir cerrar sesión

document.addEventListener('DOMContentLoaded', function () {
    // --- Barra de formato para historias ---
    const toolbar = document.getElementById('story-toolbar');
    const textarea = document.getElementById('story-text');
    const preview = document.getElementById('story-preview');
    if (toolbar && textarea) {
        function insertAtCursor(before, after = before) {
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const value = textarea.value;
            textarea.value = value.slice(0, start) + before + value.slice(start, end) + after + value.slice(end);
            textarea.focus();
            textarea.selectionStart = textarea.selectionEnd = end + before.length + after.length;
            updatePreview();
        }
        document.getElementById('btn-bold').onclick = () => insertAtCursor('<b>', '</b>');
        document.getElementById('btn-italic').onclick = () => insertAtCursor('<i>', '</i>');
        document.getElementById('btn-color').oninput = (e) => insertAtCursor(`<span style=\"color:${e.target.value}\">`, '</span>');
        document.getElementById('btn-image').onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function (evt) {
                insertAtCursor(`<img src=\"${evt.target.result}\" style=\"max-width:100%;border-radius:8px;margin:8px 0;\">`, '');
            };
            reader.readAsDataURL(file);
            e.target.value = '';
        };
        document.getElementById('btn-youtube').onclick = () => {
            const url = prompt('Pega la URL del video de YouTube:');
            if (!url) return;
            // Extraer ID de YouTube
            const match = url.match(/[?&]v=([\w-]{11})|youtu\.be\/([\w-]{11})/);
            const id = match ? (match[1] || match[2]) : null;
            if (id) {
                insertAtCursor(`<iframe width=\"100%\" height=\"220\" src=\"https://www.youtube.com/embed/${id}\" frameborder=\"0\" allowfullscreen style=\"margin:8px 0;\"></iframe>`, '');
            } else {
                alert('URL de YouTube no válida');
            }
        };
        textarea.addEventListener('input', updatePreview);
        function updatePreview() {
            if (textarea.value.trim()) {
                preview.style.display = 'block';
                preview.innerHTML = textarea.value
                    .replace(/\n/g, '<br>');
            } else {
                preview.style.display = 'none';
                preview.innerHTML = '';
            }
        }
    }
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
        // Mostrar historias como links numerados, expandibles
        storiesDiv.innerHTML = `<ul id="my-story-list" style="padding-left:0;list-style:none;">${myStories.map((story, idx) => {
            const num = idx + 1;
            return `<li style="margin-bottom:10px;display:flex;align-items:center;"><span style="min-width:2em;text-align:right;color:#a5b4fc;font-weight:bold;display:inline-block;">${num}.</span> <a href='#' class='my-story-link' data-idx='${idx}' style='color:#6366f1;text-decoration:underline;font-weight:bold;margin-left:0.5em;'>${story.title}</a><div class='my-story-detail' style='display:none;'></div></li>`;
        }).join('')}</ul>`;

        // Listeners para expandir/cerrar historia
        document.querySelectorAll('.my-story-link').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const idx = parseInt(this.getAttribute('data-idx'));
                const story = myStories[idx];
                const langMap = {
                    es: 'Español', en: 'English', zh: 'Chino', hi: 'Hindi', ar: 'Árabe', pt: 'Portugués', ru: 'Ruso', ja: 'Japonés', de: 'Alemán', fr: 'Francés', it: 'Italiano', tr: 'Turco', ko: 'Coreano', vi: 'Vietnamita', pl: 'Polaco', nl: 'Neerlandés', fa: 'Persa', th: 'Tailandés', uk: 'Ucraniano', ro: 'Rumano', el: 'Griego', hu: 'Húngaro', sv: 'Sueco', cs: 'Checo', he: 'Hebreo'
                };
                const typeMap = { real: 'Real', ficcion: 'Ficción', diario: 'Diario', confesion: 'Confesión' };
                const idioma = langMap[story.language] || story.language;
                const tipo = typeMap[story.type] || story.type;
                const detailDiv = this.nextElementSibling;
                if (detailDiv.style.display === 'block') {
                    detailDiv.style.display = 'none';
                    detailDiv.innerHTML = '';
                } else {
                    // Cerrar otros detalles abiertos
                    document.querySelectorAll('.my-story-detail').forEach(div => { div.style.display = 'none'; div.innerHTML = ''; });
                    detailDiv.innerHTML = `
                        <div class='story-block' style='border:1.5px solid #6366f1;padding:1em;margin-top:8px;border-radius:10px;background:#232526;'>
                            <h3 style='color:#a5b4fc;'>${story.title}</h3>
                            <div>${story.text}</div>
                            <div style='font-size:0.95em;color:#aaa;'>Idioma: ${idioma} · Tipo: ${tipo}</div>
                            <div style='font-size:0.95em;color:#aaa;'>${story.anonymous ? 'Autor: Anónimo' : 'Autor: ' + user.name}</div>
                            <div style='margin-top:8px;display:flex;gap:8px;flex-wrap:wrap;'>
                                <button class='edit-story-btn' data-id='${story.id}' style='background:#fbbf24;color:#232526;border:none;padding:6px 16px;border-radius:6px;cursor:pointer;'>✏️ Editar</button>
                                <button class='delete-story-btn' data-id='${story.id}' style='background:#ef4444;color:#fff;border:none;padding:6px 16px;border-radius:6px;cursor:pointer;'>🗑️ Borrar</button>
                            </div>
                        </div>
                    `;
                    detailDiv.style.display = 'block';
                    // Listeners editar y borrar dentro del detalle
                    detailDiv.querySelector('.edit-story-btn').onclick = function () {
                        const stories = getAllStories();
                        const s = stories.find(st => st.id === story.id);
                        if (!s) return;
                        const editFormContainer = document.getElementById('edit-form-container');
                        const editForm = document.getElementById('edit-form');
                        editFormContainer.style.display = 'block';
                        document.getElementById('edit-title').value = s.title;
                        document.getElementById('edit-text').value = s.text;
                        document.getElementById('edit-language').value = s.language;
                        document.getElementById('edit-type').value = s.type;
                        editForm.onsubmit = function (e) {
                            e.preventDefault();
                            s.title = document.getElementById('edit-title').value.trim();
                            s.text = document.getElementById('edit-text').value.trim();
                            s.language = document.getElementById('edit-language').value;
                            s.type = document.getElementById('edit-type').value;
                            saveAllStories(stories);
                            editFormContainer.style.display = 'none';
                            renderStories();
                        };
                    };
                    detailDiv.querySelector('.delete-story-btn').onclick = function () {
                        if (!confirm('¿Seguro que quieres borrar esta historia?')) return;
                        let stories = getAllStories();
                        stories = stories.filter(s => s.id !== story.id);
                        saveAllStories(stories);
                        renderStories();
                    };
                }
            });
        });
        // Listeners editar y borrar
        document.querySelectorAll('.edit-story-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const id = this.getAttribute('data-id');
                const stories = getAllStories();
                const story = stories.find(s => s.id === id);
                if (!story) return;
                // Mostrar formulario de edición
                const editFormContainer = document.getElementById('edit-form-container');
                const editForm = document.getElementById('edit-form');
                editFormContainer.style.display = 'block';
                document.getElementById('edit-title').value = story.title;
                document.getElementById('edit-text').value = story.text;
                document.getElementById('edit-language').value = story.language;
                document.getElementById('edit-type').value = story.type;
                editForm.onsubmit = function (e) {
                    e.preventDefault();
                    story.title = document.getElementById('edit-title').value.trim();
                    story.text = document.getElementById('edit-text').value.trim();
                    story.language = document.getElementById('edit-language').value;
                    story.type = document.getElementById('edit-type').value;
                    saveAllStories(stories);
                    editFormContainer.style.display = 'none';
                    renderStories();
                };
            });
        });
        document.querySelectorAll('.delete-story-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                if (!confirm('¿Seguro que quieres borrar esta historia?')) return;
                const id = this.getAttribute('data-id');
                let stories = getAllStories();
                stories = stories.filter(s => s.id !== id);
                saveAllStories(stories);
                renderStories();
            });
        });
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
            // Permitir HTML enriquecido
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
            if (preview) { preview.style.display = 'none'; preview.innerHTML = ''; }
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

    // --- Chat entre usuarios: visible siempre en perfil ajeno, solo activo si son amigos ---
    const chatContainer = document.getElementById('chat-container');
    const chatMessages = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatNick = document.getElementById('chat-nick');
    if (!isOwnProfile) {
        chatContainer.style.display = 'block';
        const otherUser = getUserByEmail(profileEmail);
        chatNick.textContent = otherUser ? otherUser.name || profileEmail : profileEmail;
        const areFriends = getFriends(user.email).includes(profileEmail);
        // Clave única para el chat entre ambos usuarios (ordenada)
        function getChatKey(a, b) {
            return 'storyup_chat_' + [a, b].sort().join('_');
        }
        const chatKey = getChatKey(user.email, profileEmail);
        function renderChat() {
            const msgs = JSON.parse(localStorage.getItem(chatKey) || '[]');
            chatMessages.innerHTML = msgs.map(m => {
                if (m.type === 'img') {
                    return `<div style="margin-bottom:6px;text-align:${m.from === user.email ? 'right' : 'left'};"><img src="${m.data}" style="max-width:120px;max-height:120px;border-radius:8px;box-shadow:0 2px 8px #0003;display:inline-block;"> <span style="font-size:0.8em;color:#aaa;">${m.time}</span></div>`;
                } else if (m.type === 'video') {
                    return `<div style="margin-bottom:6px;text-align:${m.from === user.email ? 'right' : 'left'};"><iframe width="180" height="110" src="https://www.youtube.com/embed/${m.data}" frameborder="0" allowfullscreen style="border-radius:8px;"></iframe> <span style="font-size:0.8em;color:#aaa;">${m.time}</span></div>`;
                } else {
                    return `<div style="margin-bottom:6px;text-align:${m.from === user.email ? 'right' : 'left'};"><span style="display:inline-block;background:${m.from === user.email ? '#6366f1' : '#232526'};color:${m.from === user.email ? '#fff' : '#a5b4fc'};padding:5px 12px;border-radius:8px;max-width:70%;word-break:break-word;">${m.text}</span> <span style="font-size:0.8em;color:#aaa;margin-left:6px;">${m.time}</span></div>`;
                }
            }).join('');
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        // Si no son amigos, deshabilitar input y mostrar aviso
        if (!areFriends) {
            chatForm.querySelectorAll('input,button').forEach(el => { el.disabled = true; });
            chatInput.placeholder = 'Debes ser amigo para chatear';
            chatMessages.innerHTML = '<div style="color:#aaa;text-align:center;margin-top:2em;">Solo los amigos pueden enviarse mensajes.</div>';
        } else {
            // Enviar mensaje texto
            chatForm.onsubmit = function (e) {
                e.preventDefault();
                const text = chatInput.value.trim();
                if (!text) return;
                const msgs = JSON.parse(localStorage.getItem(chatKey) || '[]');
                const now = new Date();
                msgs.push({ from: user.email, text, type: 'text', time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
                localStorage.setItem(chatKey, JSON.stringify(msgs));
                chatInput.value = '';
                renderChat();
            };
            // Emoji panel
            const emojiBtn = document.getElementById('chat-emoji-btn');
            const emojiPanel = document.getElementById('chat-emoji-panel');
            const emojis = ['😀', '😁', '😂', '🤣', '😅', '😊', '😍', '😘', '😎', '😜', '🤩', '😢', '😭', '😡', '👍', '🙏', '👏', '💪', '🎉', '🔥', '💯', '❤️', '🧡', '💛', '💚', '💙', '💜', '🤍', '🤎', '🖤', '⭐', '🌟', '✨', '⚡', '☀️', '🌈', '🍀', '🍕', '🍔', '🍟', '🍦', '🍩', '🍫', '🍿', '🎂', '🍰', '🥤', '☕', '🍺', '🏆', '⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏓', '🎮', '🎲', '🎸', '🎤', '🎧', '🎬', '🎨', '🎵', '🎶', '🕹️', '🚗', '✈️', '🚀', '🏠', '📱', '💻', '🖥️', '📝', '📚', '📖', '🔒', '🔑', '💡', '🔔', '🎁', '📦', '💎', '🔮', '🧸', '👑', '🦄', '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐵', '🐔', '🐧', '🐦', '🐤', '🐣', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗', '🐴', '🦄'];
            emojiBtn.onclick = function (e) {
                e.preventDefault();
                emojiPanel.innerHTML = emojis.map(em => `<span style='font-size:1.3em;cursor:pointer;padding:2px 4px;'>${em}</span>`).join('');
                emojiPanel.style.display = emojiPanel.style.display === 'block' ? 'none' : 'block';
                const rect = emojiBtn.getBoundingClientRect();
                emojiPanel.style.left = rect.left + 'px';
                emojiPanel.style.top = (rect.bottom + window.scrollY + 6) + 'px';
            };
            emojiPanel.onclick = function (e) {
                if (e.target.tagName === 'SPAN') {
                    chatInput.value += e.target.textContent;
                    chatInput.focus();
                }
            };
            document.addEventListener('click', function (e) {
                if (!emojiPanel.contains(e.target) && e.target !== emojiBtn) {
                    emojiPanel.style.display = 'none';
                }
            });
            // Imagen
            const imageBtn = document.getElementById('chat-image-btn');
            const imageInput = document.getElementById('chat-image-input');
            imageBtn.onclick = function (e) {
                e.preventDefault();
                imageInput.click();
            };
            imageInput.onchange = function (e) {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = function (evt) {
                    const msgs = JSON.parse(localStorage.getItem(chatKey) || '[]');
                    const now = new Date();
                    msgs.push({ from: user.email, type: 'img', data: evt.target.result, time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
                    localStorage.setItem(chatKey, JSON.stringify(msgs));
                    renderChat();
                };
                reader.readAsDataURL(file);
                imageInput.value = '';
            };
            // Video YouTube
            const videoBtn = document.getElementById('chat-video-btn');
            videoBtn.onclick = function (e) {
                e.preventDefault();
                const url = prompt('Pega la URL del video de YouTube:');
                if (!url) return;
                const match = url.match(/[?&]v=([\w-]{11})|youtu\.be\/([\w-]{11})/);
                const id = match ? (match[1] || match[2]) : null;
                if (id) {
                    const msgs = JSON.parse(localStorage.getItem(chatKey) || '[]');
                    const now = new Date();
                    msgs.push({ from: user.email, type: 'video', data: id, time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
                    localStorage.setItem(chatKey, JSON.stringify(msgs));
                    renderChat();
                } else {
                    alert('URL de YouTube no válida');
                }
            };
        }
        // Recarga automática cada 2 segundos (simula tiempo real)
        let chatInterval = setInterval(renderChat, 2000);
        renderChat();
        // Limpiar intervalo al salir
        window.addEventListener('beforeunload', () => clearInterval(chatInterval));
    }
    const adminEmails = ["pipocanarias@hotmail.com", "piporgz68@gmail.com"];
    const adminPanel = document.getElementById('admin-panel');
    if (adminPanel && adminEmails.includes(user.email)) {
        adminPanel.innerHTML = `
            <h2>Gestión de moderadores</h2>
            <input type="text" id="search-user" placeholder="Buscar usuario por email o nombre" style="width:60%;margin-bottom:8px;">
            <div id="user-results"></div>
        `;
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

    renderStories();
});

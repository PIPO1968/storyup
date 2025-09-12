// profile.js
// Mostrar datos del usuario logueado y permitir cerrar sesión

document.addEventListener('DOMContentLoaded', function () {
    // --- Chat privado tipo WhatsApp ---
    const chatBloque = document.getElementById('chat-bloque');
    let contactoSeleccionado = null;
    function renderChatUI(nick) {
        chatBloque.innerHTML = `
            <h2 style="color:#2563eb;font-size:1.2em;margin-bottom:1em;">Chat con <span id="chat-nick">${nick}</span></h2>
            <div id="chat-mensajes" style="flex:1;width:100%;max-height:340px;overflow-y:auto;background:#fff;border-radius:8px;padding:10px 8px 10px 8px;margin-bottom:12px;border:1px solid #e5e7eb;"></div>
            <form id="chat-form" style="display:flex;gap:8px;width:100%;align-items:center;">
                <input id="chat-input" type="text" placeholder="Escribe un mensaje..." autocomplete="off" style="flex:1;height:32px;border-radius:7px;border:1px solid #b2dfdb;padding:2px 10px;font-size:1em;" required>
                <button type="submit" style="height:32px;background:#2563eb;color:white;border:none;border-radius:7px;font-size:1em;font-weight:600;cursor:pointer;">Enviar</button>
            </form>
        `;
    }
    async function cargarMensajes(nick) {
        const mensajesDiv = document.getElementById('chat-mensajes');
        mensajesDiv.innerHTML = '<div style="color:#888;text-align:center;">Cargando mensajes...</div>';
        try {
            const res = await fetch(`/api/messages?from=${encodeURIComponent(user.name)}&to=${encodeURIComponent(nick)}`);
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) {
                mensajesDiv.innerHTML = data.map(m => {
                    const isOwn = m.sender === user.name;
                    const hora = m.created_at ? new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
                    return `
                        <div style="margin-bottom:8px;display:flex;flex-direction:column;align-items:${isOwn ? 'flex-end' : 'flex-start'};">
                            <span style="font-size:0.85em;color:${isOwn ? '#a5b4fc' : '#64748b'};margin-bottom:2px;font-weight:600;">${m.sender}</span>
                            <div style="background:${isOwn ? '#2563eb' : '#e0e7ff'};color:${isOwn ? 'white' : '#232526'};padding:8px 14px 6px 14px;border-radius:16px;max-width:70%;word-break:break-word;box-shadow:0 1px 4px #0001;position:relative;">
                                <span style="display:block;white-space:pre-line;">${m.content}</span>
                                <span style="font-size:0.75em;color:${isOwn ? '#c7d2fe' : '#64748b'};position:absolute;right:12px;bottom:4px;">${hora}</span>
                            </div>
                        </div>
                    `;
                }).join('');
                mensajesDiv.scrollTop = mensajesDiv.scrollHeight;
            } else {
                mensajesDiv.innerHTML = '<div style="color:#888;text-align:center;">No hay mensajes aún.</div>';
            }
        } catch (e) {
            mensajesDiv.innerHTML = '<div style="color:#e11d48;text-align:center;">Error al cargar mensajes</div>';
        }
    }
    async function enviarMensaje(nick, texto) {
        try {
            const res = await fetch('/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ from: user.name, to: nick, content: texto })
            });
            if (res.ok) {
                await cargarMensajes(nick);
            } else {
                alert('No se pudo enviar el mensaje.');
            }
        } catch (e) {
            alert('Error de red al enviar mensaje.');
        }
    }
    contactosList.addEventListener('click', function (e) {
        const li = e.target.closest('.contacto-item');
        if (!li) return;
        contactoSeleccionado = li.dataset.nick;
        renderChatUI(contactoSeleccionado);
        cargarMensajes(contactoSeleccionado);
        // Listener para enviar mensaje
        setTimeout(() => {
            const chatForm = document.getElementById('chat-form');
            const chatInput = document.getElementById('chat-input');
            if (chatForm && chatInput) {
                chatForm.onsubmit = function (ev) {
                    ev.preventDefault();
                    const texto = chatInput.value.trim();
                    if (!texto) return;
                    let contactoSeleccionado = null;
                    let chatPollingInterval = null;
                    function renderChatUI(nick) {
                        chatBloque.innerHTML = `
                            <h2 style="color:#2563eb;font-size:1.2em;margin-bottom:1em;">Chat con <span id="chat-nick">${nick}</span></h2>
                            <div id="chat-mensajes" style="flex:1;width:100%;max-height:340px;overflow-y:auto;background:#fff;border-radius:8px;padding:10px 8px 10px 8px;margin-bottom:12px;border:1px solid #e5e7eb;"></div>
                            <form id="chat-form" style="display:flex;gap:8px;width:100%;align-items:center;">
                                <input id="chat-input" type="text" placeholder="Escribe un mensaje..." autocomplete="off" style="flex:1;height:32px;border-radius:7px;border:1px solid #b2dfdb;padding:2px 10px;font-size:1em;" required>
                                <button type="submit" style="height:32px;background:#2563eb;color:white;border:none;border-radius:7px;font-size:1em;font-weight:600;cursor:pointer;">Enviar</button>
                            </form>
                        `;
                    }
                    async function cargarMensajes(nick, scroll = true) {
                        const mensajesDiv = document.getElementById('chat-mensajes');
                        if (!mensajesDiv) return;
                        // ...existing code...
                    }
                    async function enviarMensaje(nick, texto) {
                        try {
                            const res = await fetch('/api/messages', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ from: user.name, to: nick, content: texto })
                            });
                            if (res.ok) {
                                await cargarMensajes(nick);
                            } else {
                                alert('No se pudo enviar el mensaje.');
                            }
                        } catch (e) {
                            alert('Error de red al enviar mensaje.');
                        }
                    }
                    contactosList.addEventListener('click', function (e) {
                        const li = e.target.closest('.contacto-item');
                        if (!li) return;
                        contactoSeleccionado = li.dataset.nick;
                        renderChatUI(contactoSeleccionado);
                        cargarMensajes(contactoSeleccionado);
                        // Limpiar polling anterior
                        if (chatPollingInterval) clearInterval(chatPollingInterval);
                        chatPollingInterval = setInterval(() => {
                            if (contactoSeleccionado) cargarMensajes(contactoSeleccionado, false);
                        }, 2000);
                        // Listener para enviar mensaje
                        setTimeout(() => {
                            const chatForm = document.getElementById('chat-form');
                            const chatInput = document.getElementById('chat-input');
                            if (chatForm && chatInput) {
                                chatForm.onsubmit = function (ev) {
                                    ev.preventDefault();
                                    const texto = chatInput.value.trim();
                                    if (!texto) return;
                                    enviarMensaje(contactoSeleccionado, texto);
                                    chatInput.value = '';
                                };
                            }
                        }, 100);
                    });
                    // Limpiar polling al salir de la página
                    window.addEventListener('beforeunload', () => {
                        if (chatPollingInterval) clearInterval(chatPollingInterval);
                    });
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
            // Cierre de sesión automático si se excedió el tiempo de inactividad
            const lastActivity = parseInt(localStorage.getItem('storyup_last_activity') || '0', 10);
            if (lastActivity && Date.now() - lastActivity > 60 * 60 * 1000) {
                localStorage.removeItem('storyup_logged');
                window.location.href = 'login.html';
                return;
            }

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

            // Botón de cerrar sesión eliminado

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
            function getModeratorFor(email) {
                // Devuelve el email del moderador si el usuario es amigo de un moderador
                const users = JSON.parse(localStorage.getItem('storyup_users') || '[]');
                for (const u of users) {
                    if (u.role === 'moderador') {
                        const friends = JSON.parse(localStorage.getItem('friends_' + u.email) || '[]');
                        if (friends.includes(email)) return u.email;
                    }
                }
                return null;
            }

            function cleanBannedWords(text, bannedList) {
                let changed = false;
                let cleanText = text;
                bannedList.forEach(word => {
                    const regex = new RegExp('\\b' + word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
                    if (regex.test(cleanText)) changed = true;
                    cleanText = cleanText.replace(regex, '');
                });
                return { cleanText, changed };
            }

            // Interceptar envío de historia
            if (storyForm) {
                storyForm.addEventListener('submit', function (e) {
                    const author = user.email;
                    const modEmail = getModeratorFor(author);
                    if (modEmail) {
                        const banned = (localStorage.getItem('mod_banned_words_' + modEmail) || '').split(',').map(w => w.trim().toLowerCase()).filter(Boolean);
                        const textArea = document.getElementById('story-text');
                        const { cleanText, changed } = cleanBannedWords(textArea.value, banned);
                        if (changed) {
                            e.preventDefault();
                            textArea.value = cleanText;
                            alert('Has usado palabras prohibidas por tu moderador. Han sido eliminadas automáticamente.');
                        }
                    }
                }, true);
            }


            renderStories();
        }
    );
}


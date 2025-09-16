// --- Favoritos/contactos rápidos ---
const favsKey = () => 'storyup_favs_' + (getLoggedUser()?.email || '');
const favsListDiv = document.getElementById('favs-list');
const favInput = document.getElementById('fav-nick-input');
const favAddBtn = document.getElementById('fav-add-btn');
const favError = document.getElementById('fav-error');

async function renderFavs() {
    if (!favsListDiv) return;
    const favs = JSON.parse(localStorage.getItem(favsKey()) || '[]');
    const users = await getUsers();
    favsListDiv.innerHTML = '';
    if (favs.length === 0) {
        favsListDiv.innerHTML = '<span style="color:#888;font-size:0.97em;">Sin favoritos</span>';
        return;
    }
    favs.forEach(email => {
        const user = users.find(u => u.email === email);
        const name = user ? (user.name || user.email) : email;
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'space-between';
        div.style.marginBottom = '4px';
        const span = document.createElement('span');
        span.textContent = name;
        span.style.cursor = 'pointer';
        span.style.color = '#2563eb';
        span.style.fontWeight = 'bold';
        span.onclick = function () {
            if (user) selectChat(user);
        };
        const del = document.createElement('button');
        del.textContent = '✖';
        del.title = 'Quitar de favoritos';
        del.style.background = 'none';
        del.style.border = 'none';
        del.style.color = '#e11d48';
        del.style.cursor = 'pointer';
        del.style.fontSize = '1em';
        del.onclick = function () {
            const favs = JSON.parse(localStorage.getItem(favsKey()) || '[]');
            localStorage.setItem(favsKey(), JSON.stringify(favs.filter(f => f !== email)));
            renderFavs();
        };
        div.appendChild(span);
        div.appendChild(del);
        favsListDiv.appendChild(div);
    });
}

if (favAddBtn && favInput) {
    favAddBtn.onclick = async function () {
        if (favError) favError.style.display = 'none';
        const nick = favInput.value.trim();
        if (!nick) return;
        const users = await getUsers();
        const user = users.find(u => (u.name || u.email) === nick);
        if (!user) {
            if (favError) {
                favError.textContent = 'Usuario no encontrado';
                favError.style.display = 'block';
            }
            return;
        }
        if (user.email === getLoggedUser().email) {
            if (favError) {
                favError.textContent = 'No puedes añadirte a ti mismo';
                favError.style.display = 'block';
            }
            return;
        }
        let favs = JSON.parse(localStorage.getItem(favsKey()) || '[]');
        if (!favs.includes(user.email)) {
            favs.push(user.email);
            localStorage.setItem(favsKey(), JSON.stringify(favs));
        }
        favInput.value = '';
        renderFavs();
    };
    favInput.addEventListener('keydown', function (e) {
        if (favError) favError.style.display = 'none';
        if (e.key === 'Enter') {
            e.preventDefault();
            favAddBtn.click();
        }
    });
}

renderFavs();
// Chat tipo WhatsApp - SOLO versión moderna y funcional
// Requiere que el usuario esté autenticado y que existan storyup_users y storyup_logged en localStorage

const chatSidebar = document.getElementById('chat-sidebar');
const chatList = document.getElementById('chat-list');
const chatHeader = document.getElementById('chat-header');
const chatMessagesBox = document.getElementById('chat-messages');
const chatForm = document.getElementById('chat-form');
const chatInputBox = document.getElementById('chat-input');
const chatSearch = document.getElementById('chat-search');

let currentChat = null;

function getLoggedUser() {
    // Usar sessionStorage como en el resto del frontend
    return JSON.parse(sessionStorage.getItem('storyup_logged'));
}

let usersCache = [];
async function getUsers() {
    if (usersCache.length > 0) return usersCache;
    try {
        const res = await fetch('/api/users');
        if (!res.ok) return [];
        const data = await res.json();
        usersCache = data;
        return data;
    } catch {
        return [];
    }
}

function renderChatList() {
    getUsers().then(users => {
        const logged = getLoggedUser();
        chatList.innerHTML = '';
        users.forEach(u => {
            const li = document.createElement('li');
            li.className = 'chat-list-item';
            li.textContent = u.name || u.email;
            li.onclick = () => selectChat(u);
            chatList.appendChild(li);
        });
    });
}

function selectChat(user) {
    currentChat = user;
    currentChat = user;
    chatHeader.textContent = user.name || user.email;
    renderMessages();
    renderMessages();
}

async function renderMessages() {
    if (!currentChat) return;
    const logged = getLoggedUser();
    chatMessagesBox.innerHTML = '<div class="loading">Cargando...</div>';
    try {
        const resp = await fetch(`/api/messages?from=${logged.email}&to=${currentChat.email}`);
        if (!resp.ok) throw new Error('Error al cargar mensajes');
        const msgs = await resp.json();
        chatMessagesBox.innerHTML = '';
        msgs.forEach(m => {
            const div = document.createElement('div');
            div.className = m.sender === logged.email ? 'msg-own' : 'msg-other';
            div.textContent = m.content;
            chatMessagesBox.appendChild(div);
        });
        chatMessagesBox.scrollTop = chatMessagesBox.scrollHeight;
    } catch (e) {
        chatMessagesBox.innerHTML = '<div class="error">No se pudieron cargar los mensajes</div>';
    }
}

chatForm.onsubmit = async function (e) {
    e.preventDefault();
    if (!currentChat) return;
    const logged = getLoggedUser();
    const text = chatInputBox.value.trim();
    if (!text) return;
    chatInputBox.value = '';
    await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: logged.email, to: currentChat.email, content: text })
    });
    renderMessages();
};

chatSearch.oninput = function () {
    const val = chatSearch.value.toLowerCase();
    Array.from(chatList.children).forEach(li => {
        li.style.display = li.textContent.toLowerCase().includes(val) ? '' : 'none';
    });
};

chatSearch.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        buscarYSeleccionarUsuario();
    }
});

if (chatSearchBtn) {
    chatSearchBtn.onclick = () => buscarYSeleccionarUsuario();
}

async function buscarYSeleccionarUsuario() {
    const val = chatSearch.value.trim().toLowerCase();
    if (!val) return;
    const users = await getUsers();
    const user = users.find(u => (u.name || u.email).toLowerCase() === val);
    if (user) selectChat(user);
    chatSearch.value = '';
    chatInputBox.focus();
}

window.addEventListener('DOMContentLoaded', () => {
    renderChatList();
});


function renderFavs() {
    if (!favsListDiv) return;
    const favs = JSON.parse(localStorage.getItem(favsKey()) || '[]');
    const users = JSON.parse(localStorage.getItem('storyup_users') || '[]');
    favsListDiv.innerHTML = '';
    if (favs.length === 0) {
        favsListDiv.innerHTML = '<span style="color:#888;font-size:0.97em;">Sin favoritos</span>';
        return;
    }
    favs.forEach(email => {
        const user = users.find(u => u.email === email);
        const name = user ? (user.name || user.email) : email;
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'space-between';
        div.style.marginBottom = '4px';
        const span = document.createElement('span');
        span.textContent = name;
        span.style.cursor = 'pointer';
        span.style.color = '#2563eb';
        span.style.fontWeight = 'bold';
        span.onclick = function () {
            userDest = email;
            userDestName = name;
            renderChat();
            renderChatList();
        };
        const del = document.createElement('button');
        del.textContent = '✖';
        del.title = 'Quitar de favoritos';
        del.style.background = 'none';
        del.style.border = 'none';
        del.style.color = '#e11d48';
        del.style.cursor = 'pointer';
        del.style.fontSize = '1em';
        del.onclick = function () {
            const favs = JSON.parse(localStorage.getItem(favsKey()) || '[]');
            localStorage.setItem(favsKey(), JSON.stringify(favs.filter(f => f !== email)));
            renderFavs();
        };
        div.appendChild(span);
        div.appendChild(del);
        favsListDiv.appendChild(div);
    });
}

if (favAddBtn && favInput) {
    favAddBtn.onclick = function () {
        if (favError) favError.style.display = 'none';
        const nick = favInput.value.trim();
        if (!nick) return;
        const users = JSON.parse(localStorage.getItem('storyup_users') || '[]');
        const user = users.find(u => (u.name || u.email) === nick);
        if (!user) {
            if (favError) {
                favError.textContent = 'Usuario no encontrado';
                favError.style.display = 'block';
            }
            return;
        }
        if (user.email === logged.email) {
            if (favError) {
                favError.textContent = 'No puedes añadirte a ti mismo';
                favError.style.display = 'block';
            }
            return;
        }
        let favs = JSON.parse(localStorage.getItem(favsKey()) || '[]');
        if (!favs.includes(user.email)) {
            favs.push(user.email);
            localStorage.setItem(favsKey(), JSON.stringify(favs));
        }
        favInput.value = '';
        renderFavs();
    };
    favInput.addEventListener('keydown', function (e) {
        if (favError) favError.style.display = 'none';
        if (e.key === 'Enter') {
            e.preventDefault();
            favAddBtn.click();
        }
    });
}

renderFavs();
// Herramientas de formato para el chat
window.insertTag = function (tag) {
    const input = document.getElementById('chat-input');
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const before = input.value.substring(0, start);
    const selected = input.value.substring(start, end);
    const after = input.value.substring(end);
    input.value = before + `<${tag}>` + selected + `</${tag}>` + after;
};

async function renderChatList() {
    if (!chatListUl) return;
    const users = JSON.parse(localStorage.getItem('storyup_users') || '[]');
    // Leer lista de ocultos
    const ocultos = JSON.parse(localStorage.getItem('storyup_chats_ocultos_' + logged.email) || '[]');
    // (eliminado: declaración duplicada de chats)
    // Recoger todos los chats posibles (incluyendo anónimos)
    const allChats = {};
    // Mostrar todos los usuarios excepto el propio, aunque no haya mensajes previos
    for (const u of users) {
        if (u.email === logged.email) continue;
        const chatKey = getChatKey(logged.email, u.email);
        // LECTURA BACKEND: Obtener mensajes entre logged.email y u.email
        // Sincronización síncrona para mantener la UI (puedes optimizar a futuro)
        let msgs = [];
        try {
            const resp = await fetch(`/api/messages?from=${logged.email}&to=${u.email}`);
            if (resp.ok) msgs = await resp.json();
        } catch (e) { msgs = []; }
        let lastMsg = msgs.length > 0 ? msgs[msgs.length - 1] : null;
        let unread = msgs.some(m => m.sender !== logged.email && (!localStorage.getItem('perfil_last_read_' + logged.email + '_' + u.email) || new Date(m.created_at).getTime() > Number(localStorage.getItem('perfil_last_read_' + logged.email + '_' + u.email))));
        if (ocultos.includes(u.email) && !unread) continue;
        allChats[u.email] = {
            email: u.email,
            name: u.name || u.email,
            lastMsg: lastMsg ? lastMsg.content : '',
            lastDate: lastMsg ? new Date(lastMsg.created_at).getTime() : 0,
            unread,
            anon: false
        };
    }
    // Buscar chats con emails desconocidos (anónimos)
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('chat_')) {
            const parts = key.split('_');
            if (parts.length === 3) {
                const emailA = parts[1];
                const emailB = parts[2];
                let other = null;
                if (emailA === logged.email) other = emailB;
                else if (emailB === logged.email) other = emailA;
                if (other && !allChats[other]) {
                    const msgs = JSON.parse(localStorage.getItem(key) || '[]');
                    if (msgs.length > 0) {
                        const lastMsg = msgs[msgs.length - 1];
                        const unread = msgs.some(m => m.own !== logged.email && (!localStorage.getItem('perfil_last_read_' + logged.email + '_' + other) || m.date > Number(localStorage.getItem('perfil_last_read_' + logged.email + '_' + other))));
                        if (ocultos.includes(other) && !unread) continue;
                        allChats[other] = {
                            email: other,
                            name: 'Anónimo',
                            lastMsg: lastMsg.text,
                            lastDate: lastMsg.date,
                            unread,
                            anon: true
                        };
                    }
                }
            }
        }
    }
    const chats = Object.values(allChats);
    // Ordenar por último mensaje descendente
    chats.sort((a, b) => (b.lastDate || 0) - (a.lastDate || 0));
    chatListUl.innerHTML = '';
    for (const c of chats) {
        const li = document.createElement('li');
        li.style.cursor = 'pointer';
        li.style.padding = '0.5em 0.7em';
        li.style.borderBottom = '1px solid #e5e7eb';
        li.style.display = 'flex';
        li.style.alignItems = 'center';
        // Botón ocultar
        const delBtn = document.createElement('button');
        delBtn.textContent = '🗑️';
        delBtn.title = 'Ocultar chat de la lista';
        delBtn.style.marginLeft = '8px';
        delBtn.style.background = 'none';
        delBtn.style.border = 'none';
        delBtn.style.cursor = 'pointer';
        delBtn.style.fontSize = '1.1em';
        delBtn.onclick = function (e) {
            e.stopPropagation();
            // Guardar en ocultos
            let ocultos = JSON.parse(localStorage.getItem('storyup_chats_ocultos_' + logged.email) || '[]');
            if (!ocultos.includes(c.email)) ocultos.push(c.email);
            localStorage.setItem('storyup_chats_ocultos_' + logged.email, JSON.stringify(ocultos));
            // Si el chat activo es este, limpiar
            if (userDest === c.email) {
                userDest = '';
                userDestName = '';
                renderChat();
            }
            renderChatList();
        };
        li.innerHTML = `<span style=\"flex:1;font-weight:bold;color:#2563eb;\">${c.name}</span>` +
            (c.anon ? '<span style=\"font-size:0.9em;color:#888;margin-left:6px;\">(anónimo)</span>' : '') +
            (c.unread ? '<span style=\"width:10px;height:10px;background:#e11d48;border-radius:50%;display:inline-block;margin-left:8px;\"></span>' : '') +
            `<br><span style=\"font-size:0.97em;color:#555;font-weight:normal;\">${c.lastMsg.slice(0, 32)}</span>`;
        li.appendChild(delBtn);
        li.onclick = function () {
            userDest = c.email;
            userDestName = c.name;
            renderChat();
        };
        chatListUl.appendChild(li);
    }
}
async function renderChat() {
    if (!userDest) {
        chatUserSelected.textContent = '';
        chatMessages.innerHTML = '';
        return;
    }
    const chatKey = getChatKey();
    // LECTURA BACKEND: Obtener mensajes entre logged.email y userDest
    let msgs = [];
    try {
        const resp = await fetch(`/api/messages?from=${logged.email}&to=${userDest}`);
        if (resp.ok) msgs = await resp.json();
    } catch (e) { msgs = []; }
    chatUserSelected.textContent = userDestName || userDest;
    chatMessages.innerHTML = '';
    // Permitir solo etiquetas seguras: b, u, span, img, iframe (sin eval ni new Function)
    const allowedTags = ['b', 'u', 'span', 'img', 'iframe'];
    msgs.forEach(m => {
        const div = document.createElement('div');
        div.className = m.sender === logged.email ? 'chat-msg-own' : 'chat-msg-other';
        // Sanitizar el contenido permitiendo solo etiquetas seguras
        let safe = m.content.replace(/<([^>]+)>/g, (match, tag) => {
            const tagName = tag.split(' ')[0].toLowerCase();
            return allowedTags.includes(tagName) ? match : '';
        });
        div.innerHTML = safe;
        chatMessages.appendChild(div);
    });
    chatMessages.scrollTop = chatMessages.scrollHeight;
    // Marcar como leído para el usuario logueado (receptor)
    if (msgs.length > 0) {
        const lastMsg = msgs[msgs.length - 1];
        if (lastMsg.sender !== logged.email) {
            const lastReadKey = 'perfil_last_read_' + logged.email + '_' + userDest;
            localStorage.setItem(lastReadKey, String(new Date(lastMsg.created_at).getTime()));
        }
    }
}


// Buscar usuario y abrir chat
// (Eliminada la función buscarYSeleccionarUsuario y sus listeners duplicados)

// Refrescar el chat y la lista automáticamente cada 2 segundos
setInterval(async () => {
    await renderChatList();
    if (userDest) await renderChat();
}, 2000);

chatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!userDest) return;
    const text = chatInput.value.trim();
    if (!text) return;
    // ENVÍO BACKEND: Guardar mensaje en la base de datos
    fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: logged.email, to: userDest, content: text })
    }).then(() => {
        chatInput.value = '';
        renderChat();
    });
});

// Llamadas iniciales asíncronas
(async () => {
    await renderChatList();
    await renderChat();
})();

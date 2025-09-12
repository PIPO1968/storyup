// Herramientas de formato para el chat
window.insertTag = function (tag) {
    const input = document.getElementById('chat-input');
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const before = input.value.substring(0, start);
    const selected = input.value.substring(start, end);
    const after = input.value.substring(end);
    input.value = before + `<${tag}>` + selected + `</${tag}>` + after;
    function renderChatList() {
        const users = JSON.parse(localStorage.getItem('storyup_users') || '[]');
        // Leer lista de ocultos
        const ocultos = JSON.parse(localStorage.getItem('storyup_chats_ocultos_' + logged.email) || '[]');
    // (eliminado: declaración duplicada de chats)
        // Recoger todos los chats posibles (incluyendo anónimos)
        const allChats = {};
        // Chats con usuarios conocidos
        for (const u of users) {
            if (u.email === logged.email) continue;
            const chatKey = getChatKey(logged.email, u.email);
            const msgs = JSON.parse(localStorage.getItem(chatKey) || '[]');
            if (msgs.length > 0) {
                const lastMsg = msgs[msgs.length - 1];
                const unread = msgs.some(m => m.own !== logged.email && (!localStorage.getItem('perfil_last_read_' + logged.email + '_' + u.email) || m.date > Number(localStorage.getItem('perfil_last_read_' + logged.email + '_' + u.email))));
                if (ocultos.includes(u.email) && !unread) continue;
                allChats[u.email] = {
                    email: u.email,
                    name: u.name || u.email,
                    lastMsg: lastMsg.text,
                    lastDate: lastMsg.date,
                    unread,
                    anon: false
                };
            }
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
                // Si es anónimo, mostrar botón para guardar contacto
                if (c.anon) mostrarBotonGuardarContacto(c.email);
            };
    // Mostrar botón para guardar contacto si es anónimo
    function mostrarBotonGuardarContacto(emailAnon) {
        let btn = document.getElementById('guardar-contacto-btn');
        if (btn) btn.remove();
        const users = JSON.parse(localStorage.getItem('storyup_users') || '[]');
        const user = users.find(u => u.email === emailAnon);
        if (!user) return;
        const area = document.getElementById('chat-user-selected');
        btn = document.createElement('button');
        btn.id = 'guardar-contacto-btn';
        btn.textContent = 'Guardar contacto (' + (user.name || user.email) + ')';
        btn.style.marginLeft = '12px';
        btn.style.background = '#2563eb';
        btn.style.color = '#fff';
        btn.style.border = 'none';
        btn.style.borderRadius = '7px';
        btn.style.padding = '0.3em 0.9em';
        btn.style.fontWeight = 'bold';
        btn.style.cursor = 'pointer';
        btn.onclick = function() {
            // Al guardar, se asocia el nick real
            userDestName = user.name || user.email;
            renderChatList();
            renderChat();
            btn.remove();
        };
        area.appendChild(btn);
    }
            chatListUl.appendChild(li);
        }
    }
    return 'chat_' + emails.join('_');
}
function renderChat() {
    if (!userDest) {
        chatUserSelected.textContent = 'Selecciona un chat';
        chatMessages.innerHTML = '';
        return;
    }
    const chatKey = getChatKey();
    const msgs = JSON.parse(localStorage.getItem(chatKey) || '[]');
    chatUserSelected.textContent = userDestName || userDest;
    chatMessages.innerHTML = msgs.map(m =>
        `<div class="${m.own === logged.email ? 'chat-msg-own' : 'chat-msg-other'}">${m.text}</div>`
    ).join('');
    // Permitir HTML seguro en los mensajes (solo etiquetas permitidas)
    Array.from(chatMessages.children).forEach(div => {
        div.innerHTML = div.innerHTML
            .replace(/&lt;(b|u|span|img|iframe)[^&]*&gt;/g, match => match.replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
    });
    chatMessages.scrollTop = chatMessages.scrollHeight;
    // Marcar como leído para el usuario logueado (receptor)
    if (msgs.length > 0) {
        const lastMsg = msgs[msgs.length - 1];
        if (lastMsg.own !== logged.email) {
            const lastReadKey = 'perfil_last_read_' + logged.email + '_' + userDest;
            localStorage.setItem(lastReadKey, String(lastMsg.date));
        }
    }
}

// Bandeja de chats: mostrar todos los usuarios con los que hay mensajes
function renderChatList() {
    const users = JSON.parse(localStorage.getItem('storyup_users') || '[]');
    const chats = [];
    for (const c of chats) {
        const li = document.createElement('li');
        li.style.cursor = 'pointer';
        li.style.padding = '0.5em 0.7em';
        li.style.borderBottom = '1px solid #e5e7eb';
        li.style.display = 'flex';
        li.style.alignItems = 'center';
        // Botón borrar
        const delBtn = document.createElement('button');
        delBtn.textContent = '🗑️';
        delBtn.title = 'Borrar chat';
        delBtn.style.marginLeft = '8px';
        delBtn.style.background = 'none';
        delBtn.style.border = 'none';
        delBtn.style.cursor = 'pointer';
        delBtn.style.fontSize = '1.1em';
        delBtn.onclick = function (e) {
            e.stopPropagation();
            if (confirm('¿Seguro que quieres borrar este chat?')) {
                const chatKey = getChatKey(logged.email, c.email);
                localStorage.removeItem(chatKey);
                // Eliminar también la marca de leído
                localStorage.removeItem('perfil_last_read_' + logged.email + '_' + c.email);
                // Si el chat activo es este, limpiar
                if (userDest === c.email) {
                    userDest = '';
                    userDestName = '';
                    renderChat();
                }
                renderChatList();
            }
        };
        li.innerHTML = `<span style=\"flex:1;font-weight:bold;color:#2563eb;\">${c.name}</span>` +
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
    chatListUl.innerHTML = '';
    for (const c of chats) {
        const li = document.createElement('li');
        li.style.cursor = 'pointer';
        li.style.padding = '0.5em 0.7em';
        li.style.borderBottom = '1px solid #e5e7eb';
        li.style.display = 'flex';
        li.style.alignItems = 'center';
        li.innerHTML = `<span style="flex:1;font-weight:bold;color:#2563eb;">${c.name}</span>` +
            (c.unread ? '<span style="width:10px;height:10px;background:#e11d48;border-radius:50%;display:inline-block;margin-left:8px;"></span>' : '') +
            `<br><span style="font-size:0.97em;color:#555;font-weight:normal;">${c.lastMsg.slice(0, 32)}</span>`;
        li.onclick = function () {
            userDest = c.email;
            userDestName = c.name;
            renderChat();
        };
        chatListUl.appendChild(li);
    }
}

// Buscar usuario y abrir chat
function buscarYSeleccionarUsuario() {
    if (chatSearchError) chatSearchError.style.display = 'none';
    const nick = chatSearchInput.value.trim();
    if (!nick) return;
    const users = JSON.parse(localStorage.getItem('storyup_users') || '[]');
    const user = users.find(u => (u.name || u.email) === nick);
    if (!user) {
        if (chatSearchError) {
            chatSearchError.textContent = 'Usuario no encontrado';
            chatSearchError.style.display = 'block';
        }
        return;
    }
    if (user.email === logged.email) {
        if (chatSearchError) {
            chatSearchError.textContent = 'No puedes chatear contigo mismo';
            chatSearchError.style.display = 'block';
        }
        return;
    }
    userDest = user.email;
    userDestName = user.name || user.email;
    chatSearchInput.value = '';
    renderChat();
    renderChatList();
    setTimeout(() => { if (chatInput) chatInput.focus(); }, 10);
}
if (chatSearchBtn) {
    chatSearchBtn.addEventListener('click', function (e) {
        e.preventDefault();
        buscarYSeleccionarUsuario();
    });
}
if (chatSearchInput) {
    chatSearchInput.addEventListener('keydown', function (e) {
        if (chatSearchError) chatSearchError.style.display = 'none';
        if (e.key === 'Enter') {
            e.preventDefault();
            buscarYSeleccionarUsuario();
        }
    });
}

// Refrescar el chat y la lista automáticamente cada 2 segundos
setInterval(() => {
    renderChatList();
    if (userDest) renderChat();
}, 2000);
function seleccionarNick() {
    if (chatUserError) chatUserError.style.display = 'none';
    const nick = chatUserInput.value.trim();
    if (!nick) return;
    // Buscar email por nick
    const users = JSON.parse(localStorage.getItem('storyup_users') || '[]');
    const user = users.find(u => (u.name || u.email) === nick);
    if (!user) {
        chatUserSelected.textContent = 'Usuario no encontrado';
        userDest = '';
        renderChat();
        if (chatUserError) {
            chatUserError.textContent = 'El usuario no existe';
            chatUserError.style.display = 'block';
        }
        return;
    }
    if (user.email === logged.email) {
        chatUserSelected.textContent = 'No puedes chatear contigo mismo';
        userDest = '';
        renderChat();
        if (chatUserError) {
            chatUserError.textContent = 'No puedes chatear contigo mismo';
            chatUserError.style.display = 'block';
        }
        return;
    }
    userDest = user.email; // SIEMPRE usar el email real para el chatKey
    chatUserSelected.textContent = user.name || user.email;
    chatUserInput.value = '';
    renderChat();
    if (chatUserError) chatUserError.style.display = 'none';
    setTimeout(() => { if (chatInput) chatInput.focus(); }, 10);
}
chatUserInput.addEventListener('keydown', function (e) {
    if (chatUserError) chatUserError.style.display = 'none';
    if (e.key === 'Enter') {
        e.preventDefault();
        seleccionarNick();
    }
});
// Link seleccionar
const chatUserSelectLink = document.getElementById('chat-user-select-link');
if (chatUserSelectLink) {
    chatUserSelectLink.addEventListener('click', function (e) {
        e.preventDefault();
        seleccionarNick();
    });
}
// Ocultar error al escribir
chatUserInput.addEventListener('input', function () {
    if (chatUserError) chatUserError.style.display = 'none';
});
chatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!userDest) return;
    const text = chatInput.value.trim();
    if (!text) return;
    const chatKey = getChatKey();
    const msgs = JSON.parse(localStorage.getItem(chatKey) || '[]');
    const now = Date.now();
    msgs.push({ text, own: logged.email, date: now });
    localStorage.setItem(chatKey, JSON.stringify(msgs));
    // Marcar como no leído para el receptor (punto azul en Perfil)
    const lastReadKey = 'perfil_last_read_' + userDest + '_' + logged.email;
    // Solo actualizar si el receptor no está en su perfil ahora mismo
    // (si está, el punto azul se apaga al instante por el script de index.html)
    // Simplemente no actualizamos el lastRead, así el punto azul se enciende
    chatInput.value = '';
    renderChat();
});

renderChatList();
renderChat();

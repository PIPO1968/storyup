// Herramientas de formato para el chat
window.insertTag = function (tag) {
    const input = document.getElementById('chat-input');
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const before = input.value.substring(0, start);
    const selected = input.value.substring(start, end);
    const after = input.value.substring(end);
    input.value = before + `<${tag}>` + selected + `</${tag}>` + after;
    input.focus();
    input.setSelectionRange(start + tag.length + 2, end + tag.length + 2);
}
window.insertColor = function (color) {
    const input = document.getElementById('chat-input');
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const before = input.value.substring(0, start);
    const selected = input.value.substring(start, end);
    const after = input.value.substring(end);
    input.value = before + `<span style='color:${color}'>` + selected + `</span>` + after;
    input.focus();
    input.setSelectionRange(start + 22 + color.length, end + 22 + color.length);
}
window.insertImage = function (e) {
    const input = document.getElementById('chat-input');
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (ev) {
        input.value += ` <img src='${ev.target.result}' style='max-width:120px;max-height:120px;border-radius:8px;'>`;
    };
    reader.readAsDataURL(file);
}
window.insertYoutube = function () {
    const input = document.getElementById('chat-input');
    const url = prompt('Pega la URL de YouTube:');
    if (!url) return;
    // Extraer ID de YouTube
    const match = url.match(/[?&]v=([^&#]+)/) || url.match(/youtu\.be\/([^?&#]+)/);
    const id = match ? match[1] : null;
    if (id) {
        input.value += ` <iframe width='200' height='120' src='https://www.youtube.com/embed/${id}' frameborder='0' allowfullscreen style='vertical-align:middle;border-radius:8px;'></iframe>`;
    } else {
        alert('URL de YouTube no válida');
    }
}
// chat.js
// Chat privado simulado por usuario (localStorage)
document.addEventListener('DOMContentLoaded', function () {
    const chatMessages = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatUserSelected = document.getElementById('chat-user-selected');
    // Bandeja y buscador
    const chatListUl = document.getElementById('chat-list-ul');
    const chatSearchInput = document.getElementById('chat-search-input');
    const chatSearchBtn = document.getElementById('chat-search-btn');
    const chatSearchError = document.getElementById('chat-search-error');
    // Usuario logueado
    const logged = JSON.parse(localStorage.getItem('storyup_logged'));
    if (!logged) {
        chatMessages.innerHTML = '<p style="color:#e11d48;">Debes iniciar sesión para usar el chat.</p>';
        chatForm.style.display = 'none';
        chatUserInput.disabled = true;
        return;
    }
    let userDest = '';
    let userDestName = '';
    function getChatKey(emailA, emailB) {
        // Si no se pasan emails, usar el chat activo
        const a = emailA || logged.email;
        const b = emailB || userDest;
        if (!a || !b) return null;
        const emails = [a, b].sort();
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
        for (const u of users) {
            if (u.email === logged.email) continue;
            const chatKey = getChatKey(logged.email, u.email);
            const msgs = JSON.parse(localStorage.getItem(chatKey) || '[]');
            if (msgs.length > 0) {
                const lastMsg = msgs[msgs.length - 1];
                chats.push({
                    email: u.email,
                    name: u.name || u.email,
                    lastMsg: lastMsg.text,
                    lastDate: lastMsg.date,
                    unread: msgs.some(m => m.own !== logged.email && (!localStorage.getItem('perfil_last_read_' + logged.email + '_' + u.email) || m.date > Number(localStorage.getItem('perfil_last_read_' + logged.email + '_' + u.email))))
                });
            }
        }
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
});

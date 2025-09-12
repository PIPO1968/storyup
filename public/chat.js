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
    const chatUserInput = document.getElementById('chat-user-input');
    const chatUserSelected = document.getElementById('chat-user-selected');
    const chatUserError = document.getElementById('chat-user-error');
    // Usuario logueado
    const logged = JSON.parse(localStorage.getItem('storyup_logged'));
    if (!logged) {
        chatMessages.innerHTML = '<p style="color:#e11d48;">Debes iniciar sesión para usar el chat.</p>';
        chatForm.style.display = 'none';
        chatUserInput.disabled = true;
        return;
    }
    let userDest = '';
    function getChatKey() {
        if (!userDest) return null;
        // Chat entre dos usuarios: ordena emails para que ambos vean la misma conversación
        const emails = [logged.email, userDest].sort();
        return 'chat_' + emails.join('_');
    }
    function renderChat() {
        if (!userDest) {
            chatMessages.innerHTML = '';
            return;
        }
        const chatKey = getChatKey();
        const msgs = JSON.parse(localStorage.getItem(chatKey) || '[]');
        chatMessages.innerHTML = msgs.map(m =>
            `<div class="${m.own === logged.email ? 'chat-msg-own' : 'chat-msg-other'}">${m.text}</div>`
        ).join('');
        // Permitir HTML seguro en los mensajes (solo etiquetas permitidas)
        Array.from(chatMessages.children).forEach(div => {
            div.innerHTML = div.innerHTML
                .replace(/&lt;(b|u|span|img|iframe)[^&]*&gt;/g, match => match.replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
        });
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
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
        userDest = user.email;
        // Mostrar siempre el texto exacto del input en el recuadro
        chatUserSelected.textContent = nick;
        renderChat();
        if (chatUserError) chatUserError.style.display = 'none';
        // Enfocar el input de mensaje automáticamente tras renderizar
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
    renderChat();
});

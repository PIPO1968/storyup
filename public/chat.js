// chat.js
// Chat privado simulado por usuario (localStorage)
document.addEventListener('DOMContentLoaded', function () {
    const chatMessages = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatUserInput = document.getElementById('chat-user-input');
    const chatUserSelected = document.getElementById('chat-user-selected');
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
            chatMessages.innerHTML = '<p style="color:#888;">Selecciona un usuario para chatear.</p>';
            return;
        }
        const chatKey = getChatKey();
        const msgs = JSON.parse(localStorage.getItem(chatKey) || '[]');
        chatMessages.innerHTML = msgs.map(m =>
            `<div class="${m.own === logged.email ? 'chat-msg-own' : 'chat-msg-other'}">${m.text}</div>`
        ).join('');
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    chatUserInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const nick = chatUserInput.value.trim();
            if (!nick) return;
            // Buscar email por nick
            const users = JSON.parse(localStorage.getItem('storyup_users') || '[]');
            const user = users.find(u => (u.name || u.email) === nick);
            if (!user) {
                chatUserSelected.textContent = 'Usuario no encontrado';
                userDest = '';
                renderChat();
                return;
            }
            userDest = user.email;
            chatUserSelected.textContent = user.name || user.email;
            renderChat();
        }
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

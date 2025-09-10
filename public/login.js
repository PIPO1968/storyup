// login.js
// Maneja el login usando el backend RESTful y almacena el JWT

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const messageDiv = document.getElementById('login-message');
    form?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (res.ok && data.token) {
                localStorage.setItem('token', data.token);
                window.location.href = 'profile.html';
            } else {
                messageDiv.textContent = data.error || 'Error de login';
            }
        } catch (err) {
            messageDiv.textContent = 'Error de red';
        }
    });
});

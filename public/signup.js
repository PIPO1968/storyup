// signup.js
// Maneja el registro usando el backend RESTful y almacena el JWT

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const messageDiv = document.getElementById('signup-message');
    form?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });
            const data = await res.json();
            if (res.ok && data.token) {
                localStorage.setItem('token', data.token);
                window.location.href = 'profile.html';
            } else {
                messageDiv.textContent = data.error || 'Error de registro';
            }
        } catch (err) {
            messageDiv.textContent = 'Error de red';
        }
    });
});

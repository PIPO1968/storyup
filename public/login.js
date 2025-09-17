// login.js
// Lógica de login para StoryUp

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    const errorDiv = document.getElementById('login-error');

    if (form) {
        form.onsubmit = async function (e) {
            e.preventDefault();
            if (errorDiv) errorDiv.style.display = 'none';
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            if (!email || !password) {
                if (errorDiv) {
                    errorDiv.textContent = 'Completa todos los campos';
                    errorDiv.style.display = 'block';
                }
                return;
            }
            try {
                const res = await fetch('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });
                if (!res.ok) {
                    const data = await res.json();
                    if (errorDiv) {
                        errorDiv.textContent = data.error || 'Error de login';
                        errorDiv.style.display = 'block';
                    }
                    return;
                }
                const user = await res.json();
                sessionStorage.setItem('storyup_logged', JSON.stringify(user));
                window.location.href = 'index.html';
            } catch (err) {
                if (errorDiv) {
                    errorDiv.textContent = 'Error de red o del servidor';
                    errorDiv.style.display = 'block';
                }
            }
        };
    }
});

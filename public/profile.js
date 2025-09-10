// profile.js
// Cargar datos de perfil y mostrar en la página

document.addEventListener('DOMContentLoaded', cargarPerfil);

async function cargarPerfil() {
    const token = localStorage.getItem('token');
    const userInfo = document.getElementById('user-info');

    if (!token) {
        userInfo.textContent = 'No has iniciado sesión.';
        return;
    }

    try {
        const response = await fetch('/api/profile', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        if (response.ok) {
            userInfo.innerHTML = `<b>Nombre:</b> <span id="nombre">${data.name}</span><br><b>Email:</b> <span id="email">${data.email}</span>`;
            // Aquí puedes cargar más datos si tu backend los devuelve
        } else {
            userInfo.textContent = 'No se pudo cargar el perfil';
        }
    } catch (error) {
        userInfo.textContent = 'Error al cargar perfil';
        console.error('Error al cargar perfil:', error);
    }
}

// Logout
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('token');
        window.location.href = 'login.html';
    });
}

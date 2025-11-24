
// Moderación simulada (sin backend)
const container = document.getElementById('pending-stories');
const logoutBtn = document.getElementById('logout-btn');

container.innerHTML = '<p>No hay historias pendientes (sin backend).</p>';

logoutBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
});

// Logout sin Firebase

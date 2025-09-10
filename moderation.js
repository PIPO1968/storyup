
// Simulación de moderación sin Firebase
const container = document.getElementById('pending-stories');
const logoutBtn = document.getElementById('logout-btn');

container.innerHTML = '<p>No hay historias pendientes (sin backend).</p>';

logoutBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
});

logoutBtn.addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
        window.location.href = 'login.html';
    });
});

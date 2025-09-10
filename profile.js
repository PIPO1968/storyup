
// Simulación de perfil sin Firebase
const userInfo = document.getElementById('user-info');
const myStories = document.getElementById('my-stories');
const logoutBtn = document.getElementById('logout-btn');

// Simular usuario
const nickname = 'Invitado';
userInfo.innerText = `Usuario: ${nickname}`;
myStories.innerHTML = '<p>No hay historias (sin backend).</p>';

logoutBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
});

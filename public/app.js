messaging.requestPermission()
// Ocultar splash screen al cargar la página
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Simulación de historias destacadas (sin Firebase)
function loadFeaturedStories() {
    // Aquí puedes agregar historias de ejemplo si lo deseas
}
loadFeaturedStories();

const form = document.getElementById('storyForm');
const messageDiv = document.getElementById('message');

form?.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulación de guardado de historia
    messageDiv.textContent = '¡Historia enviada! (Simulación, sin backend)';
    form.reset();
});

// Cierre de sesión simulado
document.getElementById('logout-btn')?.addEventListener('click', () => {
    window.location.href = 'login.html';
});

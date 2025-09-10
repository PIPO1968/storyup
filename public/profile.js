// profile.js
// Mostrar datos del usuario logueado y permitir cerrar sesión

document.addEventListener('DOMContentLoaded', function () {
    // Obtener usuario logueado
    const user = JSON.parse(localStorage.getItem('storyup_logged'));
    const userInfo = document.getElementById('user-info');
    const logoutBtn = document.getElementById('logout-btn');

    if (!user) {
        // Si no hay usuario logueado, redirigir a login
        window.location.href = 'login.html';
        return;
    }

    // Mostrar datos del usuario
    userInfo.innerHTML = `
        <strong>Nombre:</strong> ${user.name}<br>
        <strong>Email:</strong> ${user.email}<br>
        <strong>Idioma preferido:</strong> ${user.language}
    `;

    // Cerrar sesión
    logoutBtn.addEventListener('click', function () {
        localStorage.removeItem('storyup_logged');
        window.location.href = 'login.html';
    });

    // (Opcional) Mostrar imagen de perfil si existe
    const img = document.getElementById('profile-image');
    const imgData = localStorage.getItem('profile_image_' + user.email);
    if (imgData) {
        img.src = imgData;
        img.style.display = 'block';
    }

    // Guardar imagen de perfil
    const imgInput = document.getElementById('profile-image-input');
    if (imgInput) {
        imgInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function (evt) {
                localStorage.setItem('profile_image_' + user.email, evt.target.result);
                img.src = evt.target.result;
                img.style.display = 'block';
            };
            reader.readAsDataURL(file);
        });
    }
});

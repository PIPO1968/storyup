

// Simulación de perfil sin Firebase
const userInfo = document.getElementById('user-info');
const myStories = document.getElementById('my-stories');
const logoutBtn = document.getElementById('logout-btn');

// Imagen de perfil temporal (solo en el navegador)
const imageInput = document.getElementById('profile-image-input');
const imageTag = document.getElementById('profile-image');
const imageContainer = document.getElementById('profile-image-container');

// Cargar imagen guardada en localStorage (si existe)
const savedImage = localStorage.getItem('profileImage');
if (savedImage) {
    imageTag.src = savedImage;
    imageTag.style.display = 'block';
}

imageInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (evt) {
        imageTag.src = evt.target.result;
        imageTag.style.display = 'block';
        localStorage.setItem('profileImage', evt.target.result);
    };
    reader.readAsDataURL(file);
});

// Simular usuario
const nickname = 'Invitado';
userInfo.innerText = `Usuario: ${nickname}`;
myStories.innerHTML = '<p>No hay historias (sin backend).';

logoutBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
});

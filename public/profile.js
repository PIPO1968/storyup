// profile.js
// Mostrar datos del usuario logueado y permitir cerrar sesión

document.addEventListener('DOMContentLoaded', async function () {
    // --- GESTIÓN DE PERFIL Y DATOS PERSONALES ---
    const rawUser = sessionStorage.getItem('user');
    console.log('[PROFILE] Valor en sessionStorage:', rawUser);
    const user = JSON.parse(rawUser || 'null');
    if (!user) {
        console.warn('[PROFILE] No hay usuario en sessionStorage, redirigiendo a login');
        window.location.href = 'login.html';
        return;
    }

    // Elementos del DOM
    const userInfo = document.getElementById('user-info');
    const img = document.getElementById('profile-image');
    const imgInput = document.getElementById('profile-image-input');

    // Cargar datos de perfil desde backend y mostrar nick/correo
    async function loadProfile() {
        try {
            const res = await fetch('/api/profile?email=' + encodeURIComponent(user.email));
            if (!res.ok) {
                const err = await res.text();
                console.error('Error perfil:', res.status, err);
                throw new Error('No se pudo cargar el perfil: ' + err);
            }
            const data = await res.json();
            if (userInfo) {
                userInfo.innerHTML = `
                    <div style="font-size:1.3em;font-weight:bold;">${data.name || ''}</div>
                    <div style="color:#555;">${data.email}</div>
                `;
            }
            if (img && data.profile_image) {
                img.src = data.profile_image;
                img.style.display = 'block';
            } else if (img) {
                img.style.display = 'none';
            }
        } catch (e) {
            console.error('Error al cargar datos personales:', e);
            if (userInfo) userInfo.innerHTML = '<span style="color:#e11d48;">Error al cargar datos personales: ' + (e.message || e) + '</span>';
        }
    }


    // Listar historias propias como links
    async function loadMyStories() {
        const storiesList = document.getElementById('my-stories');
        if (!storiesList) return;
        storiesList.innerHTML = '<li style="color:#888;">Cargando...</li>';
        try {
            const authorEmail = (user && user.email) ? user.email.trim().toLowerCase() : '';
            const res = await fetch('/api/stories?author=' + encodeURIComponent(authorEmail));
            if (!res.ok) {
                const err = await res.text();
                console.error('Error historias:', res.status, err);
                throw new Error('No se pudieron cargar las historias: ' + err);
            }
            const stories = await res.json();
            if (!stories || !Array.isArray(stories) || stories.length === 0) {
                storiesList.innerHTML = '<li style="color:#888;">No tienes historias aún.</li>';
                return;
            }
            storiesList.innerHTML = stories.map(story =>
                `<li><a href="story.html?id=${story.id}" style="color:#2563eb;text-decoration:underline;">${(story.content || '').split('\n')[0].slice(0, 60)}...</a></li>`
            ).join('');
        } catch (e) {
            console.error('Error al cargar historias:', e);
            storiesList.innerHTML = '<li style="color:#e11d48;">Error al cargar historias: ' + (e.message || e) + '</li>';
        }
    }


    await loadProfile();
    await loadMyStories();

    // Formulario para crear historia con barra de herramientas
    const createForm = document.getElementById('create-story-form');
    const storyText = document.getElementById('story-text');
    const storyPreview = document.getElementById('story-preview');
    if (createForm && storyText && storyPreview) {
        // --- Barra de herramientas ---
        function insertTag(open, close) {
            const start = storyText.selectionStart;
            const end = storyText.selectionEnd;
            const value = storyText.value;
            storyText.value = value.slice(0, start) + open + value.slice(start, end) + close + value.slice(end);
            storyText.focus();
            storyText.selectionStart = storyText.selectionEnd = end + open.length + close.length;
            updatePreview();
        }
        document.getElementById('btn-bold').onclick = function (e) { e.preventDefault(); insertTag('<b>', '</b>'); };
        document.getElementById('btn-underline').onclick = function (e) { e.preventDefault(); insertTag('<u>', '</u>'); };
        document.getElementById('btn-image').onchange = function (e) {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function (evt) {
                insertTag('<img src="' + evt.target.result + '" style="max-width:100%;">', '');
            };
            reader.readAsDataURL(file);
            e.target.value = '';
        };
        document.getElementById('btn-youtube').onclick = function (e) {
            e.preventDefault();
            const url = prompt('Pega la URL del video de YouTube:');
            if (!url) return;
            // Extraer ID de YouTube
            const match = url.match(/[?&]v=([^&#]+)|youtu\.be\/([^&#]+)/);
            const id = match ? (match[1] || match[2]) : null;
            if (id) {
                insertTag('<iframe width="100%" height="220" src="https://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe>', '');
            } else {
                alert('URL de YouTube no válida');
            }
        };

        // --- Previsualización en vivo ---
        function updatePreview() {
            const html = storyText.value
                .replace(/\n/g, '<br>');
            storyPreview.innerHTML = html;
            storyPreview.style.display = storyText.value.trim() ? 'block' : 'none';
        }
        storyText.addEventListener('input', updatePreview);
        updatePreview();

        // --- Envío de historia ---
        createForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const title = document.getElementById('story-title').value.trim();
            const text = storyText.value.trim();
            if (!title || !text) return;
            const btn = createForm.querySelector('button[type="submit"]');
            btn.disabled = true;
            btn.textContent = 'Publicando...';
            try {
                const authorEmail = (user && user.email) ? user.email.trim().toLowerCase() : '';
                const res = await fetch('/api/stories', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ author: authorEmail, content: title + '\n' + text })
                });
                if (!res.ok) throw new Error('Error al publicar historia');
                createForm.reset();
                updatePreview();
                await loadMyStories();
            } catch (err) {
                alert('No se pudo publicar la historia.');
            } finally {
                btn.disabled = false;
                btn.textContent = 'Publicar historia';
            }
        });
    }

    // Botón de cerrar sesión
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.onclick = function () {
            sessionStorage.removeItem('user');
            window.location.href = 'login.html';
        };
    }

    // --- Panel de admin para gestión de moderadores ---
    const adminEmails = ["pipocanarias@hotmail.com", "piporgz68@gmail.com"];
    const adminPanel = document.getElementById('admin-panel');
    const modWordsPanel = document.getElementById('mod-words-panel');
    if (adminPanel && adminEmails.includes(user.email)) {
        adminPanel.innerHTML = `
            <h2>Gestión de moderadores</h2>
            <input type="text" id="search-user" placeholder="Buscar usuario por email o nombre" style="width:60%;margin-bottom:8px;">
            <div id="user-results"></div>
        `;
        // Palabras prohibidas globales para moderador
        modWordsPanel.innerHTML = `
            <h3>Palabras prohibidas para amigos moderados</h3>
            <textarea id="mod-banned-words" placeholder="Escribe aquí las palabras prohibidas, separadas por comas o una por línea" style="width:100%;min-height:60px;margin-bottom:8px;"></textarea>
            <button id="save-banned-words" style="margin-bottom:16px;">Guardar palabras prohibidas</button>
            <div id="banned-words-msg" style="color:#22c55e;font-weight:bold;"></div>
        `;
        // Cargar y guardar palabras prohibidas
        const bannedWordsInput = document.getElementById('mod-banned-words');
        const saveBannedBtn = document.getElementById('save-banned-words');
        const bannedMsg = document.getElementById('banned-words-msg');

        // Cargar palabras prohibidas desde API
        async function loadBannedWords() {
            try {
                const response = await fetch('/api/palabras-prohibidas');
                const words = await response.json();
                bannedWordsInput.value = words.join('\n');
            } catch (error) {
                console.error('Error cargando palabras prohibidas:', error);
                bannedWordsInput.value = '';
            }
        }

        await loadBannedWords();

        saveBannedBtn.onclick = async function () {
            const words = bannedWordsInput.value.split(/,|\n/).map(w => w.trim().toLowerCase()).filter(Boolean);
            try {
                // Primero eliminar todas las palabras existentes
                await fetch('/api/palabras-prohibidas', { method: 'DELETE' });

                // Luego añadir las nuevas
                for (const word of words) {
                    await fetch('/api/palabras-prohibidas', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ palabra: word })
                    });
                }

                bannedMsg.textContent = 'Palabras prohibidas guardadas';
                setTimeout(() => bannedMsg.textContent = '', 2000);
            } catch (error) {
                console.error('Error guardando palabras prohibidas:', error);
                bannedMsg.textContent = 'Error al guardar';
            }
        };
        // ...gestión de moderadores (igual que antes)...
        const searchInput = document.getElementById('search-user');
        const userResults = document.getElementById('user-results');
        async function renderUserResults(query) {
            try {
                const response = await fetch('/api/users');
                const users = await response.json();
                const results = users.filter(u => u.nick.includes(query) || (u.email && u.email.toLowerCase().includes(query.toLowerCase())));
                userResults.innerHTML = results.length === 0 ? '<p>No hay resultados.</p>' : results.map(u => {
                    const isMod = u.tipo === 'docente'; // Asumiendo que docentes son moderadores
                    return `<div style="margin-bottom:6px;">${u.nick} (${u.email || 'sin email'})
                        <button class="mod-btn" data-nick="${u.nick}" data-action="${isMod ? 'remove' : 'add'}" style="margin-left:12px;">${isMod ? 'Quitar moderador' : 'Hacer moderador'}</button>
                    </div>`;
                }).join('');
                document.querySelectorAll('.mod-btn').forEach(btn => {
                    btn.onclick = async function () {
                        const nick = this.getAttribute('data-nick');
                        const action = this.getAttribute('data-action');
                        try {
                            // Actualizar el tipo de usuario
                            const newTipo = action === 'add' ? 'docente' : 'alumno';
                            await fetch(`/api/users/${nick}`, {
                                method: 'PUT',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ tipo: newTipo })
                            });
                            renderUserResults(searchInput.value);
                        } catch (error) {
                            console.error('Error actualizando usuario:', error);
                            alert('Error al actualizar usuario');
                        }
                    };
                });
            } catch (error) {
                console.error('Error cargando usuarios:', error);
                userResults.innerHTML = '<p>Error al cargar usuarios.</p>';
            }
        }
        searchInput.addEventListener('input', function () {
            renderUserResults(this.value.trim());
        });
    }

    // --- Bloqueo de palabras prohibidas en historias de amigos moderados ---
    // ...existing code limpio y bien estructurado...
    // (Este bloque debe contener solo funciones y lógica bien cerrada, sin fragmentos sueltos)
});
// seguidores.js
// Muestra un desplegable con todos los nicks de usuarios inscritos en StoryUp

document.addEventListener('DOMContentLoaded', async function () {
    const userListDiv = document.getElementById('seguidores-lista');
    if (!userListDiv) return;

    try {
        const response = await fetch('/api/users');
        const users = await response.json();

        if (users.length === 0) {
            userListDiv.innerHTML = '<p>No hay usuarios registrados.</p>';
            return;
        }
        userListDiv.innerHTML = `
            <label for="seguidores-select" style="font-weight:bold;">Selecciona un usuario:</label>
            <select id="seguidores-select" style="margin-left:10px;">
                <option value="">-- Nicks de usuarios --</option>
                ${users.map(u => `<option value="${u.nick}">${u.nick}</option>`).join('')}
            </select>
            <div id="seguidores-info" style="margin-top:16px;"></div>
        `;
        const select = document.getElementById('seguidores-select');
        const infoDiv = document.getElementById('seguidores-info');

        // Obtener usuario logueado desde sessionStorage (como en otras páginas)
        const loggedUserStr = sessionStorage.getItem('user');
        const logged = loggedUserStr ? JSON.parse(loggedUserStr) : null;

        async function getRequests(nick) {
            try {
                const response = await fetch(`/api/solicitudes?receptor=${nick}`);
                return await response.json();
            } catch (error) {
                console.error('Error obteniendo solicitudes:', error);
                return [];
            }
        }

        async function getFriends(nick) {
            try {
                const response = await fetch(`/api/amigos?usuario=${nick}`);
                const amigos = await response.json();
                return amigos.map(a => a.amigo_nick);
            } catch (error) {
                console.error('Error obteniendo amigos:', error);
                return [];
            }
        }

        select.addEventListener('change', async function () {
            const nick = this.value;
            if (!nick) {
                infoDiv.innerHTML = '';
                return;
            }
            const user = users.find(u => u.nick === nick);
            if (!user) {
                infoDiv.innerHTML = '<p>Usuario no encontrado.</p>';
                return;
            }
            if (!logged || logged.nick === nick) {
                infoDiv.innerHTML = `<strong>Nick:</strong> ${user.nick}<br><strong>Email:</strong> ${user.email || 'No disponible'}`;
                return;
            }

            // Verificar si ya es amigo o ya hay solicitud
            const [myFriends, requests] = await Promise.all([
                getFriends(logged.nick),
                getRequests(nick)
            ]);

            const alreadyFriends = myFriends.includes(nick);
            const alreadyRequested = requests.some(r => r.emisor_nick === logged.nick);

            let btnHtml = '';
            if (alreadyFriends) {
                btnHtml = '<span style="color:#43c6ac;">Ya sois amigos</span>';
            } else if (alreadyRequested) {
                btnHtml = '<span style="color:#aaa;">Solicitud enviada</span>';
            } else {
                btnHtml = `<button id="add-friend-btn" style="background:#43c6ac;color:#fff;border:none;padding:8px 18px;border-radius:8px;cursor:pointer;">Solicitar amistad</button>`;
            }
            infoDiv.innerHTML = `<strong>Nick:</strong> ${user.nick}<br><strong>Email:</strong> ${user.email || 'No disponible'}<br>${btnHtml}`;

            if (!alreadyFriends && !alreadyRequested) {
                document.getElementById('add-friend-btn').onclick = async function () {
                    try {
                        const response = await fetch('/api/solicitudes', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                emisor_nick: logged.nick,
                                receptor_nick: nick
                            })
                        });

                        if (response.ok) {
                            infoDiv.innerHTML += '<br><span style="color:#aaa;">Solicitud enviada</span>';
                        } else {
                            alert('Error al enviar solicitud');
                        }
                    } catch (error) {
                        console.error('Error:', error);
                        alert('Error al enviar solicitud');
                    }
                };
            }
        });

    } catch (error) {
        console.error('Error cargando usuarios:', error);
        userListDiv.innerHTML = '<p>Error al cargar usuarios.</p>';
    }
});

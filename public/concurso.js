// concurso.js
// Lógica para concursos: creación (moderador), participación (usuario), selección de ganador y estadísticas

document.addEventListener('DOMContentLoaded', function () {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const concursoMod = document.getElementById('concurso-moderador');
    const concursoUser = document.getElementById('concurso-usuario');
    const concursoStats = document.getElementById('concurso-estadisticas');
    const adminEmails = ["pipocanarias@hotmail.com", "piporgz68@gmail.com"];
    const isMod = user && (user.role === 'moderador' || adminEmails.includes(user.email));

    // Utilidades para concursos
    function getAllConcursos() {
        return JSON.parse(sessionStorage.getItem('storyup_concursos') || '[]');
    }
    function saveAllConcursos(arr) {
        sessionStorage.setItem('storyup_concursos', JSON.stringify(arr));
    }
    function getAllConcursoStories(cid) {
        return JSON.parse(sessionStorage.getItem('storyup_concurso_stories_' + cid) || '[]');
    }
    function saveAllConcursoStories(cid, arr) {
        sessionStorage.setItem('storyup_concurso_stories_' + cid, JSON.stringify(arr));
    }
    function nowISO() {
        return new Date().toISOString().slice(0, 16);
    }

    // --- Moderador: crear concurso ---
    if (isMod) {
        concursoMod.style.display = 'block';
        concursoMod.innerHTML = `
            <h2>Crear nuevo concurso</h2>
            <form id="form-crear-concurso" style="margin-bottom:2em;">
                <input type="text" id="concurso-titulo" placeholder="Título del concurso" required style="width:100%;margin-bottom:8px;">
                <textarea id="concurso-explicacion" placeholder="Explicación del concurso" required style="width:100%;margin-bottom:8px;"></textarea>
                <label>Fecha tope para crear historias: <input type="datetime-local" id="concurso-fecha-tope" required min="${nowISO()}" style="margin-bottom:8px;"></label><br>
                <label>Fecha de finalización del concurso: <input type="datetime-local" id="concurso-fecha-fin" required min="${nowISO()}" style="margin-bottom:8px;"></label><br>
                <button type="submit">Crear concurso</button>
            </form>
            <h2>Concursos activos</h2>
            <div id="concursos-list"></div>
        `;
        document.getElementById('form-crear-concurso').onsubmit = function (e) {
            e.preventDefault();
            const titulo = document.getElementById('concurso-titulo').value.trim();
            const explicacion = document.getElementById('concurso-explicacion').value.trim();
            const fechaTope = document.getElementById('concurso-fecha-tope').value;
            const fechaFin = document.getElementById('concurso-fecha-fin').value;
            if (!titulo || !explicacion || !fechaTope || !fechaFin) return;
            const concursos = getAllConcursos();
            const id = 'c' + Date.now() + Math.floor(Math.random() * 1000);
            concursos.unshift({ id, titulo, explicacion, fechaTope, fechaFin, ganador: null });
            saveAllConcursos(concursos);
            this.reset();
            renderConcursosModerador();
        };
        renderConcursosModerador();
    }

    // --- Usuario: ver concursos y participar ---
    if (!isMod) {
        concursoUser.style.display = 'block';
        renderConcursosUsuario();
    }

    // --- Funciones de renderizado ---
    function renderConcursosModerador() {
        const concursos = getAllConcursos();
        const ahora = new Date();
        let html = '';
        if (concursos.length === 0) {
            html = '<p>No hay concursos creados.</p>';
        } else {
            html = '<ul style="padding-left:0;list-style:none;">' + concursos.map((c, idx) => {
                const num = idx + 1;
                const stories = getAllConcursoStories(c.id);
                let storiesHtml = '';
                if (stories.length > 0 && !c.ganador) {
                    storiesHtml = '<ul style="padding-left:0;list-style:none;">' + stories.map((s, i) => {
                        return `<li style='margin-bottom:8px;display:flex;align-items:center;'><span style='min-width:2em;text-align:right;color:#a5b4fc;font-weight:bold;display:inline-block;'>${i + 1}.</span> <a href='#' class='concurso-story-link' data-cid='${c.id}' data-idx='${i}' style='color:#6366f1;text-decoration:underline;font-weight:bold;margin-left:0.5em;'>${s.titulo}</a><button class='btn-ganador' data-cid='${c.id}' data-idx='${i}' style='margin-left:1em;background:#fbbf24;color:#232526;border:none;padding:4px 12px;border-radius:6px;cursor:pointer;'>🏆 Elegir ganador</button></li>`;
                    }).join('') + '</ul>';
                } else if (c.ganador) {
                    const s = stories.find(st => st.id === c.ganador);
                    storiesHtml = s ? `<div style='margin:1em 0;'><b>Ganador:</b> <a href='#' class='concurso-story-link' data-cid='${c.id}' data-idx='${stories.findIndex(st => st.id === c.ganador)}' style='color:#fbbf24;text-decoration:underline;font-weight:bold;'>${s.titulo}</a></div>` : '<div style="color:#aaa;">Sin historias ganadoras</div>';
                }
                return `<li style='margin-bottom:18px;'><span style='min-width:2em;text-align:right;color:#a5b4fc;font-weight:bold;display:inline-block;'>${num}.</span> <b>${c.titulo}</b> <div style='font-size:0.95em;color:#aaa;'>${c.explicacion}</div><div style='font-size:0.95em;color:#aaa;'>Hasta: ${c.fechaTope.replace('T', ' ')} | Fin: ${c.fechaFin.replace('T', ' ')}</div>${storiesHtml}</li>`;
            }).join('') + '</ul>';
        }
        document.getElementById('concursos-list').innerHTML = html;
        // Listeners para elegir ganador y ver historia
        document.querySelectorAll('.btn-ganador').forEach(btn => {
            btn.onclick = function () {
                const cid = this.getAttribute('data-cid');
                const idx = parseInt(this.getAttribute('data-idx'));
                const concursos = getAllConcursos();
                const c = concursos.find(cc => cc.id === cid);
                if (!c) return;
                const stories = getAllConcursoStories(cid);
                if (!stories[idx]) return;
                c.ganador = stories[idx].id;
                saveAllConcursos(concursos);
                renderConcursosModerador();
                renderEstadisticas();
            };
        });
        document.querySelectorAll('.concurso-story-link').forEach(link => {
            link.onclick = function (e) {
                e.preventDefault();
                const cid = this.getAttribute('data-cid');
                const idx = parseInt(this.getAttribute('data-idx'));
                const stories = getAllConcursoStories(cid);
                if (!stories[idx]) return;
                alert('Historia:\n' + stories[idx].texto);
            };
        });
    }

    function renderConcursosUsuario() {
        const concursos = getAllConcursos();
        const ahora = new Date();
        let html = '';
        if (concursos.length === 0) {
            html = '<p>No hay concursos activos.</p>';
        } else {
            html = '<ul style="padding-left:0;list-style:none;">' + concursos.map((c, idx) => {
                const num = idx + 1;
                const fechaTope = new Date(c.fechaTope);
                const stories = getAllConcursoStories(c.id);
                let storiesHtml = '';
                if (stories.length > 0) {
                    storiesHtml = '<ul style="padding-left:0;list-style:none;">' + stories.map((s, i) => {
                        return `<li style='margin-bottom:8px;display:flex;align-items:center;'><span style='min-width:2em;text-align:right;color:#a5b4fc;font-weight:bold;display:inline-block;'>${i + 1}.</span> <a href='#' class='concurso-story-link' data-cid='${c.id}' data-idx='${i}' style='color:#6366f1;text-decoration:underline;font-weight:bold;margin-left:0.5em;'>${s.titulo}</a></li>`;
                    }).join('') + '</ul>';
                }
                // Caja para crear historia solo si no ha pasado la fecha tope
                let crearHtml = '';
                if (ahora < fechaTope) {
                    crearHtml = `
                        <form class='form-concurso-historia' data-cid='${c.id}' style='margin-top:10px;'>
                            <input type='text' class='concurso-historia-titulo' placeholder='Título de tu historia' required style='width:100%;margin-bottom:8px;'>
                            <textarea class='concurso-historia-texto' placeholder='Escribe tu historia para el concurso...' required style='width:100%;margin-bottom:8px;'></textarea>
                            <button type='submit'>Participar</button>
                        </form>
                    `;
                }
                return `<li style='margin-bottom:18px;'><span style='min-width:2em;text-align:right;color:#a5b4fc;font-weight:bold;display:inline-block;'>${num}.</span> <b>${c.titulo}</b> <div style='font-size:0.95em;color:#aaa;'>${c.explicacion}</div><div style='font-size:0.95em;color:#aaa;'>Hasta: ${c.fechaTope.replace('T', ' ')} | Fin: ${c.fechaFin.replace('T', ' ')}</div>${storiesHtml}${crearHtml}</li>`;
            }).join('') + '</ul>';
        }
        concursoUser.innerHTML = html;
        // Listener para crear historia
        document.querySelectorAll('.form-concurso-historia').forEach(form => {
            form.onsubmit = function (e) {
                e.preventDefault();
                const cid = this.getAttribute('data-cid');
                const titulo = this.querySelector('.concurso-historia-titulo').value.trim();
                const texto = this.querySelector('.concurso-historia-texto').value.trim();
                if (!titulo || !texto) return;
                const stories = getAllConcursoStories(cid);
                const id = 'h' + Date.now() + Math.floor(Math.random() * 1000);
                stories.push({ id, titulo, texto, autor: user.email });
                saveAllConcursoStories(cid, stories);
                this.reset();
                renderConcursosUsuario();
            };
        });
        document.querySelectorAll('.concurso-story-link').forEach(link => {
            link.onclick = function (e) {
                e.preventDefault();
                const cid = this.getAttribute('data-cid');
                const idx = parseInt(this.getAttribute('data-idx'));
                const stories = getAllConcursoStories(cid);
                if (!stories[idx]) return;
                alert('Historia:\n' + stories[idx].texto);
            };
        });
    }

    function renderEstadisticas() {
        concursoStats.style.display = 'block';
        const concursos = getAllConcursos();
        let html = '<h2>Estadísticas de concursos</h2>';
        if (concursos.length === 0) {
            html += '<p>No hay concursos.</p>';
        } else {
            html += '<ul style="padding-left:0;list-style:none;">' + concursos.map((c, idx) => {
                const stories = getAllConcursoStories(c.id);
                let ganadores = c.ganador ? 1 : 0;
                return `<li style='margin-bottom:12px;'><b>${c.titulo}</b> · Participaciones: ${stories.length} · Ganadores: ${ganadores}</li>`;
            }).join('') + '</ul>';
        }
        concursoStats.innerHTML = html;
    }

    // Mostrar estadísticas solo a moderador
    if (isMod) {
        renderEstadisticas();
    }
});

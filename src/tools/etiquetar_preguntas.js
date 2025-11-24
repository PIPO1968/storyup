// Script para etiquetar preguntas por asignatura en todos los archivos campeonato-*.json
// Ejecuta este script con Node.js en la carpeta src\questions

const fs = require('fs');
const path = require('path');

const asignaturas = [
    { nombre: 'Matemáticas', claves: ['+', '-', 'x', 'dividido', 'multiplicado', 'resultado', 'cuadrado', 'cubo', 'pi', 'hexágono', 'polígono', 'ángulo', 'triángulo', 'suma', 'resta', 'producto', 'número', 'decimal', 'fracción', 'operación', 'multiplicación', 'división'] },
    { nombre: 'Lengua', claves: ['vocal', 'sinónimo', 'antónimo', 'palabra', 'letra', 'gramática', 'verbo', 'adjetivo', 'frase', 'sujeto', 'predicado', 'escribe', 'lengua'] },
    { nombre: 'Literatura', claves: ['autor', 'escribió', 'libro', 'cuento', 'novela', 'protagonista', 'personaje', 'obra', 'poema', 'literatura', 'principito', 'quijote', 'caperucita', 'lazarillo', 'divina comedia'] },
    { nombre: 'Historia', claves: ['historia', 'faraón', 'reina', 'libertador', 'emperador', 'descubrió', 'guerra', 'civilización', 'presidente', 'año', 'revolución', 'batalla', 'antigua', 'colón', 'egipto', 'francia', 'américa', 'romano', 'rey', 'concurso'] },
    { nombre: 'Geografía', claves: ['capital', 'continente', 'río', 'país', 'océano', 'isla', 'montaña', 'ciudad', 'lagos', 'glaciares', 'desierto', 'bosque', 'forest', 'mapa', 'geografía'] },
    { nombre: 'Naturaleza', claves: ['animal', 'planta', 'astro', 'agua', 'sol', 'pez', 'raíz', 'naturaleza', 'cuerpo', 'órgano', 'sangre', 'insulina', 'penicilina', 'montañas', 'orogénesis', 'elemento', 'químico', 'gas', 'atmósfera', 'oxígeno', 'nitrógeno', 'oro', 'páncreas', 'fotosíntesis', 'mitosis', 'riñón', 'fleming', 'vesícula', 'hígado', 'tiroides', 'cerebro', 'piel', 'sistema nervioso', 'metabolismo', 'gravedad', 'evolución', 'big bang', 'tabla periódica', 'electronegatividad', 'radón', 'carbono', 'sodio', 'mercúrio', 'flúor', 'árbol', 'camaleón', 'canguro', 'cocodrilo', 'pájaro', 'gato', 'perro', 'elefante', 'cebra', 'pájaro', 'tortuga', 'camaleón', 'pinocho', 'grillo', 'aurora', 'otoño', 'invierno', 'verano', 'primavera'] },
    { nombre: 'Inglés', claves: ['inglés', 'english', 'how do you say', 'translate', 'capital of', 'synonym', 'opposite', 'past', 'plural', 'write', 'read', 'school', 'cat', 'red', 'eat', 'mother', 'star', 'mountain', 'window', 'sister', 'shoe', 'table', 'car', 'girl', 'boy', 'water', 'friend'] }
];

const carpeta = path.resolve(__dirname, '../questions');
const archivos = fs.readdirSync(carpeta).filter(f => f.endsWith('.json'));

archivos.forEach(archivo => {
    const ruta = path.join(carpeta, archivo);
    let preguntas = JSON.parse(fs.readFileSync(ruta, 'utf8'));
    preguntas = preguntas.map(p => {
        const texto = (p.pregunta || '').toLowerCase();
        let categoriaDetectada = null;
        for (const asignatura of asignaturas) {
            if (asignatura.claves.some(clave => texto.includes(clave))) {
                categoriaDetectada = asignatura.nombre;
                break;
            }
        }
        // Si la categoría está mal o falta, la corrige
        if (!p.categoria || p.categoria !== categoriaDetectada) {
            return categoriaDetectada ? { ...p, categoria: categoriaDetectada } : p;
        }
        return p;
    });
    fs.writeFileSync(ruta, JSON.stringify(preguntas, null, 2), 'utf8');
    console.log(`Etiquetado: ${archivo}`);
});

console.log('¡Etiquetado automático completado!');

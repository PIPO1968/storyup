// Archivo para importar y transformar trofeos premium desde el JSON
import trofeosPremium from './trofeos-premium.json';

export const TROFEOS_PREMIUM = trofeosPremium.map(t => ({
    src: t.imagen,
    texto: `${t.titulo}\n${t.descripcion}`,
    tipo: 'manual'
}));

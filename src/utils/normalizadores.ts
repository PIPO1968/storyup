// Utilidades para normalizar datos que provienen de la API
// Objetivo: evitar renderizar objetos directamente en JSX y mantener consistencia

interface PremioObject {
    nombre?: string;
    titulo?: string;
    descripcion?: string;
}

interface EventoEspecialObject {
    nombre?: string;
    descripcion?: string;
    emoji?: string;
    tipo?: string;
    multiplicador?: unknown;
    bonus?: string;
}

export const normalizarValorPremio = (valor: unknown): string => {
    if (valor == null) return "";
    if (typeof valor === 'string') return valor;
    if (typeof valor === 'number') return String(valor);
    if (typeof valor === 'object') {
        // Preferimos campos legibles: nombre > titulo > descripcion
        // Si no hay ninguno, guardamos JSON como fallback.
        const obj = valor as PremioObject;
        return obj.nombre || obj.titulo || obj.descripcion || JSON.stringify(valor);
    }
    // Guardar algo sensato para otros tipos
    return String(valor);
};

export const normalizarEventoEspecial = (evento: unknown) => {
    if (!evento) return null;
    if (typeof evento === 'string') {
        return { nombre: evento, descripcion: evento, emoji: '', tipo: '' };
    }

    if (typeof evento === 'object') {
        const obj = evento as EventoEspecialObject;
        return {
            nombre: obj.nombre || obj.tipo || '',
            descripcion: obj.descripcion || obj.bonus || '',
            emoji: obj.emoji || '',
            tipo: obj.tipo || '',
            multiplicador: obj.multiplicador || null
        };
    }

    return null;
};

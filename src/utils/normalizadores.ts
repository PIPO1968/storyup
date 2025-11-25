// Utilidades para normalizar datos que provienen de localStorage o de la API
// Objetivo: evitar renderizar objetos directamente en JSX y mantener consistencia

export const normalizarValorPremio = (valor: any): string => {
    if (valor == null) return "";
    if (typeof valor === 'string') return valor;
    if (typeof valor === 'number') return String(valor);
    if (typeof valor === 'object') {
        // Preferimos campos legibles: nombre > titulo > descripcion
        // Si no hay ninguno, guardamos JSON como fallback.
        return valor.nombre || valor.titulo || valor.descripcion || JSON.stringify(valor);
    }
    // Guardar algo sensato para otros tipos
    return String(valor);
};

export const normalizarEventoEspecial = (evento: any) => {
    if (!evento) return null;
    if (typeof evento === 'string') {
        return { nombre: evento, descripcion: evento, emoji: '', tipo: '' };
    }

    if (typeof evento === 'object') {
        return {
            nombre: evento.nombre || evento.tipo || '',
            descripcion: evento.descripcion || evento.bonus || '',
            emoji: evento.emoji || '',
            tipo: evento.tipo || '',
            multiplicador: evento.multiplicador || null
        };
    }

    return null;
};

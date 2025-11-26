// Utilidades para normalizar datos que provienen de la API
// Objetivo: evitar renderizar objetos directamente en JSX y mantener consistencia

export const normalizarValorPremio = (valor: unknown): string => {
    if (valor == null) return "";
    if (typeof valor === 'string') return valor;
    if (typeof valor === 'number') return String(valor);
    if (typeof valor === 'object') {
        // Preferimos campos legibles: nombre > titulo > descripcion
        // Si no hay ninguno, guardamos JSON como fallback.
        return (valor as any).nombre || (valor as any).titulo || (valor as any).descripcion || JSON.stringify(valor);
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
        return {
            nombre: (evento as any).nombre || (evento as any).tipo || '',
            descripcion: (evento as any).descripcion || (evento as any).bonus || '',
            emoji: (evento as any).emoji || '',
            tipo: (evento as any).tipo || '',
            multiplicador: (evento as any).multiplicador || null
        };
    }

    return null;
};

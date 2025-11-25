// src/utils/actos.ts
export async function registrarActo(email: string, tipo: string, descripcion: string) {
    try {
        const response = await fetch('/api/acts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, tipo, descripcion }),
        });
        if (!response.ok) throw new Error('Error al registrar acto');
    } catch (error) {
        console.error(error);
    }
}

export async function obtenerActos(email: string) {
    try {
        const response = await fetch(`/api/acts?email=${encodeURIComponent(email)}`);
        if (response.ok) {
            const data = await response.json();
            return data.acts;
        }
    } catch (error) {
        console.error(error);
    }
    return [];
}

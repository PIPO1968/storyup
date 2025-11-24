// src/utils/actos.ts
export function registrarActo(email: string, tipo: string, descripcion: string) {
    const actos = JSON.parse(localStorage.getItem(`actos_${email}`) || "[]");
    actos.push({
        tipo,
        descripcion,
        fecha: new Date().toLocaleString()
    });
    localStorage.setItem(`actos_${email}`, JSON.stringify(actos));
}

"use client";

import { useState } from 'react';

export default function CleanDataPage() {
    const [result, setResult] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const cleanData = async () => {
        setLoading(true);
        setResult('Iniciando limpieza de datos...');

        try {
            const response = await fetch('/api/users?action=clean-corrupt-data', {
                method: 'DELETE'
            });

            const data = await response.json();

            if (data.success) {
                setResult(`✅ ¡ÉXITO!\n\n${data.message}\n\n🎉 La aplicación está lista para nuevos registros.\n\n📝 Próximos pasos:\n1. Registra usuarios nuevos\n2. El botón ADMIN funcionará correctamente\n3. Todas las fechas y campos se mostrarán bien`);
            } else {
                setResult('❌ Error: ' + (data.error || 'Respuesta inesperada'));
            }
        } catch (error: any) {
            setResult('❌ Error de conexión: ' + error.message);
        }

        setLoading(false);
    };

    const checkStatus = async () => {
        setLoading(true);
        setResult('Verificando estado de la base de datos...');

        try {
            const response = await fetch('/api/users');
            const users = await response.json();

            if (Array.isArray(users)) {
                setResult(`📊 Estado Actual:\n\n👥 Total usuarios: ${users.length}\n\n${users.length > 0
                        ? 'Usuarios existentes:\n' + users.slice(0, 5).map((u: any) => `- ${u.nick || u.email}`).join('\n')
                        : '✅ Base de datos vacía y lista para nuevos registros'
                    }`);
            } else {
                setResult('❌ Error al obtener datos');
            }
        } catch (error: any) {
            setResult('❌ Error de conexión: ' + error.message);
        }

        setLoading(false);
    };

    return (
        <div style={{
            fontFamily: 'Arial, sans-serif',
            maxWidth: '800px',
            margin: '50px auto',
            padding: '20px',
            backgroundColor: '#f5f5f5',
            minHeight: '100vh'
        }}>
            <div style={{
                background: 'white',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
                <h1>🧹 Limpiar Datos Corruptos - StoryUp</h1>

                <div style={{
                    background: '#fff3cd',
                    border: '1px solid #ffeaa7',
                    color: '#856404',
                    padding: '15px',
                    borderRadius: '5px',
                    marginBottom: '20px'
                }}>
                    <strong>⚠️ ATENCIÓN:</strong> Esta acción eliminará TODOS los usuarios existentes.
                    Se perderán todos los datos de usuarios, pero la aplicación funcionará correctamente para nuevos registros.
                </div>

                <p>Esta herramienta soluciona el problema de migración donde los datos se copiaron incorrectamente a Railway.</p>

                <button
                    onClick={cleanData}
                    disabled={loading}
                    style={{
                        background: loading ? '#6c757d' : '#dc3545',
                        color: 'white',
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: '5px',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        fontSize: '16px',
                        marginRight: '10px'
                    }}
                >
                    {loading ? '🕐 Procesando...' : '🗑️ Limpiar Datos Corruptos'}
                </button>

                <button
                    onClick={checkStatus}
                    disabled={loading}
                    style={{
                        background: loading ? '#6c757d' : '#007bff',
                        color: 'white',
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: '5px',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        fontSize: '16px'
                    }}
                >
                    {loading ? '🕐 Procesando...' : '📊 Verificar Estado'}
                </button>

                {result && (
                    <div style={{
                        marginTop: '20px',
                        padding: '15px',
                        borderRadius: '5px',
                        whiteSpace: 'pre-wrap',
                        fontFamily: 'monospace',
                        backgroundColor: result.includes('✅') ? '#d4edda' :
                            result.includes('❌') ? '#f8d7da' : '#e2e3e5',
                        border: `1px solid ${result.includes('✅') ? '#c3e6cb' :
                            result.includes('❌') ? '#f5c6cb' : '#d6d8db'}`,
                        color: result.includes('✅') ? '#155724' :
                            result.includes('❌') ? '#721c24' : '#383d41'
                    }}>
                        {result}
                    </div>
                )}
            </div>
        </div>
    );
}
"use client";
import React, { useState } from 'react';

const cursos = [
    '1º primaria', '2º primaria', '3º primaria', '4º primaria', '5º primaria', '6º primaria'
];

const RegisterLoginForm: React.FC = () => {
    const [isRegister, setIsRegister] = useState(true);

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const user = sessionStorage.getItem("user");
            if (user) {
                window.location.href = "/perfil";
            }
        }
    }, []);

    return (
        <div className="max-w-md mx-auto bg-white shadow rounded p-6 mt-8">
            <div className="flex justify-between mb-4">
                <button onClick={() => setIsRegister(true)} className={isRegister ? 'font-bold' : ''}>Registro</button>
                <button onClick={() => setIsRegister(false)} className={!isRegister ? 'font-bold' : ''}>Login</button>
            </div>
            {isRegister ? (
                <form onSubmit={async e => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    const userData = {
                        nombre: formData.get('nombre') as string,
                        nick: formData.get('nick') as string,
                        centro: formData.get('centro') as string,
                        curso: formData.get('curso') as string,
                        tipo: formData.get('tipo') as string,
                        email: formData.get('email') as string,
                        password: formData.get('password') as string,
                    };
                    try {
                        const response = await fetch('/api/users/register', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(userData),
                        });
                        const result = await response.json();
                        if (response.ok) {
                            sessionStorage.setItem('user', JSON.stringify(result.user));
                            window.location.href = '/perfil';
                        } else {
                            alert(result.error);
                        }
                    } catch (error) {
                        alert('Error de conexión');
                    }
                }}>
                    <input type="text" name="nombre" placeholder="Nombre real" className="w-full mb-2 p-2 border rounded" required />
                    <input type="text" name="nick" placeholder="Nick" className="w-full mb-2 p-2 border rounded" required />
                    <div className="flex mb-2">
                        <span className="mr-2">CEIP:</span>
                        <input type="text" name="centro" placeholder="Nombre del centro escolar" className="flex-1 p-2 border rounded" required />
                    </div>
                    <select name="curso" className="w-full mb-2 p-2 border rounded" required>
                        <option value="">Selecciona curso</option>
                        {cursos.map(curso => (
                            <option key={curso} value={curso}>{curso}</option>
                        ))}
                    </select>
                    <div className="w-full mb-2">
                        <label className="block mb-1">Tipo de usuario:</label>
                        <select name="tipo" className="w-full p-2 border rounded" required>
                            <option value="">Selecciona tipo</option>
                            <option value="usuario">Usuario</option>
                            <option value="docente">Docente</option>
                        </select>
                    </div>
                    <input type="email" name="email" placeholder="Email" className="w-full mb-2 p-2 border rounded" required />
                    <input type="password" name="password" placeholder="Contraseña" className="w-full mb-4 p-2 border rounded" required />
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Registrarse</button>
                </form>
            ) : (
                <form onSubmit={async e => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    const email = formData.get('email') as string;
                    const password = formData.get('password') as string;
                    try {
                        const response = await fetch('/api/users/login', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email, password }),
                        });
                        const result = await response.json();
                        if (response.ok) {
                            sessionStorage.setItem('user', JSON.stringify(result.user));
                            window.location.href = '/perfil';
                        } else {
                            alert(result.error);
                        }
                    } catch (error) {
                        alert('Error de conexión');
                    }
                }}>
                    <input type="email" name="email" placeholder="Email" className="w-full mb-2 p-2 border rounded" required />
                    <input type="password" name="password" placeholder="Contraseña" className="w-full mb-4 p-2 border rounded" required />
                    <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Iniciar sesión</button>
                </form>
            )}
        </div>
    );
};

export default RegisterLoginForm;

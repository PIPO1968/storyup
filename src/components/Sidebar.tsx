import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { renderNick } from "@/utils/renderNick";

const links = [
    { href: '/perfil', label: 'Perfil' },
    { href: '/historias', label: 'Historias' },
    { href: '/crea-historia', label: 'Crea tu Historia' },
    { href: '/noticias', label: 'Noticias' },
    { href: '/concursos', label: 'Concursos' },
    { href: '/competiciones', label: 'Competiciones' },
    { href: '/centros-competencia', label: 'Liga de Centros' },
    { href: '/estadisticas', label: 'Estadísticas' },
    { href: '/aprende-con-pipo', label: 'Aprende con Pipo' },
    { href: '/trofeos', label: 'Trofeos' },
];

const Sidebar: React.FC = () => {
    const [usuarios, setUsuarios] = useState<any[]>([]);
    const [unreadMessages, setUnreadMessages] = useState(false);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const userStr = localStorage.getItem("user");
            if (userStr) setUser(JSON.parse(userStr));
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Cargar usuarios inscritos desde localStorage
            const usersStr = localStorage.getItem("users");
            if (usersStr) {
                try {
                    const usersArr = JSON.parse(usersStr);
                    setUsuarios(usersArr);
                } catch { }
            }
            // Mantener la lógica de mensajes no leídos si es necesario
            const currentUser = localStorage.getItem("user");
            if (currentUser) {
                const user = JSON.parse(currentUser);
                // Aquí podrías agregar la lógica de mensajes si la necesitas
            }
        }
    }, []);

    return (
        <nav className="w-full bg-blue-100 shadow flex justify-center py-2 sticky top-0 z-40">
            <ul className="flex gap-2 items-center flex-nowrap overflow-x-auto whitespace-nowrap">
                {links.map(link => (
                    <li key={link.href} className="flex-shrink-0 relative">
                        <Link href={link.href} className="px-2 py-1 rounded hover:bg-blue-300 font-medium text-sm">
                            {link.label}
                        </Link>
                        {link.href === '/perfil' && unreadMessages && (
                            <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse">
                            </div>
                        )}
                    </li>
                ))}
                <li className="flex-shrink-0">
                    <div className="relative flex items-center">
                        <label htmlFor="buscarUsuario" className="font-medium mr-1 text-sm">Buscar Usuario:</label>
                        <select
                            id="buscarUsuario"
                            className="px-1 py-1 rounded border border-blue-300 bg-white min-w-[120px] text-sm"
                            onChange={e => {
                                if (e.target.value) window.location.href = `/perfil/${e.target.value}`;
                            }}
                            defaultValue=""
                        >
                            <option value="" disabled>Selecciona un usuario</option>
                            {usuarios
                                .filter((u, i, arr) => arr.findIndex(x => x.nick === u.nick) === i)
                                .sort((a, b) => a.nick.localeCompare(b.nick))
                                .map((u: any) => (
                                    <option key={u.nick} value={u.nick}>{u.nick}</option>
                                ))}
                        </select>
                    </div>
                </li>
                {/* Link solo para docentes */}
                {user?.tipo === "docente" && (
                    <li className="flex-shrink-0">
                        <Link
                            href="/docentes"
                            className="px-2 py-1 rounded font-bold text-indigo-700 bg-indigo-100 hover:bg-indigo-200 text-sm flex items-center gap-1 border border-indigo-300 shadow"
                        >
                            Docentes: <span role="img" aria-label="información">ℹ️</span>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Sidebar;

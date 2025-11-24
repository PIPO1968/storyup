"use client";
import React, { useEffect, useState } from 'react';
import { useTranslation } from '@/utils/i18n';

const Header: React.FC = () => {
    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            // Hora de UK (Europe/London)
            const options: Intl.DateTimeFormatOptions = {
                hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
                day: '2-digit', month: '2-digit', year: 'numeric',
                timeZone: 'Europe/London'
            };
            setDateTime(now.toLocaleString('es-ES', options));
        };
        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const { lang, setLang, t } = useTranslation();

    // Obtener usuario actual
    const [user, setUser] = useState<any>(null);
    const [registeredUsers, setRegisteredUsers] = useState<number | null>(null);
    const [onlineUsers, setOnlineUsers] = useState<number | null>(null);
    const [isPremium, setIsPremium] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            const usersStr = localStorage.getItem("users");
            const userStr = localStorage.getItem("user");
            let usersArr = [];
            if (usersStr) {
                try {
                    usersArr = JSON.parse(usersStr);
                } catch { }
            }
            setRegisteredUsers(usersArr.length);
            if (userStr) {
                const currentUser = JSON.parse(userStr);
                setUser(currentUser);

                // Verificar si el usuario actual es Premium
                const premiumInfo = localStorage.getItem(`premium_${currentUser.nick}`);
                if (premiumInfo) {
                    try {
                        const premium = JSON.parse(premiumInfo);
                        if (new Date(premium.expiracion) > new Date()) {
                            setIsPremium(true);
                        }
                    } catch {
                        setIsPremium(false);
                    }
                }

                setOnlineUsers(1);
            } else {
                setOnlineUsers(0);
            }
        }
    }, []);
    return (
        <header className="w-full flex items-center justify-between bg-blue-900 shadow px-6 py-3 text-white">
            {/* Logo y usuarios a la izquierda */}
            <div className="flex items-center gap-4">
                <img src="/favicon.ico" alt="Trofeo principal" className="h-10 w-10" />
                {registeredUsers !== null && onlineUsers !== null ? (
                    <span>{t("usuarios")}: <span id="registered-users">{registeredUsers}</span> | {t("online")}: <span id="online-users">{onlineUsers}</span></span>
                ) : (
                    <span>{t("cargandoUsuarios")}</span>
                )}
                {user && (
                    <span className="ml-4 font-bold flex items-center gap-2">
                        👤 {user.nick}
                        {isPremium && (
                            <span
                                className="bg-gradient-to-r from-sky-100 to-blue-100 text-amber-900 text-xs px-2 py-1 rounded-full font-bold shadow-md border border-sky-300"
                                title={t("usuarioPremium")}
                            >
                                👑
                            </span>
                        )}
                    </span>
                )}
            </div>
            {/* Fecha y hora en el centro */}
            <div className="flex-1 flex justify-center">
                <span className="font-mono text-lg">{dateTime}</span>
            </div>
            {/* Idiomas, Premium y cerrar sesión a la derecha */}
            <div className="flex items-center gap-4">
                {/* Botón Premium diferenciado */}
                {isPremium ? (
                    <button
                        className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full font-bold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                        onClick={() => window.location.href = '/premium-nuevo'}
                        title={t("premiumTitle")}
                    >
                        {t("miPremium")}
                    </button>
                ) : (
                    <button
                        className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-2 rounded-full font-bold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                        onClick={() => window.location.href = '/premium-nuevo'}
                        title={t("haztePremiumTitle")}
                    >
                        {t("haztePremium")}
                    </button>
                )}

                {/* Botón Admin - Solo para PIPO68 */}
                {user && user.nick === 'PIPO68' && (
                    <button
                        className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-2 rounded-full font-bold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                        onClick={() => window.location.href = '/admin-premium'}
                        title={t("adminTitle")}
                    >
                        {t("admin")}
                    </button>
                )}

                <select
                    aria-label={t("seleccionaIdioma")}
                    className="border rounded px-2 py-1"
                    value={lang}
                    onChange={(e) => setLang(e.target.value as any)}
                >
                    <option value="es">{t("espanol")}</option>
                    <option value="en">{t("ingles")}</option>
                    <option value="fr">{t("frances")}</option>
                    <option value="de">{t("aleman")}</option>
                </select>
                <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => {
                        if (typeof window !== 'undefined') {
                            localStorage.removeItem('user');
                            localStorage.removeItem('token');
                        }
                        window.location.href = '/';
                    }}
                >{t("cerrarSesion")}</button>
            </div>
        </header>
    );
};

export default Header;

import React, { useState, useEffect } from "react";

interface UserLinkProps {
    nick: string;
    className?: string;
}

export const UserLink: React.FC<UserLinkProps> = ({ nick, className }) => {
    const [isPremium, setIsPremium] = useState(false);

    useEffect(() => {
        const checkPremium = async () => {
            // Verificar si el usuario es Premium desde API
            if (nick) {
                try {
                    const response = await fetch(`/api/premium?nick=${nick}`);
                    if (response.ok) {
                        const data = await response.json();
                        setIsPremium(data.isActive);
                    } else {
                        setIsPremium(false);
                    }
                } catch (error) {
                    console.error('Error checking premium:', error);
                    setIsPremium(false);
                }
            }
        };

        // Verificar inicialmente
        checkPremium();

        // Escuchar eventos personalizados de premium
        const handlePremiumUpdate = (e: CustomEvent) => {
            if (e.detail.nick === nick) {
                checkPremium();
            }
        };

        window.addEventListener('premiumUpdate', handlePremiumUpdate as EventListener);

        return () => {
            window.removeEventListener('premiumUpdate', handlePremiumUpdate as EventListener);
        };
    }, [nick]);

    const normalized = (nick || "").trim().toLowerCase();
    if (!nick || normalized === "anonimo" || normalized === "anónimo") {
        return <span className={className || "text-gray-500"}>{nick || "(sin nick)"}</span>;
    }

    return (
        <a
            href={`/perfil/${encodeURIComponent(nick)}`}
            className={className || "text-blue-600 underline hover:text-blue-800"}
            title={`Ver perfil de ${nick}${isPremium ? ' (Usuario Premium)' : ''}`}
        >
            {nick}
            {isPremium && (
                <span className="ml-1 inline-flex items-center">
                    <span
                        className="bg-gradient-to-r from-sky-100 to-blue-100 text-amber-900 text-xs px-2 py-1 rounded-full font-bold shadow-md border border-sky-300"
                        title="Usuario Premium"
                    >
                        👑
                    </span>
                </span>
            )}
        </a>
    );
};

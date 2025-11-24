"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AvatarSelector: React.FC = () => {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [selectedAvatar, setSelectedAvatar] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const userStr = localStorage.getItem("user");
            if (userStr) {
                setUser(JSON.parse(userStr));
            }
        }
    }, []);

    if (!user) return <div>Cargando...</div>;

    const isPremium = user ? (() => {
        const premiumData = localStorage.getItem(`premium_${user.nick}`);
        if (premiumData) {
            try {
                const data = JSON.parse(premiumData);
                return data.activo === true;
            } catch {
                return false;
            }
        }
        return false;
    })() : false; // Asumir que hay un campo premium

    const simpleAvatars = [
        '/avatars/simple1.png',
        ...Array.from({ length: 29 }, (_, i) => `/avatars/simple${i + 2}.jpg`)
    ];
    const premiumAvatars = Array.from({ length: 50 }, (_, i) => `/avatars/apremium${i + 1}.jpg`);

    // Mostrar todos los avatares siempre, pero marcar cuáles son premium
    const allAvatars = [...simpleAvatars, ...premiumAvatars];
    const premiumAvatarIndices = simpleAvatars.length; // Índice donde empiezan los premium

    const handleSelectAvatar = (avatar: string) => {
        setSelectedAvatar(avatar);
    };

    const handleSave = () => {
        if (!selectedAvatar) return;

        // Verificar si el avatar seleccionado es premium y el usuario no es premium
        const isSelectedPremium = premiumAvatars.includes(selectedAvatar);
        if (isSelectedPremium && !isPremium) {
            alert('Este avatar es exclusivo para usuarios Premium. ¡Hazte Premium para usarlo!');
            return;
        }

        // Actualizar user
        const updatedUser = { ...user, avatar: selectedAvatar };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        // Actualizar en users array
        const usersStr = localStorage.getItem("users");
        if (usersStr) {
            const users = JSON.parse(usersStr);
            const index = users.findIndex((u: any) => u.nick === user.nick);
            if (index !== -1) {
                users[index] = updatedUser;
                localStorage.setItem("users", JSON.stringify(users));
            }
        }
        alert("Avatar actualizado");
        router.push("/perfil");
    };

    return (
        <div className="min-h-screen bg-green-100 flex flex-col items-center pt-8">
            <h1 className="text-3xl font-bold mb-4">Seleccionar Avatar</h1>

            {/* Indicador de avatares premium */}
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg max-w-md">
                <div className="flex items-center gap-2 text-yellow-800">
                    <span className="text-lg">👑</span>
                    <span className="font-semibold">Avatares Premium</span>
                </div>
                <p className="text-sm text-yellow-700 mt-1">
                    Los avatares con corona dorada son exclusivos para usuarios Premium.
                    {!isPremium && " ¡Hazte Premium para desbloquearlos!"}
                </p>
            </div>

            <div className="grid grid-cols-5 gap-4 mb-8">
                {allAvatars.map((avatar, idx) => {
                    const isPremiumAvatar = idx >= premiumAvatarIndices;
                    const canSelect = !isPremiumAvatar || isPremium;

                    return (
                        <div key={idx} className="relative">
                            <img
                                src={avatar}
                                alt={`Avatar ${idx + 1}${isPremiumAvatar ? ' (Premium)' : ''}`}
                                className={`w-16 h-16 rounded-full border-2 transition-all duration-200 ${!canSelect
                                        ? 'cursor-not-allowed opacity-60 grayscale'
                                        : selectedAvatar === avatar
                                            ? 'border-blue-500 cursor-pointer'
                                            : 'border-gray-300 cursor-pointer hover:border-blue-400'
                                    } ${isPremiumAvatar ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''}`}
                                onClick={() => canSelect && handleSelectAvatar(avatar)}
                                title={isPremiumAvatar && !isPremium ? 'Avatar Premium - Hazte Premium para usarlo' : `Avatar ${idx + 1}`}
                            />
                            {isPremiumAvatar && (
                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg">
                                    👑
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <button
                className="bg-green-500 text-white px-6 py-3 rounded font-semibold"
                onClick={handleSave}
                disabled={!selectedAvatar}
            >
                Guardar Avatar
            </button>
            <button
                className="bg-gray-500 text-white px-6 py-3 rounded font-semibold mt-4"
                onClick={() => router.push("/perfil")}
            >
                Volver
            </button>
        </div>
    );
};

export default AvatarSelector;
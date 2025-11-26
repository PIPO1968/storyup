"use client";

import dynamic from 'next/dynamic';

const LigaPremiumPage = dynamic(() => import('../../components/LigaPremiumComponent'), {
    ssr: false,
    loading: () => (
        <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 flex items-center justify-center">
            <div className="text-white text-xl">Cargando Liga Premium...</div>
        </div>
    )
});

export default LigaPremiumPage;
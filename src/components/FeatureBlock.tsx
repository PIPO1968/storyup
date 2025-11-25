import React from 'react';

interface FeatureBlockProps {
    title: string;
    description: string;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ title, description }) => (
    <div className="bg-white rounded shadow p-6 w-96 h-40 flex flex-col items-center justify-center text-center border-2 border-blue-200">
        <div className="mb-2 text-4xl">
            {title === 'Perfil' && '👤'}
            {title === 'Historias' && '📖'}
            {title === 'Crea tu Historia' && '✍️'}
            {title === 'Noticias' && '📰'}
            {title === 'Concursos' && '🎉'}
            {title === 'Competiciones' && '🏆'}
            {title === 'Estadísticas' && '📊'}
            {title === 'Aprende con Pipo' && '🧠'}
        </div>
        <h3 className="font-bold mb-2 text-blue-900 text-lg">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
    </div>
);

export default FeatureBlock;

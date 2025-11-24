import React from 'react';

const InfoBlock: React.FC = () => (
    <section className="max-w-2xl mx-auto bg-blue-50 rounded shadow p-6 mt-8 mb-8">
        <h2 className="text-2xl font-bold mb-2">¿Qué es StoryUp?</h2>
        <p className="mb-2">StoryUp es una red social escolar pensada para conectar estudiantes, compartir experiencias, organizar actividades y fomentar la comunicación entre centros educativos.</p>
        <ul className="list-disc pl-6">
            <li>Registro seguro y personalizado para cada centro escolar</li>
            <li>Perfil personal con tus datos académicos</li>
            <li>Comunicación entre estudiantes y docentes</li>
            <li>Grupos, publicaciones y chat escolar</li>
            <li>Soporte multilingüe</li>
        </ul>
    </section>
);

export default InfoBlock;

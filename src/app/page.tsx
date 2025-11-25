"use client";
import React from "react";
import RegisterLoginForm from "../components/RegisterLoginForm";
import FeatureBlock from "../components/FeatureBlock";
import ChampionshipQuiz from "../components/ChampionshipQuiz";
import Sidebar from "../components/Sidebar";
import { useTranslation } from '@/utils/i18n';

export default function Home() {
  const { t } = useTranslation();
  // Distribuir los logos en una cuadrícula por la zona verde, evitando el área central
  const totalLogos = 56;
  const gridRows = 7;
  const gridCols = 8;
  // Margen para no tapar el contenido central
  const marginX = 8; // %
  const marginY = 8; // %
  // Distribuir los logos únicamente en los bordes verde alrededor
  let logoPositions: { left: string; top: string }[] = [];
  const logos = [
    "Aguere.jpg", "Angeles Bermejo.jpg", "Aregume.jpg", "Buen Consejo.png", "Camino La Villa.jpg", "Camino Largo.jpg", "Casa Azul.png", "Chamberi.png", "Chayofa.png", "Cisneros Alter.jpg", "Colegio Cervantes.jpg", "Costa Adeje I..jpg", "Cuesta 25 de Julio.jpg", "Dominguez Alfonso.jpg", "Echeyde Arona.png", "Echeyde La Laguna.png", "El Monte.png", "Escuela Rural.png", "Escuelas Pias.jpg", "Gobierno de Canarias (Educacion).jpg", "Hispano La Salud.png", "La Cuesta B.N.jpg", "La Higuerita.jpg", "La Rosa.png", "La Salle.png", "La Vega.jpg", "La Verdellada.jpg", "logo-pipo.jpg", "Los Alisios.jpg", "Los Menceyes.jpg", "Luis Alvarez Cruz.jpg", "Luther King.jpg", "Mayex.jpg", "Montessori.png", "Nuryana.jpg", "Punta Larga.jpg", "Pureza de Maria.png", "Ravelo.jpg", "Rodriguez Alberto.jpg", "Rodriguez Campos.png", "Saint Andrew,s.jpg", "Salesianas.jpg", "San Agustin.jpg", "San Fernando.jpg", "San Isidro.jpg", "San Pablo.png", "Santa Catalina de Siena.jpg", "Santa Cruz de California.jpg", "Santa Maria del Mar.jpg", "Santa Rosa de Lima.jpg", "Tacoronte.jpg", "Tagoror.jpg", "Teofilo Perez.png", "Tincer.jpg", "Virgen de Fatima.jpg", "Virgen del Mar.png"
  ];
  const logosPorBorde = Math.ceil(logos.length / 4);
  // Superior: solo los extremos, no el centro para no tapar el título
  for (let i = 0; i < logosPorBorde && logoPositions.length < logos.length; i++) {
    const left = 5 + (i * 90 / (logosPorBorde - 1));
    if (left < 30 || left > 70) {
      logoPositions.push({ left: `${left}%`, top: '2%' });
    }
  }
  // Inferior: debajo de los bloques de Crea tu Historia y Aprende con Pipo, bajando más para no tocar el botón
  for (let i = 0; i < logosPorBorde && logoPositions.length < logos.length; i++) {
    const left = 20 + (i * 60 / (logosPorBorde - 1));
    logoPositions.push({ left: `${left}%`, top: '93%' });
  }
  // Izquierda
  for (let i = 0; i < logosPorBorde && logoPositions.length < logos.length; i++) {
    logoPositions.push({ left: '2%', top: `${10 + (i * 80 / (logosPorBorde - 1))}%` });
  }
  // Derecha
  for (let i = 0; i < logosPorBorde && logoPositions.length < logos.length; i++) {
    logoPositions.push({ left: '96%', top: `${10 + (i * 80 / (logosPorBorde - 1))}%` });
  }
  const features = [
    { title: t('perfil'), description: t('perfilDesc') },
    { title: t('historias'), description: t('historiasDesc') },
    { title: t('creaTuHistoria'), description: t('creaTuHistoriaDesc') },
    { title: t('noticias'), description: t('noticiasDesc') },
    { title: t('concursosHome'), description: t('concursosHomeDesc') },
    { title: t('competiciones'), description: t('competicionesDesc') },
    { title: t('estadisticas'), description: t('estadisticasDesc') },
    { title: t('aprendeConPipo'), description: t('aprendeConPipoDesc') },
  ];

  const handleQuizResults = (results: {
    score: number;
    total: number;
    correctAnswers: number;
    incorrectAnswers: number;
    victory: boolean;
    userSchool: string;
  }) => {
    console.log("Resultados del cuestionario:", results);
    // Aquí puedes actualizar el estado global o enviar los resultados a un servidor
  };

  const userGrade = 6; // Este valor debe ser dinámico según el registro del usuario
  const userSchool = "Centro Escolar Ejemplo"; // Este valor también debe ser dinámico

  // Detectar si estamos en modo registro/login
  const [showSidebar, setShowSidebar] = React.useState(false);
  React.useEffect(() => {
    // Si el usuario está conectado, mostrar el sidebar
    const user = typeof window !== "undefined" ? localStorage.getItem("user") : null;
    setShowSidebar(!!user);
  }, []);

  return (
    <div className="min-h-[calc(100vh+120px)] bg-green-100 font-sans flex flex-col items-center justify-center relative pb-32">
      {/* Logos de colegios distribuidos en cuadrícula por la zona verde, tamaño 40x40px, z-index bajo */}
      {[
        "Aguere.jpg", "Angeles Bermejo.jpg", "Aregume.jpg", "Buen Consejo.png", "Camino La Villa.jpg", "Camino Largo.jpg", "Casa Azul.png", "Chamberi.png", "Chayofa.png", "Cisneros Alter.jpg", "Colegio Cervantes.jpg", "Costa Adeje I..jpg", "Cuesta 25 de Julio.jpg", "Dominguez Alfonso.jpg", "Echeyde Arona.png", "Echeyde La Laguna.png", "El Monte.png", "Escuela Rural.png", "Escuelas Pias.jpg", "Gobierno de Canarias (Educacion).jpg", "Hispano La Salud.png", "La Cuesta B.N.jpg", "La Higuerita.jpg", "La Rosa.png", "La Salle.png", "La Vega.jpg", "La Verdellada.jpg", "logo-pipo.jpg", "Los Alisios.jpg", "Los Menceyes.jpg", "Luis Alvarez Cruz.jpg", "Luther King.jpg", "Mayex.jpg", "Montessori.png", "Nuryana.jpg", "Punta Larga.jpg", "Pureza de Maria.png", "Ravelo.jpg", "Rodriguez Alberto.jpg", "Rodriguez Campos.png", "Saint Andrew,s.jpg", "Salesianas.jpg", "San Agustin.jpg", "San Fernando.jpg", "San Isidro.jpg", "San Pablo.png", "Santa Catalina de Siena.jpg", "Santa Cruz de California.jpg", "Santa Maria del Mar.jpg", "Santa Rosa de Lima.jpg", "Tacoronte.jpg", "Tagoror.jpg", "Teofilo Perez.png", "Tincer.jpg", "Virgen de Fatima.jpg", "Virgen del Mar.png"
      ].map((img, idx) => {
        if (idx < logoPositions.length) {
          const pos = logoPositions[idx];
          return (
            <img key={img} src={`/${img}`} alt={img.replace(/\.[a-zA-Z]+$/, "")} className="absolute object-contain rounded-full shadow" style={{ width: 40, height: 40, left: pos.left, top: pos.top, opacity: 0.85, zIndex: 0 }} />
          );
        }
        return null;
      })}
      <main className="w-full flex flex-col items-center justify-center max-w-6xl">
        {/* Título y subtítulo de la red social */}
        <div className="w-full flex flex-col items-center mt-8 mb-2">
          <h1 className="text-5xl font-extrabold drop-shadow-lg tracking-wide mb-2" style={{ letterSpacing: '0.08em' }}>
            <span className="text-blue-700">Story</span><span className="text-red-600">Up</span>
          </h1>
          <p className="text-lg text-gray-700 font-semibold mb-4">{t('tuRedSocialEscolar')}</p>
        </div>
        {/* Fila superior: Trofeo3 | Historias | Trofeo7 */}
        <div className="flex w-full justify-center gap-4 mt-4">
          <div className="flex items-center justify-center w-96" id="imagen-izquierda">
            <img src="/trofeo3.jpg" alt="Trofeo 3" className="w-32 h-32 object-contain rounded-xl shadow-lg" />
          </div>
          <FeatureBlock title={features[1].title} description={features[1].description} />
          <div className="flex items-center justify-center w-96" id="imagen-derecha">
            <img src="/trofeo7.jpg" alt="Trofeo 7" className="w-32 h-32 object-contain rounded-xl shadow-lg" />
          </div>
        </div>
        {/* Fila central: Noticias | Concursos | Competiciones */}
        <div className="flex w-full justify-center gap-4 mt-2">
          <FeatureBlock title={features[3].title} description={features[3].description} />
          <FeatureBlock title={features[4].title} description={features[4].description} />
          <FeatureBlock title={features[5].title} description={features[5].description} />
        </div>
        {/* Fila inferior: Bloques verticales a los lados del registro/login */}
        <div className="flex w-full justify-center gap-4 mt-2">
          {/* Izquierda: Perfil arriba, Crea tu Historia abajo */}
          <div className="flex flex-col gap-4 justify-center">
            <FeatureBlock title={features[0].title} description={features[0].description} />
            <FeatureBlock title={features[2].title} description={features[2].description} />
          </div>
          {/* Registro/Login en el centro */}
          <div className="flex items-center justify-center">
            <RegisterLoginForm />
          </div>
          {/* Derecha: Aprende con Pipo arriba, Aprende con Pipo abajo */}
          <div className="flex flex-col gap-4 justify-center">
            <FeatureBlock title={features[6].title} description={features[6].description} />
            <FeatureBlock title={features[7].title} description={features[7].description} />
          </div>
        </div>
        {showSidebar && (
          <div className="flex flex-col items-center mt-4">
            <h2>Aprende con Pipo</h2>
            <ChampionshipQuiz
              userGrade={userGrade}
              userSchool={userSchool}
            />
          </div>
        )}
      </main>
    </div>
  );
}

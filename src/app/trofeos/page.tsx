"use client";

import React from "react";
import Link from "next/link";

export default function Trofeos() {
    // Array de imágenes de trofeos
    const trofeos = [`/trofeo25.jpg`,
        ...Array.from({ length: 23 }, (_, i) => i === 12 ? `/trofeo13.png` : `/trofeo${i + 2}.jpg`)
    ];

    return (
        <div className="min-h-screen bg-yellow-50 p-8">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Trofeos</h1>

            {/* Grid de 6 columnas para trofeos regulares */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-7xl mx-auto mb-12">
                {/* Primer bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo25.jpg" alt="Trofeo 1" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 1</span>
                    <span className="text-xs text-gray-500 text-center">Tus primeros 10 likes</span>
                </div>
                {/* Segundo bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo7.jpg" alt="Trofeo 2" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 2</span>
                    <span className="text-xs text-gray-500 text-center">Tu primer amigo</span>
                </div>
                {/* Tercer bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo12.jpg" alt="Trofeo 3" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 3</span>
                    <span className="text-xs text-gray-500 text-center">Comentaste en una historia</span>
                </div>
                {/* Cuarto bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo5.jpg" alt="Trofeo 4" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 4</span>
                    <span className="text-xs text-gray-500 text-center">Tu primera historia creada</span>
                </div>
                {/* Quinto bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo13.png" alt="Trofeo 5" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 5</span>
                    <span className="text-xs text-gray-500 text-center">Tus primeras 20 respuestas acertadas</span>
                </div>
                {/* Sexto bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo17.jpg" alt="Trofeo 6" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 6</span>
                    <span className="text-xs text-gray-500 text-center">Tu primera competición superada</span>
                </div>
                {/* Séptimo bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo27.jpg" alt="Trofeo 7" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 7</span>
                    <span className="text-xs text-gray-500 text-center">Vimos tu nombre en el ranking de estadisticas...¡Que grande!</span>
                </div>
                {/* Octavo bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo10.jpg" alt="Trofeo 8" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 8</span>
                    <span className="text-xs text-gray-500 text-center">Tu primer concurso ganado</span>
                </div>
                {/* Noveno bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo23.jpg" alt="Trofeo 9" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 9</span>
                    <span className="text-xs text-gray-500 text-center">100 Likes conseguidos...¡Enhorabuena!</span>
                </div>
                {/* Décimo bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo15.jpg" alt="Trofeo 10" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 10</span>
                    <span className="text-xs text-gray-500 text-center">Tus primeros 10 amigos,¡te estas haciendo popular!</span>
                </div>
                {/* Undécimo bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo26.jpg" alt="Trofeo 11" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 11</span>
                    <span className="text-xs text-gray-500 text-center">Enhorabuena por tus 3 primeras historias creadas...¡Nos encantan!</span>
                </div>
                {/* Duodécimo bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo1.jpg" alt="Trofeo 12" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 12</span>
                    <span className="text-xs text-gray-500 text-center">Tu historia a recibido +3 comentarios</span>
                </div>
                {/* Decimotercer bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo22.jpg" alt="Trofeo 13" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 13</span>
                    <span className="text-xs text-gray-500 text-center">¡Que bueno verte en la tabla de competiciones!</span>
                </div>
                {/* Decimocuarto bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo14.jpg" alt="Trofeo 14" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 14</span>
                    <span className="text-xs text-gray-500 text-center">+500 likes conseguidos...¡Te superas cada dia!</span>
                </div>
                {/* Decimoquinto bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo20.jpg" alt="Trofeo 15" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 15</span>
                    <span className="text-xs text-gray-500 text-center">+ 30 amigos en tu lista,bien merecen un trofeo.</span>
                </div>
                {/* Decimosexto bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo11.jpg" alt="Trofeo 16" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 16</span>
                    <span className="text-xs text-gray-500 text-center">En el barrio se rumorea que tu historia recibio + 10 comentarios.</span>
                </div>
                {/* Decimoséptimo bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo24.jpg" alt="Trofeo 17" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 17</span>
                    <span className="text-xs text-gray-500 text-center">+ 15 historias creadas,¡Que tiemblen los adeptos a Cervantes!</span>
                </div>
                {/* Decimoctavo bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo18.jpg" alt="Trofeo 18" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 18</span>
                    <span className="text-xs text-gray-500 text-center">Tu 3º concurso ganado,lo vimos en la pagina de estadisticas...</span>
                </div>
                {/* Decimonoveno bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo19.jpg" alt="Trofeo 19" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 19</span>
                    <span className="text-xs text-gray-500 text-center">Tu centro escolar estara orgulloso de ti con esas + 1000 preguntas acertadas que llevas ya.</span>
                </div>
                {/* Vigésimo bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo15.jpg" alt="Trofeo 20" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 20</span>
                    <span className="text-xs text-gray-500 text-center">1 año con la familia StoryUp,gracias por tu fidelidad.</span>
                </div>
                {/* Vigésimo primer bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo9.jpg" alt="Trofeo 21" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 21</span>
                    <span className="text-xs text-gray-500 text-center">+ 30 historias creadas,¡tu creatividad abruma al mismisimo Einstein!</span>
                </div>
                {/* Vigésimo segundo bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo8.jpg" alt="Trofeo 22" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 22</span>
                    <span className="text-xs text-gray-500 text-center">¡Enhorabuena!,no todo/as consiguen +1000 likes</span>
                </div>
                {/* Vigésimo tercer bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo21.jpg" alt="Trofeo 23" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 23</span>
                    <span className="text-xs text-gray-500 text-center">...Y sigues escalando hacia la cima,tu generosidad atrajo a +50 amigos a tu perfil,¡Eres muy popular en StoryUp!</span>
                </div>
                {/* Vigésimo cuarto bloque personalizado */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow p-3">
                    <img src="/trofeo16.jpg" alt="Trofeo 24" className="w-16 h-16 object-contain mb-2" />
                    <span className="font-semibold text-sm">Trofeo 24</span>
                    <span className="text-xs text-gray-500 text-center">¡Que el mundo lo sepa!,StoryUp te premio´ por tu buenhacer en nuestra red social,consiguiendo los 24 trofeos.</span>
                </div>
            </div>

            {/* Sección de Trofeos Premium */}
            <div className="mt-16 bg-gradient-to-br from-yellow-100 to-amber-200 rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-amber-800 mb-4 flex items-center justify-center gap-3">
                        👑 Trofeos Premium 👑
                    </h2>
                    <p className="text-lg text-amber-700 font-semibold">
                        ¡Desbloquea estos exclusivos trofeos haciéndote Premium!
                    </p>
                    <p className="text-sm text-amber-600 mt-2">
                        Por solo (€1 al mes) €12 al año para acceso a trofeos únicos y funcionalidades especiales
                    </p>
                </div>

                {/* Grid de Trofeos Premium */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-7xl mx-auto mb-8">
                    {/* Trofeo Premium 1 */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-yellow-200 to-amber-300 rounded-lg shadow-lg p-3 border-2 border-yellow-400 transform hover:scale-105 transition-all">
                        <div className="relative">
                            <img src="/premium1.jpg" alt="Trofeo Premium 1" className="w-16 h-16 object-contain mb-2" />
                            <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center">
                                <span className="text-xs font-bold text-white">👑</span>
                            </div>
                        </div>
                        <span className="font-bold text-sm text-amber-900">Historiador Premium</span>
                        <span className="text-xs text-amber-800 text-center font-medium">Tus primeras 35 historias.</span>
                    </div>

                    {/* Trofeo Premium 2 */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-yellow-200 to-amber-300 rounded-lg shadow-lg p-3 border-2 border-yellow-400 transform hover:scale-105 transition-all">
                        <div className="relative">
                            <img src="/premium2.jpg" alt="Trofeo Premium 2" className="w-16 h-16 object-contain mb-2" />
                            <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center">
                                <span className="text-xs font-bold text-white">👑</span>
                            </div>
                        </div>
                        <span className="font-bold text-sm text-amber-900">Sabio Premium</span>
                        <span className="text-xs text-amber-800 text-center font-medium">1200 preguntas acertadas en Aprende con Pipo.</span>
                    </div>

                    {/* Trofeo Premium 3 */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-yellow-200 to-amber-300 rounded-lg shadow-lg p-3 border-2 border-yellow-400 transform hover:scale-105 transition-all">
                        <div className="relative">
                            <img src="/premium3.jpg" alt="Trofeo Premium 3" className="w-16 h-16 object-contain mb-2" />
                            <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center">
                                <span className="text-xs font-bold text-white">👑</span>
                            </div>
                        </div>
                        <span className="font-bold text-sm text-amber-900">Amigo Premium</span>
                        <span className="text-xs text-amber-800 text-center font-medium">Conseguir 60 amigos.</span>
                    </div>

                    {/* Trofeo Premium 4 */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-yellow-200 to-amber-300 rounded-lg shadow-lg p-3 border-2 border-yellow-400 transform hover:scale-105 transition-all">
                        <div className="relative">
                            <img src="/premium14.jpg" alt="Trofeo Premium 4" className="w-16 h-16 object-contain mb-2" />
                            <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center">
                                <span className="text-xs font-bold text-white">👑</span>
                            </div>
                        </div>
                        <span className="font-bold text-sm text-amber-900">Espíritu Navideño Premium</span>
                        <span className="text-xs text-amber-800 text-center font-medium">Escribe una historia sobre la navidad en el modo "My Live", durante los días 20 de diciembre y 6 de enero.</span>
                    </div>

                    {/* Trofeo Premium 5 */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-yellow-200 to-amber-300 rounded-lg shadow-lg p-3 border-2 border-yellow-400 transform hover:scale-105 transition-all">
                        <div className="relative">
                            <img src="/premium5.jpg" alt="Trofeo Premium 5" className="w-16 h-16 object-contain mb-2" />
                            <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center">
                                <span className="text-xs font-bold text-white">👑</span>
                            </div>
                        </div>
                        <span className="font-bold text-sm text-amber-900">Verano Dorado Premium</span>
                        <span className="text-xs text-amber-800 text-center font-medium">Crea una historia en modo "My Live", durante los días de verano (15 junio a 15 septiembre)</span>
                    </div>

                    {/* Trofeo Premium 6 */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-yellow-200 to-amber-300 rounded-lg shadow-lg p-3 border-2 border-yellow-400 transform hover:scale-105 transition-all">
                        <div className="relative">
                            <img src="/premium6.jpg" alt="Trofeo Premium 6" className="w-16 h-16 object-contain mb-2" />
                            <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center">
                                <span className="text-xs font-bold text-white">👑</span>
                            </div>
                        </div>
                        <span className="font-bold text-sm text-amber-900">Veterano Dorado</span>
                        <span className="text-xs text-amber-800 text-center font-medium">6 meses consecutivos como usuario Premium</span>
                    </div>

                    {/* Trofeo Premium 7 */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-yellow-200 to-amber-300 rounded-lg shadow-lg p-3 border-2 border-yellow-400 transform hover:scale-105 transition-all">
                        <div className="relative">
                            <img src="/premium7.png" alt="Trofeo Premium 7" className="w-16 h-16 object-contain mb-2" />
                            <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center">
                                <span className="text-xs font-bold text-white">👑</span>
                            </div>
                        </div>
                        <span className="font-bold text-sm text-amber-900">Diseñador del Futuro</span>
                        <span className="text-xs text-amber-800 text-center font-medium">Crear el futuro logo de StoryUp con herramientas como Paint, en una historia con el título "Logo StoryUp"</span>
                    </div>

                    {/* Trofeo Premium 8 */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-yellow-200 to-amber-300 rounded-lg shadow-lg p-3 border-2 border-yellow-400 transform hover:scale-105 transition-all">
                        <div className="relative">
                            <img src="/premium8.png" alt="Trofeo Premium 8" className="w-16 h-16 object-contain mb-2" />
                            <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center">
                                <span className="text-xs font-bold text-white">👑</span>
                            </div>
                        </div>
                        <span className="font-bold text-sm text-amber-900">Escritor Premium</span>
                        <span className="text-xs text-amber-800 text-center font-medium">Crear 50+ historias.</span>
                    </div>

                    {/* Trofeo Premium 9 */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-yellow-200 to-amber-300 rounded-lg shadow-lg p-3 border-2 border-yellow-400 transform hover:scale-105 transition-all">
                        <div className="relative">
                            <img src="/premium9.jpg" alt="Trofeo Premium 9" className="w-16 h-16 object-contain mb-2" />
                            <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center">
                                <span className="text-xs font-bold text-white">👑</span>
                            </div>
                        </div>
                        <span className="font-bold text-sm text-amber-900">Competidor Premium</span>
                        <span className="text-xs text-amber-800 text-center font-medium">Consigue al menos 30 trofeos</span>
                    </div>

                    {/* Trofeo Premium 10 */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-yellow-200 to-amber-300 rounded-lg shadow-lg p-3 border-2 border-yellow-400 transform hover:scale-105 transition-all">
                        <div className="relative">
                            <img src="/premium10.jpg" alt="Trofeo Premium 10" className="w-16 h-16 object-contain mb-2" />
                            <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center">
                                <span className="text-xs font-bold text-white">👑</span>
                            </div>
                        </div>
                        <span className="font-bold text-sm text-amber-900">Cerebro de Oro</span>
                        <span className="text-xs text-amber-800 text-center font-medium">2500+ preguntas acertadas en Aprende con Pipo.</span>
                    </div>

                    {/* Trofeo Premium 11 */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-yellow-200 to-amber-300 rounded-lg shadow-lg p-3 border-2 border-yellow-400 transform hover:scale-105 transition-all">
                        <div className="relative">
                            <img src="/premium11.jpg" alt="Trofeo Premium 11" className="w-16 h-16 object-contain mb-2" />
                            <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center">
                                <span className="text-xs font-bold text-white">👑</span>
                            </div>
                        </div>
                        <span className="font-bold text-sm text-amber-900">Analista Premium</span>
                        <span className="text-xs text-amber-800 text-center font-medium">Consigue un nivel 3 en todas las materias en "Analisis por materias" de Estadísticas premium Avanzadas.</span>
                    </div>

                    {/* Trofeo Premium 12 */}
                    <div className="flex flex-col items-center bg-gradient-to-br from-yellow-200 to-amber-300 rounded-lg shadow-lg p-3 border-2 border-yellow-400 transform hover:scale-105 transition-all">
                        <div className="relative">
                            <img src="/premium12.jpg" alt="Trofeo Premium 12" className="w-16 h-16 object-contain mb-2" />
                            <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center">
                                <span className="text-xs font-bold text-white">👑</span>
                            </div>
                        </div>
                        <span className="font-bold text-sm text-amber-900">Red Social Premium</span>
                        <span className="text-xs text-amber-800 text-center font-medium">Conseguir 100+ amigos.</span>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-8">
                    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Te gustan estos trofeos?</h3>
                        <p className="text-gray-600 mb-6">
                            ¡Hazte Premium y desbloquea estos trofeos exclusivos, además de funcionalidades especiales, avatares únicos y mucho más!
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Link
                                href="/premium-nuevo"
                                className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200 inline-block text-center"
                            >
                                ⭐ ¡HAZTE PREMIUM! ⭐
                            </Link>
                            <Link
                                href="/pago-real"
                                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-200 inline-block text-center"
                            >
                                Bizum, solo €12/año
                            </Link>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">
                            🔒 Proceso de pago seguro con Bizum • ✅ Activación inmediata tras verificación • 🎁 Sin compromisos
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

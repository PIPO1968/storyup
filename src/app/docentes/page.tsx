"use client";
import React from "react";

const DocentesPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Página exclusiva para docentes</h1>
            <div className="bg-white rounded shadow p-8 max-w-5xl w-full text-left">
                <div className="space-y-8 text-base">
                    <div>
                        <span className="text-2xl mr-2">📝</span><b>REGISTROS:</b>
                        <p className="mt-2">La red social StoryUp usa una página de registro/login con las siguientes características de uso obligatorio en su modo registro:</p>
                        <ul className="list-disc pl-6">
                            <li>1-Nombre real: Para identificar a los alumnos.</li>
                            <li>2-Nick: Apodo de uso en la web con el que se identificarán ante el resto de usuarios.</li>
                            <li>3-CEIP: Donde tendrán que escribir el nombre exacto de su centro escolar.</li>
                            <li>4-Seleccionador de curso: Desplegable donde tendrán que seleccionar el curso actual (Los días 30 de septiembre, ascienden de curso automáticamente).</li>
                            <li>5-Tipo de Usuario: Desplegable para seleccionar si eres Usuario (Alumno) o docente (Profesor).</li>
                            <li>6-Email: Correo electrónico para contacto con StoryUp en caso de pérdida de contraseña.</li>
                            <li>7-Contraseña: Contraseña única para evitar robos de la cuenta de usuario.</li>
                        </ul>
                    </div>
                    <div>
                        <span className="text-2xl mr-2">🔐</span><b>LOGIN/PÁGINA DE PERFIL:</b>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Todos estos datos personales aparecerán en la página de perfil de cada usuario, en su bloque de "Datos personales", junto a sus contadores personales de (likes, Amigos, Respuestas acertadas, Competiciones superadas, Concursos ganados, Comentarios recibidos, Historias creadas).</li>
                            <li>Cuando un usuario/docente ya está inscrito en StoryUp y cierre sesión, al volver a poner el link de la página tendrá la opción de iniciar sesión de nuevo haciendo Login, solo con los datos de Email y Contraseña.</li>
                        </ul>
                    </div>
                    <div>
                        <span className="text-2xl mr-2">👦</span><b>USUARIOS/ALUMNOS:</b>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Los usuarios registrados como "Usuario" tendrán una página de perfil personal con 3 bloques diferentes:</li>
                            <li>1-Datos personales, con todos sus datos personales y conseguidos.</li>
                            <li>2-Trofeos, con una lista de 24 trofeos que aparecerán en modo "bloqueados", que irán desbloqueando por medio de sus hazañas en la red social.</li>
                            <li>3-Chat personal, donde podrán comunicarse con otros usuarios, hacer amigos o comentar sobre los estudios.</li>
                        </ul>
                    </div>
                    <div>
                        <span className="text-2xl mr-2">👨‍🏫</span><b>USUARIOS/DOCENTES:</b>
                        <ul className="list-disc pl-6 mt-2">
                            <li>Los usuarios registrados como "docente", además de los 3 bloques que tienen los usuarios, tendrán 3 bloques extra como herramienta de trabajo escolar y prevención antibullying o ciber-acoso:</li>
                            <li>1-Crear noticia: Panel de anuncios y para refrescar a los alumnos sobre noticias del centro escolar, de educación o noticias importantes de la vida real.</li>
                            <li>2-Crear concurso: Herramienta para gratificar o sacar la creatividad de alumnos, con premios de likes en su perfil para los ganadores.</li>
                            <li>3-Panel de administración: Control sobre la red social, recursos para crear nuevas preguntas a la sección Aprende con Pipo, colocación de palabras prohibidas que castigarán con resta de likes a los alumnos que las escriban en historias o chats y una herramienta de aviso ante posible bullying o ciber acoso, medida y estudiada por la IA (Inteligencia Artificial) con aviso de alerta donde los docentes podrán ver el nick del usuario/alumno que está sufriéndolo o con la posibilidad de ello.</li>
                        </ul>
                    </div>
                    <div>
                        <span className="text-2xl mr-2">🌐</span><b>PÁGINAS GLOBALES Y SU USO:</b>
                        <div className="space-y-4 mt-2">
                            <div>
                                <span className="text-xl mr-2">✍️</span><b>Crea tu historia:</b>
                                <p>Una página para sacar lo mejor de los alumnos, creatividad, ingenio y personalidad; podrán crear sus propias historias de tipo reales o ficticias y en modos (Aventura, Corazón, Terror, Ficción, Educativa, My Live, Concurso), con la opción de elegir que los demás las lean en modo anónimo o con su nick (dando así libertad total al alumnado a atreverse a escribir).</p>
                            </div>
                            <div>
                                <span className="text-xl mr-2">📚</span><b>Historias:</b>
                                <p>Una página donde todos los usuarios de cualquier centro escolar podrán leer, dar like y comentar sobre las historias creadas por otros usuarios de la red social, convirtiendo a los alumnos en protagonistas de sus propias reacciones y actos, dándoles libertad de expresión y creatividad, además de crear lazos entre alumnos de cualquier centro escolar de Canarias.</p>
                                <ul className="list-disc pl-6">
                                    <li>Últimas 25 historias: Donde irán apareciendo las últimas historias creadas con links hacia su lectura.</li>
                                    <li>Top 25 historias con más likes: Donde aparecerán las 25 historias con más likes recibidos.</li>
                                    <li>Top 25 historias con más comentarios: Donde aparecerán las 25 historias más comentadas y sus comentarios.</li>
                                </ul>
                            </div>
                            <div>
                                <span className="text-xl mr-2">📰</span><b>Noticias:</b>
                                <p>Una página para enterarse de lo último en noticias sobre educación, tu centro escolar, alumnos premiados y cualquier noticia importante que los docentes de cualquier centro escolar consideren exponer para mantener informados y al día a padres y alumnos.</p>
                            </div>
                            <div>
                                <span className="text-xl mr-2">🏆</span><b>Concursos:</b>
                                <p>Una página donde todos los usuarios verán una lista con todos los concursos activos y otra con los concursos terminados y sus ganadores; una página donde incentivar a los alumnos con la moneda oficial de StoryUp (Los likes), algo que les animará a participar y activar su ego y creatividad ante otros usuarios/alumnos y donde los docentes/profesores podrán utilizarla para gestionar el avance de sus alumnos.</p>
                            </div>
                            <div>
                                <span className="text-xl mr-2">📊</span><b>Estadísticas:</b>
                                <p>Una página con todo tipo de estadísticas actualizadas al instante con estadísticas globales e individuales sobre centros escolares, alumnos y docentes que activará su modo competitivo en modo ranking y competición con datos reales.</p>
                            </div>
                            <div>
                                <span className="text-xl mr-2">🧑‍🎓</span><b>Aprende con Pipo:</b>
                                <p>Una página importante para el apoyo escolar de todos los alumnos con selección de curso y asignatura y un temporizador que limita el tiempo de respuesta para evitar copiado de respuestas, incentivando cada respuesta acertada con likes y un modo "competición" que les lanzará 25 preguntas colocándolos en un ranking de competitividad en una página pública para la vista de cualquier usuario.</p>
                            </div>
                            <div>
                                <span className="text-xl mr-2">🥇</span><b>Competiciones:</b>
                                <p>Una página donde podremos ver los nicks de los alumnos más competitivos de la sección "Aprende con Pipo", dividida en 3 bloques de competición:</p>
                                <ul className="list-disc pl-6">
                                    <li>Competición individual: Donde aparecerán los alumnos con mejor ranking de respuestas acertadas en el modo competición de la sección Aprende con Pipo.</li>
                                    <li>Competición Centros: Donde aparecerán los centros escolares con mejor ranking uniendo las respuestas de todos los alumnos de su centro escolar.</li>
                                    <li>Competición Docentes: Donde también tendrán su cabida, los docentes de todos los centros escolares en modo competición individual.</li>
                                </ul>
                                <p className="mt-2"><u>P.D.- Todas las temporadas, que terminarán cada 30 de septiembre, se resetearán de nuevo las competiciones, siendo visibles las anteriores en un desplegable con competiciones de otras temporadas guardadas.</u></p>
                            </div>
                            <div>
                                <span className="text-xl mr-2">🏅</span><b>Trofeos:</b>
                                <p>Una página donde todos los alumnos podrán ver los 24 trofeos posibles de conseguir, con el texto que les indica el modo de conseguirlos.</p>
                            </div>
                        </div>

                        {/* ✅ NUEVAS FUNCIONALIDADES 2025 */}
                        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-lg">
                            <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                                🆕 <span className="ml-2">NUEVAS FUNCIONALIDADES 2025</span>
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <span className="text-xl mr-2">🏫</span><b>Liga de Centros Educativos:</b>
                                    <p>Nueva página de competencia entre centros escolares que incluye:</p>
                                    <ul className="list-disc pl-6 mt-2">
                                        <li><strong>Ranking en tiempo real:</strong> Puntuación automática basada en actividad de estudiantes y docentes</li>
                                        <li><strong>Logos reales:</strong> Más de 50 logotipos de centros educativos canarios</li>
                                        <li><strong>Sistema histórico:</strong> Conserva rankings mensuales y anuales</li>
                                        <li><strong>Navegación temporal:</strong> Consulta resultados de meses anteriores</li>
                                        <li><strong>Historial de ganadores:</strong> Galería visual de campeones mensuales</li>
                                        <li><strong>Ranking anual acumulativo:</strong> Suma de todos los meses del año</li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="text-xl mr-2">🛡️</span><b>Sistema Anti-Trampa:</b>
                                    <p>Mejoras en "Aprende con Pipo" para garantizar competencia justa:</p>
                                    <ul className="list-disc pl-6 mt-2">
                                        <li><strong>Curso automático:</strong> Detecta el curso del usuario desde su perfil</li>
                                        <li><strong>Eliminación de selectores:</strong> Ya no se puede elegir curso manualmente</li>
                                        <li><strong>Preguntas de nivel apropiado:</strong> Solo responde a su dificultad real</li>
                                        <li><strong>Puntuaciones justas:</strong> Evita que usuarios respondan preguntas más fáciles</li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="text-xl mr-2">👩‍🏫</span><b>Sistema Equilibrado para Docentes:</b>
                                    <p>Funcionalidades especiales para profesores en "Aprende con Pipo":</p>
                                    <ul className="list-disc pl-6 mt-2">
                                        <li><strong>Preguntas de 6º curso:</strong> Los docentes responden preguntas más difíciles</li>
                                        <li><strong>Puntuación reducida:</strong> 50% de puntos para equilibrar la dificultad</li>
                                        <li><strong>Feedback específico:</strong> Mensajes adaptados para docentes</li>
                                        <li><strong>Competencia equilibrada:</strong> Participación justa en rankings</li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="text-xl mr-2">🏖️</span><b>Modo Vacaciones Automático:</b>
                                    <p>Detección inteligente de períodos especiales:</p>
                                    <ul className="list-disc pl-6 mt-2">
                                        <li><strong>Vacaciones de verano:</strong> x1.5 multiplicador (15 Jun - 15 Sep)</li>
                                        <li><strong>Vacaciones de Navidad:</strong> x1.3 multiplicador (20 Dic - 7 Ene)</li>
                                        <li><strong>Semana Santa:</strong> x1.2 multiplicador (20 Mar - 5 Abr)</li>
                                        <li><strong>Puentes especiales:</strong> Halloween, Constitución con bonificaciones</li>
                                        <li><strong>Activación automática:</strong> Sin intervención manual necesaria</li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="text-xl mr-2">📚</span><b>Competencias por Asignatura:</b>
                                    <p>Rankings especializados por materias:</p>
                                    <ul className="list-disc pl-6 mt-2">
                                        <li><strong>9 asignaturas disponibles:</strong> Matemáticas, Lenguaje, Historia, Geografía, etc.</li>
                                        <li><strong>Rankings independientes:</strong> Estadísticas específicas por materia</li>
                                        <li><strong>Filtrado avanzado:</strong> Ver competencia solo en asignaturas específicas</li>
                                        <li><strong>Iconos temáticos:</strong> Identificación visual por asignatura</li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="text-xl mr-2">🎃</span><b>Challenges Especiales:</b>
                                    <p>Eventos temáticos por fechas del calendario:</p>
                                    <ul className="list-disc pl-6 mt-2">
                                        <li><strong>Día del Libro (23 Abril):</strong> +5 puntos extra por crear cualquier historia</li>
                                        <li><strong>Halloween (31 Octubre):</strong> +4 puntos por historias de modo "Terror"</li>
                                        <li><strong>Navidad (25 Diciembre):</strong> +6 puntos por historias de modo "My Live"</li>
                                        <li><strong>San Valentín (14 Febrero):</strong> +3 puntos por historias de modo "Corazón"</li>
                                        <li><strong>Detección automática:</strong> ±3 días alrededor de cada fecha</li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="text-xl mr-2">📊</span><b>Gráficos de Progreso:</b>
                                    <p>Visualización avanzada de estadísticas:</p>
                                    <ul className="list-disc pl-6 mt-2">
                                        <li><strong>Barras de progreso animadas:</strong> Top 3 centros con efectos visuales</li>
                                        <li><strong>Métricas de participación:</strong> Análisis de actividad en tiempo real</li>
                                        <li><strong>Colores temáticos:</strong> Oro, plata, bronce para rankings</li>
                                        <li><strong>Comparativas avanzadas:</strong> Porcentajes y promedios automáticos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* ACCESO DIRECTO A LA LIGA */}
                        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <h3 className="text-lg font-bold text-yellow-800 mb-2">🚀 Acceso Rápido</h3>
                            <p className="text-yellow-700 text-sm">
                                <strong>Liga de Centros:</strong> Accede desde el menú lateral con "Liga de Centros" o directamente en
                                <span className="font-mono bg-yellow-100 px-1 rounded">/centros-competencia</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DocentesPage;

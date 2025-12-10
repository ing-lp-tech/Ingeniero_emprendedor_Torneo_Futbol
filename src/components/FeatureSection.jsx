import { useEffect, useState } from "react";
import {
  Users,
  TrendingUp,
  Shirt,
  Trophy,
  Instagram,
  Heart,
  Star,
  Sparkles,
  CheckCircle,
  XCircle,
  Award,
  Handshake,
  Send,
} from "lucide-react";

const MundialitoTextilSection = ({ id }) => {
  const phoneNumber = "5491162020911";
  const defaultMessage =
    "¡Hola! Quiero participar en el Mundialito Textil 2025";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  const [activeTab, setActiveTab] = useState("objetivo");

  return (
    <section
      id={id}
      className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Principal con Animación */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Sparkles className="w-64 h-64 text-blue-600 animate-pulse" />
          </div>

          <div className="relative">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full px-6 py-2 text-sm font-bold uppercase tracking-wider mb-4 shadow-lg">
              Mundialito Textil 2025
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Más que fútbol:{" "}
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 text-transparent bg-clip-text">
                Una red de crecimiento
              </span>
            </h2>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Uniendo a la comunidad textil a través del deporte y las redes
              sociales
            </p>
          </div>
        </div>

        {/* Tabs Interactivas */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("objetivo")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 ${
              activeTab === "objetivo"
                ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-xl"
                : "bg-white text-gray-700 hover:bg-blue-50 border-2 border-blue-200"
            }`}
          >
            🎯 El Objetivo
          </button>

          <button
            onClick={() => setActiveTab("requisitos")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 ${
              activeTab === "requisitos"
                ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-xl"
                : "bg-white text-gray-700 hover:bg-blue-50 border-2 border-blue-200"
            }`}
          >
            📋 Requisitos
          </button>

          <button
            onClick={() => setActiveTab("beneficios")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 ${
              activeTab === "beneficios"
                ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-xl"
                : "bg-white text-gray-700 hover:bg-blue-50 border-2 border-blue-200"
            }`}
          >
            ✨ Beneficios
          </button>

          <button
            onClick={() => setActiveTab("patrocinadores")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 ${
              activeTab === "patrocinadores"
                ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-xl"
                : "bg-white text-gray-700 hover:bg-blue-50 border-2 border-blue-200"
            }`}
          >
            🤝 Patrocinadores
          </button>
        </div>

        {/* Contenido de las Tabs */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border border-blue-100">
          {/* Tab: El Objetivo */}
          {activeTab === "objetivo" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  El Verdadero Propósito
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6 border-2 border-blue-300 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <Shirt className="w-10 h-10 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        Comunidad Textil Unida
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Este mundialito es una <strong>excusa perfecta</strong>{" "}
                        para reunir a todos los profesionales del rubro textil.
                        El fútbol es la pasión que nos une, pero el{" "}
                        <strong>networking y crecimiento digital</strong> es lo
                        esencial.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 border-2 border-sky-300 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <Instagram className="w-10 h-10 text-sky-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        Crecimiento en Redes
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        Cada jugador debe tener presencia en TikTok/Instagram.
                        La idea es que
                        <strong> todos se apoyen mutuamente</strong>, aumenten
                        seguidores, alcance y visibilidad. ¡Crecemos juntos como
                        comunidad!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-sky-100 border-2 border-blue-400 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <Sparkles className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      La Prioridad: Alcance Digital
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Por eso exigimos que cada participante tenga redes
                      sociales activas en el rubro textil.{" "}
                      <strong>El contenido que generemos del torneo</strong>{" "}
                      servirá para impulsar a todos los participantes. ¡Es una
                      estrategia de crecimiento colectivo!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab: Requisitos */}
          {activeTab === "requisitos" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Requisitos de Participación
                </h3>
              </div>

              <div className="space-y-6">
                {/* Requisitos Obligatorios */}
                <div className="border-l-4 border-blue-600 bg-gradient-to-r from-blue-50 to-sky-50 rounded-r-2xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6" />
                    Requisitos OBLIGATORIOS
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span className="text-gray-700">
                        <strong>Trabajar en el rubro textil</strong>{" "}
                        (confección, diseño, venta, manufactura, etc.)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span className="text-gray-700">
                        <strong>
                          Tener cuenta activa de TikTok o Instagram
                        </strong>{" "}
                        relacionada con tu trabajo textil
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span className="text-gray-700">
                        <strong>Poder justificar tu participación</strong>{" "}
                        mostrando tu perfil de redes sociales
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-lg">✓</span>
                      <span className="text-gray-700">
                        <strong>Compromiso de interacción</strong>: seguir, dar
                        like y apoyar a otros participantes
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Excepción */}
                <div className="border-l-4 border-sky-500 bg-gradient-to-r from-sky-50 to-blue-50 rounded-r-2xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-sky-900 mb-4 flex items-center gap-2">
                    <Star className="w-6 h-6" />
                    Excepción Permitida
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Cada equipo puede incluir{" "}
                    <strong>máximo 1 invitado sin redes sociales</strong>,
                    siempre y cuando el resto del equipo cumpla con todos los
                    requisitos. Este invitado debe estar relacionado al rubro
                    textil.
                  </p>
                </div>

                {/* Nacionalidad */}
                <div className="border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-blue-100 rounded-r-2xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Inclusión Total
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    ¡Todas las nacionalidades son bienvenidas! 🌎 No importa de
                    dónde seas:
                    <strong>
                      {" "}
                      Argentina, Bolivia, Perú, Paraguay, Colombia, Venezuela,
                      Brasil, comunidad judía, y cualquier otro país
                    </strong>
                    . Lo importante es cumplir con los requisitos del rubro
                    textil y redes sociales.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab: Beneficios */}
          {activeTab === "beneficios" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Beneficios para Todos
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-100 to-sky-100 rounded-2xl p-6 transform hover:scale-105 transition-transform shadow-md border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                    <h4 className="text-xl font-bold text-gray-900">
                      Crecimiento Digital
                    </h4>
                  </div>
                  <p className="text-gray-700">
                    Aumenta tus seguidores, alcance e interacciones en
                    TikTok/Instagram gracias al apoyo de toda la comunidad
                  </p>
                </div>

                <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-2xl p-6 transform hover:scale-105 transition-transform shadow-md border border-sky-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-sky-600" />
                    <h4 className="text-xl font-bold text-gray-900">
                      Networking Real
                    </h4>
                  </div>
                  <p className="text-gray-700">
                    Conecta con otros profesionales del textil, genera contactos
                    de negocios y colaboraciones futuras
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 transform hover:scale-105 transition-transform shadow-md border border-blue-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-8 h-8 text-blue-700" />
                    <h4 className="text-xl font-bold text-gray-900">
                      Visibilidad de Marca
                    </h4>
                  </div>
                  <p className="text-gray-700">
                    Todo el contenido generado durante el torneo te dará
                    exposición gratuita para tu negocio o emprendimiento
                  </p>
                </div>

                <div className="bg-gradient-to-br from-sky-100 to-blue-200 rounded-2xl p-6 transform hover:scale-105 transition-transform shadow-md border border-sky-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Trophy className="w-8 h-8 text-blue-700" />
                    <h4 className="text-xl font-bold text-gray-900">
                      Premios Exclusivos
                    </h4>
                  </div>
                  <p className="text-gray-700">
                    Premios para el campeón, subcampeón y menciones especiales,
                    patrocinados por empresas del rubro
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-600 rounded-2xl p-8 text-white text-center shadow-xl">
                <Sparkles className="w-12 h-12 mx-auto mb-4" />
                <h4 className="text-2xl font-bold mb-3">
                  Contenido Profesional Incluido
                </h4>
                <p className="text-lg leading-relaxed">
                  Fotografías, videos y cobertura completa del torneo para que
                  todos los participantes tengan material de calidad para sus
                  redes sociales.
                  <strong> ¡Es una inversión en tu marca personal!</strong>
                </p>
              </div>
            </div>
          )}

          {/* Tab: Patrocinadores */}
          {activeTab === "patrocinadores" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl shadow-lg">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Invitación a Patrocinadores
                </h3>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-sky-100 rounded-2xl p-8 border-2 border-blue-400 shadow-lg">
                <div className="text-center mb-8">
                  <Trophy className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    ¿Tienes una empresa o marca del rubro textil?
                  </h4>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    <strong>
                      ¡Estás cordialmente invitado/a a patrocinar premios!
                    </strong>{" "}
                    Esta es una excelente oportunidad para dar visibilidad a tu
                    marca frente a una audiencia comprometida y activa en redes
                    sociales.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white rounded-xl p-6 text-center shadow-md border-2 border-blue-200 hover:border-blue-400 transition-all">
                    <div className="text-4xl mb-3">📸</div>
                    <h5 className="font-bold text-gray-900 mb-2">Exposición</h5>
                    <p className="text-gray-600 text-sm">
                      Tu marca en fotos, videos y publicaciones del evento
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 text-center shadow-md border-2 border-blue-200 hover:border-blue-400 transition-all">
                    <div className="text-4xl mb-3">👥</div>
                    <h5 className="font-bold text-gray-900 mb-2">Alcance</h5>
                    <p className="text-gray-600 text-sm">
                      Llegada a cientos de profesionales del textil activos en
                      redes
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 text-center shadow-md border-2 border-blue-200 hover:border-blue-400 transition-all">
                    <div className="text-4xl mb-3">💎</div>
                    <h5 className="font-bold text-gray-900 mb-2">
                      Valor Agregado
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Asocia tu marca con comunidad, deporte y crecimiento
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 rounded-2xl p-8 text-white text-center shadow-xl">
                <h4 className="text-2xl font-bold mb-4">
                  Tipos de Patrocinio Disponibles
                </h4>
                <div className="grid md:grid-cols-2 gap-4 mt-6 text-left">
                  <div className="bg-white bg-opacity-20 rounded-xl p-4 hover:bg-opacity-30 transition-all backdrop-blur-sm">
                    <h5 className="font-bold mb-2">🏆 Premio Principal</h5>
                    <p className="text-sm">
                      Patrocina el premio del equipo campeón
                    </p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-xl p-4 hover:bg-opacity-30 transition-all backdrop-blur-sm">
                    <h5 className="font-bold mb-2">🥈 Premio Subcampeón</h5>
                    <p className="text-sm">Patrocina el segundo lugar</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-xl p-4 hover:bg-opacity-30 transition-all backdrop-blur-sm">
                    <h5 className="font-bold mb-2">⚽ Premio Goleador</h5>
                    <p className="text-sm">
                      Reconocimiento individual al máximo anotador
                    </p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-xl p-4 hover:bg-opacity-30 transition-all backdrop-blur-sm">
                    <h5 className="font-bold mb-2">🎖️ Premio Fair Play</h5>
                    <p className="text-sm">
                      Al equipo con mejor espíritu deportivo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para formar parte?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Únete al Mundialito Textil 2025 y haz crecer tu red profesional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSffalPjhTRSyw_x7nyogE-KQUF1bUj5qARFd7aB6fmPCX2rBw/viewform?usp=publish-editor"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition transform hover:scale-105 shadow-lg"
            >
              📱 Inscribete solo
              <Send className="h-5 w-5" />
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSej7yhgVFnjiyz5mOX8fVlx9r6l5zTcjsuoE9FRu8zyt5oWNQ/viewform?usp=publish-editor"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition transform hover:scale-105 shadow-lg"
            >
              📱 Inscribe tu Equipo
              <Send className="h-5 w-5" />
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdeoF8rTR_tgepTnTZVaM__6jTaSo5qNBdAgb2JxvZWsA9bfw/viewform?usp=publish-editor"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition transform hover:scale-105"
            >
              🤝 Quiero Patrocinar
              <Send className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-6 text-sm opacity-75">
            ¡Las inscripciones están abiertas! Cupos limitados por equipo
          </p>
        </div>

        {/* Stats Decorativos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center bg-white rounded-xl p-6 shadow-md border-2 border-blue-200">
            <div className="text-4xl font-bold text-blue-600">8+</div>
            <div className="text-gray-600 mt-2">Comunidades</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-md border-2 border-sky-200">
            <div className="text-4xl font-bold text-sky-600">100%</div>
            <div className="text-gray-600 mt-2">Profesionales Textiles</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-md border-2 border-blue-200">
            <div className="text-4xl font-bold text-blue-600">🚀</div>
            <div className="text-gray-600 mt-2">Crecimiento Digital</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-md border-2 border-sky-200">
            <div className="text-4xl font-bold text-sky-600">🏆</div>
            <div className="text-gray-600 mt-2">Premios Increíbles</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MundialitoTextilSection;

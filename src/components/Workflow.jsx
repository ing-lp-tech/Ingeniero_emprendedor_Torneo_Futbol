import {
  CheckCircle2,
  Users,
  UserPlus,
  ClipboardList,
  Send,
} from "lucide-react";

const ProcesoInscripcion = ({ id, imagenProceso }) => {
  const phoneNumber = "5491162020911";

  const pasosInscripcion = [
    {
      icon: ClipboardList,
      title: "1. Completa el Formulario",
      description:
        "Llena el formulario de inscripción con tus datos: nombre completo, cuenta de TikTok/Instagram, y especifica si vienes con equipo completo o individual.",
    },
    {
      icon: Users,
      title: "2. Equipos Completos",
      description:
        "Si ya tienes tu equipo armado (mínimo 5 jugadores), incluye los datos de todos los integrantes. Cada uno debe tener su cuenta de redes activa en el rubro textil.",
    },
    {
      icon: UserPlus,
      title: "3. Jugadores Individuales",
      description:
        "¿No tienes equipo? ¡No hay problema! Inscríbete como jugador individual y nosotros te asignaremos a un equipo con otros participantes.",
    },
    {
      icon: CheckCircle2,
      title: "4. Verificación",
      description:
        "Revisaremos que cumplas con los requisitos: trabajo en rubro textil y cuenta activa de redes sociales. Te confirmaremos tu inscripción por WhatsApp.",
    },
  ];

  const requisitosFormulario = [
    "Nombre completo del jugador",
    "Cuenta de TikTok o Instagram (@usuario)",
    "Descripción de tu trabajo en el rubro textil",
    "¿Vienes con equipo completo o individual?",
    "Si vienes con equipo: nombre del equipo y lista de jugadores",
    "Número de WhatsApp para confirmación",
  ];

  return (
    <section
      id={id}
      className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-50 to-sky-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full px-6 py-2 text-sm font-bold uppercase tracking-wider mb-4 shadow-lg">
            Proceso de Inscripción
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            ¿Cómo{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 text-transparent bg-clip-text">
              Inscribirte
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Sigue estos simples pasos para formar parte del Mundialito Textil
            2025
          </p>
        </div>

        {/* Proceso en 4 pasos */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {pasosInscripcion.map((paso, index) => {
            const IconComponent = paso.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-gradient-to-br from-blue-600 to-blue-500 p-3 rounded-xl text-white shadow-md">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {paso.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {paso.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dos columnas: Imagen y Requisitos */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Imagen */}
          <div className="order-2 lg:order-1">
            {/* <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-blue-100">
              <img
                src={
                  imagenProceso ||
                  "https://via.placeholder.com/600x400?text=Mundialito+Textil+2025"
                }
                alt="Inscripción Mundialito Textil"
                className="rounded-xl w-full h-auto object-cover"
              />
            </div> */}

            {/* Info adicional */}
            <div className="mt-6 bg-gradient-to-r from-blue-600 to-sky-600 p-6 rounded-2xl text-white shadow-xl">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Users className="h-6 w-6" />
                Modalidades de Inscripción
              </h3>
              <div className="space-y-3">
                <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
                  <p className="font-semibold mb-1">🏆 Equipo Completo</p>
                  <p className="text-sm">
                    Inscribe a tu equipo (5-11 jugadores) con nombre y todos los
                    datos
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
                  <p className="font-semibold mb-1">⚽ Jugador Individual</p>
                  <p className="text-sm">
                    Inscríbete solo y te asignaremos a un equipo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Requisitos del Formulario */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Card de Requisitos */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ClipboardList className="h-7 w-7 text-blue-600" />
                Datos Requeridos en el Formulario
              </h3>
              <div className="space-y-3">
                {requisitosFormulario.map((requisito, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 bg-blue-600 p-1 rounded-md text-white mt-0.5">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{requisito}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recordatorio Importante */}
          </div>
        </div>
        <div className="w-full flex justify-center px-4">
          <div
            className="
    bg-gradient-to-br from-sky-50 to-blue-50
    border-2 border-blue-300 rounded-2xl shadow-md
    p-6 max-w-md w-full
    text-center
  "
          >
            <h4 className="text-lg font-bold text-blue-900 mb-4 flex justify-center items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-blue-600" />
              Recordatorio Importante
            </h4>

            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-start gap-2 justify-center">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Todos los jugadores deben trabajar en el rubro textil
                </span>
              </li>

              <li className="flex items-start gap-2 justify-center">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Cuenta de TikTok/Instagram obligatoria (excepto 1 invitado por
                  equipo)
                </span>
              </li>

              <li className="flex items-start gap-2 justify-center">
                <span className="text-blue-600 font-bold">•</span>
                <span>
                  Si no tienes equipo, no te preocupes: te asignaremos uno
                </span>
              </li>

              <li className="flex items-start gap-2 justify-center">
                <span className="text-blue-600 font-bold">•</span>
                <span>Recibirás confirmación por WhatsApp</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Timeline visual (opcional) */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            ⏱️ Timeline del Proceso
          </h3>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center flex-1">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 font-bold text-lg">
                1
              </div>
              <p className="font-semibold text-gray-900">Contactas</p>
              <p className="text-sm text-gray-600">Solicitas formulario</p>
            </div>
            <div className="hidden md:block text-blue-600 text-2xl">→</div>

            <div className="text-center flex-1">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 font-bold text-lg">
                2
              </div>
              <p className="font-semibold text-gray-900">Completas</p>
              <p className="text-sm text-gray-600">Llenas el formulario</p>
            </div>
            <div className="hidden md:block text-blue-600 text-2xl">→</div>

            <div className="text-center flex-1">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 font-bold text-lg">
                3
              </div>
              <p className="font-semibold text-gray-900">Verificamos</p>
              <p className="text-sm text-gray-600">En el tiempo necesario</p>
            </div>
            <div className="hidden md:block text-blue-600 text-2xl">→</div>

            <div className="text-center flex-1">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 font-bold text-lg">
                ✓
              </div>
              <p className="font-semibold text-gray-900">¡Confirmado!</p>
              <p className="text-sm text-gray-600">Listo para jugar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcesoInscripcion;

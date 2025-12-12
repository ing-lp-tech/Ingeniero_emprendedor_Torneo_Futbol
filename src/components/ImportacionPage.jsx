import React, { useState } from "react";
import {
  Users,
  Package,
  Shirt,
  Cpu,
  Zap,
  ChevronDown,
  Send,
  CheckCircle,
  TrendingDown,
  Shield,
} from "lucide-react";

const GruposImportacionColectiva = ({ id }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const categories = [
    {
      id: "telas",
      name: "Telas y Textiles",
      icon: Shirt,
      description: "Telas, tejidos, hilos y materiales textiles de todo tipo",
      whatsappLink:
        "https://chat.whatsapp.com/FFU8GIUYMx52LDotKfUpao?mode=hqrt1",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
      examples: ["Algodón", "Poliéster", "Jersey", "Denim", "Telas técnicas"],
    },
    {
      id: "ropa",
      name: "Ropa Confeccionada",
      icon: Package,
      description: "Prendas terminadas, accesorios y productos de indumentaria",
      whatsappLink:
        "https://chat.whatsapp.com/BPmzGHnXWRP5YDsPeBXEaq?mode=hqrt1",
      color: "from-purple-600 to-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-300",
      examples: [
        "Remeras",
        "Pantalones",
        "Buzos",
        "Ropa deportiva",
        "Accesorios",
      ],
    },
    {
      id: "maquinas",
      name: "Maquinaria Textil",
      icon: Zap,
      description:
        "Máquinas de coser, bordadoras, cortadoras y equipamiento industrial",
      whatsappLink:
        "https://chat.whatsapp.com/DgUGfQP1kqoLeTNIw2zAMp?mode=hqrt1",
      color: "from-green-600 to-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-300",
      examples: [
        "Rectas",
        "Overlock",
        "Bordadoras",
        "Cortadoras láser",
        "Planchas industriales",
      ],
    },
    {
      id: "electronica",
      name: "Electrónica y Tecnología",
      icon: Cpu,
      description:
        "Componentes electrónicos, dispositivos y tecnología para producción",
      whatsappLink:
        "https://chat.whatsapp.com/LUiLNpFGu0bFoPOgzhSLiK?mode=hqrt1",
      color: "from-orange-600 to-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-300",
      examples: [
        "Electrodomesticos",
        "Impresoras",
        "Software",
        "Componentes",
        "Sensores",
      ],
    },
  ];

  // Manejar la selección y redirección
  const handleJoinGroup = () => {
    if (!selectedCategory) return;

    const category = categories.find((cat) => cat.id === selectedCategory);
    if (category) {
      setShowSuccess(true);
      setTimeout(() => {
        window.open(category.whatsappLink, "_blank");
        setShowSuccess(false);
      }, 1500);
    }
  };

  return (
    <section
      id={id}
      className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full px-6 py-2 text-sm font-bold uppercase tracking-wider mb-4 shadow-lg">
            Importación Colectiva
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Importá en{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 text-transparent bg-clip-text">
              Grupo
            </span>{" "}
            y Ahorrá
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Únete a grupos de WhatsApp con personas que importan los mismos
            productos. Compartí costos de contenedor, flete y despacho para
            reducir gastos significativamente.
          </p>
        </div>

        {/* Beneficios de importar en grupo */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100 text-center">
            <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Reduce Costos
            </h3>
            <p className="text-gray-600">
              Compartí gastos de contenedor, flete internacional y despacho
              aduanero
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-sky-100 text-center">
            <div className="bg-gradient-to-br from-sky-600 to-sky-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Red de Contactos
            </h3>
            <p className="text-gray-600">
              Conectá con otros importadores del mismo rubro y compartí
              experiencias
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100 text-center">
            <div className="bg-gradient-to-br from-blue-700 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Menor Riesgo
            </h3>
            <p className="text-gray-600">
              Compartí conocimiento sobre proveedores, NCM y procesos aduaneros
            </p>
          </div>
        </div>

        {/* Selector de categoría */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-blue-100 mb-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Seleccioná la Categoría de tu Interés
            </h3>

            {/* Dropdown personalizado */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                ¿Qué tipo de productos querés importar?
              </label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-xl appearance-none cursor-pointer focus:border-blue-500 focus:outline-none bg-white"
                >
                  <option value="">-- Selecciona una categoría --</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Mostrar detalles de la categoría seleccionada */}
            {selectedCategory && (
              <div className="animate-fadeIn">
                {categories.map((cat) => {
                  if (cat.id !== selectedCategory) return null;
                  const IconComponent = cat.icon;

                  return (
                    <div
                      key={cat.id}
                      className={`${cat.bgColor} border-2 ${cat.borderColor} rounded-2xl p-6 mb-6`}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`bg-gradient-to-br ${cat.color} rounded-xl p-3`}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {cat.name}
                          </h4>
                          <p className="text-gray-700 mb-4">
                            {cat.description}
                          </p>

                          <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <p className="text-sm font-semibold text-gray-700 mb-2">
                              Ejemplos de productos:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {cat.examples.map((example, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                >
                                  {example}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Botón de acción */}
                <button
                  onClick={handleJoinGroup}
                  className={`w-full bg-gradient-to-r ${
                    categories.find((c) => c.id === selectedCategory)?.color
                  } text-white font-bold py-4 px-8 rounded-xl transition transform hover:scale-105 shadow-lg flex items-center justify-center gap-3`}
                >
                  {showSuccess ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      <span>Redirigiendo al grupo...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Unirme al Grupo de WhatsApp</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Información adicional */}
        <div className="bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 rounded-2xl p-8 text-white text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-4">¿Cómo Funciona?</h3>
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">1</div>
              <p className="text-sm">Elegís tu categoría de productos</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">2</div>
              <p className="text-sm">Te unís al grupo de WhatsApp</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">3</div>
              <p className="text-sm">Coordinás con otros importadores</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-3xl font-bold mb-2">4</div>
              <p className="text-sm">Compartís costos y ahorrás</p>
            </div>
          </div>
        </div>

        {/* Términos y condiciones */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-md border border-gray-200">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            Importante a Considerar
          </h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>Los grupos son auto-gestionados por los miembros</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                Recomendamos establecer acuerdos escritos antes de compartir
                costos
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                Verificá la reputación y trayectoria de otros importadores
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                Consultá con un despachante de aduana para coordinar
                importaciones grupales
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GruposImportacionColectiva;

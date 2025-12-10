import { motion } from "framer-motion";
import plotter2 from "../assets/plotter2.jpg";
import React, { useState } from "react";
import avatarLuisPatty from "../assets/avatarLuisPattyJpg.jpg";
import torneo from "../assets/torneo.jpg";
import llegoelmundial from "../assets/llegoelmundial.png";
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

const HeroSection = ({ id, dolarOficial }) => {
  const phoneNumber = "5491162020911";
  const defaultMessage =
    "¡Hola! Quiero participar en el Mundialito Comunitario 2025";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <>
      <div id={id} className="flex flex-col items-center mt-6 mb-0 lg:mt-10">
        <div className="bg-gradient-to-b from-blue-50 to-white py-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center w-full mb-1">
              {/* Título arriba con menos separación */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 px-4">
                Uniendo culturas a través del{" "}
                <span className="text-blue-600">fútbol</span>
              </h1>

              {/* Imagen abajo */}
              <img
                className="w-full md:w-1/2 h-auto object-contain"
                src={llegoelmundial}
                alt="Llegó el Mundial - Torneo Comunitario"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  El Mundialito Comunitario 2025 reúne a las comunidades
                  boliviana, argentina, judía, paraguaya, peruana y más. Un
                  torneo donde todos están invitados a participar, celebrando la
                  diversidad y construyendo lazos a través del deporte. Porque
                  la pasión por el fútbol no tiene fronteras.
                </p>

                <div className="bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    ¿Listo para formar parte?
                  </h3>
                  <p className="text-xl mb-8 opacity-90">
                    Únete al Mundialito Textil 2025 y haz crecer tu red
                    profesional
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSffalPjhTRSyw_x7nyogE-KQUF1bUj5qARFd7aB6fmPCX2rBw/viewform?usp=publish-editor"
                      className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition transform hover:scale-105 shadow-lg"
                    >
                      📱 Inscribete solo
                    </a>

                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSej7yhgVFnjiyz5mOX8fVlx9r6l5zTcjsuoE9FRu8zyt5oWNQ/viewform?usp=publish-editor"
                      className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition transform hover:scale-105 shadow-lg"
                    >
                      📱 Inscribe tu Equipo
                    </a>

                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdeoF8rTR_tgepTnTZVaM__6jTaSo5qNBdAgb2JxvZWsA9bfw/viewform?usp=publish-editor"
                      className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition transform hover:scale-105"
                    >
                      🤝 Quiero Patrocinar
                    </a>
                  </div>
                  <p className="mt-6 text-sm opacity-75">
                    ¡Las inscripciones están abiertas! Cupos limitados por
                    equipo
                  </p>
                </div>

                <div className="mt-8 flex items-center space-x-4">
                  <div className="flex flex-col">
                    <p className="text-sm text-gray-500 font-medium">
                      🌍 Más de 8 comunidades participando
                    </p>
                    <p className="text-sm text-gray-500 font-medium">
                      ⚽ Torneo de eliminación directa
                    </p>
                    <p className="text-sm text-gray-500 font-medium">
                      🏆 Premios para el campeón y subcampeón
                    </p>
                  </div>
                </div>
              </div>

              {/* Imagen destacada del torneo */}
              <div className="md:w-1/2 relative">
                <img
                  className="w-full rounded-xl shadow-2xl border border-gray-200"
                  src={torneo}
                  alt="Mundialito Comunitario - Uniendo culturas"
                />
              </div>
            </div>

            {/* Comunidades participantes */}
            <div className="mt-20">
              <h3 className="text-center text-gray-700 text-lg font-bold mb-6">
                🌎 COMUNIDADES INVITADAS
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-6 text-center">
                <div className="px-6 py-3 bg-white rounded-lg shadow-md border border-gray-200">
                  <span className="text-2xl">🇧🇴</span>
                  <p className="text-sm font-medium text-gray-700 mt-1">
                    Bolivia
                  </p>
                </div>
                <div className="px-6 py-3 bg-white rounded-lg shadow-md border border-gray-200">
                  <span className="text-2xl">🇦🇷</span>
                  <p className="text-sm font-medium text-gray-700 mt-1">
                    Argentina
                  </p>
                </div>
                <div className="px-6 py-3 bg-white rounded-lg shadow-md border border-gray-200">
                  <span className="text-2xl">🇮🇱</span>
                  <p className="text-sm font-medium text-gray-700 mt-1">
                    Judía
                  </p>
                </div>
                <div className="px-6 py-3 bg-white rounded-lg shadow-md border border-gray-200">
                  <span className="text-2xl">🇵🇾</span>
                  <p className="text-sm font-medium text-gray-700 mt-1">
                    Paraguay
                  </p>
                </div>
                <div className="px-6 py-3 bg-white rounded-lg shadow-md border border-gray-200">
                  <span className="text-2xl">🇵🇪</span>
                  <p className="text-sm font-medium text-gray-700 mt-1">Perú</p>
                </div>
                <div className="px-6 py-3 bg-white rounded-lg shadow-md border border-gray-200">
                  <span className="text-2xl">🌍</span>
                  <p className="text-sm font-medium text-gray-700 mt-1">
                    Y más...
                  </p>
                </div>
              </div>

              <p className="text-center text-gray-600 mt-8 text-lg">
                <strong>¡Todas las comunidades son bienvenidas!</strong> La
                diversidad nos une y el fútbol es nuestro idioma común.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

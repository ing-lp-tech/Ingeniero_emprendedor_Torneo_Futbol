import tiktok from "../assets/tiktok.svg";
import { Instagram, Facebook, Linkedin, Youtube, Twitter } from "lucide-react";
import logoluisys from "../assets/LogoLuisys.png";
import { motion } from "framer-motion";

// 🔹 Links de redes sociales (corrección principal)
const socialLinks = [
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@luispatty",
    icon: <img src={tiktok} alt="TikTok" className="h-6 w-6" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com",
    icon: <Instagram size={24} />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    icon: <Facebook size={24} />,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com",
    icon: <Youtube size={24} />,
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com",
    icon: <Twitter size={24} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/luis-patty-mamani/",
    icon: <Linkedin size={24} />,
  },
];

const Footer = ({ id, cotizaciones, cargandoDolar }) => {
  return (
    <footer id={id} className="mt-20 border-t py-10 border-neutral-700">
      {/* ================================
          COTIZACIONES DEL DÓLAR
        ================================= */}
      {!cargandoDolar && cotizaciones && (
        <div className="mb-10">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-xl font-bold text-center mb-6 text-gray-800">
              💰 Cotizaciones del Dólar
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Dólar Oficial */}
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-blue-700">Dólar Oficial</span>
                  <span className="text-sm text-gray-500">Banco Nación</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-sm text-gray-600">Compra</p>
                    <p className="text-2xl font-bold">
                      ${cotizaciones.oficial.compra?.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Venta</p>
                    <p className="text-2xl font-bold">
                      ${cotizaciones.oficial.venta?.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dólar Blue */}
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-purple-700">Dólar Blue</span>
                  <span className="text-sm text-gray-500">Informal</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-sm text-gray-600">Compra</p>
                    <p className="text-2xl font-bold">
                      ${cotizaciones.blue.compra?.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Venta</p>
                    <p className="text-2xl font-bold">
                      ${cotizaciones.blue.venta?.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Brecha */}
            {cotizaciones.oficial.venta && cotizaciones.blue.venta && (
              <div className="mt-4 text-center text-sm text-gray-600">
                Brecha:{" "}
                {(
                  (cotizaciones.blue.venta / cotizaciones.oficial.venta - 1) *
                  100
                ).toFixed(1)}
                %
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================================
          REDES SOCIALES
        ================================= */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h3 className="text-lg font-semibold text-neutral-300">
            Seguime en mis redes
          </h3>

          <div>
            <img
              className="h-24 w-40 object-contain"
              src={logoluisys}
              alt="Logo"
            />
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-neutral-700 my-8"></div>

        {/* ================================
            COPYRIGHT
          ================================= */}
        <div className="text-center text-neutral-400">
          <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
          <p className="mt-2">
            Diseñado por{" "}
            <a
              href="https://www.linkedin.com/in/luis-patty-mamani/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              Ing. Luis Patty Mamani
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

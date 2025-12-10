import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PresentationSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import AboutMeSection from "./components/AboutMeSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CartPage from "./components/CartPage";
import SorteoPage from "./components/SorteoPage";
import ComunidadPage from "./components/ComunidadPage";
import ImportacionPage from "./components/ImportacionPage";
import FAQ from "./components/Faq";
import { useEffect, useState } from "react";

const AppContent = ({ cart, addToCart, removeFromCart }) => {
  const [cotizaciones, setCotizaciones] = useState({
    oficial: { compra: null, venta: null },
    blue: { compra: null, venta: null },
  });
  const [cargandoDolar, setCargandoDolar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchDolar = async () => {
      try {
        setCargandoDolar(true);

        // Usamos Promise.all para hacer ambas peticiones en paralelo
        const [resOficial, resBlue] = await Promise.all([
          fetch("https://dolarapi.com/v1/dolares/oficial"),
          fetch("https://dolarapi.com/v1/dolares/blue"),
        ]);

        const dataOficial = await resOficial.json();
        const dataBlue = await resBlue.json();

        setCotizaciones({
          oficial: {
            compra: dataOficial.compra,
            venta: dataOficial.venta,
          },
          blue: {
            compra: dataBlue.compra,
            venta: dataBlue.venta,
          },
        });
      } catch (error) {
        console.error("Error al obtener la cotización:", error);

        // Fallback con otra API si la primera falla
        try {
          const res = await fetch("https://api.bluelytics.com.ar/v2/latest");
          const data = await res.json();

          setCotizaciones({
            oficial: {
              compra: data.oficial.value_buy,
              venta: data.oficial.value_sell,
            },
            blue: {
              compra: data.blue.value_buy,
              venta: data.blue.value_sell,
            },
          });
        } catch (fallbackError) {
          console.error("Error en fallback:", fallbackError);
          // Valores por defecto actualizados (Nov 2024)
          setCotizaciones({
            oficial: {
              compra: 1050,
              venta: 1055,
            },
            blue: {
              compra: 1445,
              venta: 1455,
            },
          });
        }
      } finally {
        setCargandoDolar(false);
      }
    };

    fetchDolar();

    // Actualizar cada 10 minutos
    const interval = setInterval(fetchDolar, 10 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-0 px-0">
        <WhatsAppButton />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection
                  id="inicio"
                  cotizaciones={cotizaciones}
                  cargandoDolar={cargandoDolar}
                />
                <PresentationSection
                  id="presentation"
                  cart={cart}
                  addToCart={addToCart}
                  cotizaciones={cotizaciones}
                />
                <Workflow id="como-trabajamos" />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                removeFromCart={removeFromCart}
                cotizaciones={cotizaciones}
              />
            }
          />
          <Route path="/sorteo" element={<SorteoPage />} />
          <Route path="/comunidad" element={<ComunidadPage />} />
          <Route
            path="/importacion"
            element={
              <ImportacionPage
                cotizaciones={cotizaciones}
                cargandoDolar={cargandoDolar}
              />
            }
          />
        </Routes>
      </div>

      <Footer
        id="contacto"
        cotizaciones={cotizaciones}
        cargandoDolar={cargandoDolar}
      />
    </>
  );
};

export default AppContent;

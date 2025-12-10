/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import AboutMeSection from "./components/AboutMeSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CartPage from "./components/CartPage";
import ComunidadPage from "./components/ComunidadPage";
import FAQ from "./components/Faq";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const uniqueItem = { ...product, cartItemId: crypto.randomUUID() };
    setCart([...cart, uniqueItem]);
  };

  const removeFromCart = (cartItemId) => {
    setCart(cart.filter((item) => item.cartItemId !== cartItemId));
  };

  return (
    <Router basename="/LucfraIng">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-0 px-0">
        <WhatsAppButton />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection id="inicio" />
                <ProductSection
                  id="servicios"
                  cart={cart}
                  addToCart={addToCart}
                />
                <Workflow id="como-trabajamos" />
                <FAQ id="preguntasfreceuntes" />
                <AboutMeSection id="sobre-mi" />
              </>
            }
          />

          <Route
            path="/cart"
            element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route path="/comunidad" element={<ComunidadPage />} />
        </Routes>

        <Footer id="contacto" />
      </div>
    </Router>
  );
};

export default App;
 */

import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import AppContent from "./AppContent"; // nuevo archivo
import BotpressChat from "./components/BotpressChat"; // importa el nuevo componente
import RespondioChat from "./components/RespondioChat";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const uniqueItem = { ...product, cartItemId: crypto.randomUUID() };
    setCart([...cart, uniqueItem]);
  };

  const removeFromCart = (cartItemId) => {
    setCart((cart) => cart.filter((item) => item.cartItemId !== cartItemId));
  };

  return (
    <Router basename="/Ingeniero_emprendedor_Torneo_Futbol">
      <AppContent
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </Router>
  );
};

export default App;

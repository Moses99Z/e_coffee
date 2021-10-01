import { useEffect, useRef } from "react";
import { useState } from "react/cjs/react.development";
import "./App.css";
import LoginModal from "./components/LoginModal";
import NavBar from "./components/NavBar";
import RegisterModal from "./components/RegisterModal";
import HomePage from "./pages/HomePage";
import OrdersPage from "./pages/OrdersPage";
import ProductsPage from "./pages/ProductsPage";
import SupportPage from "./pages/SupportPage";

function App() {
  let [selectedIndex, setSelectedIndex] = useState(0);
  let [showLogin, setShowLogin] = useState(false);
  let [showRegister, setShowRegister] = useState(false);
  let [connectedError, setConnectedError] = useState(false);

  let pages = [
    <HomePage setIndex={setSelectedIndex} />,
    <ProductsPage setConnectedError={setConnectedError} />,
    <SupportPage />,
    <OrdersPage />,
  ];
  const ref = useRef();
  const refr = useRef();

  const setIndex = (index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (showLogin && ref.current && !ref.current.contains(e.target)) {
        setShowLogin(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showLogin]);

  return (
    <div>
      <NavBar
        index={selectedIndex}
        setIndex={setIndex}
        showLogin={setShowLogin}
        showRegister={setShowRegister}
        connectedError={connectedError}
      />
      {pages[selectedIndex]}
      <LoginModal reff={ref} show={showLogin} setShow={setShowLogin} />
      <RegisterModal
        reff={refr}
        show={showRegister}
        setShow={setShowRegister}
      />
    </div>
  );
}

export default App;

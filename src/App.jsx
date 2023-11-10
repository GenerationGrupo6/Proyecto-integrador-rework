import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Component/NavBar/NavBar";
import { Inicio } from "./Pages/Inicio/Inicio";
import { Nosotros } from "./Pages/Nosotros/Nosotros";
import { Contactanos } from "./Pages/Contactanos/Contactanos";
import { Login } from "./Pages/Login/Login";
import { UneteAlCambio } from "./Pages/UneteAlCambio/UneteAlCambio";
import { Historias } from "./Pages/Historias/Historias";
import { Registro } from "./Pages/Registro/Registro";
import { MapaInteractivo2 } from "./Pages/MapaInteractivo2/MapaInteractivo2";

function App() {
  const location = window.location.pathname;
  const HideNavBar =
    location === "/Login" || location === "/Registro" ? null : <NavBar />;

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/Registro" element={<Registro />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/unete-al-cambio" element={<UneteAlCambio />} />
        <Route path="/Historias" element={<Historias />} />
        <Route path="/MapaInteractivo2" element={<MapaInteractivo2 />} />
      </Routes>
      <main></main>
    </BrowserRouter>
  );
}

export default App;

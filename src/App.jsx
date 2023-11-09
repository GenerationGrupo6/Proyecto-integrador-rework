import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./Component/NavBar/NavBar";
import { Inicio } from "./Pages/Inicio/Inicio";
import { Nosotros } from "./Pages/Nosotros/Nosotros";
import { NuestrasHistorias } from "./Pages/NuestrasHistorias/NuestrasHistorias";
import { Contactanos } from "./Pages/Contactanos/Contactanos";
import { Login } from "./Pages/Login/Login";
import { UneteAlCambio } from "./Pages/UneteAlCambio/UneteAlCambio";
import { Historias } from "./Pages/Historias/Historias";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/nuestras-historias" element={<NuestrasHistorias />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/unete-al-cambio" element={<UneteAlCambio />} />
        <Route path="/Historias" element={<Historias />} />
      </Routes>
      <main></main>
    </BrowserRouter>
  );
}

export default App;

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
import { Register } from "./Pages/register/register";
import { MapaInteractivo2 } from "./Pages/MapaInteractivo2/MapaInteractivo2";
import { AuthProvider } from "./context/AuthContext";
import { Perfil } from "./Pages/paginaPerfil/Perfil";
import ProtectedRoute from "./Pages/protected/ProtectedRoute";

function App() {
  const location = window.location.pathname;
  const HideNavBar =
    location === "/Login" || location === "/register" ? null : <NavBar />;

  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/unete-al-cambio" element={<UneteAlCambio />} />
          <Route path="/Historias" element={<Historias />} />
          <Route path="/MapaInteractivo2" element={<MapaInteractivo2 />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Perfil />} />
          </Route>
        </Routes>

        <main></main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

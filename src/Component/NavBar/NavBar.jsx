import React, { useState } from "react";
import logo from "../../assets/Logo-sin-fondo.png";
import "./NavBar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  if (location.pathname === "/Login") return null;
  if (location.pathname === "/register") return null;

  window.addEventListener("scroll", () => {
    const scrollCheck = document.querySelector(".NavConfig");
    if (!scrollCheck) return;
    if (window.scrollY > 0) {
      scrollCheck.classList.add("onScroll");
    } else {
      scrollCheck.classList.remove("onScroll");
    }
  });

  const { isAuthenticated } = useAuth();

  return (
    <nav className="NavConfig">
      <div
        className="Menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="navBar" id={menuOpen ? "open" : ""}>
        <img id="LogoNavMobile" src={logo} alt="LogoCanastasDeVida" />
        <li className="LinkTittle">
          {" "}
          <NavLink to="/">INICIO</NavLink>
        </li>
        <li className="LinkTittle">
          {" "}
          <NavLink to="/nosotros">NOSOTROS</NavLink>
        </li>
        <li className="LinkTittle">
          {" "}
          <NavLink to="/Historias">NUESTRAS HISTORIAS</NavLink>
        </li>
        <Link to="/">
          <img id="LogoNav" src={logo} alt="LogoCanastasDeVida" />
        </Link>
        <li className="LinkTittle">
          {" "}
          <NavLink to="/contactanos">CONTACTANOS</NavLink>
        </li>
        {isAuthenticated ? (
          <li className="LinkTittle"> Welcome user</li>
        ) : (
          <li className="LinkTittle"> Logout</li>
        )}
        <li className="LinkTittle">
          {" "}
          <NavLink to="/unete-al-cambio">UNETE AL CAMBIO</NavLink>
        </li>
      </ul>
      
    </nav>
  );
};

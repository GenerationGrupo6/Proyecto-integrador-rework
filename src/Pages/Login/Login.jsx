import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo-sin-fondo.png";
import { LoginComponent } from "../../Component/Loginc/LoginComponent";

const Login = () => {
  return (
    <>
      <Link to="/">
        <img id="LogoNav" src={logo} alt="LogoCanastasDeVida" />
      </Link>
      <LoginComponent />
    </>
  );
};

export { Login };

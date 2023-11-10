import React from "react";
import "./LoginComponent.css";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo-sin-fondo.png";

function LoginComponent() {
  return (
    <>
      <div className="container-login-all">
        <section className="login-container-left">
          <Link to="/">
            <img id="LogoNav" src={logo} alt="LogoCanastasDeVida" />
          </Link>
          <div className="article-container-left">
            <p className="article-login-p">
              ¡Te damos la bienvenida a Canastas de Vida!
            </p>
            <h1 className="article-login-h1">Crear una cuenta</h1>
          </div>
        </section>
        <section className="login-container-right">
          <header className="login-register">
            <p>
              ¿No tienes cuenta?{" "}
              <Link to="/Registro">
                <span>Regístrate</span>
              </Link>
            </p>
          </header>
          <div className="login-Datos-right">Datos de tu Cuenta</div>

          <div className="inputs">
            <div className="input">
              <img src={email_icon} alt="Ingrese Correo" />
              <input type="email" placeholder="Direccion de Email" />
            </div>

            <div className="input">
              <img src={password_icon} alt="Ingrese contraseña" />
              <input type="password" placeholder="Contraseña" />
            </div>
          </div>
          <div className="forgot-password">
            <span>¿Olvidaste tu contraseña?</span>
          </div>
          <div className="submit-container">
            <button className="registrarse-login-button">Iniciar Sesion</button>
          </div>
        </section>
      </div>
    </>
  );
}

export { LoginComponent };

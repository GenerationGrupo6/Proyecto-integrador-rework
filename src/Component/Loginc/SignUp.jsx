import React from "react";
import "./LoginComponent.css";
import user_icon from "../../assets/person.png";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo-sin-fondo.png";

function SignUp() {
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
          <header>
            <p>
              ¿Ya tienes una cuenta?{" "}
              <Link to="/Login">
                <span>Inicia sesion</span>
              </Link>
            </p>
          </header>
          <div className="login-Datos-right">Datos de tu Cuenta</div>

          <div className="inputs">
            <div className="input input-nombre">
              <img src={user_icon} alt="Ingrese Nombre" />
              <input type="text" placeholder="Nombre" />
            </div>
            <div className="input input-apellido">
              <img src={user_icon} alt="Apellidos" />
              <input type="text" placeholder="Apellidos" />
            </div>

            <div className="input">
              <img src={email_icon} alt="Ingrese Correo" />
              <input type="email" placeholder="Direccion de Email" />
            </div>
            <div className="input">
              <img src={email_icon} alt="Ingrese Correo nuevamente" />
              <input type="email" placeholder="Confirma tu Email" />
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
            <button className="registrarse-login-button">Registrarse</button>
          </div>
        </section>
      </div>
    </>
  );
}

export { SignUp };

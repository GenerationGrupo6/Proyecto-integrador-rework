import React from "react";
import "./LoginComponent.css";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo-sin-fondo.png";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";

function LoginComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <>
      {/* {signinErrors.map((error, i) => (
        <div key={i}>{error}</div>
      ))} */}

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
              <Link to="/register">
                <span>Regístrate</span>
              </Link>
            </p>
          </header>
          {/* formulario */}
          {/* {signinErrors.map((error, i) => (
            <div key={i}>{error}</div>
          ))} */}
          <form onSubmit={onSubmit}>
            <div className="login-Datos-right">Datos de tu Cuenta</div>

            <div className="inputs">
              <div className="input">
                {/* correo  */}
                <img src={email_icon} alt="Ingrese Correo" />
                <input
                  type="email"
                  placeholder="Direccion de Email"
                  name="email"
                  autoComplete="given-name"
                  {...register("email", { required: true })}
                />
                {errors.email && <p className="errores">Email is required</p>}
              </div>

              <div className="input">
                {/* password */}
                <img src={password_icon} alt="Ingrese contraseña" />
                <input
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  autoComplete="given-password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="errores">Password is required</p>
                )}
              </div>
            </div>
            <div className="forgot-password">
              <span>¿Olvidaste tu contraseña?</span>
            </div>
            <div className="submit-container">
              <button className="registrarse-login-button" type="submit">
                Iniciar Sesion
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export { LoginComponent };

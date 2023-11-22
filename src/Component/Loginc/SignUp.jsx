import React, { useEffect } from "react";
import "./LoginComponent.css";
import user_icon from "../../assets/person.png";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo-sin-fondo.png";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/profile");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <>
      {/* {registerErrors.map((error, i) => (
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
          <header>
            <p>
              ¿Ya tienes una cuenta?{" "}
              <Link to="/Login">
                <span>Inicia sesion</span>
              </Link>
            </p>
          </header>

          {/* formulario de registro de usuario */}
          <form onSubmit={onSubmit}>
            <div className="login-Datos-right">Datos de tu Cuenta</div>

            <div className="inputs">
              <div className="input input-nombre">
                <img src={user_icon} alt="Ingrese Nombre" />
                {/* input de nombre */}
                <input
                  type="text"
                  placeholder="Nombre"
                  name="username"
                  autoComplete="given-name"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <p className="errores">Username is required</p>
                )}
              </div>
              <div className="input input-apellido">
                <img src={user_icon} alt="Apellidos" />
                {/* input de apellido */}

                <input
                  type="text"
                  placeholder="Apellidos"
                  autoComplete="given-lastname"
                />
              </div>

              <div className="input">
                <img src={email_icon} alt="Ingrese Correo" />
                {/* input de correo */}

                <input
                  type="email"
                  placeholder="Direccion de Email"
                  name="email"
                  autoComplete="given-email"
                  {...register("email", { required: true })}
                />
                {errors.email && <p className="errores">Email is required</p>}
              </div>
              <div className="input">
                <img src={password_icon} alt="Ingrese contraseña" />
                {/* input de contraseña */}

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
            <div className="submit-container">
              <button className="registrarse-login-button" type="submit">
                Registrarse
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export { SignUp };

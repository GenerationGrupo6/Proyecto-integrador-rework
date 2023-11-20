import React from "react";
import "./Mapa.css";
import Santiago from "../../assets/santiago-map.png";
import { Link } from "react-router-dom";

const Mapa = () => {
  return (
    <>
      <header className="container-map">
        <div className="content">
          <span className="blur"></span>
          <span className="blur"></span>
          <h1>Conoce nuestro mapa</h1>
          <h4>Donde puedes ayudar</h4>
          <p>
          Descubre nuestro mapa interactivo que muestra todas las comunas de la Región Metropolitana junto con su índice de prioridad social. Esta herramienta visual ofrece una comprensión rápida de las necesidades específicas de cada comunidad, permitiéndonos dirigir nuestros esfuerzos de manera estratégica para maximizar el impacto positivo en las áreas más vulnerables.
          </p>
          <Link to="/MapaInteractivo2">
            <button className="btn">Ver más</button>
          </Link>
        </div>
        <div className="image">
          <img className="santiago-map" src={Santiago} alt="" />
        </div>
      </header>
      <section className="container-msn">
        <h4>Nuestra Misión</h4>
        <h2 className="header">CANASTAS DE VIDA NACE PARA AYUDAR</h2>
        <p>
        La misión de Canastas de Vida es aliviar las carencias alimentarias y promover el bienestar en comunidades vulnerables. Nos comprometemos a proporcionar canastas de alimentos esenciales con un enfoque centrado en la dignidad humana. A través de la solidaridad y la generosidad de donantes, buscamos construir puentes de apoyo que fortalezcan los lazos comunitarios y generen un impacto positivo y duradero en la vida de aquellos que enfrentan dificultades. Nuestra labor se orienta hacia la creación de un cambio tangible y sostenible, donde cada canasta entregada represente un rayo de esperanza y un paso hacia la construcción de un futuro más próspero para todos.
        </p>
      </section>
    </>
  );
};

export { Mapa };

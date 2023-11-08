import React from "react";
import { Cards } from "../Cards/Cards";
import "./SectionCards.css";
import Historia1 from "../../assets/Historia1.jpg";
import Historia4 from "../../assets/Historia4.jpg";
import Historia3 from "../../assets/Historia3.jpg";
import { Link } from "react-router-dom";

function SectionCards(props) {
  return (
    <>
      <section className="Section-home3">
        <ol>
          <li>
            <h2>Inicia Sesión</h2>
            <p>Regístrate de forma segura en nuestra plataforma.</p>
          </li>
          <li>
            <h2>Es Momento de Donar</h2>
            <p>Establece el monto que quieres donar</p>
          </li>
          <li>
            <h2>Mide el Impacto</h2>
            <p>Visualiza cómo será ocupada tu donación</p>
          </li>
        </ol>
      </section>
      <header className="header-section-cards">
        <h2 className="header-cards-h2">{props.header}</h2>
      </header>

      <section className="Cards-section">
        <Link to="/Historias" className="text-link">
          <Cards img={Historia1} />
          <Cards img={Historia3} />
          <Cards img={Historia4} />
          <Cards img={Historia4} />
        </Link>
      </section>
    </>
  );
}

export { SectionCards };

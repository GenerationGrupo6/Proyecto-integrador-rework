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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            incidunt consectetur saepe labore quam nam repudiandae autem itaque
            corporis adipisci voluptate deleniti omnis rerum, facilis temporibus
            dolorem quod. Corporis, consequuntur.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque
          facere vitae dicta, illo quam ullam maiores impedit, dolores
          praesentium nemo voluptatibus eum quisquam voluptatem doloribus iusto,
          consequatur dignissimos. Nihil! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Exercitationem, quisquam ex quidem nemo quis tempora
          repellendus nam sit iste laboriosam deserunt, veniam suscipit
          voluptatibus consequatur nihil beatae? Quam, iure provident.
        </p>
      </section>
    </>
  );
};

export { Mapa };

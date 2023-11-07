import React from "react";
import "./Cards.css";

function Cards(props) {
  return (
    <>
      <section className="section-container-cards">
        <div className="cards-container">
          <div className="cards-img">
            <img
              src={props.img}
              className="img-historia1"
              alt="Imagen historia"
            />
          </div>
          <div className="Cards-text">
            <h2 className="Cards-h2">Titulo historia</h2>
            <p className="Cards-p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              laborum maiores ipsa quaerat inventore a magni sequi voluptas
              quibusdam o
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export { Cards };

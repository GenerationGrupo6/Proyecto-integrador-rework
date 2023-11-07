import React from "react";
import "./InformationCloud.css";

const InformationCloud = () => {
  return (
    <button className="Information-Button">
      <article className="Text-Information-Button">
        <p className="Text-one">
          <strong>300 +</strong>
          <br />
          Alianzas
        </p>
        <p className="Text-one">
          <strong>2K +</strong>
          <br />
          Donaciones
        </p>
        <p className="Text-one">
          <strong>150K +</strong>
          <br />
          Agentes de Cambio
        </p>
      </article>
    </button>
  );
};

export {InformationCloud};

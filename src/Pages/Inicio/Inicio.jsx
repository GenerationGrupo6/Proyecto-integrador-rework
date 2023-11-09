import React from "react";
import { SectionCards } from "../../Component/SectionCards/SectionCards.jsx";
import { Home } from "../../Component/Home/Home.jsx";

function Inicio() {
  return (
    <>
      <Home />
      <SectionCards header="Nuestras Historias" />
    </>
  );
}

export { Inicio };

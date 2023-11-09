import React from "react";
import { SectionCards } from "../../Component/SectionCards/SectionCards.jsx";
import { Home } from "../../Component/Home/Home.jsx";
import { Home2 } from "../../Component/Home/Home2.jsx";
import { Mapa } from "../../Component/Mapa/Mapa.jsx";

function Inicio() {
  return (
    <>
      <Home />
      <Home2 />
      {/* <Mapa /> */}
      <SectionCards header="Nuestras Historias" />
      <Mapa />
    </>
  );
}

export { Inicio };

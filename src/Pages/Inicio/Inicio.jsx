import React from "react";
import { SectionCards } from "../../Component/SectionCards/SectionCards.jsx";
import { Home } from "../../Component/Home/Home.jsx";
import { VenDonaciones } from "../../Component/VenDonaciones/VenDonaciones.jsx";

function Inicio() {
  return (
    <>
      <Home />
      <SectionCards header="Nuestras Historias" />
      <VenDonaciones/>
    </>
  );
}

export { Inicio };

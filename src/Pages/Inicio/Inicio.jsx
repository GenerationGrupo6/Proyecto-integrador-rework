import React from "react";
import { SectionCards } from "../../Component/SectionCards/SectionCards.jsx";
import { Home } from "../../Component/Home/Home.jsx";
import { Mapa } from "../../Component/Mapa/Mapa.jsx";
import { VenDonaciones } from "../../Component/VenDonaciones/VenDonaciones.jsx";
import { Subscription } from "../../Component/Subscription/subscription.jsx"

function Inicio() {
  return (
    <>
      <Home />
      <Mapa/>
      <SectionCards header="Nuestras Historias" />
      <VenDonaciones />
      <Subscription/>
    </>
  );
}

export { Inicio };

import React from "react";
import { HistoriasComponent } from "../../Component/Historias/HistoriasComponent.jsx";
import { SectionCards } from "../../Component/SectionCards/SectionCards.jsx";

function Historias() {
  return (
    <>
      <HistoriasComponent />
      <SectionCards header="Historias Relacionadas" />
    </>
  );
}

export { Historias };

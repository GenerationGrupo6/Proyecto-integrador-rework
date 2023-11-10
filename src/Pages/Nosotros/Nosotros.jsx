import "./Nosotros.css";
import React from "react";
import OurTeam from "../../assets/OurTeam.jpg";
import { TeamMembers } from "../../Component/TeamMembers/TeamMembers";
import NosotrosLunapaz from "../../assets/NosotrosLunapaz.jpg";
import NosotrosFelipe from "../../assets/NosotrosFelipe.png";
import NosotrosDavid from "../../assets/NosotrosDavid.jpeg";
import NosotrosGonzalo from "../../assets/NosotrosGonzalo.png";
import NosotrosMoira from "../../assets/NosotrosMoira.png";
/*import foodDonation from "../../assets/foodDonation"*/
import { WhyUs } from "../../Component/WhyUs/WhyUs";

function Nosotros() {
  return (
    <main className="Father-Container-About-Us-Page">
      <section className="First-Section-About-Us-Page">
        <h1 className="H1-First-Section-About-Us-Page">Canastas de Vida</h1>
        <h3 className="H3-First-Section-About-Us-Page">
          Uniendo corazones para un cambio real
        </h3>
      </section>
      <section className="Second-Section-Image-About-Us-Page">
        <img src={OurTeam} className="Image-About-Us-Page" />
      </section>
      <section className="Third-Section-About-Us-Page">
        <p className="Text-Third-Container-About-Us-Page">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          consequatur eaque deleniti eum iure autem incidunt molestias magnam
          suscipit possimus recusandae laborum illum ducimus dolores facilis,
          aliquid perspiciatis omnis atque. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolorem consequatur eaque deleniti eum
          iure autem incidunt molestias magnam suscipit possimus recusandae
          laborum illum ducimus dolores facilis, aliquid perspiciatis omnis
          atque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          consequatur eaque deleniti eum iure autem incidunt molestias magnam
          suscipit possimus recusandae laborum illum ducimus dolores facilis,
          aliquid perspiciatis omnis atque.
        </p>
      </section>
      <section className="Fourth-Section-About-Us-Page">
        <article className="Article-Fourth-Section-About-Us-Page">
          <h1 className="H1-Fourth-Section-About-Us-Page">
            Somos quienes soñaron con el cambio
          </h1>
        </article>
      </section>
      <section className="Why-Canastas-De-Vida-Section-About-Us-Page">
        <h1 className=""></h1>
      </section>
      <section className="Fifth-Section-About-Us-Page">
        <TeamMembers image={NosotrosFelipe} name="Felipe Frias" age="27 años" />
        <TeamMembers
          image={NosotrosLunapaz}
          name="Lunapaz Gamero"
          age="27 años"
        />
        <TeamMembers image={NosotrosMoira} name="Moira Muñoz" age="27 años" />
        <TeamMembers
          image={NosotrosGonzalo}
          name="Gonzalo Quiroz"
          age="25 años"
        />
        <TeamMembers
          image={NosotrosDavid}
          name="David Vicencio"
          age="21 años"
        />
      </section>
      <section className="Why-Canastas-De-Vida-Section-About-Us-Page">
        <article className="Article-Why-Canastas-De-Vida-Section-About-Us-Page">
          <h1 className="">¿Por Qué Canastas de Vida?</h1>
        </article>
        <WhyUs/>

      </section>
      <section className="Be-Volunteer-Section-About-Us-Page"></section>
    </main>
  );
}
export { Nosotros };

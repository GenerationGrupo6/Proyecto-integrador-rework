import "./Nosotros.css";
import React from "react";
import OurTeam from "../../assets/OurTeam.jpg";
import { TeamMembers } from "../../Component/TeamMembers/TeamMembers";
import NosotrosLunapaz from "../../assets/NosotrosLunapaz.jpg";
import NosotrosFelipe from "../../assets/NosotrosFelipe.png";
import NosotrosDavid from "../../assets/NosotrosDavid.jpeg";
import NosotrosGonzalo from "../../assets/NosotrosGonzalo.png";
import NosotrosMoira from "../../assets/NosotrosMoira.png";
import TeamWork from "../../assets/TeamWork.jpg";
import { WhyUs } from "../../Component/WhyUs/WhyUs";
import { VolunteerForm } from "../../Component/VolunteerForm/VolunteerForm";

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
      <section className="Why-Canastas-De-Vida-Section-About-Us-Page">
        <article className="Article-Why-Canastas-De-Vida-Section-About-Us-Page">
          <h1 className="H1-Why-Canastas-De-Vida-Section-About-Us-Page">
            ¿Por Qué Canastas de Vida?
          </h1>
        </article>
        <WhyUs
          image={TeamWork}
          title="Impacto Directo en Comunidades Vulnerables"
          reason="Cada donación que recibimos se traduce en un impacto directo en las comunidades más vulnerables de Santiago. A través de nuestras iniciativas, llevamos alimentos esenciales a hogares que lo necesitan desesperadamente, construyendo puentes de solidaridad y esperanza."
        />
        <WhyUs
          image={TeamWork}
          title="Transparencia y Responsabilidad"
          reason="Valoramos tu confianza y creemos en la transparencia total. Cada donación se gestiona con responsabilidad, y te mantenemos informado sobre cómo tus contribuciones están marcando la diferencia. Nos esforzamos por construir una relación basada en la honestidad y la responsabilidad."
        />
        <WhyUs
          image={TeamWork}
          title="Historias de Transformación y Esperanza"
          reason="Detrás de cada canasta hay una historia de transformación y esperanza. Compartimos historias conmovedoras de aquellos cuyas vidas han cambiado gracias a tu generosidad. Cada donación no solo alimenta cuerpos, sino que también nutre almas y construye un tejido de esperanza en nuestra comunidad."
        />
        <WhyUs
          image={TeamWork}
          title="Compromiso con el Cambio Social Sostenible"
          reason="En Canastas de Vida, no solo proporcionamos ayuda inmediata; también nos comprometemos con el cambio social sostenible. Apoyamos proyectos a largo plazo que fortalecen a las comunidades, fomentan el desarrollo y construyen un futuro más equitativo."
        />
      </section>
      <section className="Fourth-Section-About-Us-Page">
        <article className="Article-Fourth-Section-About-Us-Page">
          <h1 className="H1-Fourth-Section-About-Us-Page">
            Somos quienes soñaron con el cambio
          </h1>
        </article>
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
      <section className="Be-Volunteer-Section-About-Us-Page">
        <article className="Article-Be-Volunteer-Section-About-Us-Page">
          <h4>¿Te gustaría ayudar directamente?</h4>
          <h1>Sé Voluntario</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            magnam ullam suscipit consequuntur? Quasi repellat accusamus maxime
            distinctio assumenda exercitationem obcaecati itaque quibusdam,
            optio eveniet ab sint fugit odio perspiciatis!
          </p>
        </article>
        <article className="Form-Article-Be-Volunteer-Section-About-Us-Page">
          <h1 className="H1-Volunteer-Form-About-Us-Page">
            Formulario Solicitud Voluntariado
          </h1>
          <h6
            className="H6-Volunteer-Form-About-Us-Page"
            style={{ color: "red" }}
          >
            Sólo para Región Metropolitana
          </h6>
          <VolunteerForm />
        </article>
      </section>
    </main>
  );
}
export { Nosotros };

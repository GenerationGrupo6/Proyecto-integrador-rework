import "./Nosotros.css";
import React from "react";
import OurTeam from "../../assets/OurTeam.jpg";
import { TeamMembers } from "../../Component/TeamMembers/TeamMembers";
import NosotrosLunapaz from "../../assets/NosotrosLunapaz.jpg";
import NosotrosFelipe from "../../assets/NosotrosFelipe.png";
import NosotrosDavid from "../../assets/NosotrosDavid.jpeg";
import NosotrosGonzalo from "../../assets/NosotrosGonzalo.png";
import NosotrosMoira from "../../assets/NosotrosMoira.png";
import ollacomun from "../../assets/ollacomun.webp";
import transparencia from "../../assets/transparencia.webp";
import historiasesperanza from "../../assets/historiasesperanza.webp";
import compromisosocial from "../../assets/compromisosocial.webp";
import cooperacion1 from "../../assets/cooperacion1.webp";
import cooperacion2 from "../../assets/cooperacion2.webp";
import cooperacion3 from "../../assets/cooperacion3.webp";
import { WhyUs } from "../../Component/WhyUs/WhyUs";
import { VolunteerForm } from "../../Component/VolunteerForm/VolunteerForm";
import { InformationCloud } from "../../Component/InformationCloud/InformationCloud";

function Nosotros() {
  return (
    <main className="Father-Container-About-Us-Page">
      <section className="First-Section-About-Us-Page">
        <h1 className="H1-First-Section-About-Us-Page">Canastas de Vida</h1>
        <h3 className="H3-First-Section-About-Us-Page">
          por Proyecto SaciArte
        </h3>
      </section>
      <section className="Second-Section-Image-About-Us-Page">
        <img src={cooperacion1} className="Image-About-Us-Page" />
      </section>
      <section className="Third-Section-About-Us-Page">
        <p className="Text-Third-Container-About-Us-Page">
          Bienvenidos a Canastas de Vida, una iniciativa nacida del compromiso y
          la dedicación del equipo detrás de Proyecto Saciarte. Nos esforzamos
          por construir puentes de esperanza y apoyo buscando generar un impacto
          directo en las comunas donde la necesidad es más apremiante.
          <br /> Proyecto Saciarte, con su visión clara y su compromiso
          incansable, ha dado vida a esta iniciativa que busca marcar la
          diferencia. Nuestra misión es simple pero poderosa: recaudar
          donaciones monetarias y transformarlas en canastas de alimentos
          básicos para distribuirlas en las comunas más vulnerables de Santiago.
          <br />
          Únete a nosotros en esta travesía de generosidad y esperanza. Juntos,
          podemos construir un camino hacia un presente y un futuro mejores para
          quienes más lo necesitan.
        </p>
      </section>
      <section className="Why-Canastas-De-Vida-Section-About-Us-Page">
        <article className="Article-Why-Canastas-De-Vida-Section-About-Us-Page">
          <h1 className="H1-Why-Canastas-De-Vida-Section-About-Us-Page">
            ¿Por Qué Canastas de Vida?
          </h1>
        </article>

        <div className="Div-Why-Us">
          <WhyUs
            image={ollacomun}
            title="Impacto Directo en Comunidades Vulnerables"
            reason="Cada donación que recibimos se traduce en un impacto directo en las comunidades más vulnerables de Santiago. A través de nuestras iniciativas, llevamos alimentos esenciales a hogares que lo necesitan desesperadamente, construyendo puentes de solidaridad y esperanza."
          />
          <WhyUs
            image={transparencia}
            title="Transparencia y Responsabilidad"
            reason="Valoramos tu confianza y creemos en la transparencia total. Cada donación se gestiona con responsabilidad, y te mantenemos informado sobre cómo tus contribuciones están marcando la diferencia. Nos esforzamos por construir una relación basada en la honestidad y la responsabilidad."
          />
          <WhyUs
            image={historiasesperanza}
            title="Historias de Transformación y Esperanza"
            reason="Detrás de cada canasta hay una historia de transformación y esperanza. Compartimos historias conmovedoras de aquellos cuyas vidas han cambiado gracias a tu generosidad. Cada donación no solo alimenta cuerpos, sino que también nutre almas y construye un tejido de esperanza en nuestra comunidad."
          />
          <WhyUs
            image={compromisosocial}
            title="Compromiso con el Cambio Social Sostenible"
            reason="En Canastas de Vida, no solo proporcionamos ayuda inmediata; también nos comprometemos con el cambio social sostenible. Apoyamos proyectos a largo plazo que fortalecen a las comunidades, fomentan el desarrollo y construyen un futuro más equitativo."
          />
        </div>
        <div className="Information-Cloud">
          <InformationCloud />
        </div>
      </section>
      <section className="Fourth-Section-About-Us-Page">
        <article className="Article-Fourth-Section-About-Us-Page">
          <h1 className="H1-Fourth-Section-About-Us-Page">
            Somos Proyecto Saciarte
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
          <p className="texto-volunteer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            magnam ullam suscipit consequuntur? Quasi repellat accusamus maxime
            distinctio assumenda exercitationem obcaecati itaque quibusdam,
            optio eveniet ab sint fugit odio perspiciatis!
          </p>
        </article>
        <article className="Form-Article-Be-Volunteer-Section-About-Us-Page">
          <div className="Div-Form-Article-Be-Volunteer-Section-About-Us-Page">
            <h1 className="H1-Volunteer-Form-About-Us-Page">
              Formulario Solicitud Voluntariado
            </h1>
            <h6 className="H6-Volunteer-Form-About-Us-Page">
              Sólo para Región Metropolitana
            </h6>
          </div>
          <div id="volunteerform" className="Div-VolunteerForm">
            <VolunteerForm />
          </div>
        </article>
      </section>
    </main>
  );
}
export { Nosotros };

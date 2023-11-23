import "./Home.css";
import { DonationButton } from "../DonationButton/DonationButton.jsx";
import charity from "../../assets/charity.jpg";
import donatepls from "../../assets/donatepls.png";
import CerdoDonacion from "../../assets/CerdoDonacion.png";
import { VolunteerButton } from "../VolunteerButton copy/VolunteerButton.jsx";

function Home() {
  return (
    <>
      <div className="First-Container-Home-Page">
        <main className="Body-Home-Page">
          <section className="Ilustration-Section-Home-Page">
            <header className="Header-Home-Page">
              <div className="Together-Home-Page">
                <div className="Donate-Home-Page">
                  <h1 className="H1-Donate-Home-Page">Haz tu aporte aquí</h1>
                </div>
                <div className="Button-Home-Page">
                  <DonationButton />
                </div>
              </div>
            </header>
          </section>
        </main>
      </div>
      <div className="Second-Container-Donation-Steps-Home-Page">
        <div className="div-donation-steps-father">
          <section className="Donation-Steps-Section1-Home-Page">
            <div className="Donation-Steps-Header-Home-Page">
              <h1 className="Donation-Steps-P-Home-Page">
                Con Canastas De Vida
                <br className="Donation-Steps-H1-Home-Page" />
                Juntos Hacemos el Cambio
              </h1>
            </div>
            <div className="Donation-Steps-Figure-Money-Donation-Home-Page">
              <img src={donatepls} className="Figure-Money-Donation" />
            </div>
          </section>
          <div className="Third-Container-Donation-Steps-Home-Page">
            <ol>
              <li>
                <h2>Inicia Sesión</h2>
                <p>Regístrate de forma segura en nuestra plataforma.</p>
              </li>
              <li>
                <h2>Es Momento de Donar</h2>
                <p>Establece el monto que quieres donar</p>
              </li>
              <li>
                <h2>Mide el Impacto</h2>
                <p>Visualiza cómo será ocupada tu donación</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="Div-Voluntariado">
        <section className="Infortation-Cloud-Section-Home-Page">
          <div className="Div-Infortation-Cloud-Section-Home-Page">
            <h1 className="H1-Infortation-Cloud-Section-Home-Page">
              ¿Deseas contribuir de otra manera?
            </h1>
            <h1 className="H1-2-Infortation-Cloud-Section-Home-Page">
              Sé Voluntario
            </h1>
          </div>
          <div className="Div2-Infortation-Cloud-Section-Home-Page">
            <VolunteerButton />
          </div>
        </section>
      </div>
    </>
  );
}

export { Home };

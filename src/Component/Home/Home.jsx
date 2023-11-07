import "./Home.css";
import { DonationButton } from "../DonationButton/DonationButton.jsx";
import { InformationCloud } from "../InformationCloud/InformationCloud.jsx";

function Home() {
  return (
    <div className="First-Container-Home-Page">
      <main className="Body-Home-Page">
        <section className="Ilustration-Section-Home-Page">
          <figure className="Full-Ilustation-Home-Page">
            <header className="Header-Home-Page">
              <h3 className="We-Feed-The-Change"> ALIMENTEMOS EL CAMBIO</h3>
              <h2 className="Together">¡JUNTOS!</h2>
            </header>
            <DonationButton />
          </figure>
        </section>
        <section className="Infortation-Cloud-Section-Home-Page">
          <InformationCloud />
        </section>
        <section className="Steps-Donation-Section-Home-Page">
          <article className="Steps-Donation-Fist-Division-Home-Page">
            <header className="HeadersSpace-Steps-Donation-Home-Page">
              <p className="Follow-Instructions-Donation-Home-Page">
                Con Canastas De Vida
              </p>
              <h1 className="Title-Steps-Donation-Home-Page">
                Donar Nunca Fue Tan Fácil
              </h1>
            </header>
            <figure className="Money-Image-Steps-Donation-Home-Page"></figure>
          </article>
          <article className="Steps-Donation-Second-Division-Home-Page">
            <ol className="Steps-Donation-List-Home-Page">
              <li className="Steps-Donation-FirstStep-Home-Page">
                <div className="Steps-Donation-FirstStep-Number-Home-Page"></div>
                <div className="Steps-Donation-FirstStep-Text-Space-Home-Page">
                  <h2 className="Steps-Donation-FirstStep-Title-Home-Page">
                    Inicia Sesión{" "}
                  </h2>
                  <p className="Steps-Donation-FirstStep-Text-Home-Page">
                    Regístrate de forma segura en nuesta plataforma.
                  </p>
                </div>
              </li>
              <li className="Steps-Donation-SecondStep-Home-Page">
                <div className="Steps-DOnation-SecondStep-Number-Home-Page"></div>
                <div className="Steps-Donation-SecondStep-Text-Space-Home-Page">
                  <h2 className="Steps-Donation-SecondStep-Title-Home-Page">
                    Es Momento de Donar
                  </h2>
                  <p className="Steps-Donation-SecondStep-Text-Home-Page">
                    Establece el monto que quieres donar
                  </p>
                </div>
              </li>
              <li className="Steps-Donation-ThirdStep-Home-Page">
                <div className="Steps-DOnation-ThirdStep-Number-Home-Page"></div>
                <div className="Steps-Donation-ThirdStep-Text-Space-Home-Page">
                  <h2 className="Steps-Donation-ThirdStep-Title-Home-Page">
                    Mide el Impacto
                  </h2>
                  <p className="Steps-Donation-ThirdStep-Text-Home-Page">
                    Visualiza cómo será ocupada tu donación
                  </p>
                </div>
              </li>
            </ol>
          </article>
        </section>
      </main>
    </div>
  );
}

export {Home}
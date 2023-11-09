import "./Home.css";
import { DonationButton } from "../DonationButton/DonationButton.jsx";
import { InformationCloud } from "../InformationCloud/InformationCloud.jsx";
import MoneyDonation from "../../assets/Money-Donation.jpg";

function Home() {
  return (
    <>
      <div className="First-Container-Home-Page">
        <main className="Body-Home-Page">
          <section className="Ilustration-Section-Home-Page">
            <header className="Header-Home-Page">
              <div className="Together-Home-Page">
                <h3 className="We-Feed-The-Change">ALIMENTEMOS</h3>
                <h3 className="We-Feed-The-Change Space">EL</h3>
                <h3 className="We-Feed-The-Change ">CAMBIO</h3>
              </div>
              <h2 className="We-Feed-The-Change">¡JUNTOS!</h2>
              <DonationButton />
            </header>
          </section>
          <section className="Infortation-Cloud-Section-Home-Page">
            <InformationCloud />
          </section>
        </main>
      </div>
      <div className="Second-Container-Donation-Steps-Home-Page">
        <section className="Donation-Steps-Section1-Home-Page">
          <article className="Donation-Steps-Article-Home-Page">
            <header className="Donation-Steps-Header-Home-Page">
              <p className="Donation-Steps-P-Home-Page">Con Canastas De Vida</p>
              <h1 className="Donation-Steps-H1-Home-Page">
                Donar Nunca Fue Tan Fácil
              </h1>
              <div className="Donation-Steps-Figure-Money-Donation-Home-Page">
                <img src={MoneyDonation} className="Figure-Money-Donation" />
              </div>
            </header>
          </article>
        </section>
      </div>
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
    </>
  );
}

export { Home };

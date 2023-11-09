import "./Home.css";
import { DonationButton } from "../DonationButton/DonationButton.jsx";
import { InformationCloud } from "../InformationCloud/InformationCloud.jsx";
import Moneyimg from "../../assets/Money-Donation.jpg";

function Home() {
  return (
    <>
      <div className="First-Container-Home-Page">
        <main className="Body-Home-Page">
          <section className="Ilustration-Section-Home-Page">
            <header className="Header-Home-Page">
              <div className="together">
                <h3 className="We-Feed-The-Change">ALIMENTEMOS</h3>
                <h3 className="We-Feed-The-Change space">EL</h3>
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
      <div className="supremo">
        <section className="hero-section-viñetas">
          <article className="first-article-hero-section">
            <header className="header-hero-section-viñetas">
              <p className="header-p-hero">Con Canastas De Vida</p>
              <h1 className="header-h1-hero">Donar Nunca Fue Tan Fácil</h1>
              <div className="figure-money">
                <img src={Moneyimg} className="Money-Image" />
              </div>
            </header>
          </article>
        </section>
      </div>
      <section className="Section-home3">
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
      </section>
    </>
  );
}

export { Home };

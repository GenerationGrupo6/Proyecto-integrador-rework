import "./Home.css";
import { DonationButton } from "../DonationButton/DonationButton.jsx";
import { InformationCloud } from "../InformationCloud/InformationCloud.jsx";

function Home() {
  return (
    <div className="First-Container-Home-Page">
      <main className="Body-Home-Page">
        <section className="Ilustration-Section-Home-Page">
          <header className="Header-Home-Page">
            <h3 className="We-Feed-The-Change"> ALIMENTEMOS EL CAMBIO</h3>
            <h2 className="Together">¡JUNTOS!</h2>
            <DonationButton />
          </header>
        </section>
        <section className="Infortation-Cloud-Section-Home-Page">
          <InformationCloud />
        </section>
      </main>
    </div>
  );
}

export { Home };

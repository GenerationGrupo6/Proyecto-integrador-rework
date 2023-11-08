import "./Home.css";
import Moneyimg from "../../assets/Money-Donation.jpg";

export const Home2 = () => {
  return (
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
  );
};

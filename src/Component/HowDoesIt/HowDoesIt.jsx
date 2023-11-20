import React from "react";
import "./HowDoesIt.css";
import Bank from "../../assets/FoodBank.png";
import { DonationButton } from '../DonationButton/DonationButton'
import { Link } from "react-router-dom";

const Funciona = () => {
    
    return (
        <>
        <main className="container-how">
            <div className="content">
                <h1>Conoce cómo Canastas de vida entrega ayuda.</h1>
                <p>Canastas de Vida, una distinguida entidad sin ánimo de lucro, se distingue por su dedicación incansable hacia la comunidad, materializada a través de la entrega estratégica de canastas de alimentos. Esta noble iniciativa busca aliviar las presiones económicas y nutricionales que enfrentan sectores vulnerables. Cada acto de asistencia no solo proporciona suministros esenciales, sino que también encarna un gesto de solidaridad que reconoce la inherente dignidad de cada individuo. Mediante un enfoque meticuloso y una logística eficiente, Canastas de Vida se convierte en un puente tangible entre la generosidad de los donantes y las necesidades apremiantes de la comunidad, consolidando una red de apoyo que fortalece los vínculos sociales y subraya el impacto transformador de la colaboración solidaria.</p>
            </div>
            <div className="image-how">
            <img className="FoodBank" src={Bank} alt="" />
            </div>
        </main>
    <section className="container-how">
        <h2 className="txt-how">Juntos hacemos el cambio</h2>
        <p className="txt-how">Al contribuir con donaciones que nutren la esperanza y el bienestar en nuestra comunidad. Cada aporte financiero se traduce en canastas de alimentos que alivian las cargas de aquellos que más lo necesitan. La generosidad colectiva se convierte en el motor que impulsa un cambio tangible y duradero en la vida de quienes más lo necesitan.</p>
        <div className="btn-help"><DonationButton/></div>
    </section>
    <section className="container-how-to">
        <h2 className="txt-fade">Comprometidos en tu seguridad</h2>
        <p className="txt-fade">Implementamos rigurosas medidas de protección de datos para resguardar la privacidad de quienes aportan. Utilizamos tecnologías de encriptación avanzadas para garantizar la confidencialidad de la información personal. Nuestra dedicación a la seguridad informática es un pilar fundamental para construir confianza y proteger cada contribución con la máxima integridad.</p>
    </section>
    </>
    );
};

export { Funciona };
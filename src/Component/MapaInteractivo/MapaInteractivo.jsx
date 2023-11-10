import "./MapaInteractivo.css";
import Comunas from "../../assets/Comunas.svg";

const MapaInteractivo = () => {
  return (
    <div className="ContenedorGeneral">
      <img src={Comunas} alt="Mapa de comunas" className="Mapa" />
      <div className="ContCard">
        <div className="titulo">
          <h2>Nombre-Comuna</h2>
        </div>
        <div className="contenido">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis atque quaerat doloremque obcaecati facilis inventore
            ipsam praesentium sapiente architecto nam?
          </p>
        </div>
      </div>
    </div>
  );
};
export default MapaInteractivo;

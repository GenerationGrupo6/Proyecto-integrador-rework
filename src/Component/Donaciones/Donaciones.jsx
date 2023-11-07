import './Donaciones.css'
import { useState } from 'react';
import FDonacion from '../../assets/entrega-de-alimento.png'

const Donaciones = () => {
    const [donacionAnonima, setDonacionAnonima] = useState(false);
    const [nombreDonante, setNombreDonante] = useState('');
    const [montoDonacion, setMontoDonacion] = useState(3000);
    const [destinoDonacion, setDestinoDonacion] = useState('');
    const [donacionesRegistradas, setDonacionesRegistradas] = useState([]);
    
    const guardarDonacion = () => {
      const nuevaDonacion = {
        nombre: donacionAnonima ? "Anónimo" : nombreDonante,
        Anonima: donacionAnonima,
        monto: montoDonacion,
        destino: destinoDonacion
      };
      setDonacionesRegistradas([...donacionesRegistradas, nuevaDonacion]);
    
    };
    const destino = [
        'Cerrillos',
        'Cerro Navia',
        'Conchalí',
        'El Bosque',
        'Estación Central',
        'Huechuraba',
        'Independencia',
        'La Cisterna',
        'La Florida',
        'La Granja',
        'La Pintana',
        'La Reina',
        'Las Condes',
        'Lo Barnechea',
        'Lo Espejo',
        'Lo Prado',
        'Macul',
        'Maipú',
        'Ñuñoa',
        'Pedro Aguirre Cerda',
        'Peñalolén',
        'Providencia',
        'Pudahuel',
        'Puente Alto',
        'Quilicura',
        'Quinta Normal',
        'Recoleta',
        'Renca',
        'San Bernardo',
        'San Joaquín',
        'San Miguel',
        'San Ramón',
        'Vitacura'
      ];
    
  
    return (
     <div className="contenedorposicion" >
        <img id='fotoDonacion' src={FDonacion}/>
        <div className="contenedordonaciones">
            <form className="cajadedonaciones">
            <label className="donacionanonima" htmlFor="donacionAnonima">Para donar anonimamente pulse aqui.  <input className="nadiesabe" type="checkbox" id="donacionAnonima" checked={donacionAnonima} onChange={() => setDonacionAnonima(!donacionAnonima)}/><br /></label>
            <label className="nombredonante" htmlFor="nombreDonante">Nombre del Donante:</label>
            <input className="elplatuo" type="text" id="nombreDonante" value={nombreDonante} onChange={(e) => setNombreDonante(e.target.value)} required /><br />
            <label className="montodonacion" htmlFor="montoDonacion">Monto de la Donación:</label>
            <input className="laplata" type="number" id="montoDonacion" value={montoDonacion} onChange={(e) => setMontoDonacion(e.target.value)} min="3000" step="1000" required /><br />
            <label className="destinodonacion" htmlFor="destinoDonacion">Destino de la Donación:</label>
            <select className="desticomunas" id="destinoDonacion" value={destinoDonacion} onChange={(e) => setDestinoDonacion(e.target.value)}>
                {destino.map((destino, index) => (
                <option key={index} value={destino}>
                    {destino}
                </option>
                ))}
            </select><br />
            <button className="guardardonacion"  onClick={guardarDonacion} >Realizar Donación</button>
            </form>
         </div>
        </div>
    );
  };

export {Donaciones};
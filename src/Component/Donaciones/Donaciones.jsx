import './Donaciones.css'
import { useState } from 'react';
import FDonacion from '../../assets/entrega-de-alimento.png'
const Donaciones = () => {
    const [montoDonacion, setMontoDonacion] = useState('');
    const [destinoDonacion, setDestinoDonacion] = useState('cerrillos');
    const guardarDonacion = async (e) =>  {
      e.preventDefault()
      try {
        await fetch('http://localhost:8080/api/v1/donacion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ montoDonacion, destinoDonacion }),
        });
        console.log('Donación enviada con éxito');
      } catch (error) {
        console.error('Error al enviar la donación:', error);
      }
      window.location.reload();
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
      <div className="contenedorpadredetodo">
      <div className="contenedorposicion">
          <img id="fotoDonacion" src={FDonacion} />
        <div className="contenedordonaciones">
          <div className="cajadedonaciones">
            <label className="montodonacion" htmlFor="montoDonacion">
              Monto de la Donación:
            </label>
            <input
              className="donacioninput"
              type="number"
              id="montoDonacion"
              value={montoDonacion}
              onChange={(e) => setMontoDonacion(e.target.value)}
              min="3000"
              step="1000"
              placeholder='Ingresa un monto minimo de 3000'
              required
            />
            <br />
            <label className="destinodonacion" htmlFor="destinoDonacion">
              Destino de la Donación:
            </label>
            <select
              className="desticomunas"
              id="destinoDonacion"
              value={destinoDonacion}
              onChange={(e) => setDestinoDonacion(e.target.value)}
            >
              {destino.map((destino, index) => (
                <option key={index} value={destino}>
                  {destino}
                </option>
              ))}
            </select>
            <br />
            <button
              type="button"
              className="guardardonacion"
              onClick={guardarDonacion}>
              Realizar Donación
            </button>
          </div>
        </div>
      </div>
      </div>
    );
  };
export {Donaciones};
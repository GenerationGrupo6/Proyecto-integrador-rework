import { useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from "axios";

import FDonacion from '../../assets/entrega-de-alimento.png'
import './Donaciones.css'


const Donaciones = () => {
    const [preferenceId, setPreferenceId] = useState(null);
    const [montoDonacion, setMontoDonacion] = useState('3000');
    const [destinoDonacion, setDestinoDonacion] = useState('');

    initMercadoPago('TEST-12840695-a4b5-40ba-ab4f-bb1a4fe1c5e7');

    const createPreference = async () => {
      try {
          const response = await axios.post("http://localhost:8080/create_preference", {
              description: "Nueva donación",
              price: montoDonacion.monto,
              quantity: 1,
              // destiny: nuevaDonacion.destino,
              // currency_id: "CLP"
          });
  
          const { id } = response.data;
          return id;
          }catch (error) {
              console.log(error);
          }
      };
  
      const handleBuy = async () => {
          const id = await createPreference();
          if (id) {
              setPreferenceId(id);
          }
      };
  
      const handleClick = async (e) => {
          e.preventDefault();

          try {
          await guardarDonacion();
          handleBuy();
          } catch (error) {
            console.error('Error handling click;', error);
          }
        };
    
    const guardarDonacion = async () =>  {
      try {
        await fetch('http://localhost:8080/api/v1/donaciones', {
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
            <label className="montodonacion" htmlFor="montoDonacion">Monto de la Donación:</label>
            <input className="donacioninput" type="number" id="montoDonacion" value={montoDonacion} onChange={(e) => setMontoDonacion(e.target.value)} min="3000" step="1000" required /><br />
            <label className="destinodonacion" htmlFor="destinoDonacion">Destino de la Donación:</label>
            <select className="desticomunas" id="destinoDonacion" value={destinoDonacion} onChange={(e) => setDestinoDonacion(e.target.value)}>
                {destino.map((destino, index) => (
                <option key={index} value={destino}>
                    {destino}
                </option>
                ))}
            </select><br />
            <button type="button" className="guardardonacion" onClick={handleClick} >Realizar Donación</button>
            {preferenceId &&<Wallet initialization={{ preferenceId }} />}
            </form>
         </div>
        </div>
    );
  };

export {Donaciones};
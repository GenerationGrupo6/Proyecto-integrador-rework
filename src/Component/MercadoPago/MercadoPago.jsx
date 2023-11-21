import { useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from "axios";

const Product = () => {
const [preferenceId, setPreferenceId] = useState(null);

initMercadoPago('TEST-12840695-a4b5-40ba-ab4f-bb1a4fe1c5e7');

const createPreference = async () => {
    try {
        const response = await axios.post("http://localhost:8080/create_preference", {
            description: "nuevaDonacion.nombre",
            price: nuevaDonacion.monto,
            destiny: nuevaDonacion.destino,
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
};
    onClick={handleBuy}
    {preferenceId &&<Wallet initialization={{ preferenceId }} />}

export { Product };
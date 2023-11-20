import React from 'react'
import './VenDonaciones.css'
import FotoVen from '../../assets/donar_comida-removebg-preview.png'
import { DonationButton } from '../DonationButton/DonationButton'
import { HowBtn } from '../HowBtn/HowBtn'



function VenDonaciones() {
  return (
    <div className='contenedorpapa'>
        <img id='fotoVenDonaciones' src={FotoVen} className='FotoVen'/>
        <div className='contenedorcomofun'>
        <h2 className='comofunciona'>¿No sabes como donar ?<br/>no hay promblema aqui te enseñaremos a hacerlo.</h2>
        <HowBtn />
        </div>
        <div className='contenedorvendona'>
        <h2 className='venadonaciones'>Ven te invitamos a conocer nuestra pagina de donaciones.</h2>
        <DonationButton/>
        </div>
    </div>
  )
}

export {VenDonaciones};
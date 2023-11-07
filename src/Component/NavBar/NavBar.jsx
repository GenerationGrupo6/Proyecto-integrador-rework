import React from 'react'
import logo from '../../assets/Logo-sin-fondo.png'
import './NavBar.css'

export const NavBar = () => {

  return (
    <div>
        <ul className='navBar'>
            <li>INICIO</li>
            <li>NOSOTROS</li>
            <li>NUESTRAS HISTORIAS</li>
            <img id='LogoNav' src={logo} alt="LogoCanastasDeVida" />
            <li>CONTACTANOS</li>
            <li>LOGIN</li>
            <li>UNETE AL CAMBIO</li>
        </ul>
    </div>
  )
}

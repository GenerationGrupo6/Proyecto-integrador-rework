import React from 'react'
import './Contactanos.css'
import contact from '../../assets/contact.jpg'

export const Contactanos = () => {
  return (
    <>
        <div className="container">
        <div className="gradient-section">
            <div className="gradient"></div>
                <div className="gradient-container">
                <h1 className="heading">Bienvenido a Canastas de Vida</h1>
                <p className="parrafo">"Juntos hacemos el cambio"</p>
            </div>
        </div>
    
        <div className="formulario">
            <h2>Contactanos</h2>
            <p>Queremos saber de tí, Escríbenos para cualquier duda o consulta.</p>
            <form>
                <div className="form-contact">
                    <label htmlFor="to">Para:</label>
                    <input type="text" name="to" id="to"
                    required autoComplete="off" placeholder="Ejemplo@email.com"/>
                </div>
                <div className="form-contact">
                    <label htmlFor="subject">Asunto:</label>
                    <input text="text" name="subject" id="subject"
                    required autoComplete="off" placeholder="Motivo del mensaje"/>
                </div>
                <div className="form-contact">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea text="text" name="message" id="message"
                    required spellCheck="false" autoComplete="off" placeholder="Escribe aqui..."></textarea>
                </div>
                <div className="form-contact result-container">
                    <p className="result">Tu correo ha sido enviado.</p>
                    <button type="button" className="send-btn">Enviar mensaje</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

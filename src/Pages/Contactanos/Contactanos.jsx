import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contactanos.css'

emailjs.init('tDq_goSSt7SfrPeBt');



export const Contactanos = () => {
    const [result, setResult] = useState('');
  
    const sendEmail = (event) => {
      event.preventDefault();
  
      const to = document.getElementById("to").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;
  
      emailjs.send("service_jb4gd4s", "template_3x6b2f7", {
        to_email: to,
        subject: subject,
        message: message
      }).then(
        (response) => {
          setResult("Tu Mensaje ha sido enviado!");
        },
        (error) => {
          setResult("Ups, Tu mensaje no ha sido enviado");
          console.log(error);
        }
      );
    };
    
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
                    <label htmlFor="to">Email:</label>
                    <input type="text" name="to" id="to"
                    required autoComplete="off" placeholder="Ejemplo@email.com"/>
                </div>
                <div className="form-contact">
                    <label htmlFor="subject">Nombre:</label>
                    <input text="text" name="subject" id="subject"
                    required autoComplete="off" placeholder="Nombre Apellido"/>
                </div>
                <div className="form-contact">
                    <label htmlFor="message">Mensaje:</label>
                    <textarea text="text" name="message" id="message"
                    required spellCheck="false" autoComplete="off" placeholder="Escribe aqui..."></textarea>
                </div>
                <div className="form-contact result-container">
                    <p className="result">Tu correo ha sido enviado.</p>
                    <button type="button" className="send-btn" onClick={sendEmail}>Enviar mensaje</button>
                </div>
            </form>
            <div className="result">{result}</div>
        </div>
    </div>
    </>
  )
}


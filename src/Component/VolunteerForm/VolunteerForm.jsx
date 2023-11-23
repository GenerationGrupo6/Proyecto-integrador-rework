import React from "react";
import { useForm } from "react-hook-form";
import "./VolunteerForm.css";
import axios from "axios";

function VolunteerForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/volunteer-register",
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <form
      className="Form-Volunteer-About-Us-Page"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="div-entrada">
        <label>Nombre Completo</label>
        <input
          type="String"
          name="name"
          {...register("name", { required: true })}
        />
      </div>
      <div className="div-entrada">
        <label>Rut</label>
        <input
          type="text"
          name="rut" placeholder=" 19179239-2"
          {...register("rut", { required: true }, { unique: true })}
        />
      </div>
      <div className="div-entrada">
        <label>Edad</label>
        <input
          type="Number"
          name="age"
          {...register("age", { required: true })}
        />
      </div>
      <div className="div-entrada">
        <label>Email</label>
        <input placeholder="maria@gmail.com" type="String" name="email" {...register("email")} />
      </div>
      <div className="div-entrada">
        <label>Teléfono</label>
        <input type="Number" name="phone" {...register("phone")} />
      </div>
      <div className="div-entrada">
        <label>Ocupación</label>
        <select
          type="String"
          name="ocupation"
          {...register("ocupation", { required: true })}
        >
          <option value="">Seleccione su ocupación</option>
          <option value="Estudiante">Estudiante</option>
          <option value="Trabajador">Trabajador</option>
          <option value="Jubilado">Jubilado</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div className="div-entrada">
        <label>Comuna de Residencia</label>
        <select
          type="String"
          name="residence"
          {...register("residence", { required: true })}
        >
          <option value="">Seleccione una comuna</option>
          <option value="Santiago">Santiago</option>
          <option value="Providencia">Providencia</option>
          <option value="LasCondes">Las Condes</option>
          <option value="LaReina">La Reina</option>
          <option value="Ñuñoa">Ñuñoa</option>
          <option value="Macul">Macul</option>
          <option value="Peñalolen">Peñalolén</option>
          <option value="LaFlorida">La Florida</option>
          <option value="PuenteAlto">Puente Alto</option>
          <option value="Maipu">Maipú</option>
          <option value="Renca">Renca</option>
          <option value="Quilicura">Quilicura</option>
          <option value="Huechuraba">Huechuraba</option>
          <option value="Recoleta">Recoleta</option>
          <option value="Independencia">Independencia</option>
          <option value="Conchalí">Conchalí</option>
          <option value="Vitacura">Vitacura</option>
          <option value="LoBarnechea">Lo Barnechea</option>
          <option value="Peñaflor">Peñaflor</option>
          <option value="Pudahuel">Pudahuel</option>
          <option value="CerroNavia">Cerro Navia</option>
          <option value="QuintaNormal">Quinta Normal</option>
          <option value="LoPrado">Lo Prado</option>
          <option value="EstacionCentral">Estación Central</option>
          <option value="LoEspejo">Lo Espejo</option>
          <option value="PedroAguirre">Pedro Aguirre Cerda</option>
          <option value="SanMiguel">San Miguel</option>
          <option value="SanJoaquin">San Joaquín</option>
          <option value="LaGranja">La Granja</option>
          <option value="LaCisterna">La Cisterna</option>
          <option value="ElBosque">El Bosque</option>
          <option value="SanBernardo">San Bernardo</option>
          <option value="LaPintana">La Pintana</option>
          <option value="Colina">Colina</option>
        </select>
      </div>
      <div className="div-entrada">
        <label>¿Por qué quieres ser voluntario?</label>
        <textarea
          type="String"
          name="motivacion"
          {...register("motivation", { required: true })}
        ></textarea>
      </div>
      <div className="div-submit">
        <input type="submit" value="Enviar" />
      </div>
    </form>
  );
}

export { VolunteerForm };

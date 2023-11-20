import React from "react";
import { useForm } from "react-hook-form";

function VolunteerForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    
  };

  return (
    <form
      className="Form-Volunteer-About-Us-Page"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label>Nombre Completo</label>
        <input
          type="text"
          name="nombre"
          {...register("nombre", { required: true })}
        />
      </div>
      <div>
        <label>Rut</label>
        <input
          type="text"
          name="rut"
          {...register("rut", { required: true })}
        />
      </div>
      <div>
        <label>Edad</label>
        <input
          type="number"
          name="edad"
          {...register("edad", { required: true })}
        />
      </div>
      <div>
        <label>Número de Teléfono</label>
        <input type="tel" name="telefono" {...register("telefono")} />
      </div>
      <div>
        <label>Ocupación</label>
        <input type="text" name="ocupacion" {...register("ocupacion")} />
      </div>
      <div>
        <label>Subir CV</label>
        <input
          type="file"
          name="cv"
          accept=".pdf,.doc,.docx"
          {...register("cv")}
        />
      </div>
      <div>
        <label>Comuna de Residencia</label>
        <select name="comuna" {...register("comuna", { required: true })}>
          <option value="">Seleccione una comuna</option>
          <option value="Santiago">Santiago</option>
          <option value="Providencia">Providencia</option>
          <option value="LasCondes">Las Condes</option>
          <option value="LaReina">La Reina</option>
          <option value="{Ñuñoa">Ñuñoa</option>
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
      <div>
        <label>Explique por qué quiere ser voluntario</label>
        <textarea
          name="motivacion"
          {...register("motivacion", { required: true })}
        ></textarea>
      </div>
      <input type="submit" value="Enviar" />
    </form>
  );
}

export { VolunteerForm };

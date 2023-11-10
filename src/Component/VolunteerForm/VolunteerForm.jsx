import { useForm } from "react-hook-form";

function VolunteerForm = () => {

    const { register, handleSubmit } = useForm();

    return <div>
        <h1>Formulario Solicitud Voluntariado</h1>
        <h6 style={color="red"}>Sólo para Región Metropolitana</h6>
        <form>
            <div>
                <label>Nombre Completo</label>
                <input type="text" name=""></input>
            </div>
            <div>
                <label>Edad</label>
                <input type="text" name=""></input>
            </div>
            <div>
                <label>Rut</label>
                <input type="text" name=""></input>
            </div>
            <div>
                <label>Comuna de Residencia</label>
                <select>
                    <option value={Santiago}>Santiago</option>
                    <option value={Providencia}>Providencia</option>
                    <option value={LasCondes}>Las Condes</option>
                    <option value={LaReina}>La Reina</option>
                    <option value={Ñuñoa}>Ñuñoa</option>
                    <option value={Macul}>Macul</option>
                    <option value={Peñalolen}>Peñalolén</option>
                    <option value={LaFlorida}>La Florida</option>
                    <option value={PuenteAlto}>Puente Alto</option>
                    <option value={Maipu}>Maipú</option>
                    <option value={Renca}>Renca</option>
                    <option value={Quilicura}>Quilicura</option>
                    <option value={Huechuraba}>Huechuraba</option>
                    <option value={Recoleta}>Recoleta</option>
                    <option value={Independencia}>Independencia</option>
                    <option value={Conchalí}>Conchalí</option>
                    <option value={Vitacura}>Vitacura</option>
                    <option value={LoBarnechea}>Lo Barnechea</option>
                    <option value={Peñaflor}>Peñaflor</option>
                    <option value={Pudahuel}>Pudahuel</option>
                    <option value={CerroNavia}>Cerro Navia</option>
                    <option value={QuintaNormal}>Quinta Normal</option>
                    <option value={LoPrado}>Lo Prado</option>
                    <option value={EstacionCentral}>Estación Central</option>
                    <option value={LoEspejo}>Lo Espejo</option>
                    <option value={PedroAguirre}>Pedro Aguirre Cerda</option>
                    <option value={SanMiguel}>San Miguel</option>
                    <option value={SanJoaquin}>San Joaquín</option>
                    <option value={LaGranja}>La Granja</option>
                    <option value={LaCisterna}>La Cisterna</option>
                    <option value={ElBosque}>El Bosque</option>
                    <option value={SanBernardo}>San Bernardo</option>
                    <option value={LaPintana}>La Pintana</option>
                    <option value={Colina}>Colina</option>
                </select>
            </div>
            <input type="submit" value={Enviar}/>
        </form>
    
    </div>
   
  )
}


export {VolunteerForm}
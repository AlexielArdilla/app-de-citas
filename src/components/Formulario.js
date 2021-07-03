import React, { Fragment, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    //crear state de citas
    const [cita, actualizarCita] = useState({

        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''

    });

    const [error, actualizarError]=useState(false);

    //funcion se ejecuta cuando escriben en input
    const actualizarState = (e) =>{actualizarCita({
        ...cita,
        [e.target.name] : e.target.value
    })};

    //extraer los valotres
    const { mascota, propietario, fecha, hora, sintomas} = cita;
    //cuando presiona agregar cita
    const submitCita = (e) =>{

        e.preventDefault();
        //Validar
            if(mascota.trim() === ''|| propietario.trim() === ''||fecha.trim() === ''||hora.trim() === ''||sintomas.trim() === ''){

               actualizarError(true);
                return;
            }

         //eliminar mensaje previo
         actualizarError(false);

        //asignar ID

            cita.id =uuidv4();
            console.log(cita);
            

        //crear cita
        crearCita(cita);

        //reiniciar formulario
        actualizarCita({

            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''

        });
    };


    return (  

        <Fragment>
            <h2>Crear cita</h2>
            {error ? 
            <p className="alerta-error">Todos los campos son obligatorios</p>
            : null}

            <form
            onSubmit={submitCita}
            >
                <label>Nombre contacto:</label>
                <input
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre o Nickname"
                onChange={actualizarState}
                value={mascota}

                />
                <label>Red social donde lo/a conocí:</label>
                <input
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Ejemplo Facebook"
                onChange={actualizarState}
                value={propietario}

                />
                <label>Fecha cita:</label>
                <input
                type="date"
                name="fecha"
                className="u-full-width"   
                onChange={actualizarState}
                value={fecha}

                />
                <label>Hora de cita:</label>
                <input
                type="time"
                name="hora"
                className="u-full-width"
                onChange={actualizarState}
                value={hora}

                />
                <label>Link de Zoom, Whatsapp, etcétera:</label>
                <textarea
                className="u-full-width"
                name="sintomas"
                onChange={actualizarState}
                value={sintomas}

                >   </textarea>
                <button
                type="submit"
                className="u-full-width button-primary"
                >Agregar cita</button>            
            </form>

        </Fragment>
       



    );
}
 
Formulario.propTypes ={

    crearCita: PropTypes.func.isRequired
}

export default Formulario;
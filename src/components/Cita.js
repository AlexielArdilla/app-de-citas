import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => {
    return ( 

        <div className="cita">

            <p>Nombre o nickname:<span>{cita.mascota}</span></p>
            <p>Red:<span>{cita.propietario}</span></p>
            <p>Fecha:<span>{cita.fecha}</span></p>
            <p>Hora:<span>{cita.hora}</span></p>
            <p>Link o datos de cita:<span>{cita.sintomas}</span></p>
            <button className="button eliminar u-full-width"
            onClick={ () => eliminarCita(cita.id) }
            >Eliminar &times;</button>
        </div>

     );
}
 
Cita.propTypes ={

    cita: PropTypes.object.isRequired,
    eliminarCita : PropTypes.func.isRequired
}
export default Cita;
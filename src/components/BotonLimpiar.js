import React from 'react';
import '../styles/BotonLimpiar.css'

const BotonLimpiar = (props) => (
    <div className='boton-clear' onClick={props.manejarClear}>
        {props.children}
    </div>
);

export default BotonLimpiar
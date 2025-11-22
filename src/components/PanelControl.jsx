import React from 'react';
import '../styles/PanelControl.css';

export default function PanelControl ({ toggleError, reintentarCarga, error }) {

    return (
        <div className="panel-control">
            <h3>Opciones de desarrollador</h3>
            <button onClick={toggleError} className="botonError">
            {error ? 'Desactivar Error' : 'Simular Error'}
            </button>
            <button onClick={reintentarCarga}>Recargar Datos</button>
        </div>
    );
};


import React from 'react';
import ControladorLista from './ControladorLista';

export default function CargaClientes ({ cargando, error, clientes }){
  if (cargando) {
    return <div>Cargando clientes...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return <ControladorLista clientes={clientes} />;
};

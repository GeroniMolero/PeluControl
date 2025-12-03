import React from 'react';
import ControladorLista from './ControladorLista';

export default function CargaClientes ({ cargando, error, clientes, onAddCliente }) {
  if (cargando) {
    return <div>Cargando clientes...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return <ControladorLista clientes={clientes} onAddCliente={onAddCliente} />;
};

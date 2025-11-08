import React, { useState } from "react";
import ListaClientes from "./ListaClientes";

export default function CampoBusqueda({ clientes }) {
  const [busqueda, setBusqueda] = useState("");
  const clientesFiltrados = clientes.filter(
    (c) =>
      c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      c.telefono.includes(busqueda)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre o teléfono"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <ListaClientes clientes={clientesFiltrados} />
    </div>
  );
}

import React from "react";
import "../styles/ListaClientes.css";

export default function ListaClientes({ clientes }) {
  if (clientes.length === 0) {
    return <p>No se encontraron resultados.</p>;
  }

  return (
    <div className="lista">
      <h2>Lista de Clientes</h2>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            Nombre: {cliente.nombre} Teléfono: {cliente.telefono}
          </li>
        ))}
      </ul>
    </div>
  );
}

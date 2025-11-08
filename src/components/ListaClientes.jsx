import React from "react";
import "../styles/ListaClientes.css";

// Componente que muestra la lista de clientes
export default function ListaClientes({ clientes }) {
  //Control para el caso en que no haya clientes que mostrar
  if (clientes.length === 0) {
    return <p>No se encontraron resultados.</p>;
  }

  return (
    <div className="lista">
      <h2>Lista de Clientes</h2>
      <ul>
        {/*Muestro los datos que quiero de los clientes*/}
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            {cliente.nombre} - Teléfono: {cliente.telefono}
          </li>
        ))}
      </ul>
    </div>
  );
}

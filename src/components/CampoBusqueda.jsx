import React from "react";
import "../styles/CampoBusqueda.css";

// Componente que muestra el campo de búsqueda y llama a las funciones de orden, pasando las props necesarias
export default function CampoBusqueda({
  busqueda,
  setBusqueda,
  orden,
  setOrden,
  ascendente,
  setAscendente,
}) {
  return (
    <div>
      {/* Campo de texto para filtrar clientes por nombre o teléfono */}
      <input 
        className="campo-busqueda"
        type="text"
        placeholder="Buscar por nombre o teléfono..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)} //Actualiza el estado de búsqueda al cambiar el valor del input
      />

      <div>
        {/* Selector de criterio de orden*/}
        <label>Ordenar por: </label>
        <select value={orden} onChange={(e) => setOrden(e.target.value)}>
          <option value="nombre">Nombre</option>
          <option value="telefono">Teléfono</option>
        </select>
        {/* Botón para alternar entre orden ascendente y descendente */}
        <button onClick={() => setAscendente(!ascendente)}>
          {ascendente ? "Ascendente" : "Descendente"}
        </button>
      </div>
    </div>
  );
}

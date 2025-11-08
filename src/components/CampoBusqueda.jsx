import React from "react";

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
      <input
        type="text"
        placeholder="Buscar por nombre o teléfono..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div style={{ marginBottom: "10px" }}>
        <label>Ordenar por: </label>
        <select value={orden} onChange={(e) => setOrden(e.target.value)}>
          <option value="nombre">Nombre</option>
          <option value="telefono">Teléfono</option>
        </select>
        <button onClick={() => setAscendente(!ascendente)}>
          {ascendente ? "Ascendente" : "Descendente"}
        </button>
      </div>
    </div>
  );
}

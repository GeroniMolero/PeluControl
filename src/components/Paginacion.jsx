import React from "react";

export default function Paginacion({
  paginaActual,
  totalPaginas,
  setPaginaActual,
  porPagina,
  setPorPagina,
}) {
  if (totalPaginas === 0) return null;

  return (
    <div style={{ marginTop: "10px" }}>
      <div style={{ marginBottom: "10px" }}>
        <label>Resultados por página: </label>
        <select
          value={porPagina}
          onChange={(e) => {
            setPorPagina(Number(e.target.value));
            setPaginaActual(1);
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

      <button
        disabled={paginaActual === 1}
        onClick={() => setPaginaActual(paginaActual - 1)}
      >
        Anterior
      </button>

      <span style={{ margin: "0 10px" }}>
        Página {paginaActual} de {totalPaginas}
      </span>

      <button
        disabled={paginaActual === totalPaginas}
        onClick={() => setPaginaActual(paginaActual + 1)}
      >
        Siguiente
      </button>
    </div>
  );
}

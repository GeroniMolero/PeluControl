import React from "react";

// Componente que muestra los controles de paginación y selección de resultados por página
export default function Paginacion({
  paginaActual,
  totalPaginas,
  setPaginaActual,
  porPagina,
  setPorPagina,
}) {
  // No mostrar nada si no hay páginas
  if (totalPaginas === 0) return null;

  return (
    <div style={{ marginTop: "10px" }}>
      <div style={{ marginBottom: "10px" }}>
        <label>Resultados por página: </label>
        <select
          value={porPagina}
          onChange={(e) => {
            // Al cambiar la cantidad de resultados por página, reiniciamos la paginación a la primera página
            setPorPagina(Number(e.target.value));
            setPaginaActual(1);
          }}
        >
          {/* Opciones para seleccionar el número de resultados por página */}
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
      {/*Boton para ir a la página anterior, si la pagina actual es la primera deshabilitarlo*/}
      <button
        disabled={paginaActual === 1}
        onClick={() => setPaginaActual(paginaActual - 1)}
      >
        Anterior
      </button>

      <span style={{ margin: "0 10px" }}>
        Página {paginaActual} de {totalPaginas}
      </span>
      {/*Boton para ir a la página siguiente, si la pagina actual es la ultima deshabilitarlo*/}
      <button
        disabled={paginaActual === totalPaginas}
        onClick={() => setPaginaActual(paginaActual + 1)}
      >
        Siguiente
      </button>
    </div>
  );
}

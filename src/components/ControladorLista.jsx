import React, { useState, useMemo, useEffect } from "react";
import CampoBusqueda from "./CampoBusqueda";
import ListaClientes from "./ListaClientes";
import Paginacion from "./Paginacion";

export default function ControladorLista({ clientes }) {
  // Estados principales del componente
  const [busqueda, setBusqueda] = useState(""); // Guarda el texto introducido en el campo de búsqueda
  const [orden, setOrden] = useState("nombre"); // Criterio de ordenamiento (nombre o teléfono)
  const [ascendente, setAscendente] = useState(true); // Define si el orden es ascendente o descendente
  const [paginaActual, setPaginaActual] = useState(1); // Página actual del listado
  const [porPagina, setPorPagina] = useState(5); // Número de resultados mostrados por página

  // Uso de useMemo para no recalcular el filtrado en cada render
  // Filtra los clientes según el término de búsqueda introducido por el usuario
  const clientesFiltrados = useMemo(() => {
    return clientes.filter(
      (c) =>
        c.nombre.toLowerCase().includes(busqueda.toLowerCase()) || // Coincidencia parcial con el nombre
        c.telefono.includes(busqueda) // Coincidencia parcial con el teléfono
    );
  }, [clientes, busqueda]);

  // Función para ordenar la lista según el campo y el orden seleccionado
  // Se crea una copia del array para no mutar el array original
  const ordenarLista = (lista) => {
    const copia = [...lista];
    copia.sort((a, b) => {
      if (a[orden] < b[orden]) return ascendente ? -1 : 1; // Comparación según el orden ascendente o descendente
      if (a[orden] > b[orden]) return ascendente ? 1 : -1;
      return 0; // Si son iguales, no se cambia el orden
    });
    return copia;
  };

  // Lista ordenada utilizando la función ordenarLista
  const clientesOrdenados = useMemo(
    () => ordenarLista(clientesFiltrados),
    [clientesFiltrados, orden, ascendente]
  );

  // Paginación
  const totalPaginas = Math.ceil(clientesOrdenados.length / porPagina); // Calculo el total de páginas necesarias
  const inicio = (paginaActual - 1) * porPagina; // Índice del primer cliente a mostrar
  const clientesPaginados = clientesOrdenados.slice(
    // Extraigo solo los clientes de la página actual
    inicio,
    inicio + porPagina
  );

  // Reinicia la página a la primera si cambia la búsqueda, el orden o el número de resultados por página
  // Evita que se quede en una página inválida si los resultados cambian
  useEffect(() => setPaginaActual(1), [busqueda, orden, ascendente, porPagina]);

  return (
    <div>
      {/* Componente que gestiona el campo de búsqueda y los controles de orden */}
      <CampoBusqueda
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        orden={orden}
        setOrden={setOrden}
        ascendente={ascendente}
        setAscendente={setAscendente}
      />

      {/* Lista de clientes mostrada según el filtrado, orden y paginación */}
      <ListaClientes clientes={clientesPaginados} />

      {/* Controles de paginación y selección de resultados por página */}
      <Paginacion
        paginaActual={paginaActual}
        totalPaginas={totalPaginas}
        setPaginaActual={setPaginaActual}
        porPagina={porPagina}
        setPorPagina={setPorPagina}
      />
    </div>
  );
}

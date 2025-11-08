import React, { useState, useMemo, useEffect } from "react";
import CampoBusqueda from "./CampoBusqueda";
import ListaClientes from "./ListaClientes";
import Paginacion from "./Paginacion";

export default function ControladorLista({ clientes }) {
    
  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState("nombre");
  const [ascendente, setAscendente] = useState(true);
  const [paginaActual, setPaginaActual] = useState(1);
  const [porPagina, setPorPagina] = useState(3);

  //Uso de useMemo para no tener que recalcular en cada renderizado
  
  //Filtrado
  const clientesFiltrados = useMemo(() => {
    return clientes.filter(
      (c) =>
        c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        c.telefono.includes(busqueda)
    );
  }, [clientes, busqueda]);

  //Ordenamiento
  const ordenarLista = (lista) => {
    const copia = [...lista];
    copia.sort((a, b) => {
      if (a[orden] < b[orden]) return ascendente ? -1 : 1;
      if (a[orden] > b[orden]) return ascendente ? 1 : -1;
      return 0;
    });
    return copia;
  };

  const clientesOrdenados = useMemo(
    () => ordenarLista(clientesFiltrados),
    [clientesFiltrados, orden, ascendente]
  );

  //Paginación
  const totalPaginas = Math.ceil(clientesOrdenados.length / porPagina);
  const inicio = (paginaActual - 1) * porPagina;
  const clientesPaginados = clientesOrdenados.slice(
    inicio,
    inicio + porPagina
  );

  useEffect(() => setPaginaActual(1), [busqueda, orden, ascendente, porPagina]);

  return (
    <div>
      <CampoBusqueda
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        orden={orden}
        setOrden={setOrden}
        ascendente={ascendente}
        setAscendente={setAscendente}
      />

      <ListaClientes clientes={clientesPaginados} />

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

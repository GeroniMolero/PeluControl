import React, {useState, useMemo} from "react";
import FormularioCliente from "./FormularioCliente";
import "../styles/ListaClientes.css";

// Componente que muestra la lista de clientes
export default function ListaClientes({ clientes, onAddCliente }) {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const initialValues = useMemo(() => ({ nombre: "", telefono: "" }), []);
  //Control para el caso en que no haya clientes que mostrar
  if (clientes.length === 0) {
    return <p>No se encontraron resultados.</p>;
  }

  return (
    <div>
    {/* --- BOTÓN PARA AÑADIR CLIENTE --- */}
      {!mostrarFormulario && (
        <button 
          className="boton-añadir" 
          onClick={() => setMostrarFormulario(true)}
        >
          Añadir cliente
        </button>
      )}
    <div className="lista">
      <h2>Lista de Clientes</h2>
      {/* --- FORMULARIO CONDICIONAL --- */}
      {mostrarFormulario && (
        <FormularioCliente
          // initialValues={initialValues}
          onSubmit={(nuevoCliente) => {
            onAddCliente(nuevoCliente);
            setMostrarFormulario(false); // Oculta el formulario tras añadir el cliente
          }}
          onCancel={() => setMostrarFormulario(false)} // Oculta el formulario al cancelar
        />
      )}
      {/* La lista solo se muestra si el formulario no está activo */}
      {!mostrarFormulario && (
        <ul>
          {clientes.map((cliente) => (
            <li key={cliente.id}>
              {cliente.nombre} - Teléfono: {cliente.telefono}
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
}

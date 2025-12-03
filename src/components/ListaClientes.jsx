import React, {useState, useMemo} from "react";
import FormularioCliente from "./FormularioCliente";
import "../styles/ListaClientes.css";

// Componente que muestra la lista de clientes
export default function ListaClientes({ clientes, onAddCliente, onUpdateCliente }) {
  const [mostrarFormularioCrear, setMostrarFormularioCrear] = useState(false);
  const [clienteEditando, setClienteEditando] = useState(null);

  const handleEditar = (cliente) => {
    setClienteEditando(cliente);
    setMostrarFormularioCrear(false); // Aseguramos que solo un formulario esté visible
  };

  const handleCancelarEdicion = () => {
    setClienteEditando(null);
  };

  const handleCancelarCreacion = () => {
    setMostrarFormularioCrear(false);
  };

  const initialValues = useMemo(() => ({ nombre: "", telefono: "" }), []);
  //Control para el caso en que no haya clientes que mostrar
  if (clientes.length === 0 && !mostrarFormularioCrear && !clienteEditando) {
    return <p>No se encontraron resultados.</p>;
  }

  return (
    <div>
    {/* --- BOTÓN PARA AÑADIR CLIENTE --- */}
      {!mostrarFormularioCrear && !clienteEditando && (
        <button 
          className="boton-añadir" 
          onClick={() => setMostrarFormularioCrear(true)}
        >
          Añadir cliente
        </button>
      )}
    <div className="lista">
      <h2>Lista de Clientes</h2>
      {/* Formulario para CREAR */}
      {mostrarFormularioCrear && (
        <FormularioCliente
          key="form-crear" // Key para forzar re-montaje y limpiar estado
          onSubmit={(nuevoCliente) => {
            onAddCliente(nuevoCliente);
            setMostrarFormularioCrear(false);
          }}
          onCancel={handleCancelarCreacion}
          textoBoton="Añadir Cliente"
        />
      )}
      {/* Formulario para EDITAR */}
      {clienteEditando && (
        <FormularioCliente
          key={`form-editar-${clienteEditando.id}`} // Key única para cada edición
          initialValues={clienteEditando} // Pasamos los datos del cliente a editar
          onSubmit={(clienteActualizado) => {
            onUpdateCliente(clienteActualizado);
            setClienteEditando(null);
          }}
          onCancel={handleCancelarEdicion}
          textoBoton="Actualizar Cliente"
        />
      )}
      {/* La lista solo se muestra si ningún formulario está activo */}
      {!mostrarFormularioCrear && !clienteEditando && (
        <ul>
          {clientes.map((cliente) => (
            <li key={cliente.id} className="cliente-item">
              <span>{cliente.nombre} - Teléfono: {cliente.telefono}</span>
              {/* Nuevo botón de editar */}
              <button onClick={() => handleEditar(cliente)} className="boton-editar">
                Editar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
}

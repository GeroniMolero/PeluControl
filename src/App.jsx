import React, { useState } from "react";
import { clientesIniciales } from "./assets/clientes.js";
import ControladorLista from "./components/ControladorLista.jsx";

function App() {
  return (
    <div className="App">
      <h1>PeluControl - Clientes</h1>
      <ControladorLista clientes={clientesIniciales} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { clientesIniciales } from "./assets/clientes.js";
import CampoBusqueda from "./components/CampoBusqueda.jsx";

function App() {
  return (
    <div className="App">
      <h1>PeluControl - Clientes</h1>
      <CampoBusqueda clientes={clientesIniciales} />
    </div>
  );
}

export default App;

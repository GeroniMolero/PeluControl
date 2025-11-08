import React, { useState } from "react";
import { clientesIniciales } from "./assets/clientes.js";
import ControladorLista from "./components/ControladorLista.jsx";
import "./App.css";
import barberShop from "./assets/images/barbershop.png";

function App() {
  return (
    <div className="App">
      <h1>PeluControl - Clientes</h1>
      {/*Paso el array de clientes iniciales como prop*/}
      <ControladorLista clientes={clientesIniciales} />
    </div>
  );
}

export default App;

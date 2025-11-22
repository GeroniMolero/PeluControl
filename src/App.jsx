// App.jsx
import React, { useState, useEffect } from 'react';
import CargaClientes from './components/CargaClientes';
import PanelControl from './components/PanelControl';
import './App.css';
import barberShop from './assets/images/barbershop.png';

function App() {
  const clientesIniciales = [
    { id: 1, nombre: 'Laura González', telefono: '644123123' },
    { id: 2, nombre: 'Carlos Ruiz', telefono: '655321321' },
    { id: 3, nombre: 'Marta Pérez', telefono: '699112233' },
    { id: 4, nombre: 'Ana López', telefono: '611223344' },
    { id: 5, nombre: 'Laura González', telefono: '622334455' },
    { id: 6, nombre: 'Lucía Martínez', telefono: '633445566' },
    { id: 7, nombre: 'David Sánchez', telefono: '644123123' },
    { id: 8, nombre: 'Sofía Romero', telefono: '655667788' },
    { id: 9, nombre: 'Alberto Torres', telefono: '666778899' },
    { id: 10, nombre: 'Carolina Díaz', telefono: '677889900' },
    { id: 11, nombre: 'Marta Pérez', telefono: '688990011' },
    { id: 12, nombre: 'Isabel Molina', telefono: '699001122' },
    { id: 13, nombre: 'Pablo Herrera', telefono: '600112233' },
    { id: 14, nombre: 'Raquel Jiménez', telefono: '611223344' },
    { id: 15, nombre: 'Fernando Castro', telefono: '622334455' },
  ];

  const [clientes, setClientes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const cargarDatos = () => {
    const falloDeCarga = Math.random() < 0.2;
    
    setTimeout(() => {
      if (falloDeCarga) {
        setError('Error al cargar los datos. Intenta nuevamente.');
        setCargando(false);
      } else {
        setClientes(clientesIniciales);
        setCargando(false);
      }
    }, 2000);
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  // Función para simular un error manualmente
  const toggleError = () => {
    if (error) {
      setError(null);
    } else {
      setError('Error al cargar los datos de forma manual.');
      setCargando(false);
    }
  };

  // Función para reintentar la carga de datos
  const reintentarCarga = () => {
    setError(null);
    setCargando(true);
    setClientes([]);
    cargarDatos();
  };

  return (
    <div className="App">
      <h1>PeluControl - Clientes</h1>

      {/* Componente que maneja la carga de datos, errores y muestra los clientes */}
      <CargaClientes cargando={cargando} error={error} clientes={clientes} />

      {/* Panel para manejar errores y recargar los datos */}
      <PanelControl toggleError={toggleError} reintentarCarga={reintentarCarga} error={error} />

      <footer className="footer">
        Peluquería de Gerónimo Molero Rodríguez
      </footer>
    </div>
  );
}

export default App;

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Panel de opciones de desarrollador

Habilita 2 funciones

Boton Rojo

    1. Si no hay error añade un error manual
    2. Si hay error cambio su valor a null

Boton Azul

    Vuelve a intentar cargar los clientes, usando la misma funcion que app.jsx al montarse. (Con un 20% de probabilidad de generar un error)
    
    Alternativa a recargar la página por si la funcion cargarDatos ha generado un error al montarse App.


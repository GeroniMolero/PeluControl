/**
 * Alternativa para useForm de React Hook Form por si falla.
 * Custom hook para manejar formularios.
 * Proporciona el estado de los valores del formulario,
 * una función para manejar cambios en los campos
 * y una función para resetear el formulario a su estado inicial.
 */

import { useState, useCallback } from 'react'; // Importa useCallback

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Usamos useCallback para memorizar la función resetForm
  // Solo se volverá a crear si 'initialState' cambia
  const resetForm = useCallback(() => {
    setValues(initialState);
  }, [initialState]);

  return {
    values,
    handleChange,
    resetForm,
  };
};
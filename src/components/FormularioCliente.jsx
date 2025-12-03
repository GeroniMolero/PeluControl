import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
// import { useForm } from '../hooks/useForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import '../styles/FormularioCliente.css';

const clienteSchema = yup.object().shape({
  nombre: yup.string().required('El nombre es obligatorio'),
  telefono: yup
    .string()
    .matches(/^[0-9]+$/, 'El teléfono debe contener solo números')
    .min(9, 'El teléfono debe tener al menos 9 dígitos')
    .required('El teléfono es obligatorio'),
});

export default function FormularioCliente({ 
  onSubmit, 
  onCancel,
  textoBoton = "Guardar Cliente",
  initialValues = null
}) {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(clienteSchema),
        defaultValues: initialValues || { nombre: '', telefono: '' } // Valores iniciales
    });

    // Función que se ejecuta cuando el formulario es válido y se envía
    const manejarEnvio = (data) => {
        onSubmit(data);
        reset(); // Limpiamos el formulario tras guardar
    };

//   // Uso el hook para el estado del formulario
//   const { values, handleChange, resetForm } = useForm(initialValues);
  
//   // Estado para manejar los errores de validación
//   const [errors, setErrors] = useState({});

//   // Efecto para resetear el formulario si los valores iniciales cambian
//   useEffect(() => {
//     resetForm();
//     setErrors({});
//   }, [initialValues, resetForm]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Validamos los datos del formulario con el esquema de Yup
//       await clienteSchema.validate(values, { abortEarly: false });
//       // Si la validación es exitosa, no hay errores
//       setErrors({});
//       // Llamamos a la función onSubmit pasada como prop
//       onSubmit(values);
//     } catch (err) {
//       // Si hay errores de validación, los capturamos y los formateamos
//       const validationErrors = {};
//       err.inner.forEach((error) => {
//         validationErrors[error.path] = error.message;
//       });
//       setErrors(validationErrors);
//     }
//   };

  return (
    <div className="formulario-cliente-container">
      <form onSubmit={handleSubmit(manejarEnvio)} className="formulario-cliente">
        <h2>{textoBoton.includes('Editar') ? 'Editar Cliente' : 'Añadir Nuevo Cliente'}</h2>
        
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            {...register('nombre')}
            className={errors.nombre ? 'input-error' : ''}
          />
          {/* <input
            type="text"
            id="nombre"
            name="nombre"
            value={values.nombre}
            onChange={handleChange}
            className={errors.nombre ? 'input-error' : ''}
          /> */}
          {errors.nombre && <p className="error-message">{errors.nombre.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            id="telefono"
            type="tel"
            {...register('telefono')}
            className={errors.telefono ? 'input-error' : ''}
          />
          {/* <input
            type="tel"
            id="telefono"
            name="telefono"
            value={values.telefono}
            onChange={handleChange}
            className={errors.telefono ? 'input-error' : ''}
          /> */}
          {errors.telefono && <p className="error-message">{errors.telefono.message}</p>}
        </div>

        <div className="form-buttons">
          <button type="submit">{textoBoton}</button>
          <button type="button" onClick={() => { reset(); onCancel(); }}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
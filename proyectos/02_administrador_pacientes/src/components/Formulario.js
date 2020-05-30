import React, { Fragment, useState } from 'react';

const Formulario = () => {

  // Crear State e Citas
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  // Funcion que se ejecuta cuando se escribe en un inpt
  const actualizarState = () => {
    console.log('Escribiendo...');
  }

  return (
    <Fragment>
      <h2>Crear cita</h2>

      <form>
        <label>Nombre mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}/>

        <label>Nombre del dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del Dueño de la Mascota"
          onChange={actualizarState}/>

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}/>

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}/>

        <label>Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}>
        </textarea>

        <button
          type="submit"
          className="u-full-width button-primary">
          Agrega cita
        </button>                  
      </form>
    </Fragment>
  );
}

export default Formulario;
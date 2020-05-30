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
  const actualizarState = e => {
    actualizarCita({
      ...cita, [e.target.name]: e.target.value
    })
  }

  // Extraer los valores del formulario
  const {mascota, propietario, fecha, hora, sintomas} = cita;

  // Cuando se presiona 'Agregar cita'
  const submitCita = e => {
    e.preventDefault();
    console.log('Enviando form....');

    // Valdar

    // Asignar ID

    // Crear la cia

    // Reiniciar el form
  }


  return (
    <Fragment>
      <h2>Crear cita</h2>

      <form
        onSubmit={submitCita}>
        <label>Nombre mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}/>

        <label>Nombre del dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del Dueño de la Mascota"
          onChange={actualizarState}
          value={propietario}/>

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}/>

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}/>

        <label>Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}>
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
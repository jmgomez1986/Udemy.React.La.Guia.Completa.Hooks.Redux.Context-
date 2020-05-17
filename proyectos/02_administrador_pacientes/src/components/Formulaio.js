import React, { Fragment } from 'react';

const Formulario = () => {
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
        />

        <label>Nombre del dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del Dueño de la Mascota"
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
        />

        <label>Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width">
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
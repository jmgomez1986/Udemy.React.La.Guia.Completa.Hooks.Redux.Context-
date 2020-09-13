import React, { Fragment } from "react";

const Resumen = ({ datos }) => {
  const { marca, anio, plan } = datos;

  if (marca === "" || anio === "" || plan === "") {
    return null;
  }

  return (
    <Fragment>
      <h2>Resumen de cotizazión</h2>
      <ul>
        <li>Marca: </li>
        <li>Año: </li>
        <li>Plan: </li>
      </ul>
    </Fragment>
  );
};

export default Resumen;

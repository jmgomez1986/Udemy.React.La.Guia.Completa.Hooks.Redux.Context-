import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { primerLetraMayuscula } from "../../src/helper";

const ContenerdorResumen = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #00838F;
  color: #FFFFFF;
  text-align: center;
`

const Resumen = ({ datos }) => {
  const { marca, anio, plan } = datos;

  if (marca === "" || anio === "" || plan === "") {
    return null;
  }

  return (
    <ContenerdorResumen>
      <h2>Resumen de cotizazión</h2>
      <ul>
        <li>Marca: {primerLetraMayuscula(marca)}</li>
        <li>Año del Auto: {anio}</li>
        <li>Plan: {primerLetraMayuscula(plan)}</li>
      </ul>
    </ContenerdorResumen>
  );
};

export default Resumen;

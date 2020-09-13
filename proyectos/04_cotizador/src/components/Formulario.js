import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  obtenerDiferenciaAnio,
  calcularMarca,
  culcalarTipoSeguro,
} from "../../src/helper";

const anios = [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012];

const Campo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  flex: 0 0 100px; /* flex-grow, flex-shrink, and flex-basis */
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none; /* Dehabilita la apariencia natural del select*/
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
  margin-top: 2rem;
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const Formulario = ({ guardarResumen }) => {
  const [datos, guardarDatos] = useState({
    marca: "",
    anio: "",
    plan: "",
  });

  const [error, guardarError] = useState(false);

  // Extraer los valores del useState
  const { marca, anio, plan } = datos;

  // Leer los datos del formulario y colocarlos en el useState
  const obtenerInformacion = (e) => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  // Cuando el usuario presiona Submit
  const cotizarSeguro = (e) => {
    e.preventDefault();

    if (marca.trim() === "" || anio.trim() === "" || plan.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);

    let resultadoBase = 2000;

    // Obtener diferecia de años
    const diferencia = obtenerDiferenciaAnio(anio);
    console.log("Diferencia: ", diferencia);

    // Por cada año hay que restar el 3%
    resultadoBase -= (diferencia * 3 * resultadoBase) / 100;

    // Americano 15%
    // Asiatico 5%
    // Europeo 30%
    resultadoBase = resultadoBase * calcularMarca(marca);

    // Plan Basico - Aumenta 20%
    // Pan Completo - Aumento 50%
    const incrementoPlan = culcalarTipoSeguro(plan);
    resultadoBase = parseFloat(incrementoPlan * resultadoBase).toFixed(2);
    console.log("Resultado: ", resultadoBase);

    // Total
    guardarResumen({
      cotizacion: resultadoBase,
      datos,
    });
  };

  return (
    <form onSubmit={cotizarSeguro}>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}

      <Campo>
        <Label>Marca</Label>
        <Select name="marca" value={marca} onChange={obtenerInformacion}>
          <option value="">--- Seleccione ---</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Año</Label>
        <Select name="anio" value={anio} onChange={obtenerInformacion}>
          {anios.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </Select>
      </Campo>

      <Campo>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={obtenerInformacion}
        />
        Básico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={obtenerInformacion}
        />
        Completo
      </Campo>

      <Button type="submit">Cotizar</Button>
    </form>
  );
};

export default Formulario;

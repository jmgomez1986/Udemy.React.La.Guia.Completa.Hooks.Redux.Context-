import React, { useState } from "react";
import styled from "@emotion/styled";

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
`

const Formulario = () => {
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
  const cotizarSeguro = e => {
    e.preventDefault();

    if (marca.trim() === '' || anio.trim() === '' || plan.trim() === '') {
      guardarError(true);
      return;
    }
    guardarError(false);

    // Obtener diferecia de años

    // Americano 15%
    // Asiatico 5%
    // Europeo 30%

    // Plan basico - Aumenta 20%
    // Pan Completo - Aumento 50%

    // Total

  }

  return (
    <form
      onSubmit={cotizarSeguro}>

      {error ? <Error>Todos los campos son obligatorios</Error> : null}

      <Campo>
        <Label>Marca</Label>
        <Select name="marca" value={marca} onChange={obtenerInformacion}>
          <option value="">--- Seleccione ---</option>
          <option value="american0">American0</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Año</Label>
        <Select name="anio" value={anio} onChange={obtenerInformacion}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="baico"
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

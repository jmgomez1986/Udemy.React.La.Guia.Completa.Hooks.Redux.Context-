import React from "react";
import styled from '@emotion/styled';

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

const Formulario = () => {
  return (
    <form>
      <Campo>
        <Label>Marca</Label>
        <Select>
          <option value="">--- Seleccione ---</option>
          <option value="american">American</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>

      <Campo>
        <Label>Año</Label>
        <Select>
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
        <InputRadio type="radio" name="plan" value="baico" />
        Básico
        <InputRadio type="radio" name="plan" value="completo" />
        Completo
      </Campo>

      <buttom type="buttom">Cotizar</buttom>

    </form>
  );
};

export default Formulario;

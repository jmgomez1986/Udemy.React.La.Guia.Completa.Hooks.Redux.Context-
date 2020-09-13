import React from 'react';
import styled from "@emotion/styled";
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultadoCotizacion = styled.div`
  margin-top: 1rem;
  padding: .5rem;
  text-align: center;
  border: 1px solid #26C6DA;
  background-color: rgb(127, 224, 237);
  position: relative;
`;

const TextoCotizacion = styled.p`
  color: #00838F;
  margin: 0;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
`;

const Resultado = ({cotizacion}) => {

  return (
    (cotizacion === 0)
      ? <Mensaje>Elije marca, año y tipo de plan</Mensaje>
      : (
          <ResultadoCotizacion>
            <TransitionGroup
              component="p"
              className="resultado">
              <CSSTransition
                classNames="resultado"
                key={cotizacion}
                timeout={{enter: 500, exit: 500}}>
                <TextoCotizacion>El total es: ${cotizacion}</TextoCotizacion>
              </CSSTransition>
            </TransitionGroup>
          </ResultadoCotizacion>
        )
  );
}
 
export default Resultado;
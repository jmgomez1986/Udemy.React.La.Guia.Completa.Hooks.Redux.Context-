import React from 'react';
import Header from './components/Header'
import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

function App() {
  return (
    <Contenedor>
      <Header
        titulo="Cotizador de seguros"
      />
    </Contenedor>
  );
}

export default App;

import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  // Obtener fecha actual
  const fecha = new Date().getFullYear(); 

  return (
    <Fragment>
      <Header
        titulo='Tienda Virtual'
      />

      <Footer
        fecha={fecha} // Las variables de ponenen enre llaves
      />
    </Fragment>
  );
}

export default App;

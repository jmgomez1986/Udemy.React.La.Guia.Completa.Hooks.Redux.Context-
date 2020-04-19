import React, { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Header />

      <Footer />
    </Fragment>
  );
}
// Usar fragment evita crear divs de gusto
export default App;

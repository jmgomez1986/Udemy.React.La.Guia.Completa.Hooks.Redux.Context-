import React, { Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';

// El state es todo lo que va a reacionar a una accion del usuario

function App() {
  // Crear listado de productos
  const [ productos, saveProductos ] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa VueJS', precio: 40 },
    { id: 3, nombre: 'Camisa Node.js', precio: 20 },
    { id: 4, nombre: 'Camisa Angular', precio: 30 },
  ])
  // Obtener fecha actual
  const fecha = new Date().getFullYear(); 

  return (
    <Fragment>
      <Header
        titulo='Tienda Virtual'
      />

    <h1>Lista de productos</h1>
    {productos.map(producto => (
      <Producto
        key={producto.id} // siempre hay que pasarle un key que haga el elemento unico
        producto={producto}
      />
    ))}

      <Footer
        fecha={fecha} // Las variables de ponenen enre llaves
      />
    </Fragment>
  );
}

export default App;

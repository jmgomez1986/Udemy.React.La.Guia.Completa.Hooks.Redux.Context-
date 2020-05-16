import React from 'react';
import './carrito.css'
import Producto from './Producto';

const Carrito = ({ carrito, agregarProducto }) => (
  <div className="carrito">
    <h2>Tu carrito de compras</h2>

    {carrito.length === 0
      ?
      <p>No hay elementos en el carrito</p>
      :
      carrito.map(producto => (
        <Producto
          key={producto.id} // siempre hay que pasarle un key que haga el elemento unico
          producto={producto}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))
    }
  </div>
);

export default Carrito;
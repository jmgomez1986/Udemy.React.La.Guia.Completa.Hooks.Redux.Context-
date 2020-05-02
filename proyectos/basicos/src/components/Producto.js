import React from 'react'; // Escribir imr y tab y autocompleta

const Producto = ({ producto }) => {
  const {id, nombre, precio} = producto;

  // Agregar producto al carrito
  const sleccionarProducto = id=> {
    console.log('comprando... ', id);
  }
  return ( 
  
    <div>
      <h3>{nombre}</h3>
      <p>${precio}</p>
      <button
        type="button"
        onClick={ () => sleccionarProducto(id) }>
        Comprar
      </button>
    </div>
  );
}

export default Producto;
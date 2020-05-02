import React from 'react'; // Escribir imr y tab y autocompleta

const Producto = ({ producto, carrito, productos, agregarProducto }) => {
  const {id, nombre, precio} = producto;

  // Agregar producto al carrito
  const sleccionarProducto = id=> {
    const producto = productos.filter( producto => producto.id === id)[0];
    // El state no se modifica directamente, hay que usar laa funcion
    agregarProducto([
      ...carrito,
      producto
    ]);
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
import React from 'react'; // Escribir imr y tab y autocompleta

const Producto = ({ producto, carrito, productos, agregarProducto }) => {
  const { id, nombre, precio } = producto;

  // Agregar producto al carrito
  const seleccionarProducto = id => {
    const producto = productos.filter(producto => producto.id === id)[0];
    // El state no se modifica directamente, hay que usar la funcion
    agregarProducto([
      ...carrito,
      producto
    ]);
  }
  // Eliminar un producto del carrito
  const eliminarProducto = id => {
    const productos = carrito.filter(producto => producto.id !== id);
    // Colocar los productos en el state
    agregarProducto(productos);
  }
  return (

    <div>
      <h3>{nombre}</h3>
      <p>${precio}</p>
      {productos
        ?
        (
          <button
            type="button"
            onClick={() => seleccionarProducto(id)}>
            Comprar
          </button>
        )
        :
        (
          <button
            type="button"
            onClick={() => eliminarProducto(id)}>
            Eliminar
          </button>
        )
      }
    </div>
  );
}

export default Producto;
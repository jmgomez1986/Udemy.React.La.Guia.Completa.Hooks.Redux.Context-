import React from 'react'; // Escribir imr y tab y autocompleta

const Producto = ({ producto }) => {
  const {id, nombre, precio} = producto;

  return ( 
  
    <div>
      <h3>{nombre}</h3>
      <p>${precio}</p>
    </div>
  );
}

export default Producto;
import React from 'react'; // Este import siempre hay que ponerlo para tener acceso a todos lo metodos y funciones de React

function Header() {
  const edad = 18;
  let mensaje;

  if ( edad >= 18) {
    mensaje = 'Eres mayor de edad.';
  } else {
    mensaje = 'Eres menor de edad.';
  }

  return (
    <h1 className="encabezado">Tienda Virtual</h1>      
  )
}

export default Header;
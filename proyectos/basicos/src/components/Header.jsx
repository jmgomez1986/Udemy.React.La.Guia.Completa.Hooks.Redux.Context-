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
    <div>
      <h1>{mensaje} Tu edad es de {edad} años</h1>
      <h1 className="encabezado">Tienda Virtual</h1>
    </div>
    // Para usar variables declaras antes del 'return' se usn entre {}
    // Para definir una clase de estilo hay que usar 'className' ya ue la palabra 'class' es una palabra reservada de JavaSript
  )
}

export default Header;
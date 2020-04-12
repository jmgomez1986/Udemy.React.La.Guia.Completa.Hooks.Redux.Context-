const carrito = ["Producto 1", "Producto 2", "Producto 3"];

console.log(carrito);

// Array

carrito.forEach((producto) => {
  console.log(`(Usando Array) El producto es ${producto}`);
});

// Map

const carrito2 = carrito.map((producto) => {
  return `El producto es ${producto}`;
});

console.log("Usando Map: ", carrito2);

// Object key

const persona01 = {
  nombre: "Matias",
  trabajo: "Desarrollador Web",
  edad: 500,
};

const { nombre } = persona01;
console.log(nombre);

console.log(Object.keys(persona01));

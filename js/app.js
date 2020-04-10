// Object Literal
const persona = {
    nombre: 'Matias',
    edad: 33,
    profesion: 'Desarrollador Web'
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona['profesion']);

// Object Constructor
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

const tarea1 = new Tarea('Aprender React', 'Urgente');

console.log(tarea1);
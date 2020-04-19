import Tarea from './tareas.js';
import ComprasPendientes from './compras.js'

const tarea1 = new Tarea('Aprender React', 'Urgente');

console.log(tarea1);

console.log(tarea1.mostrar());

const compra1 = new ComprasPendientes('Jabon', 'Media', 3);

console.log(compra1.mostrar());
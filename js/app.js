class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
  }
  mostrar() {
    return `La tarea ${this.nombre} tiene una prioridad ${this.prioridad}`;
  }
}

let tarea1 = new Tarea('Aprendiendo JavaScript', 'Alta');

console.log(tarea1);
console.log(tarea1.mostrar());

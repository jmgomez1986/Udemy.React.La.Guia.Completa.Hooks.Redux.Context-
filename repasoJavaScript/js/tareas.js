export default class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
  }
  mostrar() {
    return `La tarea ${this.nombre} tiene una prioridad ${this.prioridad}`;
  }
}

export const nombreTarea = 'Hacer mate';

class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
  }
  mostrar() {
    return `La tarea ${this.nombre} tiene una prioridad ${this.prioridad}`;
  }
}

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
    mostrar() {
        return `${super.mostrar()} y la cantidad de ${this.cantidad}`;
    }
}

// let tarea1 = new Tarea('Aprendiendo JavaScript', 'Alta');

// console.log(tarea1);
// console.log(tarea1.mostrar());

// let compra1 = new ComprasPendientes('Jabon', 'Alta', 3);

// console.log(compra1);
// console.log(compra1.mostrar());

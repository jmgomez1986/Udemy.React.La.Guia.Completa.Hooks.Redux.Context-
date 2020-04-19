import Tarea from './tareas.js';

export default class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
    mostrar() {
        return `${super.mostrar()} y la cantidad de ${this.cantidad}`;
    }
}
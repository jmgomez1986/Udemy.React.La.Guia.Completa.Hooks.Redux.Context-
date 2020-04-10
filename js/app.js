// Object Constructor
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

Tarea.prototype.mostrarInformacionTarea = function() {
    return `La tarea ${this.nombre} tiene una prioridad ${this.urgencia}`;
}

const tarea1 = new Tarea('Aprender React', 'Urgente');

console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());
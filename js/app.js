let viajando = destino => `Viajando a la ciudad de: ${destino}`;

let viaje;
viaje = viajando('Londres');

console.log(viaje);

/////////////////

let viajando2 = (destino, duracion) => `Viajando a la ciudad de: ${destino} con una duracion de ${duracion}`;

let viaje2;
viaje2 = viajando2('Londres', '2 dias');

console.log(viaje2);

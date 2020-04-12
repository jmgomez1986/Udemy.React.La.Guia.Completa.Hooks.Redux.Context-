const banda = 'Iron Maiden';
const genero = 'Heavy Metal';
const canciones = ['Brave New World', 'Empire of the Clouds', 'Power Slave'];

// Forma anterior
const ironMaiden01 = {
    banda: banda,
    genero: genero,
    canciones: canciones
}

console.log("Forma anterior: ", ironMaiden01);

// Forma nueva
const ironMaiden02 = {banda, genero, canciones};

console.log('Forma nueva: ', ironMaiden02);

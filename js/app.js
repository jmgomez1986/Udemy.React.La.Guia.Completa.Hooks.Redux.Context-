let personas = [
  { nombre: 'Matias', edad: 33, aprendiendo: 'React' },
  { nombre: 'Analia', edad: 18, aprendiendo: 'Angular' },
  { nombre: 'Carlos', edad: 21, aprendiendo: 'PHP' },
  { nombre: 'Alejandra', edad: 35, aprendiendo: 'Python' },
  { nombre: 'Martin', edad: 30, aprendiendo: 'JavaScipt' },
  { nombre: 'Miguel', edad: 27, aprendiendo: 'Go' },
];

console.log('Personas: ', personas);

// Usando Filter: mayores a 28 años
const mayores = personas.filter(persona => {
    return persona.edad > 28;
});

console.log('Mayores a 28 años: ', mayores);

// Usando Find: obtener datos de un elemento particular del arreglo
const alejandra = personas.find(persona => {
    return persona.nombre === 'Alejandra';
});

console.log(`Alejandra esta aprendiendo ${alejandra.aprendiendo}`);

// Usando Reduce: obener las edades totales
const total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);

console.log('Promedio de edades: ', (total / personas.length));
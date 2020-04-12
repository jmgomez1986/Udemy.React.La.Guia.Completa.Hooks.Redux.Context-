let lenguajes = ['Javacript', 'PHP', 'Python'];
let frameworks = ['ReactJS', 'Laravel', 'Django'];

// Unir arreglos en uno

let combinacion01 = lenguajes.concat(frameworks);

console.log('Union forma anterior: ', combinacion01);

let combinacion02 = [...lenguajes, ...frameworks];

console.log('Union forma nueva: ', combinacion02);


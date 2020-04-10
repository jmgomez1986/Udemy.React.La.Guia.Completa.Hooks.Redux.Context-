// Function Declaration
function saludar(nombre) {
    console.log(`Bienvenido ${nombre}`);
}

saludar('Matias');

//Function  Expression
const cliente = function(nombre) {
    console.log(`Nombre: ${nombre}`);
}
cliente('Matias');

// La diferencia esta en que las 'Funtion Declaration'
// se pueden usar antes de ser declaradas, mientras
// que las otras, deben usarse luego de declararse
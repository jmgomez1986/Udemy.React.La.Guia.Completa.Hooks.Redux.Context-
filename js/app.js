// Function Declaration
function actividadFD(nombre = 'NN', actividad = 'Desconocida') {
    console.log(`La persona ${nombre} esta realizando la actividad ${actividad}`);
}

actividadFD('Matias', 'repaso de JavaScript');
actividadFD('Matias');
actividadFD();

//Function  Expression
const actividadFE = function(nombre = 'NN', actividad = 'Desconocida') {
    console.log(`La persona ${nombre} esta realizando la actividad ${actividad}`);
}

actividadFE('Matias', 'repaso de JavaScript');
actividadFE('Matias');
actividadFE();

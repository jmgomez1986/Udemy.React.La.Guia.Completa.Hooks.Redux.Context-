// Forma anterior
const persona01 = {
    nombre: 'Matias',
    trabajo: 'Desarrollador Web',
    edad: 500,
    musicaRock: true,
    mostrarInformacion: function() {
        console.log(
          `Forma anterior: ${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`
        );
    }
}

persona01.mostrarInformacion();

// Forma nueva

const persona02 = {
  nombre: "Matias",
  trabajo: "Desarrollador Web",
  edad: 500,
  musicaRock: true,
  mostrarInformacion() {
    console.log(
      `Forma nueva: ${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`
    );
  },
};

persona02.mostrarInformacion();

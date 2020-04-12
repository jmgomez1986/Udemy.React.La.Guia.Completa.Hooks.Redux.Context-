// Manera de hacerlo en 2020
async function getUserAsync(cantidadUsuarios) {
  const api = `https://randomuser.me/api/?results=${cantidadUsuarios}&nat=us`;

  try {
    let response = await fetch(api);
    let data = await response.json();
    return data.results;
  } catch (error) {
    return `Ocurrio el siguiente error:  ${error}`;
  }
}

getUserAsync(20).then((data) => {
  imprimirHTML(data);
});

function imprimirHTML(usuarios) {
    let html = '';

    usuarios.forEach(usuario => {
        html += `
            <li>
                Nombre: ${usuario.name.first} ${usuario.name.last}
                País: ${usuario.nat}
                Imagen:
                    <img src="${usuario.picture.medium}">
            </li>`;
    });

    const appContenedor = document.querySelector('#app');

    appContenedor.innerHTML = html;
}

// Hacer la petición con ajax
const descargarUsuarios = (cantidad) =>
  new Promise(async (resolve, reject) => {
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    const xhr = new XMLHttpRequest();

    xhr.open("GET", api, true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText).results);
      } else {
        reject(Error(xhr.statusText));
      }
    };

    xhr.onerror = (error) => reject(error); // opcional

    xhr.send();
  });

descargarUsuarios(20)
    .then(
        (miembros) => console.log(miembros),
        (error) => console.error(new Error('Hubo un error: ' + error))
    );

// Hacer la petición con fetch
// const downloadUser = (cantidad) =>
//   new Promise(async (resolve, reject) => {
//     const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

//     try {
//       const dataAjax = await fetch(api);
//       const results = await dataAjax.json();
//       resolve(results);
//     } catch (error) {
//       reject(error);
//     }
//   });

// async function called() {
//   try {
//     const data = await downloadUser(20);
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// called();

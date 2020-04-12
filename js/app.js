// Destructuring de objetos: es extraer los valores de un objeto
const aprendiendoJS = {
  version: {
    nueva: "ES6",
    anterior: "ES5",
  },
  frameworks: ["React", "VueJS", "AngularJS"],
};

console.log("Object literal: ", aprendiendoJS);

let version = aprendiendoJS.version.nueva;
let framework = aprendiendoJS.frameworks[1];

console.log("Version: ", version);
console.log("Framework: ", framework);

let { anterior } = aprendiendoJS.version;
console.log("Version (forma nueva): ", anterior);

let { frameworks } = aprendiendoJS;

console.log("Frameworks (forma nueva): ", frameworks);

let [first, ...rest] = aprendiendoJS.frameworks; // con listas. - trae los sobrante (...rest)

console.log(rest);

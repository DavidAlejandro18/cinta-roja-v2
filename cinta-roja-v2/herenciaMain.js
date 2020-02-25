const { Perro } = require('./herenciaPerro');
const { Gato } = require('./herenciaGato');

const snoopy = new Perro(4, "Snoopy", "Beagle");
const garfield = new Gato(4, "Garfield", "exotico");

console.log(garfield);
console.log(garfield.mauyar());

console.log(snoopy);
console.log(snoopy.ladrar());
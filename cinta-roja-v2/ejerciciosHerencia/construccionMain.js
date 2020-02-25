const { Casa } = require('./casa.js');
const { Edificio } = require('./edificio.js');

var nuevaCasa = new Casa(5, 4, 2, "San Nico", 4, 8, 6);

var nuevoEdificio = new Edificio(500, 600, 50, "Monterrey", 200, 70, 90);

console.log(nuevaCasa.metrosCuadrados());
console.log(nuevaCasa.getDireccion());
console.log(nuevaCasa.cambiarDireccion("Garcia"));
console.log(nuevaCasa.getDireccion());

console.log(nuevoEdificio.metrosCuadrados());
console.log(nuevoEdificio.getDireccion());
console.log(nuevoEdificio.cambiarDireccion("San Pedro"));
console.log(nuevoEdificio.getDireccion());
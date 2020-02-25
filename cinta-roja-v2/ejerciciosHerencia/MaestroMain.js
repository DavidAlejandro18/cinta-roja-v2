const { MaestroFisica } = require('./MaestroFisica.js');
const { MaestroMusica } = require('./MaestroMusica.js');

var calFisica = [95, 80, 70, 80, 100];
var calMusica = [56, 90, 100, 80, 70];

var profesorFisica = new MaestroFisica("Física", calFisica, 12);
var profesorMusica = new MaestroMusica("Música", calMusica, 45);

console.log(`Promedio Fisica => ${profesorFisica.promedio()}`);
console.log(`Promedio Musica => ${profesorMusica.promedio()}`);
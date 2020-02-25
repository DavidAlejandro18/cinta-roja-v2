const { Maestro } = require('./Maestro.js');

class MaestroMusica extends Maestro {
    constructor(materia, calificaciones, edad) {
        super(materia, calificaciones);
        this.edad = edad;
    }
}

module.exports = { MaestroMusica };
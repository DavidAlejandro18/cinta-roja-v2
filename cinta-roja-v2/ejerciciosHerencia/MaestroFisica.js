const { Maestro } = require('./Maestro.js');

class MaestroFisica extends Maestro {
    constructor(materia, calificaciones, antiguedad) {
        super(materia, calificaciones);
        this.antiguedad = antiguedad;
    }
}

module.exports = { MaestroFisica };
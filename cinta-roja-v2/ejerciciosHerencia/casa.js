const { Construccion } = require('./construccion.js');

class Casa extends Construccion {
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho) {
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho);
    }

    metrosCuadrados() {
        return `M2: ${this.largo * this.ancho}`;
    }

    getDireccion() {
        return `La dirección es: ${this.direccion}`;
    }

    cambiarDireccion(newDireccion) {
        this.direccion = newDireccion;
        return `La nueva dirección es: ${newDireccion}`;
    }
}

module.exports = { Casa };
const { Mascota } = require('./herenciaMascota.js');

class Perro extends Mascota {
    constructor(patas, nombre, raza) {
        super(patas, nombre);
        this.raza = raza;
        console.log("Creando perro");
    }

    ladrar() {
        return `${this.nombre} Guau guau!!!`;
    }
}

module.exports = { Perro };
const { Mascota } = require('./herenciaMascota.js');

class Gato extends Mascota {
    constructor(patas, nombre, raza) {
        super(patas, nombre);
        this.raza = raza;
        console.log("Creando gato");
    }

    mauyar() {
        return `${this.nombre} miau miau`;
    }
}

module.exports = { Gato };
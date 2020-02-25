class Mascota {
    constructor(patas, nombre) {
        this.nombre = nombre;
        this.patas = patas;
        this.cerebro = true;
        console.log("Creando mascota");
    }

    comer(comida) {
        return `${this.nombre} esta comiendo ${comida}`;
    }
}

module.exports = { Mascota };
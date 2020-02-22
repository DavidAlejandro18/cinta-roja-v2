class perro {
    constructor(nombre, raza, edad) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.cerebro = true;
    }

    comer() {
        return this.nombre + " esta comiendo.";
    }
}

const snoopy = new perro("Snoopy", "beagle", 5);

console.log(snoopy);

const ayudanteDeSanta = new perro("ayudante de santa", "cruza", 31);

console.log(ayudanteDeSanta);
/* var snoopy = {
    nombre: "Snoopy",
    raza: "beagle",
    edad: 5,
    comer: function() {
        return 'estoy comiendo'
    }
}

console.log(snoopy.nombre);
console.log(snoopy.raza);
console.log(snoopy.edad);
console.log(snoopy.comer()); */

console.log("/---------------------------/")

const auto = {
    color: 'rojo',
    asientos: 2,
    puertas: 2,
    marca: "Mazda",
    avanzar: function() {
        return "El auto esta avanzando"
    },
    frenar: function() {
        return "El auto esta frenando"
    },
    retrodecer: function() {
        return "El auto esta retrocediendo"
    }
}
console.log(auto);
console.log(auto.avanzar());
console.log(auto.frenar());
console.log(auto.retrodecer());

console.log("/---------------------------/")

const laptop = {
    color: 'roja',
    ram: 4,
    discoDuro: 1000,
    tamaño: 15.6,
    prender: function() {
        return "La laptop esta prendida"
    },
    apagar: function() {
        return "La laptop esta apagada"
    },
    reiniciar: function() {
        return "La laptop se esta reiniciando"
    }
}
console.log(laptop);
console.log(laptop.prender());
console.log(laptop.apagar());
console.log(laptop.reiniciar());

console.log("/---------------------------/")

const pizarron = {
    modelo: "X24r",
    color: "blanco",
    tamaño: 25,
    contieneMarcadores: false
}
console.log(pizarron);

console.log("/---------------------------/")

const television = {
    color: "negro",
    tamaño: 32,
    smartTV: true,
    prender: function() {
        return "La televisión esta prendida"
    },
    apagar: function() {
        return "La televisión esta apagada"
    }
}
console.log(television);
console.log(television.prender());
console.log(television.apagar())

console.log("/---------------------------/")
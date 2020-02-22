const myPenguin = {
    character: "Parker",
    origin: "Lover bird",
    author: "Robert J. Sherman",
    notes: "The leader of The Original Quack Pack barbershop quartet"
}

console.log(`Hola, soy un pinguino y mi nombre es ${myPenguin.character}`);

myPenguin.puedoVolar = false;

myPenguin.graznar = function () {
    console.log("kaww kaww!!");
}

myPenguin.graznar();

myPenguin.saludar = function () {
    console.log(`Hola, soy un pinguino y mi nombre es ${this.character}`);
}

myPenguin.saludar();

myPenguin.character = "Señor Pingu";
myPenguin.saludar();

myPenguin.volar = function () {
    if (this.puedoVolar) {
        console.log("¡Puedo volar!");
    } else {
        console.log("No puedo volar :(");
    }
}

myPenguin.volar();

myPenguin.puedoVolar = true;
myPenguin.volar();

var receta = {
    titulo: "Mole",
    porciones: 2,
    ingredientes: ["canela", "comino", "cocoa"]
}

console.log(receta);

console.log("Titulo: " + receta.titulo);
console.log("Porciones: " + receta.porciones);
console.log("Ingredientes: ");
for (i = 0; i < receta.ingredientes.length; i++) {
    console.log(receta.ingredientes[i]);
}

var biblio = [
    libro1 = {
        titulo: "Algoritmos fundamentales",
        autor: "Williams Howerton",
        leido: false
    },
    libro2 = {
        titulo: "Excel avanzado",
        autor: "Mauricio Garza",
        leido: true
    },
    libro3 = {
        titulo: "Los innovadores",
        autor: "David Tovar",
        leido: true
    }
];

for (i = 0; i < biblio.length; i++) {
    console.log("/................................/");
    console.log("Titulo: " + biblio[i].titulo);
    console.log("Autor: " + biblio[i].autor);
    if (biblio[i].leido) {
        console.log("Status de lectura: leido");
    } else {
        console.log("Status de lectura: no leido");
    }
}

class persona {
    constructor(nombre, edad, sexo, peso, altura) {
        this.nombre = nombre
        this.edad = edad
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
    }

    calcularIMC() {
        return "El IMC es: " + Math.round(this.peso / Math.pow(this.altura, 2), 1);
    }

    mayorDeEdad() {
        if (this.edad >= 18) {
            return "Es mayor de edad";
        }
        return "Es menor de edad";
        
    }

    obtenerRFC() {
        this.rfc = (`${this.nombre}-${this.edad}-${this.sexo}`);
    }
}

let mauricio = new persona("Mauricio", 18, "H", 58, 1.70);

console.log(mauricio);
console.log(mauricio.mayorDeEdad());
mauricio.rfc;
mauricio.obtenerRFC();
console.log(mauricio.rfc);

console.log(mauricio.calcularIMC());

class Cuenta {
    constructor(titular, cantidad) {
        this.titular = titular
        this.cantidad = cantidad
    }

    ingresar(cantidad) {
        if (this.cantidad + cantidad > 900) {
            return "Usted esta excendiendo el limite de $900; operación cancelada";
        } else {
            this.cantidad += cantidad;
            return "Operación exitosa. Has ingresado: " + cantidad + ". Tu saldo es de: " + this.cantidad;
        }
    }

    retirar(cantidad) {
        if (this.cantidad - cantidad < 10) {
            return "Usted no tiene fondos suficientes para hacer la operación";
        } else {
            this.cantidad -= cantidad
            return "Operación exitosa. Has retirado: " + cantidad + ". Tu saldo actual es: " + this.cantidad;
        }
    }
}

let cuenta = new Cuenta("David Tovar", 350);
console.log(cuenta.cantidad);

console.log(cuenta.retirar(75));
console.log(cuenta.ingresar(300));
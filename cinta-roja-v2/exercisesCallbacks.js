// Ejercicio 1
const mensaje = (callback) => {
    callback;
}

const textoMensaje = (texto) => {
    console.log(texto);
}

mensaje(textoMensaje("Hola mundo"));

//Ejercicio 2
const message = (mensaje, callback) => {
    callback(mensaje);
}

message("Baia Baia", (mensaje) => {
    console.warn(mensaje);  
});

//Ejercicio 3
const numeros = (num1, num2, callback) => {
    callback(num1, num2);
}

const suma = (num1, num2) => {
    console.log("Suma:", num1 + num2);
}

const resta = (num1, num2) => {
    console.log("Resta:", num1 - num2);
}

const multiplicacion = (num1, num2) => {
    console.log("Multiplicación:", num1 * num2);
}

numeros(4, 4, suma);
numeros(12, 3, resta);
numeros(12, 12, multiplicacion);

//Ejercicio 4
const ordenSuperior = (cadena, callback) => {
    callback(cadena);
}

const mayusculas = (cadena) => {
    console.log("Texto en mayusculas:", cadena.toUpperCase());
}

const minusculas = (cadena) => {
    console.log("Texto en minusculas:", cadena.toLowerCase());
}

ordenSuperior("Pejelagarto", mayusculas);
ordenSuperior("Pejelagarto", minusculas);

//Ejercicio 5
const tiempo = [120, 400, 200, 100];

const tomarTiempo = (tiempos, callback) => {
    callback(tiempos);
}

tomarTiempo(tiempo, (tiempos) => {
    let = dosHoras = [];
    tiempos.forEach((element) => {
        let minutosAHoras = element / 60;
        if (minutosAHoras > 2) {
            dosHoras.push(element);
        }
    })
    console.log(dosHoras);
});
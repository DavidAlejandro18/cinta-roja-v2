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
const suma = (num1, num2, callback) => {
    callback(num1, num2);
}

suma(4, 4, (num1, num2) => {
    console.log("Suma:", num1 + num2);
    console.log("Resta:", num1 - num2);
    console.log("Multiplicación", num1 * num2);
});

//Ejercicio 4
const ordenSuperior = (cadena, callback) => {
    callback(cadena);
}

ordenSuperior("Pejelagarto", (cadena) => {
    console.log("Texto en mayusculas:", cadena.toUpperCase());
    console.log("Texto en minusculas:", cadena.toLowerCase());
});

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
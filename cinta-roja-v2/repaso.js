function mostrarNombre(nombre) {
    return nombre;
}


//ECMAScript 6
// Arrow functions
const mostrarNoombre = (nombre) => {
    return nombre;
}

console.log(mostrarNoombre("David"));

const farenheitACentigrados = (farenheit) => {
    console.log(`${farenheit}°F = ${Math.round((farenheit - 32) * (5 / 9))}°C`);
}

farenheitACentigrados(32);

// Condicionales
// Función que haya el maximo entre 2 números

const maximoDos = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    } else if(num1 < num2) {
        return num2;
    } else {
        return num1;
    }
}

console.log(maximoDos(3, 6));

// Función que revisa si un numero es negativo, positivo o cero

const revisarNumero = (numero) => {
    if (numero === 0) {
        return "El número instroducido es cero";
    } else if(numero > 0) {
        return "El número instroducido es positivo";
    } else if(numero < 0) {
        return "El número instroducido es negativo";
    } else {
        return "Algo raro paso";
    }
}

console.log(revisarNumero(12));

// Ciclo
// Función que imprime todos los numeros de 1 hasta n

const imprimeNumeros = (n) => {
    for(let i = 1; i <= n; i++) {
        console.log(i);
    }
}

imprimeNumeros(11);

// Arreglos y objetos
const personas = {
    nombre: "Alan",
    edad: 25
};

const lista = [1, "3", true, personas];
console.log(lista);
console.log(lista[2]);
console.log(lista[3].nombre);
lista.push("alan");
console.log(lista);
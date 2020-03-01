// Función anonima
const suma = function(nombre) {
    console.log(1+2 + nombre);
}

const bye = function adios(nombre) {
    console.log(`adios ${nombre}`);
}

suma("David");
bye("David");

// Arrow functions
const adios = nombre => `adios ${nombre}`;
console.log(adios("David"));

const sumaNum = (num1, num2) => num1 + num2;
const result = sumaNum(2, 4);
console.log(result);

const numero = num => Number(num);
const add = (a,b) => numero(a) + numero(b);
const resultado = add("33", 2);
console.log(resultado);

const parseadorNumeros = function(num) {
    return Number(num);
}

const suma_2 = function(a, b) {
    const numero1 = parseadorNumeros(a);
    const numero2 = parseadorNumeros(b);
    return numero1 + numero2;
}

const resultado2 = suma_2("2", 2);
console.log(resultado2);
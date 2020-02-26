console.log("array");

// Creat a new array
const student = ["Juan", 19, true];

console.log("Array:", student);
console.log("Nombre:", student[0]);
console.log("Edad:", student[1]);
console.log("Valor:", student[2]);

// Creat a new object array
const student_2 = new Array("David", 19, true);

console.log("Array:", student_2);
console.log("Nombre:", student_2[0]);
console.log("Edad:", student_2[1]);
console.log("Valor:", student_2[2]);

console.log("Longitud:", student_2.length);
student_2.push("Programación");
console.log("Longitud:", student_2.length);
console.log("Student 2:", student_2);

console.log("<- POP ->");
student_2.pop();
console.log("Student 2:", student_2);

console.log("<- SORT ->");
const numbers = [12, 23, 39, 22];
numbers.sort();
console.log("Numbers", numbers);

console.log("<- REVERSE ->");
numbers.reverse();
console.log("Numbers", numbers);

console.log("<- SPLICE ->");
numbers.splice(1, 1);
console.log("Numbers:", numbers);

// Array class
class ArrayObject {
    constructor(values) {
        const arrayValues = values;
    }
}

class Alumno {
    constructor(nombre, edad, calificaciones) {
        this.nombre = nombre;
        this.edad = edad;
        this.calificaciones = calificaciones;
    }

    agregarCalificacion(calificaciones) {
        this.calificaciones.push(calificaciones);
        return this.calificaciones;
    }

    getProm() {
        let suma = 0;
        this.calificaciones.map((element) => suma += element);
        return (suma / this.calificaciones.length);
    }
}

const Diego = new Alumno("Diego", 24, [70, 80, 100]);
const David = new Alumno("David", 19, [80, 70, 90]);

console.log(David.agregarCalificacion(100));
console.log("Calificaciones Diego:", Diego.calificaciones);
console.log("Calificaiones David:", David.calificaciones);

// Iteración de arrays
const numeros = [2, 4, 6];

for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
}

console.log("-------------------------------");

numeros.forEach((num) => {
    console.log(num);
})

console.log("-------------------------------");

numeros.map((numero) => console.log(numero));

console.log("-------------------------------");

const filtro = numeros.filter((num) => {
    return num > 3;
})

console.log(filtro);
// Código Async
/* console.log(1);
console.log(2);
console.log(3); */

// Ejecución con un callback
/* console.log(1);
setTimeout(() => {
    console.log(2);
}, 3000);
console.log(3); */

// Cuello de botella
console.log(1);
setTimeout(() => {
    console.log(2);
}, 3000);
for (let index = 0; index <= 99; index++) {
    console.log(index);
}
console.log(4);
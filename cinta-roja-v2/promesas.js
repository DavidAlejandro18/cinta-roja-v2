const promise = new Promise((resolve, reject) => {
    const number = Math.round(Math.random() * 10);
    console.log(number);

    setTimeout(
        () => {
            if(number > 5) {
                resolve(number)
            } else {
                reject("Menor a 5, el numero es: " + number)
            }
        }, 1000 
    );
});

promise
    .then((number) => console.log(number))
    .catch((error) => console.log(error));
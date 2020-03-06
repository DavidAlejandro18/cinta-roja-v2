/* const convertirMilisegundos = num => num * 1000;

setTimeout(() => {
    console.log("hola");
}, convertirMilisegundos(3));

const getUserById = (id, callback) => {
    const user = {
        id,
        nombre: "David"
    }

    if (id === 2) {
        return callback("No tienes permitido el acceso");
    }

    callback(null, user);
}

getUserById(2, (err, user) => {
    if (err) {
        return console.log("err", err);
    }
    return console.log(user)
});

getUserById(3, (err, user) => {
    if (err) {
        return console.log("err", err);
    }
    return console.log("user",user)
}); */

//getUserById(3, (user) => console.log(user));


//Se importa el modulo de dataset.js
const { empleados, salarios } = require("./dataset.js");

// InDataset
const searchInDataSet = (id, dataset) => {
    return dataset.find(
        (item) => item.id === id
    );
};

// ^^^^^^^^^^^^^^^^^ Refactorizar

/* const empleadosInDataset = (id) => {
    return empleados.find((empleado) => empleado.id === id );
}

const salariosInDataset = (user) => {
    return salarios.find((salario) => salario.id === user.id );
} */

// The Gets
const getUserById = (id, miFuncion) => {
    return new Promise((resolve, reject) => {
        const empleado = searchInDataSet(id, empleados);
    
        if (!empleado) {
            reject(`No hay usuario con el id ${id}`);
        }
        
        resolve(empleado)
    })
}

const getSalaryByUser = (user) => {
    return new Promise((resolve, reject) => {
        const salario = searchInDataSet(user.id, salarios);
    
        if (!salario) {
            reject(`No existe un salario para el usuario ${user.name} con el id ${user.id}`);
        }
    
        resolve({
            ...user, 
            salario: salario.salario
        });
    })
}

// Execute
/* getUserById(2, (error, empleado) => {
    if (error) {
        return console.log('Error', error);
    }
    getSalaryByUser(empleado, (error, salario) => {
        if(error) {
            return console.log('Error:', error);
        }
        console.log(`El salario es: ${salario.salario} del usuario ${empleado.name}.`);
    })
}); */

getUserById(2)
    .then((respuesta) => getSalaryByUser(respuesta))
    .then((salario) => console.log(salario))
    .catch((error) => console.log(error));
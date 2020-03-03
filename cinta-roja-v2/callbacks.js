/* const convertirMilisegundos = num => num * 1000;

setTimeout(() => {
    console.log("hola");
}, convertirMilisegundos(3)); */

/* const getUserById = (id, callback) => {
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
const empleadosInDataset = (id) => {
    return empleados.find((empleado) => empleado.id === id );
}

const salariosInDataset = (user) => {
    return salarios.find((salario) => salario.id === user.id );
}

// The Gets
const getUserById = (id, miFuncion) => {
    const empleado = empleadosInDataset(id);

    if (!empleado) {
        return miFuncion(`No hay usuario con el id ${id}`);
    }
    
    return miFuncion(null, empleado)
}

const getSalaryByUser = (user, myFunction) => {
    const salario = salariosInDataset(user);

    if (!salario) {
        return myFunction(`No existe un salario para el usuario ${user.name}`);
    }

    return myFunction(null, salario);
}

// Execute
getUserById(2, (error, empleado) => {
    if (error) {
        return console.log('Error', error);
    }
    getSalaryByUser(empleado, (error, salario) => {
        if(error) {
            return console.log('Error:', error);
        }
        console.log(`El salario es: ${salario.salario} del usuario ${empleado.name}.`);
    })
});
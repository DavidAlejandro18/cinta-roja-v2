//Se importa el modulo de dataset.js
const { empleados, salarios } = require("./dataset.js");

// InDataset
const searchInDataSet = (id, dataset) => {
    return dataset.find(
        (item) => item.id === id
    );
};

// The Gets
const getUserById = async(id) => {
    const empleado = searchInDataSet(id, empleados);

    if (!empleado) {
        throw new Error(`No hay usuario con el id ${id}`);
    }
    
    return (empleado)
}

const getSalaryByUser = async(user) => {
    const salario = searchInDataSet(user.id, salarios);

    if (!salario) {
        throw new Error(`No existe un salario para el usuario ${user.name} con el id ${user.id}`);
    }

    return({
        ...user, 
        salario: salario.salario
    });
}

const salarioByUser = async(id) => {
    const user = await getUserById(id);
    const salario = await getSalaryByUser(user);

    return salario;
}

salarioByUser(2)
    .then((respuesta) => console.log(respuesta))
    .catch((error) => console.log(error));
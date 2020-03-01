/* const convertirMilisegundos = num => num * 1000;

setTimeout(() => {
    console.log("hola");
}, convertirMilisegundos(3)); */

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
});
//getUserById(3, (user) => console.log(user));
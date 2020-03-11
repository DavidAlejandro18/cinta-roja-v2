const request = require('request');

const URL_POKEMON = 'https://pokeapi.co/api/v2/pokemon/1';

request.get(URL_POKEMON, (error, response, body) => {
    //Operador ternario
    response.statusCode == 200 ? console.log(`Tipos: ${JSON.parse(body).types.map(pokeInfo => pokeInfo.type.name)}`) : console.log(error)
})

request.get(URL_POKEMON, (error, response, body) => {
    //Operador ternario
    response.statusCode == 200 ? console.log(`Stats: ${JSON.parse(body).stats.map(pokeInfo => pokeInfo.stat.name)}`) : console.log(error)
})
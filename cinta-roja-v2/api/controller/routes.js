const express = require('express');
const bodyParser = require('body-parser');
const { Movie } = require('../models/pelicula');

const app = express();

// midleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// esta es una ruta
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/create/pelicula', (req, res) => {
    const { title, year, resume, genre, cover_url } = req.body
    console.log("este es el body", req.body);
    const newMovie = Movie({
        title, 
        year, 
        resume, 
        genre, 
        cover_url
    })

    newMovie.save((error, movie) => {
        console.log("Movie", movie)
        err ? res.status(409).send(err) : res.status(201).send(movie)
    })
});
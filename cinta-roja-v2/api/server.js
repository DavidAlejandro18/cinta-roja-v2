const express = require('express');
const bodyParser = require('body-parser');

const { Movie } = require('./models/pelicula');

const app = express();

// midleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// esta es una ruta
app.get('/movies', (req, res) => {
  Movie.find().exec()
  .then(movie => movie ? res.send(movie) : res.status(404).send({ message: 'Movie not found' }))
  .catch(err => res.status(409).send(err))
});

app.get('/movie/:id', (req, res) => {
  const { id } = req.params;
  Movie.findById(id).exec()
  .then(movie => res.send(movie))
  .catch(err => res.status(409).send(err))
})

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

  newMovie.save((err, movie) => {
      console.log("Movie", movie)
      err ? res.status(409).send(err) : res.status(201).send(movie)
  })
});

app.put('/movie/:id', (req, res) => {
  const { id } = req.params;
  Movie.findByIdAndUpdate(id, {$set: req.body}, {new: true}).exec()
  .then(movie => res.send(movie))
  .catch(err => res.status(409).send(err))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
import parser  from 'body-parser'
import express from 'express'
const app = express()
import connection from './db/connection.js'
import Pokemon from './models/Pokemon.js'

app.use(parser.json())

app.listen(3000, () => console.log('app listening on port 3000'))

app.get("/", (req,res) => {
  res.send(' Thing!')
})

// Read
app.get('/pokemon', (req,res) => {
  Pokemon.find({})
    .then(pokemons => res.json(pokemons))
})

// Read
app.get('/pokemon/name/:name', (req,res) => {
  Pokemon.find({name: req.params.name})
    .then(pokemon => res.json(pokemon))
})

// Read
app.get('/pokemon/pokedexNumber/:number', (req,res) => {
  Pokemon.find({id: req.params.number})
    .then(pokemon => res.json(pokemon))
})

// Create 
app.post('/pokemon', (req, res) => {
  Pokemon.create(req.body)
    .then(pokemon => res.json(pokemon))
})

// Delete
app.delete('/pokemon/:number', (req, res) => {
  Pokemon.deleteOne({id: req.params.number})
    .then(pokemon => res.json(pokemon))
})

import Pokemon from '../models/Pokemon.js'
import express from 'express'
const router = express.Router()

// Create 
router.post('/', (req, res) => {
  Pokemon.create(req.body)
    .then(pokemon => res.json(pokemon))
})

// Read
router.get('/', (req,res) => {
  Pokemon.find({})
    .then(pokemons => res.json(pokemons))
})

// Read
router.get('/', (req,res) => {
  Pokemon.find({name: req.params.name})
    .then(pokemon => res.json(pokemon))
})

// Update
router.put('/', (req,res) => {
  Pokemon.findOneAndUpdate(
    { pokedexNumber: req.params.number },req.body, {new: true})
    .then(pokemon => { res.json(pokemon)
  })
})

// Delete
router.delete('/', (req, res) => {
  Pokemon.deleteOne({id: req.params.number})
    .then(pokemon => res.json(pokemon))
})

export default router

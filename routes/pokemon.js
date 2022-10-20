import Pokemon from '../models/Pokemon.js'
import express from 'express'
const router = express.Router()

// Creates New Pokemon
router.post('/', (req, res) => {
  Pokemon.create(req.body)
    .then(pokemon => res.json(pokemon))
})

// Retrieves Data For All Pokemon 
router.get('/all', (req,res) => {
  Pokemon.find({})
    .then(pokemons => res.json(pokemons))
})

// Deletes All Pokemon From Database
router.delete('/all', (req, res) => {
  Pokemon.deleteMany({})
    .then(pokemon => res.json(pokemon))
})

export default router

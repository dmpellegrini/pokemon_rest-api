import Pokemon from '../models/Pokemon.js'
import express from 'express'
const router = express.Router()

// Read finds pokemon by pokedex number
router.get('/:number', (req,res) => {
  Pokemon.find({pokedexNumber: req.params.number})
    .then(pokemon => res.json(pokemon))
})

// Updates pokemon by number endpoint
router.put('/:number', (req,res) => {
  Pokemon.findOneAndUpdate(
    { pokedexNumber: req.params.number },req.body, {new: true})
    .then(pokemon => { res.json(pokemon)
  })
})

// Deletes pokemon by number endpoint
router.delete('/:number', (req, res) => {
  Pokemon.deleteOne({pokedexNumber: req.params.number})
    .then(pokemon => res.json(pokemon))
})

export default router

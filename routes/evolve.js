import Pokemon from '../models/Pokemon.js'
import express from 'express'
const router = express.Router()

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

import Pokemon from '../models/Pokemon.js'
import express from 'express'
const router = express.Router()

// Retrieves Pokemon based on name
router.get('/:name', (req,res) => {
  Pokemon.find({name: req.params.name})
    .then(pokemon => res.json(pokemon))
})

// Updates Pokemon based on name
router.put('/:name', (req,res) => {
  Pokemon.findOneAndUpdate(
    {name: req.params.name},req.body, {new: true})
    .then(pokemon => { res.json(pokemon)
  })
})

// Deletes Pokemon based on name
router.delete('/:name', (req, res) => {
  Pokemon.deleteOne({id: req.params.name})
    .then(pokemon => res.json(pokemon))
})

export default router

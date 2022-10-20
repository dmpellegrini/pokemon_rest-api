import Pokemon from '../models/Pokemon.js'
import express from 'express'
const router = express.Router()

// Read
router.get('/:name', (req,res) => {
  Pokemon.find({habitat: req.params.name})
    .then(pokemon => res.json(pokemon))
})

// Delete
router.delete('/:name', (req, res) => {
  Pokemon.deleteMany({habitat: req.params.name})
    .then(pokemon => res.json(pokemon))
})

export default router

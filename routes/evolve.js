import Pokemon from '../models/Pokemon.js'
import express from 'express'
const router = express.Router()

// Read
router.get('/:name', (req,res) => {
  Pokemon.find({evolves_from: req.params.name})
    .then(pokemon => res.json(pokemon))
})

export default router

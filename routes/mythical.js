import Pokemon from '../models/Pokemon.js'
import express from 'express'
const router = express.Router()

// Read
router.get('/', (req,res) => {
  Pokemon.find({is_mythical: true})
    .then(pokemon => res.json(pokemon))
})

// Delete
router.delete('/', (req, res) => {
  Pokemon.deleteMany({is_mythical: true})
    .then(pokemon => res.json(pokemon))
})

export default router

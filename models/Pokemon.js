import mongoose from 'mongoose'

const pokemonSchema  = new mongoose.Schema({
  name: String,
  id: Number,
  evolves_from_species: String,
  habitat: String,
})


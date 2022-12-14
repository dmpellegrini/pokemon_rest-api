import mongoose from 'mongoose'

const pokemonSchema  = new mongoose.Schema({
  name: String,
  pokedexNumber: Number,
  habitat: String,
  evolves_from: String,
  is_legendary: Boolean, 
  is_mythical: Boolean, 
  sprite: String,
  off_art: String,
})

export default mongoose.model('Pokemon', pokemonSchema)

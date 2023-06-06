import mongoose from 'mongoose'
import connection from '../db/connection.js'
import data from '../db/pokemon151.json' assert {type: 'json'}
import Pokemon from '../models/Pokemon.js'


const pokemonData = data.map(item => {
  const pokemon = {}
  pokemon.name = item.name
  pokemon.pokedexNumber = item.id
  pokemon.habitat = item.habitat.name
  pokemon.encounters = item.encounters
  pokemon.evolves_from = item.evolves_from
  pokemon.is_legendary = item.is_legendary
  pokemon.is_mythical = item.is_mythical
  pokemon.sprite = item.sprite
  pokemon.off_art = item.off_art
  pokemon.types = item.types
  pokemon.bio = item.bio
  return pokemon
})

Pokemon
  .deleteMany({})
  .then(() => Pokemon.insertMany(pokemonData))
  .then(() => connection.close())
  .then(() => console.log("Done!"))
  .catch(error => console.log("Error", error))


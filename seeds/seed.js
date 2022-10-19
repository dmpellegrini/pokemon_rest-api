import mongoose from 'mongoose'
import connection from '../db/connection.js'
import data from '../db/pokemon3.json' assert {type: 'json'}
import Pokemon from '../models/Pokemon.js'

const pokemonData = data.map(item => {
  const pokemon = {}
  pokemon.name = item.name
  pokemon.id = item.id
  pokemon.habitat = item.habitat.name
  // if (item.evolves_from_species === null) {
  //   pokemon.evolves_from = "birth"
  // }else{
  //   pokemon.evolves_from = item.evolves_from_species
  // }
  pokemon.is_legendary = item.is_legendary
  pokemon.is_mythical = item.is_mythical
  return pokemon
})

Pokemon
  .deleteMany({})
  .then(() => Pokemon.create(pokemonData))
  .then(() => connection.close())
  .then(() => console.log("Done!"))
  .catch(error => console.log("Error", error))


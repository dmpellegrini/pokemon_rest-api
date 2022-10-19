// Imports node fetch for internal use
import fetch from 'node-fetch'

// Imports fs for internal use to make json file
import {promises as fsPromises} from 'fs'

// Imports axios for internal use
import axios from 'axios'

// Stores the PokéAPI base url to constant
const url = 'https://pokeapi.co/api/v2/pokemon-species/'

// Declares an empty array for Pokemon JSON objects
let pokeBalls = []

// Determines how many Pokemon should be sourced
const pokedexLimit = 3 

async function fetchPokemon(index) {
  const response = await axios(url+`${index}`)
  console.log(index)
  pokeBalls[index-1] = response.data
}

async function catchPokemon(pokedexLimit) {
  for(let i = 0; i < pokedexLimit; i++){
    await fetchPokemon(i+1)
  }
  await fsPromises.writeFile("./db/pokemon151.json", JSON.stringify(pokeBalls))
}

catchPokemon(151)


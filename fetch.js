// Imports node fetch for internal use
import fetch from 'node-fetch'

// Imports fs for internal use to make json file
import {promises as fsPromises} from 'fs'

// Imports axios for internal use
import axios from 'axios'

// Stores the PokéAPI base url to constant
const url = 'https://pokeapi.co/api/v2/pokemon-species/'
const url2 = 'https://pokeapi.co/api/v2/pokemon/'

// Declares an empty array for Pokemon JSON objects
let pokeBalls = []

// Determines how many Pokemon should be sourced
const pokedexLimit = 3 

async function fetchPokemon(index) {
  const response = await axios(url+`${index}`)
  const response2 = await axios(url2+`${index}`)
  const pokemon = response.data
  const pokemon2 = response2.data
  // console.log(pokemon.name, pokemon.id, pokemon.habitat.name, pokemon.evolves_from_species, pokemon.is_legendary, pokemon.is_mythical)
  // console.log(pokemon2.sprites.front_default, pokemon2.sprites.other['official-artwork'])
  const pokeBall = {
    name: pokemon.name,
    id: pokemon.id,
    habitat: pokemon.habitat.name,
    evolves_from: '',
    is_legendary: pokemon.is_legendary,
    is_mythical: pokemon.is_mythical,
    sprite: pokemon2.sprites.front_default,
    off_art: pokemon2.sprites.other['official-artwork'].front_default,
    
  }
  
  if (pokemon.evolves_from_species === null) {
    pokeBall.evolves_from = "birth"
  }
  else{
    pokeBall.evolves_from = pokemon.evolves_from_species.name
  }
  
  // pokeBalls[index-1] = response.data
  pokeBalls[index-1] = pokeBall 
  console.log(pokeBall)
}

async function catchPokemon(pokedexLimit) {
  for(let i = 0; i < pokedexLimit; i++){
    await fetchPokemon(i+1)
  }
  await fsPromises.writeFile("./db/pokemon151.json", JSON.stringify(pokeBalls))
}

// fetchPokemon(2)
catchPokemon(151)


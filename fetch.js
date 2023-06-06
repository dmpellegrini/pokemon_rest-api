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
const pokedexLimit = 151 

async function fetchPokemon(index) {
  const response = await axios(url+`${index}`)
  const response2 = await axios(url2+`${index}`)
  const response3 = await axios(url2+`${index}/encounters`)
  const pokemon = response.data
  const pokemon2 = response2.data
  const pokemonEncounters = response3.data
  const pokeBall = {
    name: pokemon.name,
    id: pokemon.id,
    habitat: pokemon.habitat.name,
    encounters: [],
    evolves_from: '',
    is_legendary: pokemon.is_legendary,
    is_mythical: pokemon.is_mythical,
    sprite: pokemon2.sprites.front_default,
    off_art: pokemon2.sprites.other['official-artwork'].front_default,
    types: [],
    bio: pokemon.flavor_text_entries[3].flavor_text
  }
  
  if (pokemon.evolves_from_species === null) {
    pokeBall.evolves_from = "birth"
  }
  else{
    pokeBall.evolves_from = pokemon.evolves_from_species.name
  }

  pokemon2.types.forEach(type => {
    pokeBall.types.push(type.type.name)
  });

  pokemonEncounters.forEach(location => {
    pokeBall.encounters.push(location.location_area.name)

  });
  
  pokeBalls[index-1] = pokeBall 
  console.log(pokeBall)
}

async function catchPokemon(pokedexLimit) {
  for(let i = 0; i < pokedexLimit; i++){
    await fetchPokemon(i+1)
  }
  await fsPromises.writeFile("./db/pokemon151.json", JSON.stringify(pokeBalls))
}

catchPokemon(pokedexLimit)


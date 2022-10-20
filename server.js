import parser  from 'body-parser'
import express from 'express'
const app = express()
import connection from './db/connection.js'
import Pokemon from './models/Pokemon.js'
import evolveRoute from './routes/evolve.js'
import habitatRoute from './routes/habitat.js'
import legendaryRoute from './routes/legendary.js'
import mythicalRoute from './routes/mythical.js'
import nameRoute from './routes/name.js'
import pokedexRoute from './routes/pokedex.js'
import pokemonRoute from './routes/pokemon.js'

app.use(parser.json())
app.use('/pokemon/evolvution', evolveRoute)
app.use('/pokemon/habitat', habitatRoute)
app.use('/pokemon/legendary', legendaryRoute)
app.use('/pokemon/mythical', mythicalRoute)
app.use('/pokemon/name', nameRoute)
app.use('/pokedex', pokedexRoute)
app.use('/pokemon', pokemonRoute)

app.listen(3000, () => console.log('app listening on port 3000'))

// Shows A Welcome Message and Directions To User
app.get("/", (req,res) => {
  res.send('Welcome To The Abbreviated Pokemon Rest API!')
})


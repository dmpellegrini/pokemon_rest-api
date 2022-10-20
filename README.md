# Dannys Condensed Pokemon Rest API

This API sources its data from PokeAPI and retrieves choice data for the first 151 Pokemon.

If you would like to check out that API for yourself please refer to the link below

<!-- Link -->
[PokéAPI](https://pokeapi.co/)

The PokeAPI is extremely comprehensive (which is great) but the amount of data can be overwhelming. 

This API aims to take choice pokedex information from that API


## How The Data Was Retrieved

All of the data was retrieved by calling the first 151 "pokemon-species" endpoints. 

For example if you wanted to get the first pokemon (bulbasaur) of the "pokemon-species" endpoint you would do the following...

https://pokeapi.co/api/v2/pokemon-species/1

To populate this API, 151 calls were made to the PokeAPI database and all the raw data from those get requests was stored in a JSON file. Then some choice pieces of data were retrieved from that JSON file and stored sequentially in a MongoDB database.


## Data Provided

Below is the list of the data points provided with each Pokemon object. 

<!-- Unordered List -->
- name 
- pokedex number
- habitat
- previous evolutionary form 
- mythical status
- legendary status

There are plans to include more data in future versions of this API.


## Setting Up The API 

Unfortunately the API is not yet deployed so there are a few steps needed to set it up on your local machine.

<!-- Ordered List -->
1. Fork and clone this repository then navigate to the pokemon_rest-api directory

2. Look in the package.json file and install all of the dependencies

3. Run the fetch.js file in node (this will create a json file for parsing)
```
node fetch.js
```

4. Navigate to the seed directory and run the seed.js file (to seed the MongoDB database) 
```
node seed.js
```

5. Navigate to the root directory and run the server.js file with nodemon
```
nodemon server.js
```

6. Finally access the Mongo sever on your local machine with the following url in your choice we browser

<!-- Link -->
[http://localhost:3000/](http://localhost:3000/)

Congratulations! You are now set up to make queries to this Pokemon API.


## Querying The Data 

This API has Create, Read, Update, and Delete capabilities (Full Crud). 

The following routes will allow you to interact with the data in several ways


## Seaching

### Show All Pokemon
To show all pokemon in the data base
<!-- Link -->
[http://localhost:3000/pokemon/all](http://localhost:3000/pokemon/all)

### Show Pokemon By Pokedex Number
To show a pokemon by its pokedex number go to the following endpoint
<!-- Link -->
[http://localhost:3000/pokedex/1](http://localhost:3000/pokedex/1)

In this case we have reached the endpoint for "1" (bulbasaur), but for any other pokemon, simply changethe last number in the url to anything between 1 and 151.

### Show Pokemon By Name
To show a pokemon by its name go to the following endpoint
<!-- Link -->
[http://localhost:3000/pokemon/name/bulbasaur](http://localhost:3000/pokemon/name/bulbasaur)

In this case we have reached the endpoint for bulbasaur, but for any other pokemon, simply change the name in the url to any of the first 151 pokemon and they will show up 

### Show Mythical Pokemon 
To show only mythical pokemon go to the following endpoint
<!-- Link -->
[http://localhost:3000/pokemon/mythical](http://localhost:3000/pokemon/mythical)

In this case, all the mythical pokemon will show up (this will only be mew in a fesh dataset) 

### Show Legendary Pokemon 
To show only Legendary pokemon go to the following endpoint
<!-- Link -->
[http://localhost:3000/pokemon/legendary](http://localhost:3000/pokemon/legendary)

In this case, all the legendary pokemon will show up (this will be Arcticuno, Zapdos, Moltres and Mewtwo in a fesh dataset) 

### Show Pokemon Of A Particular Habitat 
To show pokemon of a particular habitat use the following endpoint
<!-- Link -->
[http://localhost:3000/pokemon/habitat/grassland](http://localhost:3000/pokemon/habitat/grassland)

In this case, all the grassland habitat pokemon will show up.  Simply change the last word in the url to a different existing pokemon habitat and all the relevant pokemon will show up. 

### Show Next Pokemon in Evolution Chain 
To show the next pokemon in the evolution chain, simply enter the pokemon name you want to query and you will find out who they evolve into.  
<!-- Link -->
[http://localhost:3000/pokemon/evolution/bulbasaur](http://localhost:3000/pokemon/evolution/bulbasaur)

In this case, we entered bulbasaur (who evolves into ivysaur), so ivysaur will show up. 

It should be noted that if you your pokemon evolves into no one, your search will return nothing.

Also if you want to access all the pokemon in their root form, simply enter "birth" at the end of the url.

## Creating

### Create A New Pokemon
To create a new Pokemon make a post request to the follwing endpoint
<!-- Link -->
[http://localhost:3000/pokemon](http://localhost:3000/pokemon)

Format the body of the request in the following manner or else it will be rejected

```
{
  "name": "nodemon",
  "pokedexNumber": 152,
  "habitat": "rare",
  "evolves_from": "birth",
  "is_legendary": true,
  "is_mythical": true
}
```

## Deleting

### Delete All Pokemon
To Delete all pokemon make a Delete request with the following endpoint
<!-- Link -->
[http://localhost:3000/pokemon/all](http://localhost:3000/pokemon/all)


### Delete Pokemon By Pokedex Number
To delete a pokemon by its pokedex number make a delete request to the following endpoint
<!-- Link -->
[http://localhost:3000/pokedex/1](http://localhost:3000/pokedex/1)

In this case we have reached the endpoint for "1" (bulbasaur) so bulbasaur will be deleted

### Delete Pokemon By Name
To delete a pokemon by its name make a delete request to the following endpoint 
<!-- Link -->
[http://localhost:3000/pokemon/name/bulbasaur](http://localhost:3000/pokemon/name/bulbasaur)
In this case we have reached the endpoint for bulbasaur, so bulbasaur will be deleted. 

### Delete Mythical Pokemon 
To delete all mythical pokemon make a delete request to the following endpoint
<!-- Link -->
[http://localhost:3000/pokemon/mythical](http://localhost:3000/pokemon/mythical)

### Delete Legendary Pokemon 
To delete all Legendary pokemon make a delete request to the following endpoint
<!-- Link -->
[http://localhost:3000/pokemon/legendary](http://localhost:3000/pokemon/legendary)

### Delete Pokemon Of A Particular Habitat 
To delete pokemon of a particular habitat make a delete request to the following endpoint
<!-- Link -->
[http://localhost:3000/pokemon/habitat/grassland](http://localhost:3000/pokemon/habitat/grassland)

In this case, all the grassland habitat pokemon will be deleted. 







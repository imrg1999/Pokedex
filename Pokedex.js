const pokemonCount = 649;
var pokedex = {};   // Pokedex Map {1: {"name" : "bulbasaur", "img" : url, "type" : ["grass", "poison"], "desc" : "......."}}//

window.onload = async()  => {
    //await getPokemon(1);

    for(let i=1; i<= pokemonCount; i++) {
        await getPokemon(i);
    }

    console.log(pokedex);
}

const getPokemon = async(num)  =>{
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();
    /*we'll pass num (1-1025) to the url to make it https://pokeapi.co/api/v2/pokemon/1; which
    will retrieve the respective data*/

    let res = await fetch(url);
    let pokemon = await res.json();
    //console.log(pokemon);

    let pokemonName = pokemon["name"];
    let pokemonType = pokemon["types"];
    let pokemonImage = pokemon["sprites"]["front-default"];

    res = await fetch(pokemon["species"]["url"]);
    let pokemonDescription = await res.json();
    //console.log(pokemonDescription);

    pokemonDescription = pokemonDescription["flavor_text_entries"][4]["flavor_text"];

    pokedex[num] = {"name" : pokemonName, "image" : pokemonImage, "types" : pokemonType, "description" : pokemonDescription}
}
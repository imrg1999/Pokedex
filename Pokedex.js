const pokemonCount = 1025;
var pokedex = {};   // Pokedex Map {1: {"name" : "bulbasaur", "img" : url, "type" : ["grass", "poison"], "desc" : "......."}}//

window.onload = async()  => {
    await getPokemon(1);
}

const getPokemon = async(num)  =>{
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();
    /*we'll pass num (1-1025) to the url to make it https://pokeapi.co/api/v2/pokemon/1; which
    will retrieve the respective data*/

    let res = await fetch(url);
    let pokemon = await res.json();
    console.log(pokemon);
}
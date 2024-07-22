const BASE_URL = 'https://pokeapi.co/api/v2/';

function init() {
    getPokemon('pokemon?limit=10&offset=0', 0, 10);
}

async function getPokemon(path, start, end) {
    let response = await fetch(BASE_URL + path + ".json");
    return responseAsText = await response.json(), console.log(responseAsText);
}

function render() {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

    }
}
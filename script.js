let pokemons = {}
let index = 20;

const BASE_URL = 'https://pokeapi.co/api/v2/';

function init() {
    getPokemon(50, 0);
}

async function getPokemon(limit, offset) {
    let path = `pokemon?limit=${limit}&offset=${offset}`
    let response = await fetch(BASE_URL + path + ".json");
    let responseAsText = await response.json();
    pokemons = responseAsText.results;
    console.log(pokemons)
    render()
}

function render() {
    let inputContent = document.getElementById('pokeCardContainer');
    inputContent.innerHTML = '';
    for (let i = 0; i < (pokemons.length > 20 ? index : pokemons.length); i++) {
        inputContent.innerHTML += /*HTML*/`
            <div class="card" id="pokemon${i}">
                <h1>${i + 1} ${pokemons[i].name}</h1>
            </div>
        `;
    }
    showMoreImg()
}

function showMoreImg() {
    let inputContent = document.getElementById('showMoreIcon');
    inputContent.innerHTML = /*HTML*/`
        <img id="showMoreIconImg" class="showMoreIcon" onclick="showMorePokemons()" src="./img/showMoreIcon.png">
    `;
}

function showMorePokemons() {
    index > 20 ? (index = pokemons.length, hideElement('morePokemons', 'd-none')) : (index += 20);
    render();
}

function hideElement(id, x) {
    document.getElementById(id).classList.add(x);
}

function showElement(id, x) {
    document.getElementById(id).classList.remove(x);
}

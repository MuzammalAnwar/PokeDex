let pokemons = []
let indexStart = 0;
let indexEnd = 20;

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

function init() {
    getPokemonURL(1, 128);
}

async function getPokemonURL(start, end) {
    try {
        for (let i = start; i < (end + 1); i++) {
            let path = `/${i}/`
            let response = await fetch(BASE_URL + path);
            let responseAsJson = await response.json();
            pokemons.push(responseAsJson);
        }
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
    } finally {
        render()
    }
}

function render() {
    let inputContent = document.getElementById('pokeCardContainer');
    inputContent.innerHTML = '';
    for (let i = indexStart; i < indexEnd && i < pokemons.length; i++) {
        inputContent.innerHTML += /*HTML*/`
            <div class="card" id="pokemon${i}">
                <h1>${i + 1} ${pokemons[i].name}</h1>
            </div>
        `;
    }
    showMoreImg();
}

function showMoreImg() {
    indexEnd >= pokemons.length ? hideElement('showMoreIconRight', 'd-none') : showElement('showMoreIconRight', 'd-none');
    indexStart <= 0 ? hideElement('showMoreIconLeft', 'd-none') : showElement('showMoreIconLeft', 'd-none');
}

function showNextPokemons() {
    if (indexEnd < pokemons.length) {
        indexStart += 20;
        indexEnd += 20;
        if (indexEnd > pokemons.length) {
            indexEnd = pokemons.length;
        }
    }
    render();
}

function showPreviousPokemons() {
    if (indexStart > 0) {
        indexStart -= 20;
        if (indexEnd % 20 !== 0) {
            indexEnd = indexStart + 20;
        } else {
            indexEnd -= 20;
        }
        if (indexStart < 0) {
            indexStart = 0;
        }
        showElement('showMoreIconRight', 'd-none');
    }
    render();
}

function hideElement(id, x) {
    document.getElementById(id).classList.add(x);
}

function showElement(id, x) {
    document.getElementById(id).classList.remove(x);
}
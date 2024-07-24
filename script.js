let pokemons = []
let indexStart = 0;
let indexEnd = 20;

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

function init() {
    getPokemonURL(indexStart + 1, indexEnd);
}

async function getPokemonURL(start, end) {
    try {
        let promises = [];
        for (let i = start; i <= end; i++) {
            let path = `/${i}/`;
            promises.push(fetch(BASE_URL + path).then(response => response.json()));
        }
        let fetchedPokemons = await Promise.all(promises);
        pokemons = fetchedPokemons;
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
    } finally {
        render();
    }
}

function render() {
    let inputContent = document.getElementById('pokeCardContainer');
    inputContent.innerHTML = '';
    for (let i = 0; i < pokemons.length; i++) {
        inputContent.innerHTML += /*HTML*/`
            <div class="card" id="pokemon${indexStart + i}">
                <h1>${indexStart + i + 1} ${pokemons[i].name}</h1>
                <img src="${pokemons[i].sprites.front_default}" alt="">
                <p>${pokemons[i].types[0].type.name}</p>
            </div>
        `;
    }
    showMoreImg();
}

function showMoreImg() {
    indexEnd >= 1100 ? hideElement('showMoreIconRight', 'd-none') : showElement('showMoreIconRight', 'd-none');
    indexStart <= 0 ? hideElement('showMoreIconLeft', 'd-none') : showElement('showMoreIconLeft', 'd-none');
}

function showNextPokemons() {
    if (indexEnd < 1100) {
        indexStart += 20;
        indexEnd += 20;
        if (indexEnd > 1100) {
            indexEnd = 1100;
        }
        getPokemonURL(indexStart + 1, indexEnd);
    }
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
    getPokemonURL(indexStart + 1, indexEnd);
}

function hideElement(id, x) {
    document.getElementById(id).classList.add(x);
}

function showElement(id, x) {
    document.getElementById(id).classList.remove(x);
}
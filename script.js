let pokemons = []
let indexStart = 0;
let indexEnd = 20;
let totalAmountOfPokemons = 1025;

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

async function handleSearch(query) {
    if (query.length >= 3) {
        try {
            const response = await fetch(`${BASE_URL}?limit=1000`);
            const data = await response.json();
            const filteredPokemons = data.results.filter(pokemon => pokemon.name.includes(query));
            const detailedPokemons = await Promise.all(filteredPokemons.map(p => fetch(p.url).then(res => res.json())));
            pokemons = detailedPokemons;
            render();
        } catch (error) {
            console.error('Error fetching Pokémon:', error);
        }
    } else {
        getPokemonURL(indexStart + 1, indexEnd);
    }
}

function render() {
    let inputContent = document.getElementById('pokeCardContainer');
    inputContent.innerHTML = '';
    for (let i = 0; i < pokemons.length; i++) {
        inputContent.innerHTML += renderTemplate(i);
        returnBackgroundColor(i, `pokemon${i}`)
    }
    showMoreImg();
}

function renderOnePokemonCard(i) {
    showElement('showPokemonFullCard', 'd-none');
    let inputContent = document.getElementById('popUp');
    inputContent.innerHTML = renderOnePokemonCardTemplate(i);
    returnBackgroundColor(i, `popUp`)
    checkVeryFirstCard(i)
    document.getElementById('body').classList.add('no-scroll');
}

function checkVeryFirstCard(i) {
    if (indexStart == 0 && indexEnd == 20 && i == 0) {
        hideElement('showMoreIconLeftPokemonCard', 'd-none')
    }
}

function showNextPokemonCard(i) {
    i > 18 ? (showNextPokemons(), renderOnePokemonCard(0)) : renderOnePokemonCard(i + 1);
}

function showPreviousPokemonCard(i) {
    i < 1 ? (showPreviousPokemons(), renderOnePokemonCard(19)) : renderOnePokemonCard(i - 1);
}

function showMoreImg() {
    indexEnd >= totalAmountOfPokemons ? hideElement('showMoreIconRight', 'd-none') : showElement('showMoreIconRight', 'd-none');
    indexStart <= 0 ? hideElement('showMoreIconLeft', 'd-none') : showElement('showMoreIconLeft', 'd-none');
}

async function showNextPokemons() {
    if (indexEnd < totalAmountOfPokemons) {
        indexStart += 20;
        indexEnd += 20;
        if (indexEnd > totalAmountOfPokemons) {
            indexEnd = totalAmountOfPokemons;
        }
        await getPokemonURL(indexStart + 1, indexEnd);
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

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function returnTypesOfPokemon(i) {
    return pokemons[i].types.length == 1 ? pokemons[i].types[0].type.name : pokemons[i].types[0].type.name + ' / ' + pokemons[i].types[1].type.name
}

function hideElement(id, x) {
    document.getElementById(id).classList.add(x);
}

function showElement(id, x) {
    document.getElementById(id).classList.remove(x);
}

function stopClose(event) {
    event.stopPropagation();
}

document.addEventListener('DOMContentLoaded', () => {
    const pokemonSearchInput = document.getElementById('searchPokemon');
    pokemonSearchInput.addEventListener('input', () => handleSearch(pokemonSearchInput.value.trim().toLowerCase()));
    init();
});
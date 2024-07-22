let pokemons = []
let indexStart = 0;
let indexEnd = 20;

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

function init() {
    getPokemonURL(1, 152);
}

async function getPokemonURL(start, end) {
    for (let i = start; i < (end + 1); i++) {
        let path = `/${i}/`
        let response = await fetch(BASE_URL + path);
        let responseAsJson = await response.json();
        pokemons.push(responseAsJson);
    }
    console.log(pokemons)
    render()
}

function render() {
    let inputContent = document.getElementById('pokeCardContainer');
    inputContent.innerHTML = '';
    for (let i = indexStart; i < indexEnd; i++) {
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
        <div id="showMoreIconImgLeft" class="">
            <img class="showMoreIconLeft" onclick="showPreviousPokemons()" src="./img/showMoreIcon.png">
        </div>
        <img id="showMoreIconImg" class="showMoreIcon" onclick="showNextPokemons()" src="./img/showMoreIcon.png">
    `;
}

function showNextPokemons() {
    if (indexEnd <= pokemons.length) {
        indexStart += 20;
        indexEnd += 20;
        if (indexEnd >= pokemons.length) {
            indexEnd = pokemons.length
            hideElement('showMoreIconImgLeft', 'd-none')
        }
    } else {
        console.log("Hello")
    }
    render();
}

function showPreviousPokemons() {
    if (indexStart >= 20) {
        indexStart -= 20;
        indexEnd -= 20;
        if (indexEnd >= pokemons.length) {
            indexEnd = pokemons.length
            hideElement('showMoreIconImgLeft', 'd-none')
        }
    } else {
        console.log("Hello")
    }
    render();
}

function hideElement(id, x) {
    document.getElementById(id).classList.add(x);
}

function showElement(id, x) {
    document.getElementById(id).classList.remove(x);
}

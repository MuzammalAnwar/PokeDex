function renderTemplate(i) {
    return /*HTML*/`
        <div class="card" id="pokemon${i}" onclick="renderOnePokemonCard(${i})">
            <div class="pokemonNameAndIndex">                    
                <h3>#${indexStart + i + 1}</h3>
                <h3 class="pokemonName">${capitalizeFirstLetter(pokemons[i].name)}</h3>
            </div>
                <div class="pokemonImgContainer"><img src="${pokemons[i].sprites.front_default}" alt=""></div>
            <p class="pokemonTypes">${returnTypesOfPokemon(i)}</p>
        </div>
    `;
}

function renderOnePokemonCardTemplate(i) {
    return /*HTML*/`
        <div class="flex">
            <div class="card" id="pokemon${i}" onclick="renderOnePokemonCard(${i})">
                <div class="pokemonNameAndIndex">                    
                    <h3>#${indexStart + i + 1}</h3>
                    <h3 class="pokemonName">${capitalizeFirstLetter(pokemons[i].name)}</h3>
                </div>
                    <div class="pokemonImgContainer"><img src="${pokemons[i].sprites.front_default}" alt=""></div>
                <p class="pokemonTypes">${returnTypesOfPokemon(i)}</p>
            </div>
            <div class="cardInfo">
            </div>
        </div>  
        <section id="morePokemons">
            <div id="showMoreIconLeft" class="">
                <img class="showMoreIconLeft" onclick="showPreviousPokemonCard(${i})" src="./img/showMoreIcon.png">
            </div>
            <div id="showMoreIconRight">
                <img class="showMoreIcon" onclick="showNextPokemonCard(${i})" src="./img/showMoreIcon.png">
            </div>
        </section>
    `;
}
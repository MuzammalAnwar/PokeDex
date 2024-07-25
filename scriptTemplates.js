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
            <div class="cardFullView" id="pokemon${i}" onclick="renderOnePokemonCard(${i})">
                <div class="pokemonNameAndIndex">                    
                    <h3>#${indexStart + i + 1}</h3>
                    <h3 class="pokemonName">${capitalizeFirstLetter(pokemons[i].name)}</h3>
                </div>
                    <div class="pokemonImgContainer"><img src="${pokemons[i].sprites.front_default}" alt=""></div>
                <p class="pokemonTypes">${returnTypesOfPokemon(i)}</p>
                <div class="heightAndWeightContainer">
                    <div class="flexAndAlign">
                        <img class="weightIconImg" src="./img/weightIcon.png" alt="">
                        <p>${pokemons[i].weight / 10}</p>
                    </div>
                    <div class="flexAndAlign">
                        <img class="heightIconImg" src="./img/heightIcon.jpg" alt="">
                        <p>${pokemons[i].height / 10} m</p>
                    </div>
                </div>
            </div>
        </div>  
        <div class="statsBarContainer">
            <div class="wholeProgressBar">
                <p class="statName">${pokemons[i].stats[0].stat.name}:</p>
                <div id="bar1" class="visibleProgressBar bar-fill hp" style="height:24px;width:${(pokemons[i].stats[0].base_stat / 2.5)}%"><p class="statsNumber">${pokemons[i].stats[0].base_stat}</p></div>
            </div><br>

            <div class="wholeProgressBar">
                <p class="statName">${pokemons[i].stats[1].stat.name}:</p>
                <div id="bar2" class="visibleProgressBar bar-fill attack" style="height:24px;width:${(pokemons[i].stats[1].base_stat / 2.5)}%"><p class="statsNumber">${pokemons[i].stats[1].base_stat}</p></div>
            </div><br>

            <div class="wholeProgressBar">
                <p class="statName">${pokemons[i].stats[2].stat.name}:</p>
                <div id="bar3" class="visibleProgressBar bar-fill defense" style="height:24px;width:${(pokemons[i].stats[2].base_stat / 2.5)}%"><p class="statsNumber">${pokemons[i].stats[2].base_stat}</p></div>
            </div><br>

            <div class="wholeProgressBar">
                <p class="statName">${pokemons[i].stats[3].stat.name}:</p>
                <div id="bar4" class="visibleProgressBar bar-fill speed" style="height:24px;width:${(pokemons[i].stats[3].base_stat / 2.5)}%"><p class="statsNumber">${pokemons[i].stats[3].base_stat}</p></div>
            </div><br>

            <div class="wholeProgressBar">
                <p class="statName">${pokemons[i].stats[4].stat.name}:</p>
                <div id="bar5" class="visibleProgressBar bar-fill special-attack" style="height:24px;width:${(pokemons[i].stats[4].base_stat) / 2.5}%"><p class="statsNumber">${pokemons[i].stats[4].base_stat}</p></div>
            </div><br>

            <div class="wholeProgressBar">
                <p class="statName">${pokemons[i].stats[5].stat.name}:</p>
                <div id="bar6" class="visibleProgressBar bar-fill special-defense" style="height:24px;width:${(pokemons[i].stats[5].base_stat / 2.5)}%"><p class="statsNumber">${pokemons[i].stats[5].base_stat}</p></div>
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
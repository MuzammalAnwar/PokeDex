function returnBackgroundColor(i) {
    if (pokemons[i].types[0].type.name == 'normal') {
        document.getElementById(`pokemon${i}`).style.background = "white";
    }
    else if (pokemons[i].types[0].type.name == 'poison') {
        document.getElementById(`pokemon${i}`).style.background = "linear-gradient(248deg, rgba(214,0,255,1) 0%, rgba(255,0,116,1) 100%)";
    }
    else if (pokemons[i].types[0].type.name == 'ground') {
        document.getElementById(`pokemon${i}`).style.background = "linear-gradient(248deg, rgba(249,132,15,1) 0%, rgba(255,205,135,1) 100%)";
    }
    else if (pokemons[i].types[0].type.name == 'fire') {
        document.getElementById(`pokemon${i}`).style.background = "linear-gradient(315deg, rgb(255, 26, 26) 26%, rgb(255, 255, 0) 74%)";
    }
    else if (pokemons[i].types[0].type.name == 'water') {
        document.getElementById(`pokemon${i}`).style.background = "linear-gradient(to right, rgb(5, 117, 230), rgb(2, 27, 121))";
        document.getElementById(`pokemon${i}`).style.color = "white";
    }
    else if (pokemons[i].types[0].type.name == 'bug') {
        document.getElementById(`pokemon${i}`).style.background = "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)";
    }
    else if (pokemons[i].types[0].type.name == 'grass') {
        document.getElementById(`pokemon${i}`).style.background = "linear-gradient(110.1deg, rgb(34, 126, 34) 2.9%, rgb(168, 251, 60) 90.3%)";
    }
    else if (pokemons[i].types[0].type.name == 'electric') {
        document.getElementById(`pokemon${i}`).style.background = "linear-gradient(109.6deg, rgb(255, 219, 47) 11.2%, rgb(244, 253, 0) 100.2%)";
    }
    else if (pokemons[i].types[0].type.name == 'fairy') {
        document.getElementById(`pokemon${i}`).style.background = "linear-gradient(109.6deg, rgb(253, 199, 141) 11.3%, rgb(249, 143, 253) 100.2%)";
    }
    else if (pokemons[i].types[0].type.name == 'fighting') {
        document.getElementById(`pokemon${i}`).style.background = "linear-gradient(107.2deg, rgb(150, 15, 15) 10.6%, rgb(247, 0, 0) 91.1%)";
        document.getElementById(`pokemon${i}`).style.color = "white";
    }
    else if (pokemons[i].types[0].type.name == 'psychic') {
        document.getElementById(`pokemon${i}`).style.background = "radial-gradient(422px at -10.3% 110.7%, rgb(219, 76, 180) 9.5%, rgb(231, 119, 209) 50.8%, rgb(255, 180, 241) 88.5%)";
    }
    else if (pokemons[i].types[0].type.name == 'rock') {
        document.getElementById(`pokemon${i}`).style.background = "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)";
    }
    else if (pokemons[i].types[0].type.name == 'ghost') {
        document.getElementById(`pokemon${i}`).style.background = "radial-gradient(circle at 0.2% 0.5%, rgb(252, 165, 241) 0%, rgb(181, 255, 255) 100.2%)";
    }
    else if (pokemons[i].types[0].type.name == 'dragon') {
        document.getElementById(`pokemon${i}`).style.background = "linear-gradient(109.5deg, rgb(13, 11, 136) 9.4%, rgb(86, 255, 248) 78.4%)";
        document.getElementById(`pokemon${i}`).style.color = "white";
    }
    else if (pokemons[i].types[0].type.name == 'dark') {
        document.getElementById(`pokemon${i}`).style.background = "linear-gradient(87.4deg, rgb(255, 241, 165) 1.9%, rgb(200, 125, 76) 49.7%, rgb(83, 54, 54) 100.5%)";
        document.getElementById(`pokemon${i}`).style.color = "white";
    }
    else if (pokemons[i].types[0].type.name == 'ice') {
        document.getElementById(`pokemon${i}`).style.background = "linear-gradient(91.9deg, rgb(75, 207, 250) 6.3%, rgb(25, 159, 249) 98.9%)";
    }
    else if (pokemons[i].types[0].type.name == 'steel') {
        document.getElementById(`pokemon${i}`).style.background = "linear-gradient(to right, #d7d2cc 0%, #304352 100%)";
        document.getElementById(`pokemon${i}`).style.color = "white";
    }
    else if (pokemons[i].types[0].type.name == 'flying') {
        document.getElementById(`pokemon${i}`).style.background = "linear-gradient(69.5deg, rgb(40, 48, 68) 2.3%, rgb(1, 179, 201) 97.6%)";
        document.getElementById(`pokemon${i}`).style.color = "white";
    }
}
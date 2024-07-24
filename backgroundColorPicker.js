function returnBackgroundColor(i) {
    const typeStyles = {
        normal: { background: "white" },
        poison: { background: "linear-gradient(248deg, rgba(214,0,255,1) 0%, rgba(255,0,116,1) 100%)" },
        ground: { background: "linear-gradient(248deg, rgba(249,132,15,1) 0%, rgba(255,205,135,1) 100%)" },
        fire: { background: "linear-gradient(315deg, rgb(255, 26, 26) 26%, rgb(255, 255, 0) 74%)" },
        water: { background: "linear-gradient(to right, rgb(5, 117, 230), rgb(2, 27, 121))", color: "white" },
        bug: { background: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)" },
        grass: { background: "linear-gradient(110.1deg, rgb(34, 126, 34) 2.9%, rgb(168, 251, 60) 90.3%)" },
        electric: { background: "linear-gradient(109.6deg, rgb(255, 219, 47) 11.2%, rgb(244, 253, 0) 100.2%)" },
        fairy: { background: "linear-gradient(109.6deg, rgb(253, 199, 141) 11.3%, rgb(249, 143, 253) 100.2%)" },
        fighting: { background: "linear-gradient(107.2deg, rgb(150, 15, 15) 10.6%, rgb(247, 0, 0) 91.1%)", color: "white" },
        psychic: { background: "radial-gradient(422px at -10.3% 110.7%, rgb(219, 76, 180) 9.5%, rgb(231, 119, 209) 50.8%, rgb(255, 180, 241) 88.5%)" },
        rock: { background: "linear-gradient(147deg, #d7d7d7 0%, #353535 74%)" },
        ghost: { background: "radial-gradient(circle at 0.2% 0.5%, rgb(252, 165, 241) 0%, rgb(181, 255, 255) 100.2%)" },
        dragon: { background: "linear-gradient(109.5deg, rgb(13, 11, 136) 9.4%, rgb(86, 255, 248) 78.4%)", color: "white" },
        dark: { background: "linear-gradient(87.4deg, rgb(255, 241, 165) 1.9%, rgb(200, 125, 76) 49.7%, rgb(83, 54, 54) 100.5%)", color: "white" },
        ice: { background: "linear-gradient(91.9deg, rgb(75, 207, 250) 6.3%, rgb(25, 159, 249) 98.9%)" },
        steel: { background: "linear-gradient(to right, #d7d2cc 0%, #304352 100%)", color: "white" },
        flying: { background: "linear-gradient(69.5deg, rgb(40, 48, 68) 2.3%, rgb(1, 179, 201) 97.6%)", color: "white" },
    };

    const typeName = pokemons[i].types[0].type.name;
    const styles = typeStyles[typeName] || {};

    const element = document.getElementById(`pokemon${i}`);
    element.style.background = styles.background || "";
    element.style.color = styles.color || "";
}
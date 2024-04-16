function loadHeroes(){

    const httpRequest = new XMLHttpRequest()
    //requisicaoHttp.open("GET","https://pokeapi.co/api/v2/pokemon",false)
    httpRequest.open("GET","https://akabab.github.io/superhero-api/api/all.json", false);
    httpRequest.send();
    
    const heroes = JSON.parse(httpRequest.responseText);

    for(let i = 0 ; i < heroes.length; i ++){
        const hero = heroes[i];
        const slug = hero.slug;

        //pokemon.imagem = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id +".png"

        hero.image = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/" + slug + ".jpg";
        addHeroCard(hero);
    }
}

function addHeroCard(hero){

    const cardElementDiv = document.createElement("div");
    cardElementDiv.classList.add("card");

    const elementImage = document.createElement("img");
    elementImage.setAttribute("src", hero.image);
    elementImage.style.width="90%";

    const elementText = document.createElement("h1");
    elementText.innerHTML = hero.name;

    const divElemento = document.getElementById("hero-content");

    cardElementDiv.appendChild(elementImage);
    cardElementDiv.appendChild(elementText);

    divElemento.appendChild(cardElementDiv);

}

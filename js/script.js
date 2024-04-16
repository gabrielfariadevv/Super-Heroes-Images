function loadHeroes(){

    const httpRequest = new XMLHttpRequest()
    httpRequest.open("GET","https://akabab.github.io/superhero-api/api/all.json", false);
    httpRequest.send();
    
    const heroes = JSON.parse(httpRequest.responseText);

    for(let i = 0 ; i < heroes.length; i ++){
        const hero = heroes[i];
        const slug = hero.slug;

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

    const elementDiv = document.getElementById("hero-content");

    cardElementDiv.appendChild(elementImage);
    cardElementDiv.appendChild(elementText);

    elementDiv.appendChild(cardElementDiv);

}

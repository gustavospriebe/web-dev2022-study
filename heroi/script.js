const apiKey = 8679048402113069;

const img = document.querySelector("#img");
const nome = document.querySelector("#name");
const power = document.querySelector("#powerStatus");

const randomHeroButton = document.querySelector("#getNewHero");

const inputHero = document.querySelector("#inputHeroName");
const searchHeroButton = document.querySelector("#searchHero");

const randomHero = async () => {
    const random = Math.floor(Math.random() * 731) + 1;
    const url = await fetch(
        `https://superheroapi.com/api.php/${apiKey}/${random}`
    );
    const response = await url.json();

    img.src = response["image"]["url"];
    nome.innerText = response.name;
    heroStats(random);
};

const searchHero = async () => {
    const url = await fetch(
        `https://superheroapi.com/api.php/${apiKey}/search/${inputHero.value}`
    );
    const response = await url.json();

    img.src = response.results[0]["image"]["url"];
    nome.innerText = response.results[0]["name"];
    heroStats(response.results[0]["id"]);
};

const heroStats = async (id) => {
    const url = await fetch(`https://superheroapi.com/api.php/${apiKey}/${id}`);
    const response = await url.json();

    const powerstats = Object.keys(response.powerstats)
        .map((x) => `<p><strong>${x}: </strong>${response.powerstats[x]}</p>`)
        .join("");

    power.innerHTML = powerstats;
};

randomHeroButton.addEventListener("click", randomHero);
searchHeroButton.addEventListener("click", searchHero);

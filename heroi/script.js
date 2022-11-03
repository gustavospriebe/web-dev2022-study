const apiKey = 8679048402113069;

const img = document.querySelector("#img");
const nome = document.querySelector("#name");
const power = document.querySelector("#powerStatus");

const randomHeroButton = document.querySelector("#getNewHero");

const inputHero = document.querySelector("#inputHeroName");
const searchHeroButton = document.querySelector("#searchHero");

const randomHero = () => {
    const random = Math.floor(Math.random() * 731) + 1;

    fetch(`https://superheroapi.com/api.php/${apiKey}/${random}`)
        .then((response) => response.json())
        .then((json) => [
            (img.src = json["image"]["url"]),
            (nome.innerText = json.name),
        ]);

    heroStats(random);
};

const searchHero = () => {
    fetch(
        `https://superheroapi.com/api.php/${apiKey}/search/${inputHero.value}`
    )
        .then((response) => response.json())
        .then((json) => [
            (img.src = json.results[0]["image"]["url"]),
            (nome.innerText = json.results[0]["name"]),
            heroStats(json.results[0]["id"]),
        ]);
};

const heroStats = (id) => {
    fetch(`https://superheroapi.com/api.php/${apiKey}/${id}`)
        .then((response) => response.json())
        .then((json) => {
            const powerstats = Object.keys(json.powerstats)
                .map(
                    (x) => `<p><strong>${x}: </strong>${json.powerstats[x]}</p>`
                )
                .join("");
            power.innerHTML = powerstats;
        });
};

randomHeroButton.addEventListener("click", randomHero);
searchHeroButton.addEventListener("click", searchHero);

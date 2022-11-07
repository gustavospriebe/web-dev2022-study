const cityInput = document.querySelector("#inputCity");

const cityDisplay = document.querySelector("#cityName");

const temperatureNow = document.querySelector("#temperatureNow");

const currentDate = document.querySelector("#currentDate");

const currentHour = document.querySelector("#currentHour");

const weatherNow = document.querySelector("#weatherNow");

const button = document.querySelector("#searchButton");

const getTemperature = async () => {
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "9a4a5c5801mshcab81f29f643ddfp15687fjsn68a671c11be0",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
    };
    const url = await fetch(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityInput.value}`,
        options
    );
    const response = await url.json();
    console.log(response);

    cityDisplay.innerText = response.location.name;
    weatherNow.innerText = response.current.condition.text;
    temperatureNow.innerText = `${response.current.temp_c} ºC`;
};

const getNowDate = () => {
    const date = new Date();
    currentHour.innerText = date.toTimeString().split(" ")[0];
    currentDate.innerText = date.toLocaleDateString();
};

setInterval(getNowDate, 1000);

button.addEventListener("click", getTemperature);

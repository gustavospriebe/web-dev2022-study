const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const playPause = document.querySelector(".play-pause");
const restart = document.querySelector(".restart");

let cron;

function cronometer() {
    let seconds = Number(second.innerText);
    let minutes = Number(minute.innerText);
    let hours = Number(hour.innerText);

    seconds += 1;

    seconds == 60 && (minutes += 1);
    seconds == 60 && (seconds = 0);

    minutes == 60 && (hours += 1);
    minutes == 60 && (minutes = 0);

    second.innerText = seconds < 10 ? `0${seconds}` : seconds;
    minute.innerText = minutes < 10 ? `0${minutes}` : minutes;
    hour.innerText = hours < 10 ? `0${hours}` : hours;
}

playPause.addEventListener("click", () => {
    playPause.innerText == "Start"
        ? (playPause.innerText = "Pause")
        : (playPause.innerText = "Start");
});

playPause.addEventListener("click", () => {
    if (playPause.innerText == "Pause") {
        cron = setInterval(cronometer, 1000);
    } else {
        clearInterval(cron);
    }
});

restart.addEventListener("click", () => {
    clearInterval(cron);
    hour.innerText = "00";
    minute.innerText = "00";
    second.innerText = "00";
});

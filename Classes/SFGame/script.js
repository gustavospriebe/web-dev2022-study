let playButton = document.getElementById("play");
let resultDiv = document.getElementById("result");
let p1NameDiv = document.getElementById("p1Name");
let p2NameDiv = document.getElementById("p2Name");
let p1HealthDiv = document.getElementById("p1Health");
let p2HealthDiv = document.getElementById("p2Health");

class Player {
    constructor(name, health, attackDamage) {
        this.name = name;
        this.health = health;
    }

    strike(player, enemy) {
        const randomStrike = Math.floor(Math.random() * 10);
        enemy.health < 0 ? 0 : (enemy.health -= randomStrike);

        player.name == "Gustavo"
            ? document.querySelector("#p1attack").play()
            : document.querySelector("#p2attack").play();

        updateGame(player1, player2);

        console.log(`${player.name} attacks ${enemy.name} for ${randomStrike}`);
    }

    heal(player) {
        const randomHeal = Math.floor(Math.random() * 5);
        player.health += randomHeal;

        player.name == "Gustavo"
            ? document.querySelector("#p1heal").play()
            : document.querySelector("#p2heal").play();

        updateGame(player1, player2);

        console.log(`${player.name} heals ${randomHeal}`);
    }
}

class Game {
    constructor() {
        this.isOver = false;
    }

    declareWinner(p1, p2) {
        this.isOver = true;

        document.querySelector("#victory").play();

        const result = p1 > p2 ? `p1 Wins` : `p2 Wins`;

        resultDiv.innerText = result;

        console.log(this.isOver);
    }

    reset(p1, p2) {
        p1.health = 100;
        p2.health = 100;
        this.isOver = false;
        resultDiv.innerText = "";

        updateGame(p1, p2);
    }

    play(p1, p2) {
        while (!this.isOver) {
            p1.strike(player1, player2);
            p2.strike(player2, player1);
            p1.heal(player1);
            p2.heal(player2);
        }
    }
}

function updateGame(player1, player2) {
    p1NameDiv.innerText = player1.name;
    p1HealthDiv.innerText = player1.health;
    p2NameDiv.innerText = player2.name;
    p2HealthDiv.innerText = player2.health;

    if (player1.health <= 0 || player2.health <= 0) {
        game.declareWinner();
    }
}

let player1 = new Player("Gustavo", 100);
let player2 = new Player("Priebe", 100);

let game = new Game();

// Event Listeners
const player1Attack = document.querySelector("#attack1");
const player1Heal = document.querySelector("#heal1");
const player2Attack = document.querySelector("#attack2");
const player2Heal = document.querySelector("#heal2");
const reset = document.querySelector("#reset");

player1Attack.addEventListener("click", () => player1.strike(player1, player2));
player2Attack.addEventListener("click", () => player2.strike(player2, player1));
player1Heal.addEventListener("click", () => player1.heal(player1));
player2Heal.addEventListener("click", () => player2.heal(player2));

document.addEventListener(
    "keydown",
    (e) => e.key == "q" && player1.strike(player1, player2)
);
document.addEventListener(
    "keydown",
    (e) => e.key == "p" && player2.strike(player2, player1)
);
document.addEventListener(
    "keydown",
    (e) => e.key == "a" && player1.heal(player1)
);
document.addEventListener(
    "keydown",
    (e) => e.key == "l" && player2.heal(player2)
);

reset.addEventListener("click", () => game.reset(player1, player2));

playButton.addEventListener("click", () => game.play(player1, player2));

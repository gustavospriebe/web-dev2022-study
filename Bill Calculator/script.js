const billTotalInput = document.querySelector("#billTotal");
const tipInput = document.querySelector("#tip");
const numberOfPeople = document.querySelector("#numberOfPeople");
const perPersonTotal = document.querySelector("#finalValor");

perPersonTotal.innerText = Number(billTotalInput.value);

function calculate() {
    const billTotal = Number(billTotalInput.value);

    const tip = Number(tipInput.value) / 100;

    const people = Number(numberOfPeople.innerText);

    const totalValor =
        Math.round(((billTotal * tip + billTotal) / people) * 100) / 100;

    perPersonTotal.innerText = totalValor;
}

function incrementPeople() {
    let peopleValor = Number(numberOfPeople.innerText);

    peopleValor++;

    numberOfPeople.innerText = peopleValor;

    calculate();
}

function decrementPeople() {
    let peopleValor = Number(numberOfPeople.innerText);

    peopleValor > 1 && peopleValor--;

    numberOfPeople.innerText = peopleValor;

    calculate();
}

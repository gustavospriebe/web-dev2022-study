const filterElement = document.querySelector("#filter");
const cards = document.querySelectorAll(".cards li");

filterElement.addEventListener("input", filterCards);

function filterCards() {
    if (filterElement.value != "") {
        cards.forEach((card) => {
            let cardTitle = card.querySelector("h2").innerText;
            cardTitle = cardTitle.toLowerCase();
            let filterText = filterElement.value.toLowerCase();
            cardTitle.includes(filterText)
                ? (card.style.display = "block")
                : (card.style.display = "none");
        });
    } else {
        cards.forEach((card) => (card.style.display = "block"));
    }
}

const openButton = document.querySelector(".open-btn");
const closeButton = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");

console.log(openButton);
console.log(modal);

openButton.addEventListener("click", () => modal.classList.remove("display"));

closeButton.addEventListener("click", () => modal.classList.add("display"));

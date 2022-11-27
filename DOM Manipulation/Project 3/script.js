const icon = document.querySelectorAll(".icon");
const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");

icon.forEach((i) =>
    i.addEventListener("click", () => {
        i.innerText == "+" ? (i.innerText = "-") : (i.innerText = "+");

        i.parentElement.classList.contains("question1") &&
            answer1.classList.toggle("display");

        i.parentElement.classList.contains("question2") &&
            answer2.classList.toggle("display");

        i.parentElement.classList.contains("question3") &&
            answer3.classList.toggle("display");
    })
);

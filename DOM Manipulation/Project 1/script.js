const quoteAuthor = document.querySelector(".quote-author");

const quoteText = document.querySelector(".quote-text");

const button = document.querySelector(".new-quote");

const quotes = async () => {
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "9a4a5c5801mshcab81f29f643ddfp15687fjsn68a671c11be0",
            "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
        },
    };

    const request = await fetch(
        "https://quotes15.p.rapidapi.com/quotes/random/",
        options
    );

    const response = await request.json();

    quoteText.innerText = `"${response.content}"`;
    quoteAuthor.innerText = response.originator.name;
};

button.addEventListener("click", quotes);

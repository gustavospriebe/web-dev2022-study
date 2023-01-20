export default function getAutoComplete(query) {
    const fruits = [
        "Apple",
        "Orange",
        "Banana",
        "Grape",
        "Strawberry",
        "Blueberry",
        "Raspberry",
        "Watermelon",
        "Cantaloupe",
        "Honeydew",
        "Lemon",
        "Lime",
        "Peach",
        "Pear",
        "Plum",
        "Pineapple",
        "Mango",
        "Kiwi",
        "Pomegranate",
        "Dragonfruit",
        "Starfruit",
        "Cherry",
        "Apricot",
        "Avocado",
        "Fig",
        "Blackberry",
        "Cranberry",
        "Guava",
        "Lychee",
        "Nectarine",
        "Papaya",
        "Persimmon",
        "Quince",
        "Tangerine",
        "Ugli fruit",
        "Yuzu",
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                fruits.filter((fruit) =>
                    fruit.toLowerCase().includes(query.toLowerCase())
                )
            );
        }, Math.random() * 1000);
    });
}

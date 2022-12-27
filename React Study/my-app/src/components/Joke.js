export default function Joke() {
    const joke = [
        {
            setup: "I got my daughter a fridge for her birthday.",
            punchline:
                "I can't wait to see her face light up when she opens it.",
        },
        {
            setup: "How did the hacker escape the police?",
            punchline: "He just ransomware!",
        },
        {
            setup: "Why don't pirates travel on mountain roads?",
            punchline: "Scurvy.",
        },
        {
            setup: "Why do bees stay in the hive in the winter?",
            punchline: "Swarm.",
        },
        {
            setup: "What's the best thing about Switzerland?",
            punchline: "I don't know, but the flag is a big plus!",
        },
    ];

    const jokes = joke.map((x) => (
        <div className="joke">
            <h3>{x.setup}</h3>
            <p>{x.punchline}</p>
            <hr />
        </div>
    ));

    return <div className="jokes">{jokes}</div>;
}
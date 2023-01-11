import express from "express";
import { MongoClient } from "mongodb";

const app = express();
app.use(express.json());

app.get("/api/articles/:name", async (req, res) => {
    const { name } = req.params;

    const client = new MongoClient("mongodb://127.0.0.1:27017");
    await client.connect();

    const db = client.db("react-blog-db");

    const article = await db.collection("articles").findOne({ name });

    if (article) {
        res.json(article);
    } else {
        res.sendStatus(404);
    }
});

app.put("/api/articles/:name/upvote", async (req, res) => {
    const { name } = req.params;

    const client = new MongoClient("mongodb://127.0.0.1:27017");
    await client.connect();

    const db = client.db("react-blog-db");
    await db.collection("articles").updateOne(
        { name },
        {
            $inc: { upvote: 1 },
        }
    );

    const article = await db.collection("articles").findOne({ name });

    if (article) {
        res.json(article);
    } else {
        res.sendStatus(404);
    }
});

app.post("/api/articles/:name/comments", (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;
    const article = articlesInfo.find((a) => a.name === name);
    if (article) {
        article.comments.push({ postedBy, text });
        res.send(article.comments);
    } else {
        res.send("That article doesn't exists.");
    }
});

app.listen(8000, () => {
    console.log("Server is listenning on port 8000");
});

// Estudo
// app.post("/hello", (req, res) => {
//     console.log(req.body);
//     res.send(`Hello ${req.body.name}!`);
// });

// app.post("/hello/:name", (req, res) => {
//     const { name } = req.params;
//     res.send(`Hello ${name.toUpperCase()}!`);
// });

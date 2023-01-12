import express from "express";
import { connect, db } from "./db.js";

const app = express();
app.use(express.json());

app.get("/api/articles/:name", async (req, res) => {
    const { name } = req.params;

    const article = await db.collection("articles").findOne({ name });

    if (article) {
        res.json(article);
    } else {
        res.sendStatus(404);
    }
});

app.put("/api/articles/:name/upvote", async (req, res) => {
    const { name } = req.params;

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

app.post("/api/articles/:name/comments", async (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;

    await db.collection("articles").updateOne(
        { name },
        {
            $push: { comments: { postedBy, text } },
        }
    );

    const article = await db.collection("articles").findOne({ name });
    if (article) {
        res.json(article);
    } else {
        res.sendStatus(404);
    }
});

connect(() => {
    console.log("Connection established");
    app.listen(8000, () => {
        console.log("Server is listenning on port 8000");
    });
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

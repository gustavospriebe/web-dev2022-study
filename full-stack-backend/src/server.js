import express from "express";
// import admin from "firebase-admin";
import path from "path";
// import fs from "fs";
import "dotenv/config";
import { fileURLToPath } from "url";
import { connect, db } from "./db.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const credentials = JSON.parse(fs.readFileSync("../credentials.json"));
// admin.initializeApp({
//     credential: admin.credential.cert(credentials),
// });

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../build")));

app.get(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.join(__dirname, "../build/index.html"));
});

// app.use(async (req, res, next) => {
//     const { authtoken } = req.headers;

//     if (authtoken) {
//         try {
//             req.user = await admin.auth().verifyIdToken(authtoken);
//         } catch (err) {
//             res.sendStatus(400);
//         }
//     }

//     next();
// });

app.get("/api/articles/:name", async (req, res) => {
    const { name } = req.params;
    // const { uid } = req.user;

    const article = await db.collection("articles").findOne({ name });

    if (article) {
        const upvoteIDs = article.upvoteIDs || [];
        // article.canUpvote = uid && !upvoteIDs.include(uid);
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

const PORT = process.env.PORT || 8000;

connect(() => {
    console.log("Connection established");
    app.listen(PORT, () => {
        console.log("Server is listenning on port " + PORT);
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

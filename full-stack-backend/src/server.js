import express from "express";

const app = express();
app.use(express.json());

app.post("/hello", (req, res) => {
    console.log(req.body);
    res.send(`Hello ${req.body.name}!`);
});

app.post("/hello/:name", (req, res) => {
    const { name } = req.params;
    res.send(`Hello ${name.toUpperCase()}!`);
});

app.listen(8000, () => {
    console.log("Server is listenning on port 8000");
});

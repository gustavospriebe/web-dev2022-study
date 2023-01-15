import { MongoClient } from "mongodb";
let db;

async function connect(cb) {
    const client = new MongoClient(
        `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.7ww4o6h.mongodb.net/?retryWrites=true&w=majority`
    );
    await client.connect();

    db = client.db("react-blog-db");
    cb();
}

export { db, connect };

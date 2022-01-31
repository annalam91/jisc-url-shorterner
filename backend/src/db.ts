import mongoose from "mongoose";
import MongoClient from 'mongodb';

async function db() {
    const dbUri = "mongodb+srv://admin:adminpass@cluster0.qsfio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    try {
        await mongoose
            .connect(dbUri)
            .then(() => {
                console.log(`DB connected to ${dbUri}`);
            });
    } catch (e) {
        console.error(e);
    }
}

export default db;
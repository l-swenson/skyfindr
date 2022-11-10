const express = require('express');
const {MongoClient} = require("mongodb");
const mongoose = require('mongoose');

var app = express();
var port = 3000;
app.use(express.json());
 
app.get("/:name", (req, res) => {
    res.send('your name is ' + req.params.name);
});
 
app.listen(port, () => {
 console.log("Server listening on port " + port);
});


// Mongodb 

const url = 'mongodb+srv://lswenson:HowardLakeDB2020@cluster0.powjsj7.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(url);
// const db = client.db(dbName);
// const collection = db.collection("weather-info");

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        const collection = db.collection("weather-info");

        let weatherToday = {
            "day": "Monday", 
            "degree": 25.16, 
            "description": "moderate rain"
        }

        const p = await collection.insertOne(weatherToday);

        const myDoc = await collection.findOne();

        console.log(myDoc);

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);


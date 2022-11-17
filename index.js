const express = require('express');
const {MongoClient} = require("mongodb");
const mongoose = require("mongoose");

// Mongodb 

const url = 'mongodb+srv://lswenson:HowardLakeDB2020@cluster0.powjsj7.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(url);
const db = client.db('city');
const collection = db.collection("city-name");

const app = express();
const port = 3000;
app.use(express.static('public'))
app.use(express.json());
 

app.post('/addlocation', async (req, res) => {
    await collection.insertOne(req.body)
    res.send(req.body)
})

client.connect().then(() => {
    console.log('Connected to mongodb')
    app.listen(port, () => {
        console.log("Listening on port" + port)
    })
})



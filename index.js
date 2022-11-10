const express = require('express');
const {MongoClient} = require("mongodb");

// Mongodb 

const url = 'mongodb+srv://lswenson:HowardLakeDB2020@cluster0.powjsj7.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(url);
const db = client.db('city');
const collection = db.collection("city-name");

var app = express();
var port = 3000;
app.use(express.static('public'))
app.use(express.json());
 

app.post('/addlocation', async (req, res) => {
    await collection.insertOne(req.body)
    res.send(req.body)
})

client.connect().then(() => {
    console.log('Connected to mongodb')
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
})

// async function run() {
//     try {
//         await client.connect();
//         console.log("Connected correctly to server");
//         const db = client.db(dbName);
//         const collection = db.collection("weather-info");

//         let weatherToday = {
//             "day": "Monday", 
//             "degree": 25.16, 
//             "description": "moderate rain"
//         }

//         const p = await collection.insertOne(weatherToday);

//         const myDoc = await collection.findOne();

//         console.log(myDoc);

//     } catch (err) {
//         console.log(err.stack);
//     }
//     finally {
//         await client.close();
//     }
// }

// run().catch(console.dir);


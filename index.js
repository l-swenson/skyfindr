const express = require('express')
const mongoose = require('mongoose')
const {MongoClient} = require("mongodb");

// Mongodb 

const url = 'mongodb+srv://lswenson:HowardLakeDB2020@cluster0.powjsj7.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(url);
const dbName = "skyfindr-weather";



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




// const router = express.Router();

// router.put("/weather", async (req, res) => {
//     await col.insertOne(req.body)
//     res.send(req.body)
// })


// router.get('/', function(req, res, next) {
//     res.send("API");
// })

// app.use('/api/', router);

// const server = app.listen(5000, function() {
//     console.log('Server listening on port 5000!')
// })


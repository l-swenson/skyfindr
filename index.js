const express = require('express')
const {MongoClient} = require("mongodb");
const app = express();

const url = 'mongodb+srv://lswenson:HowardLakeDB2020@cluster0.powjsj7.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(url);
const dbName = "test";

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        const col = db.collection("weather");

        let weatherToday = {
            "day": "Monday", 
            "degree": 25.16, 
            "description": "moderate rain"
        }

        const p = await col.insertOne(weatherToday);

        const myDoc = await col.findOne();

        console.log(myDoc);




    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);

const router = express.Router();

rounter.route("/weather")


router.get('/', function(req, res, next) {
    res.send("API");
})

app.use('/api/', router);

const server = app.listen(5000, function() {
    console.log('Server listening on port 5000!')
})


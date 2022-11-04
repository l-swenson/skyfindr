const express = require('express')
const mongoose = require('mongoose');
const app = express();

const uri = 'mongodb+srv://lswenson:HowardLakeDB2020@cluster0.powjsj7.mongodb.net/?retryWrites=true&w=majority'

function connect() {
    try {
        mongoose.connect{uri}
        console.log("Connected to Mongo")
    }
    catch (error) {
        console.log(error);
    }
}

const router = express.Router();

router.get('/', function(req, res, next) {
    res.send("API");
})

app.use('/api/', router);

const server = app.listen(5000, function() {
    console.log('Server listening on port 5000!')
})


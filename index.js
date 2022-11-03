const express = require('express')
const {MongoClient} = require('mongodb');
const app = express();

const router = express.Router();

router.get('/', function(req, res, next) {
    res.send("API");
})

app.use('/api/', router);

const server = app.listen(5000, function() {
    console.log('Server listening on port 5000!')
})
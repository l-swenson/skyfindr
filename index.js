let express = require('express')
let app = express();

let router = express.Router();

router.get('/', function(req, res, next) {
    res.send("apple");
})

app.use('/api/', router);

const server = app.listen(5000, function() {
    console.log('Node server running.')
})
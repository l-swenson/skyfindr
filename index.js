let express = require('express')
let app = express();

let router = express.Router();

router.get('/', function(req, res, next) {
    res.send("API");
})

app.use('/api/', router);

let server = app.listen(5000, function() {
    console.log('Server listening on port 5000!')
})
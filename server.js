var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");
var adventures, scouts;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/client'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

fs.readFile("bear_adventures.json", 'utf8', (err, data) => {
    if (err) throw err;
    adventures = JSON.parse(data);
    // console.log(adventures);
});

fs.readFile("scouts.json", 'utf8', (err, data) => {
    if (err) throw err;
    scouts = JSON.parse(data);
    // console.log(scouts);
});

// get scouts and requirements.
app.get('/api/getData', function (req, res) {
    console.log("Returned all data.");
    res.send(movies.movies);
    
});




var port = 3000;
app.listen(port, function() {
    console.log(`App listening on port ${port}...`);
});
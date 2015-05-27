// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

// Controllers
// var homeCtrl = require('');

// Express
var app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoints
// app.post('/sighting', SightingCtrl.create);
// app.get('/sighting', SightingCtrl.read);
// app.put('/sighting/:id', SightingCtrl.update);
// app.delete('/sighting/:id', SightingCtrl.delete);

// Connections
var port = 9001;
var mongoUri = 'mongodb://localhost:27017/bandAve';

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('Connected to MongoDB at ', mongoUri);
});

app.listen(port, function() {
  console.log('Listening on port ', port);
});

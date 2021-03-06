var express = require('express'),
    fs = require('fs'),
    buffer = require('buffer');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(String(fs.readFileSync('index.html')));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

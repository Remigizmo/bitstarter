var express = require('express');

var fs = require('fs');

var text = fs.readFileSync('index.html','utf8');



var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World2!');
    response.send(text);
   });

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

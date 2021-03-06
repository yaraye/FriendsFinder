var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 7019;


// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, './routing/apiRoutes'))(app);
require(path.join(__dirname, './routing/htmlRoutes'))(app);

//listening on PORT
app.listen(PORT, function() {
  console.log('friendFinder app is listening on PORT:http://localhost:' + PORT);
});
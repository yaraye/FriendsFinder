
var path = require("path");


// ROUTING

module.exports = function(app) {

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/survey.html"));
  });
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../views/home.html"));
  });
  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/home.html"));
  });
};
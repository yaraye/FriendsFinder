// A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will
// also be used to handle the compatibility logic.

var friendsData = require("../data/friends.js");
var path =require('path');

// ROUTING

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });
  
    app.post("/api/friends", function(req, res) {
    //  WRITE THE LOGIC HERE
    var userInput = req.body;
    var userResponse = userInput.scores;

    var matchName = '';
    var matchImage = '';
    var totalDifference = 2000;
//for all the differnet friends in the list
    for (var i=0; i<friendsData.length; i++){

//for each question
var diff = 0;
for (var j=0; j< userResponse.length; j++){
    diff += Math.abs(friendsData[i].score[j]- userResponse[j]);
}
 if (diff< totalDifference){
     totalDifference = diff;
     matchName = friendsData[i].name;
     matching =friendsData[i].image;
 }
    }
    });
  

    app.post("/api/clear", function() {
  
      friendsData = [];  
    });
};
  
  

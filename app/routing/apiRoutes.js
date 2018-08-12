// A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will
// also be used to handle the compatibility logic.

var friendsData = require("../data/friends.js");
var path =require('path');

// ROUTING

module.exports = function(app) {
    
    app.get("/api/friendsData", function(req, res) {
      res.json(friendsData);
    });
  
    app.post("/api/friendsData", function(req, res) {

    //create an array to store the name and image

    var bestMatch = {
        name: "",
        image: "",
        friendDifference: 2000
      };

    var userData = req.body;
    var userScores = userData.scores;

    console.log(userScores);
    var totalDifference = 0;

//for all the different friends in the list
for (var i=0; i<friendsData.length; i++){

//for each question
totalDifference = 0;
for (var j=0; j< friendsData[i].scores[j]; j++){
    
    totalDifference += Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(userScores[j]));
    console.log(totalDifference);

 if (totalDifference<= bestMatch.friendDifference){
  
    bestMatch.name = friendsData[i].name;
    bestMatch.image = friendsData[i].image;
    bestMatch.friendDifference = totalDifference;
 }
    }
} 
      //push to the array 
      friendsData.push(userData);

      console.log(friendsData);
      //return json back
      res.json(bestMatch);


    });
};
  
  

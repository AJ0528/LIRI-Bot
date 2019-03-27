var axios = require("axios");
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var action = process.argv[2];
var value = process.argv.slice(3).join("+");

// We will then create a switch-case statement (if-else would also work).
// The switch-case will direct which function gets run.
switch (action) {
case "concert-this":
  concert();
  break;

case "spotify-this-song":
  song();
  break;

case "movie-this":
  movie();
  break;

case "do-what-it-says":
  says();
  break;
}

function movie()

{
    var movieName = "";

    if(value == ""){
   movieName = "Mr.Nobody" 
    }
    else{
      movieName = value;
    }
   

  
// Then run a request with axios to the OMDB API with the movie specified
var movieUrl = "http://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(movieUrl);

axios.get(movieUrl).then(
  function(response) {
    console.log(response.data);
    console.log(response.data.Ratings[1].Value);
    console.log(response.data.Title);
    console.log(response.data.Language);
    console.log(response.data.Country);
    console.log(response.data.Plot);
    console.log(response.data.Actors);
  }
);
}
function song() {
 
  var song = "";
  if(value == ""){
    song = "I Want it That Way"
  }
  else{
    song = value;
  }
  spotify
      .search({ type: 'track', query: song })
      .then(function(data) {
     console.log(data.tracks.items[0]);
     console.log(data.Artits);
     

  })
      .catch(function(err) {
          console.log(err);
      });
}

function concert(){

  var bands = "";
  if(value == ""){
  bands = "blink 182"
  }
  else{
    bands = value
  }
  var bandUrl = "https://rest.bandsintown.com/artists/" + bands + "/events?app_id=codingbootcamp"

// This line is just to help us debug against the actual URL.
console.log(bandUrl);

axios.get(bandUrl).then(
  function(response) {
    console.log(response.data);
   
  
  }
);
}



function says()

var fs = require("fs");

fs.readFile("random.txt", function(err, data) {
 if (err) {
   return console.log(err);
 }
});

var output = data.split(",");

for (var i = 0; i < output.length; i++) {
 console.log(output[i]);
}

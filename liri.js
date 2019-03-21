var axios = require("axios");
require("dotenv").config();
var keys = require("./keys.js");
// n
var action = process.argv[2];
var value = process.argv;

// We will then create a switch-case statement (if-else would also work).
// The switch-case will direct which function gets run.
switch (action) {
case "concert-this":
  concert();
  break;

case "spotify-this-song":
  spotify();
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

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for(i = 3; i < process.argv.length; i++) {
    movieName += process.argv[i] + '+';
}

  
// Then run a request with axios to the OMDB API with the movie specified
var movieUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(movieUrl);

axios.get(movieUrl).then(
  function(response) {
    console.log(response.data);
    console.log(response.data.imdbRating);
    console.log(response.data.Title);
    console.log(response.data.Language);
    console.log(response.data.Country);
    console.log(response.data.Plot);
    console.log(response.data.Actors);
  }
);
}





require("dotenv").config();

const keys = require("./keys.js");
const axios = require("axios");

const Spotify = require("node-spotify-api");
const moment = require("moment");
const fs = require("fs");

var spotify = new Spotify(keys.spotify);

/*9. Make it so liri.js can take in one of the following commands:
* `concert-this`

* `spotify-this-song`

* `movie-this`

* `do-what-it-says` */

const command = process.argv[2];
const search = process.argv.slice(3).join(" ");
let bandsURL = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp"
var spotifyURL = "https://api.spotify.com/v1/search?q=" + search + "&type=track";
var movieURL = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";

if (command === "concert-this") {
    axios
        .get(bandsURL)
        .then(function (response) {
            let jsonData = response.data;

            for (let i = 0; i < jsonData.length; i++) {
                let showData = [
                    console.log("=======================",
                        "Venue: " + jsonData[i].venue.name,
                        "Location: " + jsonData[i].venue.city,
                        "Date: " + jsonData[i].datetime,
                        "======================="),
                ].join("\n\n");
            }

            console.log(showData);

        })
}
else if (command === 'movie-this') {
    axios
        .get(movieURL)
        .then(function (response) {
            let jsonData = response.data;
            
            let movieData = [
                console.log('============================'),
                'Title: ' + jsonData.Title,
                'Released: ' + jsonData.Released,
                'IMDB Rating: ' + jsonData.imdbRating,
                'Country: ' + jsonData.Country,
                'Language: ' + jsonData.Language,
                'Plot Summary ' + jsonData.Plot,
                'Cast: ' + jsonData.Actors,
                console.log('============================'),
            ].join('\n\n');
            console.log(movieData);
        
        })

}  else (command === 'spotify-this-song')
var getMeSpotify = function(songName) {
  if (songName === undefined) {
    songName = "What's my age again";
  }

    spotify.search(
        {
            type: "track",
            query: songName
          },
          function(err, data) {
            if (err) {
              console.log("Error occurred: " + err);
              return;
            }
        }   
    );
{
    axios
        .get(spotifyURL)
        .then(function (response) {
            let jsonData = response.data;
            console.log(jsonData);
            for (let i = 0; i < jsonData.length; i++) {
                let artistData = [

                ]
            }
        })
}; 



console.log('Command: ' + command);
console.log('Search: ' + search);







fs.readFile("movies.txt", "utf8", function (error, data) {


    if (error) {
        return console.log(error);
    }


    console.log(data);

    var dataArr = data.split(",");

    console.log(dataArr);

});


console.log(process.env.SPOTIFY_ID)
};
require("dotenv").config();

const keys = require("./keys.js");
const axios = require("axios");
/*const spotify = new Spotify(keys.spotify);

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

            for(let i = 0; i < jsonData.length; i++) {
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


axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
    function (response) {
        console.log("The movie's rating is: " + response.data.imdbRating);
    }
);

var fs = require("fs");


fs.readFile("movies.txt", "utf8", function (error, data) {


    if (error) {
        return console.log(error);
    }


    console.log(data);

    var dataArr = data.split(",");

    console.log(dataArr);

});


console.log(process.env.SPOTIFY_ID)
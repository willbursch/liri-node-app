require("dotenv").config();
const fs = require('fs');
const keys = require("./keys");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
const request = require("request");

//Spotify 

const getSpotify = function (songName) {
     
    spotify.search({ type: 'track', query: songName }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
    });

    console.log(data.tracks.items[0]);

    };


//Switch Statement to execute the command from the user
const pick = function (caseData, functionData) {
    switch (caseData) {
        case 'spotify-this-song':
        getSpotify(functionData);
        break;
    default:
      console.log('LIRI no comprende');
    }};

const runThis = function(argOne, argTwo) {
    pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);

//OMDb Api
//http://www.omdbapi.com/?i=tt3896198&apikey=fe869323

  
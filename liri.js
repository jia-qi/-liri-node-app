var Twitter = require("twitter");
var SpotifyWebApi = require('spotify-web-api-node');
var request = require('request');


var client = new Twitter({
  consumer_key: '<uwMNSKJItUnWU1fXjtRhzxJPR>',
  consumer_secret: '<dLSsU4t1uXf4MYzVfxaFATxj6Cbugw18mV3KXiDRgLpwz4DylJ>',
  access_token_key: '<803660094021849088-0B7vYN5WWvIYWXjkPiNlyUAZT9pbmuK>',
  access_token_secret: '<aXbQz9XKfrHrENJfwdHIOHQsPXpiu4Rs2JapgHysDCSzd>',
});

    
var params = {vic278: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

var spotify =function(){
spotifyApi.searchTracks('I want it that way')
  .then(function(data) {
    console.log('Search by "I want it that way"', data.body);
  }, function(err) {
    console.error(err);
  });
}

var movie =function(){
var nodeArgs = process.argv;

var movieName = ""
for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

    movieName = movieName + "+" + nodeArgs[i];

  }

  else {

    movieName += nodeArgs[i];

  }
}


var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  if (!error && response.statusCode === 200) {

        console.log("Release Year: " + JSON.parse(body).Year);
  }
});
}


    

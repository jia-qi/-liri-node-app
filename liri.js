var Twitter = require("twitter");
var SpotifyWebApi = require('spotify-web-api-node');
var imdb = require('imdb-api');


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

spotifyApi.searchTracks('I want it that way')
  .then(function(data) {
    console.log('Search by "I want it that way"', data.body);
  }, function(err) {
    console.error(err);
  });

var movie;
imdb.getReq({ name: '' }, function(err, things) {
    movie = things;
});


imdb.get('The Toxic Avenger').then(function(data) { console.log(data) });
imdb.getById('tt0090190).then(function(data) { console.log(data) });
imdb.getReq({ name: '  ' }).then(function(data) { console.log(data) });
    

    

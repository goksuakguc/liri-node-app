var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');

const getTweets = () => {
 
    var client = new Twitter({
      consumer_key: '',
      consumer_secret: '',
      access_token_key: '',
      access_token_secret: ''
    });
     
    var params = {screen_name: 'nodejs'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        console.log(tweets);
      }
    });    
}

const getSpotify = (songHere) => {
   
    var spotify = new Spotify({
      id: 'bcfb63f99dff454cb67464792b303f79',
      secret: 'e79bb1c3f7c04ef4876a04dc5982f3bc'
    });
     
    spotify.search({ type: 'track', query: songHere.replace("-"," ") }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
     
    console.log(data); 
    });    
}

const getOMDB = (movieTitle) => {
    
    request('http://www.omdbapi.com/?i=tt3896198&apikey=35fbcd00&t=' + movieTitle.replace("-"," "), function (error, response, body) {
      // Print the response status code if a response was received
      var json = JSON.parse(body)
      //console.log('body:', body); // Print the HTML for the Google homepage.
      console.log('Movie Title: ' + json.Title);
      console.log('Movie Year: ' + json.Year);
      console.log('IMDB Rating: ' + json.Ratings.imdbRating);
      console.log('Rotten Tomatoes Rating of the movie:: ' + json.Rotten);
      console.log('Country where the movie was produced: ' + json.Country);
      console.log('Language of the movie: ' + json.Language);
      console.log('Plot: ' + json.Plot);
      console.log('Actors: ' + json.Actors);



    });   
}

if(process.argv[2] === 'my-tweets'){

}else if( process.argv[2] === 'spotify-this-song'){
getSpotify (process.argv[3])
}else if(process.argv[2] === 'movie-this'){
getOMDB(process.argv[3])
}else if(process.argv[2] === 'do-what-it-says'){

};

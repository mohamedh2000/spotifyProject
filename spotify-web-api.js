
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId: '',
    clientSecret: '',
    redirectUrl: 'http://localhost:8888/callback'
});

var scopes = ["user-read-private", "user-read-email", "user-library-read"];

function getTopArtists(access_token) {
    spotifyApi.getMyTopArtists()
    spotifyApi.getMyTopArtists(20,(err, data) => {err ? console.log(err) : console.log(data.body)});
}
/*
Options are JSON need to find out how to write the options 
*/
console.log(getTopArtists());



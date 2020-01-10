
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId: '8600e8a6e2f74e29b295d2a9bc999b36',
    clientSecret: 'b4befb4395ac4565a9e3f8524cbd551e',
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



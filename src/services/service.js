//Create a service to retrieve data from the server
var Fetch = require('whatwg-fetch');
var baseUrl = 'http://localhost:8081';

var service = {
    get: function(url) {
        var fullUrl = baseUrl + url;
        console.log("Using Url:", fullUrl);

        return fetch(fullUrl)
        .then(function(response) {
            console.log("Response", response);
            return response.json();
        });
    }
};

module.exports = service;

var Fetch = require('whatwg-fetch');
var baseUrl = 'http://localhost:8081';

var service = {
    get: function(url) {
        return fetch(baseUrl + url)
        .then(function(response) {
            console.log("Response:...", response);
            return response.json();
        });
    }
};

module.exports = service;

var Fetch = require('whatwg-fetch');
var baseUrl = 'http://172.16.114.144:8081';

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

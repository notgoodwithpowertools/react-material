var Fetch = require('whatwg-fetch');
//var baseUrl = 'http://172.16.114.162:8081';
var baseUrl = 'http://localhost:8081';


var service = {
    get: function(url) {
        return fetch(baseUrl + url)
        .then(function(response) {
            console.log("Response:...", response);
            return response.json();
        });
    },
    post: function(url, job) {
       return fetch(baseUrl + url, {
         headers: {
           'Accept': 'text/plain',
           'Content-Type': 'application/json'
         },
         method: 'post',
         body: JSON.stringify(job)
       }).then(function(response) {
         return response;

       });
    }
};

module.exports = service;

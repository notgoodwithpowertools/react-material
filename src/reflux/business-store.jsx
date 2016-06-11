var HTTP = require('../services/httpservice');

var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var BusinessStore = Reflux.createStore({
  listenables: [Actions],
  getBusinesses: function() {
    HTTP.get('/bus')
    .then(function(data) {
        console.log("Data:...", data);
        this.businesses = data;
        //this.setState({businesses: data});
        this.fireUpdate();
    }.bind(this));
  },
  postBusiness: function(text) {
    console.log("PostBusiness");

    //Posted Business to the server
    //Now we have a successful callback

  },
  //Refresh function
  fireUpdate: function() {
    this.trigger('change', this.businesses);
  }


});

module.exports = BusinessStore;

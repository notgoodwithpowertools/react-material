var HTTP = require('../services/httpservice');

var Reflux = require('reflux');
var JobActions = require('./job-actions.jsx');

var JobStore = Reflux.createStore({
  listenables: [JobActions],
  getJobs: function() {
    HTTP.get('/jobs')
    .then(function(data) {
        console.log("Job Data:...", data);
        this.jobs = data;
        //this.setState({businesses: data});
        this.fireUpdate();
    }.bind(this));
  },
  postJob: function(text) {
    console.log("PostJob...");
    if (!this.jobs) {
      this.jobs = [];
    }
    console.log("Total Jobs:", this.jobs.length);
    var job = {
      "id": Math.floor(Date.now()/1000),
      "busname": text,
      "image": 'images/plumbing.jpg',
      "job_cat": "plumbing",
      "job_txt": "This is the new job text"
    };
    console.log("Adding Job...", job);

    this.jobs.push(job);
    console.log("Total Jobs after push:", this.jobs.length);

    this.fireUpdate();

    HTTP.post('/jobs', job)
    .then(function(response) {
      this.getJobs();
    }.bind(this));


    //Posted Business to the server
    //Now we have a successful callback

  },
  //Refresh function
  fireUpdate: function() {
    this.trigger('change', this.jobs);
  }


});

module.exports = JobStore;

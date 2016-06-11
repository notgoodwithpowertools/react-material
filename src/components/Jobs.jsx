var React = require('react');
//var ListItem = require('./ListItem.jsx');
//var HTTP = require('../services/httpservice');

var Reflux = require('reflux');
var JobActions = require('../reflux/job-actions.jsx');
var JobStore = require('../reflux/jobs-store.jsx');

var JobCard = require('./JobCard.jsx');

var Jobs = React.createClass({
    mixins:[Reflux.listenTo(JobStore, 'onChange')],
    getInitialState: function() {
        console.log("Setting jobs initial state...");

        return {jobs:[]};
    },
    componentDidUpdate: function(){
      console.log("Total Jobs in ComponentDidUpdate:", this.state.jobs.length);
    },
    componentDidMount: function(){
      console.log("Total Jobs in ComponentDidMount:", this.state.jobs.length);
    },
    componentWillMount: function() {
        JobActions.getJobs();
        //Actions.postBusiness("hello post");
    },
    onChange: function(event, data) {
      this.setState({jobs: data});

    },
    render: function() {
       console.log("Total Jobs in render:", this.state.jobs.length);
       var createCard = function(item, index) {
          return <JobCard image={item.image} busname={item.busname} key={index} jobcat={item.job_cat}/>;
        };

        return (

          <div className="mdl-grid portfolio-max-width">
            {this.state.jobs.map(createCard)}
          </div>

        );
    }
});

module.exports = Jobs;

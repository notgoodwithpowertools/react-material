var React = require('react');
//var ListItem = require('./ListItem.jsx');
//var HTTP = require('../services/httpservice');

var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var BusinessStore = require('../reflux/business-store.jsx');

var Card = require('./Card.jsx');

var Listings = React.createClass({
    mixins:[Reflux.listenTo(BusinessStore, 'onChange')],
    getInitialState: function() {
        console.log("Setting initial state");

        return {businesses:[]};
    },
    componentWillMount: function() {
        Actions.getBusinesses();
        //Actions.postBusiness("hello post");
    },
    onChange: function(event, data) {
      this.setState({businesses: data})

    },
    render: function() {
       var createCard = function(item, index) {
          return <Card image={item.image} busname={item.busname} key={index} jobscount={item.jobs}/>;
        };

        return (

          <div className="mdl-grid portfolio-max-width">
            {this.state.businesses.map(createCard)}
          </div>

        );
    }
});

module.exports = Listings;

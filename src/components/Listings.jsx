var React = require('react');
var ListItem = require('./ListItem.jsx');
var HTTP = require('../services/httpservice');
var Card = require('./Card.jsx');

var Listings = React.createClass({
    getInitialState: function() {
        return {businesses:[]};
    },
    componentWillMount: function() {
        HTTP.get('/bus')
        .then(function(data) {
            console.log("Data:...", data);
            this.setState({businesses: data});
        }.bind(this));
    },
    render: function() {
       var createCard = function(item, index) {
          return <Card image={item.image} busname={item.busname} key={index}/>;
        };


        var listItems = this.state.businesses.map(function(item) {
            return <ListItem key={item.id} ingredient={item.busname} />;
        });

        return (

          <div className="mdl-grid portfolio-max-width">
            {this.state.businesses.map(createCard)}
          </div>

        );
    }
});

module.exports = Listings;

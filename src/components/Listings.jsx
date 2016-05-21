var React = require('react');
var Card = require('./Card.jsx');

var Listings = React.createClass({
  render: function(){
    return (

      <div className="mdl-grid portfolio-max-width">
        <Card image='images/carter.jpeg' busname="Carter Grange"/>
        <Card image='images/juggarnort.jpeg' busname="Juggarnort"/>
        <Card image='images/01.jpg' busname="Jassy's Caulking"/>
        <Card image='images/carter.jpeg' busname="Carter Grange"/>
        <Card image='images/juggarnort.jpeg' busname="Juggarnort"/>
        <Card image='images/01.jpg' busname="Jassy's Caulking"/>
        <Card image='images/01.jpg' busname="Jassy's Caulking"/>

      </div>

    );
  }

});

module.exports = Listings;

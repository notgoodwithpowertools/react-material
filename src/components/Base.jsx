//Everything that you want to show on every page1

var React = require('react');
var Footer = require('./Footer.jsx');
var Nav = require('./Nav.jsx');
var Drawer = require('./Drawer.jsx');
var Card = require('./Card.jsx');

var Base = React.createClass({
  render: function() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
          <div className="mdl-layout__header-row portfolio-logo-row">
            <span className="mdl-layout__title">
              <div className="portfolio-logo"></div>
              <span className="mdl-layout__title">Sam's Trades & Builders</span>
            </span>
          </div>
          <Nav />
        </header>
        <Drawer />
        <main className="mdl-layout__content">
          <div className="mdl-grid portfolio-max-width">
            <Card image='images/carter.jpeg' busname="Carter Grange"/>
            <Card image='images/juggarnort.jpeg' busname="Juggarnort"/>
            <Card image='images/01.jpg' busname="Jassy's Caulking"/>
            <Card image='images/carter.jpeg' busname="Carter Grange"/>
            <Card image='images/juggarnort.jpeg' busname="Juggarnort"/>
            <Card image='images/01.jpg' busname="Jassy's Caulking"/>
            <Card image='images/01.jpg' busname="Jassy's Caulking"/>

          </div>
          <div>
            <Footer text="Hello"/>
          </div>

        </main>

    </div>

    );
  }

});

module.exports = Base;

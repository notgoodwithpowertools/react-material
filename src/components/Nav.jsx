var React = require('react');

var Nav = React.createClass({
  render: function(){
    return (

      <div className="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">

        <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
          <a className="mdl-navigation__link is-active" href="index.html">Portfolio</a>
          <a className="mdl-navigation__link" href="blog.html">Blog</a>
          <a className="mdl-navigation__link" href="about.html">About</a>
          <a className="mdl-navigation__link" href="contact.html">Contact</a>
        </nav>
      </div>

    );
  }

});

module.exports = Nav;

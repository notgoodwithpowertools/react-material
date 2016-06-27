var React = require('react');

var Footer = React.createClass({


  render: function(){
    return (

      <footer className="mdl-mini-footer">
        <div className="mdl-mini-footer__left-section">
          <div className="mdl-logo">Simple portfolio website</div>
        </div>
        <div className="mdl-mini-footer__right-section">
          <ul className="mdl-mini-footer__link-list">
            <li><a href="#">Help</a></li>
            <li><a href="#">Privacy & Terms</a></li>
          </ul>
        </div>
      </footer>

    );
  }

});

module.exports = Footer;

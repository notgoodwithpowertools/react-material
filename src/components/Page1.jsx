var React = require('react');

var Page1 = React.createClass({
  render: function(){
    return (

        <div>
          {/* <!-- Accent-colored raised button with ripple --> */}
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
            Material Lite Button
          </button>
          {/* <!-- Colored FAB button --> */}
          <button className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
            <i className="material-icons">add</i>
          </button>
        </div>
    );
  }

});

module.exports = Page1;

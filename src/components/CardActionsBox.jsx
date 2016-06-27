var React = require('react');
var InboxBadge = require('./InboxBadge.jsx');

var CardActionsBox = React.createClass({

    render: function() {

        return (
          <div className="mdl-grid mdl-card__actions mdl-card--border">
            <div className="mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone">
              <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="portfolio-example01.html">Read more</a>
            </div>
            <div className="mdl-cell mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--3-col-phone">
              <InboxBadge jobscount={this.props.jobscount} />
            </div>
          </div>
        );

    }
});

module.exports = CardActionsBox;

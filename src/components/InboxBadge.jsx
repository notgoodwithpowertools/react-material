var React = require('react');

var InboxBadge = React.createClass({

    render: function() {

        return (
          <div className="inbox-badge">

              <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="portfolio-example01.html">Jobs</a>
              <div className="material-icons mdl-badge mdl-badge--overlap" data-badge={this.props.jobscount}></div>

          </div>

        );

    }
});

module.exports = InboxBadge;

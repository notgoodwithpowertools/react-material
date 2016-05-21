var React = require('react');

var Card = React.createClass({


  render: function(){
  //Currently not using imgStyle
    var imgStyle = {
      //backgroundSize: '75px 75px'
    };

    return (


        <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
          <div className="mdl-card__media">
            <img className="article-image mycard" src={this.props.image} alt="" />
          </div>
          <div className="mdl-card__title mytitle">
            <h3 className="mdl-card__title-text">{this.props.busname}</h3>
          </div>
          <div className="mdl-card__supporting-text">
            <p>At Carter Grange we are always hdgasdsjdhdskjdhkj h dhsdkashd khdjh sasakdjashkdj on the lookout for trades that care about their work.</p>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="portfolio-example01.html">Read more</a>
          </div>
        </div>

    );
  }

});

module.exports = Card;

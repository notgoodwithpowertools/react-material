var React = require('react');

var JobCard = React.createClass({

  render: function(){

    //Currently not using imgStyle
    var imgStyle = {
      //backgroundSize: '75px 75px'
    };

    return (


      <div className="mdl-grid mdl-cell mdl-cell--12-col mdl-cell--4-col-tablet mdl-card mdl-shadow--4dp">
        <div className="mdl-card__media mdl-cell mdl-cell--12-col-tablet">
          <img className="article-image jobcard" src={this.props.image} border="0" alt=""/>
          </div>
          <div className="mdl-cell mdl-cell--8-col">
            <h2 className="mdl-card__title-text">{this.props.busname}</h2>
            <div className="mdl-card__supporting-text padding-top">
              <span>Posted 2 days ago</span>
              <div id="tt1" className=" icon material-icons portfolio-share-btn">share</div>
              <div className="mdl-tooltip" htmlFor="tt1">
                Share via social media
              </div>
            </div>
            <div className="mdl-card__supporting-text no-left-padding">
              <p>Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Qui ullamco consectetur aute fugiat officia ullamco proident Lorem ad irure. Sint eu ut consectetur ut esse veniam laboris adipisicing aliquip minim anim labore commodo.</p>
              <span>Category: <a href="#">{this.props.jobcat}</a></span>
            </div>
          </div>
        </div>


      );
    }

  });

  module.exports = JobCard;

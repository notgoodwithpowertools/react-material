var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
import { IndexRoute } from 'react-router';

var Base = require('./components/Base.jsx');
var Page1 = require('./components/Page1.jsx');
var Page2 = require('./components/Page2.jsx');
var Listings = require('./components/Listings.jsx');


var Routes = (
  <Router>

    <Route path="/" component={Base}>
      <IndexRoute component={Listings} />
      <Route path="/listings" component={Listings}/>
      <Route path="/page1" component={Page1}/>
      <Route path="/page2" component={Page2}/>

    </Route>
  </Router>

);

module.exports = Routes;

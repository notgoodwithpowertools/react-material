var Reflux = require('reflux');

var Actions = Reflux.createActions([
  "getBusinesses",
  "postBusiness"
]);

console.log("Getting Actions...");

module.exports = Actions;

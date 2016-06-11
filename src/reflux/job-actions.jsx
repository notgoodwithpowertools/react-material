var Reflux = require('reflux');

var JobActions = Reflux.createActions([
  "getJobs",
  "postJob"
]);

console.log("Getting Job Actions...");

module.exports = JobActions;

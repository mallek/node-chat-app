const moment = require('moment');
//Jan 1st 1970 00:00:10am


var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('MMM Do, YYYY HH:mm'));

console.log(date.format('h:mm a'));

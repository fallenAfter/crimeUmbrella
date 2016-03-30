var mongoose = require('mongoose');
var schema = mongoose.Schema;
//schema for holding research information
//will expand soon

var Research = new schema({
	section: Number,
	roadConditions: Number
});

// make public to the rest of the app
module.exports = mongoose.model('Research', Research);
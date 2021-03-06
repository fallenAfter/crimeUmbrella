var mongoose = require('mongoose');
var schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

// create the account schema
var Account = new schema({
    username: String,
    password: String,
    name: String,
    adminLevel: String
    //name: String
});

Account.plugin(passportLocalMongoose);

// make public to the rest of the app
module.exports = mongoose.model('Account', Account);
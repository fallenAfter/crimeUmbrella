var mongoose = require('mongoose');
var schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

// create the account schema
var Account = new schema({
<<<<<<< HEAD
    username: String,
    password: String,
    name: String,
    adminLevel: String
=======
    //email: String,
    username: String,
    password: String
>>>>>>> 6c0e2a8bc5c19efd0435cbb9144aa4c105b20760
    //name: String
});

Account.plugin(passportLocalMongoose);

// make public to the rest of the app
module.exports = mongoose.model('Account', Account);
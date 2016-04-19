var express = require('express');
var router = express.Router();

// add auth package refs
var passport = require('passport');
var mongoose = require('mongoose');
var Account = require('../models/account');
var configDb = require('../config/db.js');


// set up the GET handler for branches page
router.get('/', function(req, res, next) {
    // use the article model to query the articles collection in the database
    Account.find(function(err, accounts) {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.render('accounts', {
                title: 'Admin List',
                accounts: accounts
            });

        };
    });
});



//make this public
module.exports = router, passport;
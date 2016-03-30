var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Research = require('../models/research');

/* Sample index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index to see each page' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
/* GET map page. */
router.get('/map', function(req, res, next) {
  res.render('map', { title: 'Map' });
});
/* GET data page. */
router.get('/data', function(req, res, next) {
	Research.find(function (err,research){
		if(err){
			console.log(err);
			res.end(err);
		}
		else{
			console.log(research.roadConditions);
			res.render('data', {
			  	title: 'Data',
			  	research: research
			});
		}
	});
  
});
/* GET admin page. */
router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'Admin' });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Conatact' });
});
/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});
/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});
module.exports = router;

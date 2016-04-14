var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var mongoose = require('mongoose');
var Research = require('../models/research');
=======
>>>>>>> 6c0e2a8bc5c19efd0435cbb9144aa4c105b20760

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
<<<<<<< HEAD
	//query database for research information
	Research.find(function (err, research){
		if(err){
			console.log(err);
			res.end(err);
		}
		console.log(research);
		res.render('map', {
		   	title: 'Map',
		   	research: research
	   });
	});
  
});
router.get('/map/data', function(req,res,next){
	Research.find(function (err, research){
		if(err){
			console.log(err);
			res.end(err);
		}
		return research;
	   });
});
/* GET data page. */
router.get('/data', function(req, res, next) {
	Research.find(function (err,research){
		if(err){
			console.log(err);
			res.end(err);
		}
		else{
			res.render('data', {
			  	title: 'Data',
			  	research: research
			});
		}
	}).sort({section:1});
  
=======
  res.render('map', { title: 'Map' });
});
/* GET data page. */
router.get('/data', function(req, res, next) {
  res.render('data', { title: 'Data' });
>>>>>>> 6c0e2a8bc5c19efd0435cbb9144aa4c105b20760
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

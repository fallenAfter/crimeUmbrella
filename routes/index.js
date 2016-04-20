var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Research = require('../models/research');
var Accounts = require('../models/account');
//include nodemailer
var nodemailer = require('nodemailer');

//set up transporter for gmail
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'ideafactorygeorgian@gmail.com',
		pass: 'Rachel2016'
	},
	debug: true
});

/* Sample index page. */
router.get('/', isAuth, function(req, res, next) {
  res.render('index', { title: 'Index to see each page' });
});
/* GET map page. */
router.get('/map', isAuth, function(req, res, next) {
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
router.get('/map/data', isAuth, function(req,res,next){
	Research.find(function (err, research){
		if(err){
			console.log(err);
			res.end(err);
		}
		return research;
	   });
});
/* GET data page. */
router.get('/data', isAuth, function(req, res, next) {
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
  
});
/* GET admin page. */
router.get('/admin', isAdmin, function(req, res, next) {
	Accounts.find(function (err, users){
		if(err){
			console.log(err);
			res.end(err)
		}
		res.render('admin', { title: 'Admin', accounts: users });
	});
	
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Conatact' });
});

// post for contact page. This will take form information submited and use it to compose and send an email using node mailer
router.post('/contact', function (req,res,next){
	//create object for sending mail
	//this is done here because the post will return some variables that are required for the message
	var mailOptions = {
		from: 'ideafactorygeorgian@gmail.com',
		to: 'ideafactorygeorgian@gmail.com',
		subject: 'Contact from contact form',
		html: '<p>'+ req.body.message+'</p><p>'+req.body.fName+' '+req.body.lName+'</p><p>'+req.body.email+'</p>'
	}
	//send mail
	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.end(error);
		}
		else{
			console.log('mail sent');
			res.redirect('/mail');
		}
	})
});
//page to send user after mail was sent successfully
router.get('/mail', function(req,res,next){
	res.render('mail', {title: 'Mail Sent'});
});

/* GET register page. */
router.get('/register', isAuth, function(req, res, next) {
  res.render('register', { title: 'Register' });
});
/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});
// need to be admin page. users redirected here if they are not an admin and try accessing the admin page
router.get('/login', function(req,res,next){
	res.render('needPermissions', {title: 'admin required'})
});


//function to see if user is authenticated
function isAuth(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	else{
		res.redirect('/auth/login');
	}
}
//function to authenticate if user is an admin for admin only pages and forms
function isAdmin (req,res, next){
	if(!req.user||req.user.adminLevel != 'administrator'){
		res.redirect('/auth/login');
	}
	else{
		return next();
	}
}
module.exports = router;

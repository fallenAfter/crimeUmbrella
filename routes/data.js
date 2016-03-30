var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');
var Research = require('../models/research');

router.get('/add', function (req,res,next){
	res.render('data/add',{
		title:'add entry'
	});
});

//post method to add article to database
router.post('/add', function (req,res,next){
	Research.create({
		section: req.body.section,
		roadConditions: req.body.roadConditions
	});
	//redirect to global data page
	res.redirect('/data');
});

module.exports = router;
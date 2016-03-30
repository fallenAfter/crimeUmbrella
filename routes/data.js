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

//edit update functions
router.get('/edit/:id', function (req,res,next){
	//get it grom address bar
	id= req.params.id;
	//query database for entry matching id
	Research.findById(id, function (err,research){
		if(err){
			console.log(err);
			res.end(err);
		}
		else{
			console.log(research._id);
			res.render('data/edit', {
				title: "edit",
				research: research
			});
		}
	});
	
});

//create post function to update the database
router.post('/edit/:id', function (req,res,next){
	//get id from url
	id = req.params.id;
	//populate model

	var research = new Research({
		_id: id,
		section: req.body.section,
		roadConditions: req.body.roadConditions
	});
	//update model
	Research.update({ _id: id}, research, function (err){
		if(err){
			console.log(err);
			res.end(err);
		}
		else{
			res.redirect('/data');
		}
	});
});

//create delete function
router.get('/delete/:id', function (req,res,next){
	//get id from url
	var id = req.params.id;
	//remove data
	Research.remove({_id:id}, function (err){
		if(err){
			console.log(err);
			res.end(err);
		}
		else{
			res.redirect('/data');
		}
	});
});

module.exports = router;
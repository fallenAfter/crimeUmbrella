var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');
var Research = require('../models/research');

router.get('/add', isAuth, function (req,res,next){
	res.render('data/add',{
		title:'add entry'
	});
});

//post method to add article to database
router.post('/add', isAuth, function (req,res,next){
	//create object to store data
	var data= {
		section: req.body.section,
		density: req.body.density,
		zoning: req.body.zoning,
		streetConnection: req.body.streetConnection,
		sidewalks: req.body.sidewalks,
		sidewalkWidth: req.body.sidewalkWidth,
		sidewalkBuffer: req.body.sidewalkBuffer,
		sidewalkRamps: req.body.sidewalkRamps,
		sidewalkCondition: req.body.sidewalkCondition,
		sidewalkObstructions: req.body.sidewalkObstructions,
		sidewalkSnowfall: req.body.sidewalkSnowfall,
		crosswalks: req.body.crosswalks,
		crosswalkSymbols: req.body.crosswalkSymbols,
		cyclingLanes: req.body.cyclingLanes,
		cyclingLanesNearest: req.body.cyclingLanesNearest,
		CyclingRoadSafe: req.body.CyclingRoadSafe,
		cyclingLanesConnection: req.body.cyclingLanesConnection,
		cyclingLanesSignage: req.body.cyclingLanesSignage,
		cyclingLightsAccessability: req.body.cyclingLightsAccessability,
		cyclingBikeRacks: req.body.cyclingBikeRacks,
		cyclingBusBikeRack: req.body.cyclingBusBikeRack,
		roadTrafficFlow: req.body.roadTrafficFlow,
		roadStreetWidth: req.body.roadStreetWidth,
		roadOnStreetParking: req.body.roadOnStreetParking,
		roadTrafficCalming: req.body.roadTrafficCalming,
		roadVehicleRestrictions: req.body.roadVehicleRestrictions,
		trailPaths: req.body.trailPaths,
		trailsConnection: req.body.trailsConnection,
		trailSafety: req.body.trailSafety,
		trailSkateboard: req.body.trailSkateboard,
		transitStops: req.body.transitStops,
		transitClosestStop: req.body.transitClosestStop,
		transitShelters: req.body.transitShelters,
		transitRouteInfo: req.body.transitRouteInfo,
		safetyGeneralSafety: req.body.safetyGeneralSafety,
		safetyVacantBuildings: req.body.safetyVacantBuildings,
		safetyPersonsWatching: req.body.safetyPersonsWatching,
		aestheticTrees: req.body.aestheticTrees,
		aestheticStreetLife: req.body.aestheticStreetLife,
		aestheticBuildingProximity: req.body.aestheticBuildingProximity,
		aestheticWeatherProtection: req.body.aestheticWeatherProtection,
		aestheticStreetFurniture: req.body.aestheticStreetFurniture,
		aestheticStreetscape: req.body.aestheticStreetscape,
		servicesAccess: req.body.servicesAccess,
		servicesGroceryProximity: req.body.servicesGroceryProximity,
		servicesParkProximity: req.body.servicesParkProximity,
		servicesHealthcare: req.body.servicesHealthcare,
		planningOCP: req.body.planningOCP,
		planningPedestrianPlan: req.body.planningPedestrianPlan,
		planningMunicipalCommitees: req.body.planningMunicipalCommitees,
		planningEvents: req.body.planningEvents
	}
	console.log(data);

	Research.create(data, function (err, data){
		if(err){
			console.log(err);
		}

	});
	//redirect to global data page
	res.redirect('/data');
});

//edit update functions
router.get('/edit/:id', isAuth, function (req,res,next){
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
router.post('/edit/:id', isAuth, function (req,res,next){
	//get id from url
	id = req.params.id;
	//populate model

	var research = new Research({
		_id: id,
		section: req.body.section,
		density: req.body.density,
		zoning: req.body.zoning,
		streetConnection: req.body.streetConnection,
		sidewalks: req.body.sidewalks,
		sidewalkWidth: req.body.sidewalkWidth,
		sidewalkBuffer: req.body.sidewalkBuffer,
		sidewalkRamps: req.body.sidewalkRamps,
		sidewalkCondition: req.body.sidewalkCondition,
		sidewalkObstructions: req.body.sidewalkObstructions,
		sidewalkSnowfall: req.body.sidewalkSnowfall,
		crosswalks: req.body.crosswalks,
		crosswalkSymbols: req.body.crosswalkSymbols,
		cyclingLanes: req.body.cyclingLanes,
		cyclingLanesNearest: req.body.cyclingLanesNearest,
		CyclingRoadSafe: req.body.CyclingRoadSafe,
		cyclingLanesConnection: req.body.cyclingLanesConnection,
		cyclingLanesSignage: req.body.cyclingLanesSignage,
		cyclingLightsAccessability: req.body.cyclingLightsAccessability,
		cyclingBikeRacks: req.body.cyclingBikeRacks,
		cyclingBusBikeRack: req.body.cyclingBusBikeRack,
		roadTrafficFlow: req.body.roadTrafficFlow,
		roadStreetWidth: req.body.roadStreetWidth,
		roadOnStreetParking: req.body.roadOnStreetParking,
		roadTrafficCalming: req.body.roadTrafficCalming,
		roadVehicleRestrictions: req.body.roadVehicleRestrictions,
		trailPaths: req.body.trailPaths,
		trailsConnection: req.body.trailsConnection,
		trailSafety: req.body.trailSafety,
		trailSkateboard: req.body.trailSkateboard,
		transitStops: req.body.transitStops,
		transitClosestStop: req.body.transitClosestStop,
		transitShelters: req.body.transitShelters,
		transitRouteInfo: req.body.transitRouteInfo,
		safetyGeneralSafety: req.body.safetyGeneralSafety,
		safetyVacantBuildings: req.body.safetyVacantBuildings,
		safetyPersonsWatching: req.body.safetyPersonsWatching,
		aestheticTrees: req.body.aestheticTrees,
		aestheticStreetLife: req.body.aestheticStreetLife,
		aestheticBuildingProximity: req.body.aestheticBuildingProximity,
		aestheticWeatherProtection: req.body.aestheticWeatherProtection,
		aestheticStreetFurniture: req.body.aestheticStreetFurniture,
		aestheticStreetscape: req.body.aestheticStreetscape,
		servicesAccess: req.body.servicesAccess,
		servicesGroceryProximity: req.body.servicesGroceryProximity,
		servicesParkProximity: req.body.servicesParkProximity,
		servicesHealthcare: req.body.servicesHealthcare,
		planningOCP: req.body.planningOCP,
		planningPedestrianPlan: req.body.planningPedestrianPlan,
		planningMunicipalCommitees: req.body.planningMunicipalCommitees,
		planningEvents: req.body.planningEvents
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
router.get('/delete/:id', isAuth, function (req,res,next){
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

//function to see if user is authenticated
function isAuth(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	else{
		res.redirect('/auth/login');
	}
}

module.exports = router;
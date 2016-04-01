var mongoose = require('mongoose');
var schema = mongoose.Schema;
//schema for holding research information
//will expand soon

var Research = new schema({
	section: Number,
	density: Number,
	zoning: Number,
	streetConnection: Number,
	sidewalks: Number,
	sidewalkWidth: Number,
	sidewalkBuffer: Number,
	sidewalkRamps: Number,
	sidewalkCondition: Number,
	sidewalkObstructions: Number,
	sidewalkSnowfall: Number,
	crosswalks: Number,
	crosswalkSymbols: Number,
	cyclingLanes: Number,
	cyclingLanesNearest: Number,
	CyclingRoadSafe: Number,
	cyclingLanesConnection: Number,
	cyclingLanesSignage: Number,
	cyclingLightsAccessability: Number,
	cyclingBikeRacks: Number,
	cyclingBusBikeRack: Number,
	roadTrafficFlow: Number,
	roadStreetWidth: Number,
	roadOnStreetParking: Number,
	roadTrafficCalming: Number,
	roadVehicleRestrictions: Number,
	trailPaths: Number,
	trailsConnection: Number,
	trailSafety: Number,
	trailSkateboard: Number,
	transitStops: Number,
	transitClosestStop: Number,
	transitShelters: Number,
	transitRouteInfo: Number,
	safetyGeneralSafety: Number,
	safetyVacantBuildings: Number,
	safetyPersonsWatching: Number,
	aestheticTrees: Number,
	aestheticStreetLife: Number,
	aestheticBuildingProximity: Number,
	aestheticWeatherProtection: Number,
	aestheticStreetFurniture: Number,
	aestheticStreetscape: Number,
	servicesAccess: Number,
	servicesGroceryProximity: Number,
	servicesParkProximity: Number,
	servicesHealthcare: Number,
	planningOCP: Number,
	planningPedestrianPlan: Number,
	planningMunicipalCommitees: Number,
	planningEvents: Number


});

// make public to the rest of the app
module.exports = mongoose.model('Research', Research);
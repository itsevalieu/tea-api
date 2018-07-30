//Dependencies
//============================================================
const path = require("path");

//Data
//============================================================
const teas = require("../data/teas.json");

//Routes
//============================================================

module.exports = function(app){
	app.get("/", function(request, response){
		response.send({"hello": "world"});
	});
	app.get("/api", function(request, response){
		console.log(teas);
		response.json(teas);
	});
};

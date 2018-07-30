//Dependencies
//============================================================
const path = require("path");
const os = require("os");
//Data
//============================================================
const teas = require("../data/teas.json");

//Routes
//============================================================

module.exports = function(app){
	app.get("/", function(request, response, next){
		response.json({
			"mess": "hello, you're on the whitelist",
			"origin": request.headers.origin,
			"os_hostname": os.hostname(),
			"os_cpus": os.cpus()
	});
	app.get("/api", function(request, response){
		console.log(teas);
		response.json(teas);
	});
};

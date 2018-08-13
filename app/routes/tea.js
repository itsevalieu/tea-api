//Dependencies
const express = require('express');
const router = require('express-promise-router')();

const TeaControllers = require('../controllers/tea.js');

//Routes
router.route('/api')
	.get(function(request, response, next){
		response.json({
			"mess": "hello, you're on the whitelist",
			// "origin": request.headers.origin,
			// "os_hostname": os.hostname(),
			// "os_cpus": os.cpus()
		});
	});

router.route('/tea').get(TeaControllers.getTea);
	// .get(function(request, response){
	// 	console.log(teas);
	// 	response.json(teas);
	// });

module.exports = router;
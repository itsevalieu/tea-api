const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// const conf = {
// 	port: process.env.PORT || process.argv[2] || 3000,
// 	originUndefined: function (req, res, next) {
// 		if (!req.headers.origin) {
// 			res.json({
// 				"mess": "Hey, you're visiting the service locally. If this was a CORS the origin header should not be undefined"
// 			});
// 		} else {
// 			next();
// 		}
// 	},
// 	cors: {
// 		origin: function (origin, cb) {
// 			let whiteList = ['https://teafographic.netlify.com', 'localhost:3000/encyclopedia'];
// 			if(whiteList.indexOf(origin) != -1) {
// 				cb(null, true);
// 			} else {
// 				cb(new Error('invalid origin: ' + origin), false);
// 			}
// 		},
// 		optionsSuccessStatus: 200
// 	}
// };
// app.use(conf.originUndefined, cors(conf.cors));


// const allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

//     // intercept OPTIONS method
//     if ('OPTIONS' == req.method) {
//       res.send(200);
//     }
//     else {
//       next();
//     }
// };



// app.configure(function () {
// 	app.use(allowCrossDomain);
// 	app.use(express.bodyParser());
// 	app.use(express.methodOverride());
// 	app.use(app.router);
// 	app.use(express.static(path.join(application_root, "public")));
// 	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
// });

//Router
//============================================================
require("./app/routes/api-routes.js")(app);


//Listener
//============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
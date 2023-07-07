const express = require('express');
const campsiteRouter = express.Router();

campsiteRouter
	.route('/')

	.all((req, res, next) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		next(); //passes control of application routing to the next relevant (get to get,post to post...) routing method after this one
	})

	//campsite endpoints
	.get((req, res) => {
		res.end('Will send all campites to you');
	})

	.post((req, res) => {
		res.end(
			`Will add the campsites: ${req.body.name} with description: ${req.body.description}`
		);
	})

	.put((req, res) => {
		res.statusCode = 403;
		res.end('PUT operation not supported on /campsites');
	})

	.delete((req, res) => {
		res.end('Deleting all campsites');
	});

module.exports = campsiteRouter;

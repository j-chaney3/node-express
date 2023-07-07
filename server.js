const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.json()); //handles parson json into js properties

app.all('/campsites', (req, res, next) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	next(); //passes control of application routing to the next relevant (get to get,post to post...) routing method after this one
});

//campsite endpoints

app.get('/campsites', (req, res) => {
	res.end('Will send all campites to you');
});

app.post('/campsites', (req, res) => {
	res.end(
		`Will add the campsites: ${req.body.name} with description: ${req.body.description}`
	);
});

app.put('/campsites', (req, res) => {
	res.statusCode = 403;
	res.end('PUT operation not supported on /campsites');
});

app.delete('/campsites', (req, res) => {
	res.end('Deleting all campsites');
});

app.get('/campsites/:campsiteId', (req, res) => {
	res.end(
		`'Will send details of the campsite: ${req.params.campsiteId} to you`
	);
});

app.post('/campsites/:campsiteId', (req, res) => {
	res.statusCode = 403;
	res.end(
		`POST operation not supported on campsites/${req.params.campsiteId}`
	);
});

app.put('/campsites/:campsiteId', (req, res) => {
	res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
	res.end(`Will update the campsite: ${req.body.name} 
        with description: ${req.body.description}`);
});

app.delete('/campsites/:campsiteId', (req, res) => {
	res.end(`Deleting campsite: ${req.params.campsiteId}`);
});

app.use((req, res) => {
	//console.log(req.headers); now logged by morgan
	res.statusCode = 200;
	res.setHeader = ('Content-Type', 'text/html');
	res.end('<html><body><h1>This is an Express Sever</h1></body></html>');
});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

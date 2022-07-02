const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();
var items = [ 'Wake Up', 'Take Bath', 'Eat Food' ];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function(req, res) {
	let day = date.getDay();
	res.render('list', {
		kindOfDay: day,
		listOfItems: items,
	});
});

app.post('/', function(req, res) {
	item = req.body.newItem;
	items.push(item);
	res.redirect('/');
});

app.get('/about', function(req, res) {
	res.render('about');
});
app.listen(5000, function() {
	console.log('The server has started running on port 5000');
});

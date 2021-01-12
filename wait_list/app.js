var express = require('express');
var mysql = require('mysql');


var app = express();

app.use(express.static(__dirname + '/public'));

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	database : 'wait_list'
});

connection.query('SELECT * FROM users', function(err, result) {
	if(err) throw err;
	console.log(result);
});

app.set("view engine", "ejs");

app.get("/", function(req, res) {
	res.render('home');
});

app.listen(3000, function() {
	console.log("Server is running on 3000");
});


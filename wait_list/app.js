var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');


var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	database : 'wait_list'
});

// // check if mysql is connected and handled db with node js
// connection.query('SELECT * FROM users', function(err, result) {
// 	if(err) throw err;
// 	console.log(result);
// });

app.set("view engine", "ejs");


app.get("/", function(req, res) {
	res.render('home');
});

app.get("/confirm", function(req, res) {
	res.render('confirm');
});


app.post("/home", function(req, res) {

	// console.log("POST REQUEST SENT TO /REGISTER");

	// console.log("Email : " + req.body.email);
		var person = { 

		name: req.body.name,
		email: req.body.email,
		msg: req.body.msg

	};

 // preparing data to be inserted

	var q = 'INSERT INTO messages SET ?';

	// as same as

	// var q = "INSERT INTO users (email) VALUES (" + req.body.email + ")";

	connection.query(q, person, function(err, result) {

		if(err) throw err;
		
		var qq ='SELECT * FROM messages AS data ORDER BY created_at DESC LIMIT 1';
		connection.query(qq, function(err, results){
			if(err) throw err;
			var name = results[0].name;
			var email = results[0].email;
			var msg = results[0].msg;
			var time = results[0].created_at;
			res.render("confirm",
					   {name: name ,email: email,msg: msg, time: time}); 
		});
	});
});

app.listen(3000, function() {
	console.log("Server is running on 3000");
});


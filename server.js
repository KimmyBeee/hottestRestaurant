var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var currTable = [];

var waitTable = [];

var Table = {
	name: "Stacy",
	phoneNum: "555 5555",
	email: "stacystacy.com",
	ID: "12345"
};

currTable.push(Table);

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserved", function(req, res) {
	res.sendFile(path.join(__dirname, "reserved.html"));
});

app.get("/tables", function(req, res) {
	res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("api", function(req, res) {
	res.json(currTable);
});

app.post("/", function(req, res) {
	var newtable = req.body;

	if (currTable.length <= 10) {
		currTable.push(newtable);
	} else {
		waitTable.push(newtable);
	}

	res.json(newtable);
});

app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});


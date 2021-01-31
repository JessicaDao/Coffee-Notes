// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

//Models for syncing
var db = require ("./models");

// Set up Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//Statis directory
app.use(express.static("public"));

// Set Handlebars as the default templating engine.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data

// Routes
app.get("/login", function(req, res) {
    res.render();
    });

app.get("/create", function(req, res) {
    res.render();
});

app.get("/journal", function(req, res) {
    res.render();
  });

db.sequelize.sync({force: true}).then(function(){
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
});
// Dependencies
var express = require("express");

// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 3000;

//Models for syncing
const db = require ("./models");

// Set up Express app to handle data parsing
app.use(express.urlencoded({
  extended:true
}));

app.use(express.json());

//Static directory
app.use(express.static("public"));

// Set Handlebars as the default templating engine.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ 
  defaultLayout: "main" 
}));
app.set("view engine", "handlebars");

app.get("/", (req,res)=>{
  res.send("hi");
})
// Data

// Routes
const userRoutes = require("./controllers/userController");
app.use(userRoute);

db.sequelize.sync({
  force: true
}).then(function(){
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
});
// *****************************************************************************
// server.js - starting point for the Node/Express server.
//
// *******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Requiring our models for syncing
var db = require("./client/models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Method Override
app.use(methodOverride('_method'));


// Static directory
app.use(express.static('client/public'));

// Routes
// =============================================================
// require("./app/routes/api-routes.js")(app);
// require("./app/routes/html-routes.js")(app);


// TEST! - talking to server?
app.get('/hi', (req, res) =>{
  res.send('hello from your server!');
});

// TEST! - GET route for returning all Donations
app.get("/api/donations/", function(req, res) {
  db.Donation.findAll({})
  .then(function(dbDonation) {
    res.json(dbDonation);
  });
});

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

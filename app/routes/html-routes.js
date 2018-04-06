
// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads index.html
    app.get("/index", function (req, rcleares) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // route loads donations.html
    app.get("/donations", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/donate.html"));
    });

     // route loads donation-search.html
     app.get("/donations-search", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/donation-search.html"));
    });

        // route loads organization.html
        app.get("/organization", function (req, res) {
            res.sendFile(path.join(__dirname, "../public/organization.html"));
        });
    
         // route loads organization-search.html
         app.get("/organization-search", function (req, res) {
            res.sendFile(path.join(__dirname, "../public/organization-search.html"));
        });

    // route loads requests.html
    app.get("/requests", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/requests.html"));
    });

};





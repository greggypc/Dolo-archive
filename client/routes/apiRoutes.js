var db = require('../models')

module.exports = function(app) {

  // GET route for returning all Donations of a specific user
  app.get("/api/donations/:uid", function(req, res) {
    //console.log(req.user.uid);
    db.Donation.findAll({
      where: {
        uid: req.params.uid
      }
    })
    .then(function(dbDonation) {
      res.json(dbDonation);
    });
  });

  // CREATE a donation
  app.post("/api/donations/:uid", function(req, res) {
    console.log("test");
    console.log(req.body);
    db.Donation.create({
      name: req.body.name,
      description: req.body.description,
      uid: req.params.uid,
      //uid: 3,
      item_categoryID: req.body.item_categoryID,
      type: req.body.type
    }).then(dbDonation => res.json(dbDonation))
    // .catch(err=>res.json(err));
  });

  // PUT route for updating Donation
  app.put("/api/donations/id/:id", function(req, res) {
    // console.log(req.params.id);
    // console.log(req.body);
    db.Donation.update({
      description: req.body.description,
      name: req.body.name,
      item_categoryID: req.body.item_categoryID
    },
      {
        where: {
          id: req.params.id
        }
      })
    .then(function(dbDonation) {
      res.json(dbDonation);
    });
  });
  // DELETE route for deleting Donation
  app.delete("/api/donations/:id", function(req, res) {
    db.Donation.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbDonation) {
      res.json(dbDonation);
    });
  });


}
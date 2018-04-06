var db = require('../models')


module.exports = function(app) {


  // //CREATE ORG
  // app.post("/api/orgs", function(req, res) {
  //   console.log(req.body)
  //   db.Org.create({
  //     name: req.body.name,
  //     description: req.body.description,
  //     web: req.body.web,
  //     org_categoryID: req.body.org_categoryID
  //   }).then(dbOrg=>res.json(dbOrg))
  //   .catch(err=>res.json(err));
  // });

  //====================Donation CRUD Routes=====================
  //=============================================================

    //GET route to return ALL Donations (need?)
    // app.get("/api/donations", function(req, res) {
    //   db.Donation.findAll({}).then(dbDonation=>res.json(dbDonation));
    // });

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

    // GET route for returning all Donations by category
    app.get("/api/donations/item_categoryID/:item_categoryID", function(req, res) {
      db.Donation.findAll({
        where: {
          item_categoryID: req.params.item_categoryID

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
      }).then(dbDonation=>res.json(dbDonation))
      // .catch(err=>res.json(err));

    });

    //GET route for retrieving a donation to edit
    // app.get("/api/donations/:id", function(req, res) {
    //   db.Donation.findById({ where: {id: req.params.id} }).then(data=>res.json(data));
    // });

    app.get("/api/donations/id/:id", function(req, res) {
      console.log("this should be a item ID "+ req.params.id);
      //console.log(req.body);
      db.Donation.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbDonation) {
        res.json(dbDonation);
      });
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

  //=============orgs can search donations by category=================
  //===================================================================
  // GET route for returning all Donations by category
  app.get("/api/donations/:item_categoryID", function(req, res) {
    db.Donation.findAll({
      where: {
        //item_categoryID: 2
        item_categoryID: req.params.item_categoryID
      }
    })
    .then(function(dbDonation) {
      res.json(dbDonation);
    });
  });

  //=============donors can search requests by category================
  //===================================================================
  // GET route for returning requests of a specific category
  app.get("/api/requests/item_categoryID/:item_categoryID", function(req, res) {
    db.Request.findAll({
      where: {
        //item_categoryID: 2
        item_categoryID: req.params.item_categoryID
      }
    })
    .then(function(dbRequest) {
      res.json(dbRequest);
    });
  });

  //====================Request/Needs CRUD Routes======================
  //===================================================================

  //GET route to return ALL requests/needs
  // app.get("/api/requests", function(req, res) {
  //   db.Request.findAll({}).then(dbRequest=>res.json(dbRequest));
  // });

   // GET route for returning all Donations of a specific user
   app.get("/api/requests/:uid", function(req, res) {
    db.Request.findAll({
      where: {
        uid: req.user.id
        //uid: 2
      }
    })
    .then(function(dbRequest) {
      res.json(dbRequest);
    });
  });


  // Get route for retrieving a request to edit
  app.get("/api/requests/:id", function(req, res) {
    db.Request.findById(req.params.id).then(data=>res.json(data));
  });

  // app.get("/api/requests/:id", function(req, res) {
  //   db.Request.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(function(dbRequest) {
  //     res.json(dbRequest);
  //   });
  // });


  //CREATE Request
  app.post("/api/requests", function(req, res) {
    db.Request.create({
      name: req.body.name,
      description: req.body.description,
      uid: req.user.uid,
      item_categoryID: req.body.item_categoryID,
      type: req.body.type
    }).then(dbRequest=>res.json(dbRequest))
    //.catch(err=>res.json(err));
  });

  // PUT route for updating request
  app.put("/api/requests/:id", function(req, res) {
    db.Request.update(req.body,
      {
        where: {
          id: req.params.id
        }
      })
    .then(function(dbRequest) {
      res.json(dbRequest);
    });
  });
  

  // DELETE route for deleting request
  app.delete("/api/requests/:id", function(req, res) {
    db.Request.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbRequest) {
      res.json(dbRequest);
    });
  });
  
};
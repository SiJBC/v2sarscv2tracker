var db = require("../models");

module.exports = function(app) {

    app.post("/api/list", function(req, res) {

        var newReport = req.body; 

        db.create({
            person_reporting: req.body.person_reporting,
            infection_date: req.body.infection_date,
            prognosis_date: req.body.prognosis_date,
            incident_description: req.body.incident_description,
            symptoms_description: req.body.symptoms_description,
            itinery: req.body.itinery,
            user_condition: req.body.user_condition,
           
        })
        return newReport
        .then(function(newReport) {
          res.json(newReport);
        });
      });
      
      app.get("/api/display/reports", function(req, res) {
        db.Listing.findAll({}).then(function(dbListings) {
          res.json(dbListings);
        });
      });

      // app.get("api/display/report", function (req,res){

      //   var allReports = [{
      //     person_reporting: req.body.person_reporting,
      //     infection_date: req.body.infection_date,
      //     prognosis_date: req.body.prognosis_date,
      //     incident_description: req.body.incident_description,
      //     symptoms_description: req.body.symptoms_description,
      //     itinery: req.body.itinery,
      //     user_condition: req.body.user_condition,
      //   }]
      //     db.findAll({}

      //     ).then(function(req, res){
      //         res.json(allReports)
      //     })
      // })
}


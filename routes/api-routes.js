const db = require("../models");

module.exports = function(app) {
    app.get("/api/teetimes", function(req, res) {
        db.TeeTime.findAll({}).then(function(dbTeeTime) {
            res.json(dbTeeTime);
        });
    });

    app.post("/api/teetimes", function(req, res) {
        console.log(req.body);
        db.TeeTime.create({
            name: req.body.name,
            date: req.body.date,
            time: req.body.time
        }).then(function(dbTeeTime) {
            res.json(dbTeeTime);
        });
    });
    // DELETE route for deleting teetimes. We can get the id of the teetime we want to delete from
    // req.params.id
    app.delete("/api/teetimes/:id", function(req, res) {
        db.TeeTime.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbTeeTime) {
            res.json(dbTeeTime);
        });
    });
    // PUT route for updating teetimes. We can get the updated teetimes from req.body
    app.put("/api/teetimes", function(req, res) {
        db.TeeTime.update({
            date: req.body.date,
            time: req.body.time
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbTeeTime) {
            res.json(dbTeeTime);
        });
    });

};
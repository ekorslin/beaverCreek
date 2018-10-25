const db = require("../models");

module.exports = function(app) {
    app.get("/api/teetimes", function(req, res) {
        db.TeeTime.findAll({}).then(function(dbTeeTime) {
            res.json(dbTeeTime);
        });
    });

    app.post("/submit", function(req, res) {
        db.TeeTime.create({
            date: '2018-10-25',
            time: '0900',
            name: req.body.TeeTime.name,
            email: req.body.TeeTime.email,
            phone: req.body.TeeTime.phone,
            numberGolfers: req.body.TeeTime.numberGolfers,
            comments: req.body.TeeTime.comments,
            cart: req.body.TeeTime.cart
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

var express = require("express");
var router = express.Router();
// Import the model to use its db functions for burger.js
var burger = require("../models/burger.js");

// Create routes and set up logic where required.
router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
// Add new burger to the db.
router.post("/burgers", function (req, res) {
    burger.insertOne([
        'burger_name'], 
        [req.body.burger_name], function(data) {
        // Send back the ID of the new burger
        res.redirect('/');
    });
});
// Set`   burger devoured status to true.
router.put('/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    console.log("condition", condition);

    burger.updateOne({ 
        devoured: true},
        condition, function(data) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
// Delete burger from db.
router.delete("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.deleteOne(condition, function(result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
// persons.js

var express = require('express');
var personRouter = express.Router();
var db = require('../models/tables');

personRouter.get("/person/all", function(req, res) {
    db.Person.findAll()
        .then(persons => {
            res.status(200).send(JSON.stringify(persons));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});

personRouter.get("/person/:idPerson", function(req, res) {
    db.Person.findByPk(req.params.idPerson)
        .then(person => {
            res.status(200).send(JSON.stringify(person));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});

personRouter.put("/person", function(req, res) {
    db.Person.create({
            namePerson: req.body.namePerson,
            email: req.body.email,
            password: req.body.password
        })
        .then(person => {
            res.status(200).send(JSON.stringify(person));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});

personRouter.delete("/person/:idPerson", function(req, res) {
    db.Person.destroy({
            where: {
                idPerson: req.params.idPerson
            }
        })
        .then(() => {
            res.status(200).send();
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});

module.exports = personRouter;
// persons.js

var express = require('express');
var router = express.Router();
var db = require('../database/database');

router.get("/person/all", function(req, res) {
    db.Person.findAll()
        .then(persons => {
            res.status(200).send(JSON.stringify(persons));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.get("/person/:id", function(req, res) {
    db.Person.findByPk(req.params.idPerson)
        .then(person => {
            res.status(200).send(JSON.stringify(person));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.put("/person", function(req, res) {
    db.Person.create({
            idPerson: req.body.idPerson,
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

router.delete("/person/:id", function(req, res) {
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

module.exports = router;
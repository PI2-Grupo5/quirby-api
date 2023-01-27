// Robots.js

var express = require('express');
var robotRouter = express.Router();
var db = require('../database/database');

robotRouter.get("/robot/all", function(req, res) {
    db.Robot.findAll()
        .then(Robots => {
            res.status(200).send(JSON.stringify(Robots));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});

robotRouter.get("/robot/:idRobot", function(req, res) {
    db.Robot.findByPk(req.params.idRobot)
        .then(Robot => {
            res.status(200).send(JSON.stringify(Robot));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});

robotRouter.put("/robot", function(req, res) {
    db.Robot.create({
            idRobot: req.body.idRobot,
            nameRobot: req.body.nameRobot,
            functionMode: req.body.functionMode,
            batteryStatus: req.body.batteryStatus,
            blockedAlert: req.body.blockedAlert,
            powerState: req.body.powerState,
            controlAccess: req.body.controlAccess,
            cleaningSchedule: req.body.cleaningSchedule
        })
        .then(Robot => {
            res.status(200).send(JSON.stringify(Robot));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});

robotRouter.put("/robot/:idRobot", function(req, res) {
    db.Robot.findByPk(req.params.idRobot).then(
        Robot =>
        Robot.update({
            nameRobot: req.body.nameRobot,
            functionMode: req.body.functionMode,
            batteryStatus: req.body.batteryStatus,
            blockedAlert: req.body.blockedAlert,
            powerState: req.body.powerState,
            controlAccess: req.body.controlAccess,
            cleaningSchedule: req.body.cleaningSchedule
        })
        .then(Robot => {
            res.status(200).send(JSON.stringify(Robot));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        }));
});

robotRouter.delete("/robot/:idRobot", function(req, res) {
    db.Robot.destroy({
            where: {
                idRobot: req.params.idRobot
            }
        })
        .then(() => {
            res.status(200).send();
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});

module.exports = robotRouter;
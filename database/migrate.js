// // bin/migrate.js

var db = require('../models/tables.js');
//try{
    //} 
    //ca   
db.sequelize.createSchema('quirby').then(() => {
    console.log('Schema quirby created successfully.');
})
.catch(err => {
    console.error('Unable to connect to create schema:', err);
});
db.sequelize.sync();
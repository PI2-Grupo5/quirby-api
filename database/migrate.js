// // bin/migrate.js

var db = require('../models/tables.js');
db.sequelize.sync();
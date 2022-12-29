// bin/migrate.js

var db = require('../database/database.js');
db.sequelize.sync();
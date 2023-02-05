const express = require('express');
const helmet = require('helmet');
const routes = require('../routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../config/dbconfig.js');
const Sequelize = require('sequelize');

// const Person = require('../models/tables');
// const Robot = require('../models/tables');

let app = express();

let urlOrigin = '';

console.log(process.env.NODE_ENV);
console.log(process.env.DATABASE_URL);
console.log(process.env.PGPORT);

if (process.env.NODE_ENV == "development") {
    urlOrigin = 'http://localhost:8080'
} else {
    urlOrigin = 'https://quirby-api.up.railway.app/'
}

let corsOptions = {
    origin: urlOrigin,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(helmet.hidePoweredBy());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(routes);


if (process.env.NODE_ENV == "development") {
    const sequelize = new Sequelize(db);
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
            // sequelize.sync({ force: true })
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

    // sequelize.sync({ force: true })
} else {
    const sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    });

    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

    // sequelize.sync({ force: true })
}

module.exports = app;
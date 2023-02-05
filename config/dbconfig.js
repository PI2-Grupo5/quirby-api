require('dotenv').config();

module.exports = {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    host: process.env.PGHOST,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    define: {
        timestamps: false,
    },
};
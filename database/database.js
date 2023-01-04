// database.js

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_SCHEMA || 'postgres',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASSWORD || '', {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        dialect: 'postgres',
        dialectOptions: {
            ssl: process.env.DB_SSL == "true"
        }
    });
const Person = sequelize.define('Person', {

    idPerson: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    namePerson: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true
    }

});

const Robot = sequelize.define('Robot', {
    idRobot: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nameRobot: {
        type: Sequelize.STRING,
        allowNull: true
    },
    //indica se o robo está no modo manual ou automatico
    functionMode: {
        type: Sequelize.STRING,
        allowNull: true
    },
    //indica o status da bateria do robo
    batteryStatus: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    //indica se o robo está travado em algum lugar
    blockedAlert: {
        type: Sequelize.STRING,
        allowNull: false
    },
    //Indica se o robo está ligado ou desligado. TRUE = Ligado, False = Desligado
    powerState: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    //Indica o id da pessoa controlando o robo no momento
    controlAccess: {
        type: Sequelize.INTEGER,
        allowNull: true,
        default: null
    }
    // cleaningSchedule: {

    // },

});


module.exports = {
    sequelize: sequelize,
    Person: Person,
    Robot: Robot
};
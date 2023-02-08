const database = require('../config/dbconfig.js');

const Sequelize = require('sequelize');

let sequelize;

if (process.env.NODE_ENV == "development") {
    sequelize = new Sequelize(database);
} else {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    });
}

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
}, { schema: "quirby", timestamps: false });

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
    },
    cleaningSchedule: {
        type: Sequelize.ARRAY(Sequelize.DATE),
        allowNull: true,
        default: null
    }
}, { schema: "quirby", timestamps: false });

module.exports = {
    Person: Person,
    Robot: Robot,
    sequelize: sequelize
};
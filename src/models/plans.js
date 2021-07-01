const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Plans = sequelize.define("plans", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
    plan: {
    type: DataTypes.JSON,
  },
  id_pensioner: {
    type: DataTypes.INTEGER,
  },
  id_categor: {
    type: DataTypes.STRING,
  },
  
  
});

module.exports = Plans;

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Couples = sequelize.define("couples", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
    title: {
    type: DataTypes.STRING,
  }
  
  
});

module.exports = Couples;

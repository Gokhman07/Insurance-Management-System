const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Marit_statuses = sequelize.define("marit_statuses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
    status: {
    type: DataTypes.STRING,
  },
  
});

module.exports = Marit_statuses;

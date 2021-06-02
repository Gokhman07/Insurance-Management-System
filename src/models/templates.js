const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Templates = sequelize.define("templates", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
    name: {
    type: DataTypes.STRING,
  },
  templete: {
    type: DataTypes.JSON,
  }
  
  
});

module.exports = Templates;

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Subcategories = sequelize.define("subcategories", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
    title: {
    type: DataTypes.STRING,
  }
  
  
});

module.exports = Subcategories;

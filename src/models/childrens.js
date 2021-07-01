const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Childrens = sequelize.define("childrens", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },

  birth_date: {
    type: DataTypes.STRING,
  },
  
 couple_id: {
    type: DataTypes.INTEGER,
  },
  
 
  
 
});

module.exports = Childrens;

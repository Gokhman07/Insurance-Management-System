const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Insur_lives = sequelize.define("insur_lives", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_pensioner: {
    type: DataTypes.INTEGER,
  },
  monthly_compensation_amount: {
    type: DataTypes.STRING,
  },
  lump_sum: {
    type: DataTypes.STRING,
  },
  title : {
    type : DataTypes.STRING
  }
  

 
  
  
});

module.exports = Insur_lives;


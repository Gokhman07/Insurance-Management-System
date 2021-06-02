const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Education_funds = sequelize.define("education_funds", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_pensioner: {
    type: DataTypes.INTEGER,
  },
  title:{
    type: DataTypes.STRING
},
month_dep: {
    type: DataTypes.STRING,
  },
  liquidity_date: {
    type: DataTypes.STRING,
  },
  exp_liquidity_date: {
    type: DataTypes.STRING,
  },
  exp_last_sum: {
    type: DataTypes.STRING,
  },
 
  exp_5_sum: {
    type: DataTypes.STRING,
  },
  
});

module.exports = Education_funds;


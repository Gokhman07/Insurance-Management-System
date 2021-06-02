const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Loans = sequelize.define("loans", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_pensioner: {
    type: DataTypes.INTEGER,
  },
  purpose: {
    type: DataTypes.STRING,
  },
  salary_month: {
    type: DataTypes.STRING,
  },
  term_date: {
    type: DataTypes.STRING,
  },
  avr_rate: {
    type: DataTypes.STRING,
  },
  exp_last_sum: {
    type: DataTypes.STRING,
  },
  title:{
    type: DataTypes.STRING,
  }
  
  
});

module.exports = Loans;


const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Mortgage = sequelize.define("mortgages", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_pensioner: {
    type: DataTypes.INTEGER,
  },
  balance_exists: {
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
  title : {
    type : DataTypes.STRING
  }
  
});

module.exports = Mortgage;

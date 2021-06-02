const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Savings = sequelize.define("savings", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_pensioner: {
    type: DataTypes.INTEGER,
  },
  total_monthly_deposit: {
    type: DataTypes.STRING,
  },
  exp_5_sum: {
    type: DataTypes.STRING,
  },
  exp_last_sum: {
    type: DataTypes.STRING,
  },
  puspose: {
    type: DataTypes.STRING,
  },
  exp_amout: {
    type: DataTypes.STRING,
  },
  title : {
    type : DataTypes.STRING
  }
  
});

module.exports = Savings;


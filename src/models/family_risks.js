const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Family_risks = sequelize.define("family_risks", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_pensioner: {
    type: DataTypes.INTEGER,
  },
  private: {
    type: DataTypes.STRING,
  },
  moth_priv: {
    type: DataTypes.STRING,
  },
  exp_last_sum: {
    type: DataTypes.STRING,
  },
  month_soc: {
    type: DataTypes.STRING,
  },
  add_income: {
    type: DataTypes.STRING,
  },
  title : {
    type : DataTypes.STRING
  }
  
});

module.exports = Family_risks;


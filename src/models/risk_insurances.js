const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Risk_insurances = sequelize.define("risk_insurances", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_pensioner: {
    type: DataTypes.INTEGER,
  },
  manufacture_name: {
    type: DataTypes.STRING,
  },
  pos_type: {
    type: DataTypes.STRING,
  },
  pos_state: {
    type: DataTypes.STRING,
  },
  collective_name: {
    type: DataTypes.STRING,
  },
  cash_opening_date: {
    type: DataTypes.DATE,
  },
  report_year: {
    type: DataTypes.INTEGER,
  },
  period_report: {
    type: DataTypes.INTEGER,
  },
  last_upadete_of_this_screen: {
    type: DataTypes.STRING,
  },
  insurance_name: {
    type: DataTypes.STRING,
  },
  insurance_coverage: {
    type: DataTypes.STRING,
  },
  total_annual_premium: {
    type: DataTypes.DOUBLE,
  },
  insuarunce_amount: {
    type: DataTypes.DOUBLE,
  }, 
 
 
 
});

module.exports = Risk_insurances;

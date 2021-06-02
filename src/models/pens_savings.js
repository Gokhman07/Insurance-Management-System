const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const PensSavings = sequelize.define("pens_savings", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_pensioner: {
    type: DataTypes.INTEGER,
  },
  accom_exists: {
    type: DataTypes.STRING,
  },
  accom_exp: {
    type: DataTypes.STRING,
  },
  exp_last_sum: {
    type: DataTypes.STRING,
  },
  allow_exists: {
    type: DataTypes.STRING,
  },
  allow_exists: {
    type: DataTypes.STRING,
  },
  title : {
    type : DataTypes.STRING
  }
  
});

module.exports = PensSavings;


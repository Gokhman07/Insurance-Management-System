const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Insur_doctors = sequelize.define("insur_doctors", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_pensioner: {
    type: DataTypes.INTEGER,
  },
  transplants: {
    type: DataTypes.STRING,
  },
  medicines: {
    type: DataTypes.STRING,
  },
  operations: {
    type: DataTypes.STRING,
  },
  ambulatory: {
    type: DataTypes.STRING,
  },
  exp_last_sum: {
    type: DataTypes.STRING,
  },
  title : {
    type : DataTypes.STRING
  }

 
  
  
});

module.exports = Insur_doctors;


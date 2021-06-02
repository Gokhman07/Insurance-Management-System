const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Work_incapacity_insurances = sequelize.define("work_incapacity_insurances", {
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
  max_comp_perc: {
    type: DataTypes.STRING,
  },
  max_comp_sum: {
    type: DataTypes.STRING,
  },
  prof_def: {
    type: DataTypes.STRING,
  },
  exp_last_sum: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
  }
 
  
  
});

module.exports = Work_incapacity_insurances;


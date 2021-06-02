const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Insur_pensioners = sequelize.define("insur_pensioners", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_pensioner: {
    type: DataTypes.INTEGER,
  },
  title:{
    type: DataTypes.STRING,
  },
  exp_rewards_center: {
    type: DataTypes.STRING,
  },
  exp_compensation_component: {
    type: DataTypes.STRING,
  },
  exp_total: {
    type: DataTypes.STRING,
  },
  perm_rewards_center: {
    type: DataTypes.STRING,
  },
  perm_compensation_component: {
    type: DataTypes.STRING,
  },
  perm_total: {
    type: DataTypes.STRING,
  },
  expected_sum: {
    type: DataTypes.STRING,
  },
  
  
});

module.exports = Insur_pensioners;

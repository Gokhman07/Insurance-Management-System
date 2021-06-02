const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Admins = sequelize.define("admins", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
    name: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  email:{
    type: DataTypes.STRING,
  },
  phone:{
    type: DataTypes.STRING,
  },
  token: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
  },
});

module.exports = Admins;

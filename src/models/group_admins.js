const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Group_admins = sequelize.define("admins", {
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
  
});

module.exports = Group_admins;

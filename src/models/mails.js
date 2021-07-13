const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Mails = sequelize.define("mails", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_pensioner: {
    type: DataTypes.INTEGER,
  },
  subject: {
    type: DataTypes.STRING,
  },
  text: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.STRING,
  },
   label: {
    type: DataTypes.STRING,
  },

  
  
});

module.exports = Mails;


const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Funds = sequelize.define("funds", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  fund_name: {
    type: DataTypes.STRING,
  },
   country_id: {
    type: DataTypes.INTEGER,
  },

  aum: {
    type: DataTypes.DOUBLE,
  },
  strategies_id: {
    type: DataTypes.INTEGER,
  }, 
 
});

module.exports = Funds;

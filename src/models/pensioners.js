
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");


const Pensioners = sequelize.define("pensioners", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  passport_number: {
    type: DataTypes.STRING,
  },
  marital_id: {
    type: DataTypes.INTEGER,
  },
  id_empl_status: {
    type: DataTypes.INTEGER,
  },

  occupation: {
    type: DataTypes.STRING,
  },
  belong_comp: {
    type: DataTypes.INTEGER,
  },

  company: {
    type: DataTypes.STRING,
  },
  birth_date: {
    type: DataTypes.STRING,
  },
  card_number: {
    type: DataTypes.STRING,
  },
  group_id: {
    type: DataTypes.INTEGER,
  },
  couple_id: {
    type: DataTypes.INTEGER,
  },
  agent_name: {
    type: DataTypes.STRING,
  },
  agent_telephone: {
    type: DataTypes.STRING,
  },
  agent_mail: {
    type: DataTypes.INTEGER,
  },
  remarks: {
    type: DataTypes.INTEGER,
  },
  insurance_agency : {
    type : DataTypes.STRING
  },
  mail : {
    type : DataTypes.STRING
  },
  pens_age : {
    type : DataTypes.STRING
  },
  token : {
    type : DataTypes.STRING
  },
  telephone : {
    type : DataTypes.STRING
  },
  image_education_funds:{
    type: DataTypes.BLOB
  },
  image_insur_doctors:{
    type: DataTypes.BLOB
  },
  image_insur_lives:{
    type: DataTypes.BLOB
  },
  image_insur_pensioners:{
    type: DataTypes.BLOB
  },
  image_loans:{
    type: DataTypes.BLOB
  },
  image_monthly_deposit_savings:{
    type: DataTypes.BLOB
  },
  image_mortgages:{
    type: DataTypes.BLOB
  },
  image_work_incapacity_insurances:{
    type: DataTypes.BLOB
  },

});

module.exports = Pensioners;

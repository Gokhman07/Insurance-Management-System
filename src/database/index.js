const { Sequelize } = require("sequelize");

//logging - отключение mysql операции в консоли у библиотеки sequilize.
// Чтобы включить нужно поставить значение, значение true

const sequelize = new Sequelize("kzomzh2bqwykzzdr", "bxe299i2vt7d53jx", "wfbes8j9zwstguzs", {
  host: "un0jueuv2mam78uv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
  logging: false
});

module.exports = sequelize;

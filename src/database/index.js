const { Sequelize } = require("sequelize");

//logging - отключение mysql операции в консоли у библиотеки sequilize.
// Чтобы включить нужно поставить значение, значение true

const sequelize = new Sequelize("um3aa3gwvmfrkrur", "p9cuuw3xjofmp9gr", "b1hpfs4r2awoy6bc", {
  host: "un0jueuv2mam78uv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
  logging: false
});

module.exports = sequelize;

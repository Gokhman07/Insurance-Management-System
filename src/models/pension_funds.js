const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../database");


const Pensioner_funds = sequelize.define("pension_funds", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    id_pensioner: {
        type: DataTypes.INTEGER,

    },
    police_number: {
        type: DataTypes.INTEGER,

    },
    creator_name: {
        type: DataTypes.STRING,

    },
    type_box: {
        type: DataTypes.STRING,

    },
    state_box: {
        type: DataTypes.STRING,

    },
    employer_name: {
        type: DataTypes.STRING,

    },
    open_date: {
        type: DataTypes.DATE,

    },
    report_year: {
        type: DataTypes.INTEGER,

    },
    report_period: {
        type: DataTypes.INTEGER,

    },
    last_update: {
        type: DataTypes.DATE,

    },
    monthly_pension: {
        type: DataTypes.DOUBLE,
    },
    one_time_withdrawal: {
        type: DataTypes.DOUBLE,
    },
    death_sum: {
        type: DataTypes.DOUBLE,
    },
    loss_job_sum: {
        type: DataTypes.DOUBLE,
    },
    disability_sum: {
        type: DataTypes.DOUBLE,
    },
    balance_yearbegin: {
        type: DataTypes.DOUBLE,
    },
    year_management: {
        type: DataTypes.DOUBLE,
    },

    cost_bacis_insurance: {
        type: DataTypes.DOUBLE,
    },
    monthly_compensation: {
        type: DataTypes.DOUBLE,
    },

    premium_cost: {
        type: DataTypes.DOUBLE,
    },
    end_year_balance: {
        type: DataTypes.DOUBLE,
    },
    month_salary: {
        type: DataTypes.DOUBLE,
    },
    salary: {
        type: DataTypes.DOUBLE,
    },
    employee_benefits: {
        type: DataTypes.DOUBLE,
    },
    employer_benefits: {
        type: DataTypes.DOUBLE,
    },
    loss_workcapacity: {
        type: DataTypes.DOUBLE,
    },
    compensation: {
        type: DataTypes.DOUBLE,
    },
    total_deposits: {
        type: DataTypes.DOUBLE,
    },
    year: {
        type: DataTypes.INTEGER,
    },
    perc_employee_benefits: {
        type: DataTypes.DOUBLE,
    },
    perc_employer_benefits: {
        type: DataTypes.DOUBLE,
    },
    perc_compensation: {
        type: DataTypes.DOUBLE,
    },
    perc_total_deposits: {
        type: DataTypes.DOUBLE,
    },
    perc_salary: {
        type: DataTypes.DOUBLE,
    },
    perc_month_salary: {
        type: DataTypes.DOUBLE,
    },
    perc_total_deposits: {
        type: DataTypes.DOUBLE,
    },
    perc_compensation: {
        type: DataTypes.DOUBLE,
    },
    manufacture_name: {
        type: DataTypes.STRING,
    },
    amount_in_NIS: {
        type: DataTypes.STRING,
    },
    two_amount_in_NIS : {
        type: DataTypes.STRING,
    }
});

module.exports = Pensioner_funds;


const Router = require("express").Router;
const islogin = require("../middleware/index").islogin;
const Pensioners = require("../models/pensioners");
const Pensioner_funds = require("../models/pension_funds");//const Funds = require("../models/funds");

const router = Router();


router.get("/:id", async (req, res) => {
    const fund = await Pensioner_funds.findOne({

            where: {
                id_pensioner: req.params.id
            },


            attributes: ['police_number', 'creator_name', 'type_box', 'state_box', 'employer_name', 'open_date', 'report_year',
                'report_period', 'last_update', "monthly_pension", 'one_time_withdrawal', 'death_sum',
                'loss_job_sum', 'disability_sum', 'balance_yearbegin', 'year_management', 'cost_bacis_insurance',
                'monthly_compensation', 'premium_cost', 'end_year_balance', 'month_salary', 'salary', 'employee_benefits',
                'employer_benefits', 'loss_workcapacity', 'compensation', 'total_deposits', 'perc_employee_benefits', 'perc_employer_benefits',
                'perc_loss_workcapacity', 'perc_compensation',
                'manufacture_name','perc_total_deposits', 'year','perc_salary','perc_month_salary',
                'amount_in_NIS','two_amount_in_NIS'
            ]
        },
    );
    res.send(fund);
});
router.put('/:id', async (req, res) => {

    const {
        total_deposits,compensation,loss_workcapacity,employer_benefits,employee_benefits,
            salary,month_salary, perc_total_deposits,perc_compensation,perc_loss_workcapacity,
        perc_employer_benefits,perc_employee_benefits,perc_salary,perc_month_salary,
        manufacture_name,type_box,state_box,employer_name,open_date,report_year,report_period,last_update,
        amount_in_NIS,two_amount_in_NIS
    } = req.body
    console.log('GSFKLGJDF:LSDF')
    console.log(manufacture_name)
    const fund = await Pensioner_funds.update(
        {
            total_deposits,compensation,loss_workcapacity,employer_benefits,employee_benefits,
            salary,month_salary, perc_total_deposits,perc_compensation,perc_loss_workcapacity,
            perc_employer_benefits,perc_employee_benefits,perc_salary,perc_month_salary,
            manufacture_name,type_box,state_box,employer_name,open_date,report_year,report_period,last_update
            ,amount_in_NIS,two_amount_in_NIS
        },
    {
            where: {
                id_pensioner: req.params.id
            },
        }
    );
    res.json({
        status: 200
    });
})


module.exports = router;

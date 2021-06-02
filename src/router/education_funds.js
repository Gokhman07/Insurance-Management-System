const Router = require("express").Router;
const islogin = require("../middleware/index").islogin;
const Insur_pensioners = require("../models/insur_pensioners");
const EduFunds = require('../models/education_funds')
const router = Router();


router.post('/get', async (req, res) => {
    const {id_pensioner} = req.body
    const data = await EduFunds.findAll({
        where: {id_pensioner,},
        attributes: ['title', 'month_dep', 'liquidity_date','exp_liquidity_date', 'exp_5_sum','exp_last_sum','id_pensioner','id']
    });
    res.json(ok(data))
})


router.put('/get_count', async (req, res) => {
    const {id_pensioner} = req.body
        const data = await EduFunds.count({
        where: {id_pensioner,},

    });
    res.json(ok(data))
})
router.post('/update', async (req, res) => {
    const fund = await EduFunds.update(
        req.body.data,
        {
            where: {
                id_pensioner: req.body.id
            },
        }
    );
    res.json(ok(fund))
})
router.post("/new", async req => {
    console.log(req.body)
    await EduFunds.create(req.body)
});

router.delete("/delete/:id", async (req, res) => {
    const {id} = req.params;
    console.log(id)
    await EduFunds.destroy({where: {id}});
    res.json(ok(id));
});

const ok = (data = {}) => ({status: 200, messsage: "OK", data})
const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})
module.exports = router
const Router = require("express").Router;
const islogin = require("../middleware/index").islogin;
const Mortgages = require("../models/mortgages");

const router = Router();


router.post("/get", async (req, res) => {
    const {id_pensioner} = req.body
    const info = await Mortgages.findAll({

            where: {

                'id_pensioner': id_pensioner
            },

            attributes: ['id', 'title', 'balance_exists', 'salary_month', 'term_date','avr_rate','exp_last_sum']
        },
    );
    res.json(ok(info));

});


router.delete("/delete/:id", async (req, res) => {
    const {id} = req.params;
    const deleteinsur = await Mortgages.destroy({
        where: {
            id: id,
        },
    });
    res.send(id);
});

router.put('/get_count', async (req, res) => {
    const {id_pensioner} = req.body
    const data = await Mortgages.count({
        where: {id_pensioner,},

    });
    res.json(ok(data))
})

router.post("/new", async req => await Mortgages.create(req.body));

router.put("/update", async (req, res) => {
    const {
        id, balance_exists, payment_months, years_to_end, title
    } = req.body.data;
    await Mortgages.update({title, balance_exists, payment_months, years_to_end}, {where: {id}});
    res.json(ok())
});
const ok = (data = {}) => ({status: 200, messsage: "OK", data})
const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})
module.exports = router

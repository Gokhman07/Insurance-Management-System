const Router = require("express").Router;
const islogin = require("../middleware/index").islogin;
const Loans = require("../models/loans");

const router = Router();


router.post("/get", async (req, res) => {
    const {id_pensioner} = req.body
    const info = await Loans.findAll({
        
            where: {

                'id_pensioner': id_pensioner
            },

            attributes: ['id', 'title', 'purpose', 'salary_month', 'term_date','avr_rate','exp_last_sum']
        },
    );
    res.json(ok(info));


});
router.put('/get_count', async (req, res) => {
    const {id_pensioner} = req.body
    const data = await Loans.count({
        where: {id_pensioner,},

    });
    res.json(ok(data))
})

router.post("/new", async (req,res)  =>{ await Loans.create(req.body)
res.send("Was added")
}
);


router.delete("/delete/:id", async (req, res) => {
    const {id} = req.params;
    await Loans.destroy({where: {id}});
    res.json(ok(id));
});



router.put("/update", async (req, res) => {
    const {id, balance_exists, salary_month, yeats_to_end, title} = req.body.data;
    await Loans.update({title, balance_exists, salary_month, yeats_to_end}, {where: {id}});
    res.json(ok())
});
const ok = (data = {}) => ({status: 200, messsage: "OK", data})
const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})
module.exports = router

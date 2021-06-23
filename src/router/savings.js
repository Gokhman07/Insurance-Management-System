const Router = require("express").Router;
const Monthly_deposit_savings = require("../models/savings");

const router = Router();


router.post('/get',async (req,res) => {
    const {id_pensioner} = req.body
    const data = await Monthly_deposit_savings.findAll({
        where: {id_pensioner: id_pensioner,},
        attributes : ['total_monthly_deposit','exp_5_sum','puspose','exp_last_sum','title','id','exp_amout']});
    res.json(ok(data))
})

router.put('/get_count', async (req, res) => {
    const {id_pensioner} = req.body
    const data = await Monthly_deposit_savings.count({
        where: {id_pensioner,},

    });
    res.json(ok(data))
})

router.post('/update',async (req,res) => {
    const fund = await Monthly_deposit_savings.update(
        req.body.data,
        {
            where: {
                id_pensioner: req.body.id
            },
        }
    );
    res.json(ok(fund))
})
router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    await Monthly_deposit_savings.destroy({where: {id},});
    res.json(ok(id));
});
router.post("/new", async (req,res)  =>{ await Monthly_deposit_savings.create(req.body)
res.send("Was added")
}
);


const ok = (data = {}) => ({status: 200, messsage: "OK", data})
const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})
module.exports = router

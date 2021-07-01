const Router = require("express").Router;
const Monthly_deposit_savings = require("../models/pens_savings");

const router = Router();


router.post('/get',async (req,res) => {
    const {id_pensioner} = req.body
    const data = await Monthly_deposit_savings.findAll({
        where: {id_pensioner: id_pensioner,},
        attributes : ['accom_exists','accom_exp','allow_exists','exp_last_sum','title','id','allow_exp']});
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
        req.body,
        {
            where: {
                id: req.body.id
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
router.post("/new", async req => await Monthly_deposit_savings.create(req.body));


const ok = (data = {}) => ({status: 200, messsage: "OK", data})
const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})
module.exports = router

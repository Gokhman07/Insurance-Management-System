const Router = require("express").Router;
const Family_risks = require("../models/family_risks");

const router = Router();


router.post('/get',async (req,res) => {
    const {id_pensioner} = req.body
    const data = await Family_risks.findAll({
        where: {id_pensioner: id_pensioner,},
        attributes : ['private','moth_priv','month_soc','exp_last_sum','title','id','add_income']});
    res.json(ok(data))
})

router.put('/get_count', async (req, res) => {
    const {id_pensioner} = req.body
    const data = await Family_risks.count({
        where: {id_pensioner,},

    });
    res.json(ok(data))
})

router.post('/update',async (req,res) => {
    const fund = await Family_risks.update(
        req.body.data,
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
    await Family_risks.destroy({where: {id},});
    res.json(ok(id));
});
router.post("/new", async (req,res)  =>{ await Family_risks.create(req.body)
res.send("Was added")
}
)


const ok = (data = {}) => ({status: 200, messsage: "OK", data})
const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})
module.exports = router

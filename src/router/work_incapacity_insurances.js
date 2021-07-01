const Router = require("express").Router;
const islogin = require("../middleware/index").islogin;
const Work_incapacity_insurances = require("../models/work_incapacity_insurances");

const router = Router();


router.put('/get_count', async (req, res) => {
    const {id_pensioner} = req.body
    const data = await Work_incapacity_insurances.count({
        where: {id_pensioner,},

    });
    res.json(ok(data))
})

router.get('/get_image', async (req, res) => {
    const {id_pensioner} = req.body
    const data = await Work_incapacity_insurances.findAll({
        where: {id_pensioner,},
        attributes: ['image']
    });
    res.json(ok(data))
})

router.post("/get", async (req, res) => {
    const {id_pensioner} = req.body
    const info = await Work_incapacity_insurances.findAll({

            where: {

                'id_pensioner': id_pensioner
            },

            attributes: ['id', 'title', 'monthly_compensation_amount', 'prof_def','max_comp_perc','max_comp_sum','exp_last_sum']
        },
    );
    res.json(ok(info));


});


router.delete("/delete/:id", async (req, res) => {
    const {id} = req.params;
    const deleteinsur = await Work_incapacity_insurances.destroy({
        where: {
            id: id,
        },
    });
    res.send(id);
});



router.post("/update", async (req, res) => {

    const {
        id, title, monthly_compensation_amount, professional_definition
    } = req.body;
    await Work_incapacity_insurances.update({title, monthly_compensation_amount, professional_definition},
        {where  : {id}});
    res.json(ok())
});
router.post("/new", async (req,res)  =>{ await Work_incapacity_insurances.create(req.body)
res.send("Was added")
}
);

const ok = (data = {}) => ({status: 200, messsage: "OK", data})
const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})
module.exports = router

const Router = require("express").Router;
const Insur_lives = require("../models/insur_lives");

const router = Router();


router.get("/get_info/:id", async (req, res) => {
    const info = await Insur_lives.findAll({

            where: {

                'id_pensioner': req.params.id
            },

            attributes: ['id', 'title', 'monthly_compensation_amount', 'lump_sum']
        },
    );
    res.json(ok(info));


});


router.delete("/delete/:id", async (req, res) => {
    const {id} = req.params;
    console.log(id)

    const deleteinsur = await Insur_lives.destroy({
        where: {
            id: id,
        },
    });
    res.send(id);
});

router.post("/new", async (req,res)  =>{ await Insur_lives.create(req.body)
res.send("Was added")
}
);
router.put('/get_count', async (req, res) => {
    const {id_pensioner} = req.body
    const data = await Insur_lives.count({
        where: {id_pensioner,},

    });
    res.json(ok(data))
})

router.put("/update", async (req, res) => {
    const {
        id, monthly_compensation_amount, lump_sum, title
    } = req.body;
    await Insur_lives.update({title, monthly_compensation_amount, lump_sum}, {where: {id}});
    res.json(ok())
});
const ok = (data = {}) => ({status: 200, messsage: "OK", data})
const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})
module.exports = router

const Router = require("express").Router;
const islogin = require("../middleware/index").islogin;
const Plans = require("../models/plans");

const router = Router();


router.post("/get", async (req, res) => {
    const {id_pensioner} = req.body
    const info = await Plans.findAll({

            where: {

                'id_pensioner': id_pensioner
            },

            attributes: ['id_pensioner', 'id', ' categor_id', 'plan']
        },
    );
    res.json(ok(info));

});


router.delete("/delete/:id", async (req, res) => {
    const {id} = req.params;
    const deleteinsur = await Plans.destroy({
        where: {
            id: id,
        },
    });
    res.send(id);
});

router.put('/get_count', async (req, res) => {
    const {id_pensioner} = req.body
    const data = await Plans.count({
        where: {id_pensioner,},

    });
    res.json(ok(data))
})

router.post("/new", async (req,res)  =>{ await Plans.create(req.body)
res.send("Was added")
}
);

const ok = (data = {}) => ({status: 200, messsage: "OK", data})
const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})
module.exports = router

const Router = require("express").Router;
const Insur_doctors = require("../models/insur_doctors");

const router = Router();


router.get('/get_image', async (req, res) => {
  const {id_pensioner} = req.body
  const data = await Insur_doctors.findAll({
      where: {id_pensioner,},
      attributes: ['image']
  });
  res.json(ok(data))
})
router.post('/get',async (req,res) => {
    const {id_pensioner} = req.body
    const data = await Insur_doctors.findAll({
        where: {id_pensioner,},
        attributes : ['transplants','medicines','operations','title','ambulatory','id','exp_last_sum']});
    res.json(ok(data))
})

router.post('/update',async (req,res) => {
    const fund = await Insur_doctors.update(
        req.body,
        {
            where: {
                id_pensioner: req.body.id
            },
        }
    );
    res.json(ok(fund))
})


router.delete("/delete/:id", async (req, res) => {
    const {id} = req.params;
    const deleteinsur = await Insur_doctors.destroy({where: {id}});
    res.json(ok(id));
});
router.put('/get_count', async (req, res) => {
    const {id_pensioner} = req.body
    const data = await Insur_doctors.count({
        where: {id_pensioner,},

    });
    res.json(ok(data))
})
router.post("/new", async (req,res)  =>{ await Insur_doctors.create(req.body)
res.send("Was added")
}
)

const ok = (data = {}) => ({status: 200, messsage: "OK", data})
const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})
module.exports = router

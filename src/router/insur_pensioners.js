const Router = require("express").Router;
const islogin = require("../middleware/index").islogin;
const Insur_pensioners = require("../models/insur_pensioners");

const router = Router();

router.get('/get_image', async (req, res) => {
  const {id_pensioner} = req.body
  const data = await Insur_pensioners.findAll({
      where: {id_pensioner,},
      attributes: ['image']
  });
  res.json(ok(data))
})

router.get("/get_info/:id", async (req, res) => {
    const info = await Insur_pensioners.findAll({
            where: {
                'id_pensioner': req.params.id
            },
            attributes: ['id', 'title', 'exp_rewards_center', 'exp_compensation_component', 'exp_total', 'expected_sum']
        },
    );
    res.json(ok(info));


});


router.put('/get_count', async (req, res) => {
    const {id_pensioner} = req.body
    const data = await Insur_pensioners.count({
        where: {id_pensioner,},

    });
    res.json(ok(data))
})
router.delete("/delete/:id", async (req, res) => {
    const {id} = req.params;
    const deleteinsur = await Insur_pensioners.destroy({
        where: {
            id: id,
        },
    });
    res.send(id);
});


router.post("/new_insur_pensioners", async (req, res) => {
    const {
        id_pensioner, exp_rewards_center, exp_compensation_component, exp_total,
        perm_rewards_center, perm_compensation_component, perm_total, expected_sum, title
    } = req.body;
    console.log(req.body)
    const newinsur = await Insur_pensioners.create({
        "id_pensioner": id_pensioner,
        "exp_rewards_center": exp_rewards_center, "exp_compensation_component": exp_compensation_component,
        "exp_total": exp_total,
        "perm_rewards_center": perm_rewards_center, "perm_compensation_component": perm_compensation_component,
        "perm_total": perm_total, "expected_sum": expected_sum, "belong_comp": belong_comp,
        "company": company, "birth_date": birth_date, "card_number": card_number, "title": title,
    })
}) // =  router.post("/new_insur_pensioners", async (req, res) => await Insur_pensioners.create(req.body));


router.put("/update", async (req, res) => {
    console.log("UPDATE")
    const {
        id, id_pensioner, exp_rewards_center, exp_compensation_component, exp_total,
        expected_sum, title
    } = req.body.data;
    console.log(req.body)
    const [error] = await Insur_pensioners.update(
        {exp_rewards_center, exp_compensation_component, exp_total, expected_sum, title}, {where: {id},});
    console.log(!!error)
    res.json(ok())
});
const ok = (data = {}) => ({status: 200, messsage: "OK", data})
const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})
module.exports = router

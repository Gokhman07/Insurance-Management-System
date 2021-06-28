const Router = require("express").Router;
const Templetes = require("../models/templates");

const router = Router();


router.post('/get',async (req,res) => {
    const {id_pensioner} = req.body
    const data = await Templetes.findAll({
        
        attributes : ['id','name','templete']});
    res.json(ok(data))
})



router.post('/update',async (req,res) => {
    const templete = await Templetes.update(
        req.body,
        {
            where: {
                id: req.body.id
            },
        }
    );
    res.json(ok(templete))
})
router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    await Templetes.destroy({where: {id},});
    res.json(ok(id));
});
router.post("/new", async req => await Templetes.create(req.body));



const ok = (data = {}) => ({status: 200, messsage: "OK", data})
const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})
module.exports = router

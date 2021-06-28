const Router = require("express").Router;
const islogin = require("../middleware/index").islogin;
const Children= require("../models/childrens");

const router = Router();

router.post("/get_children", async (req, res) => {
    const {couple_id} = req.body
    
    const info = await Children.findAll({
        where: {couple_id:couple_id,},
  
  
      
     attributes: ['id','name','birth_date']
  },
  );
  res.send(info);
});


router.post('/update',async (req,res) => {
    const child = await Children.update(
        req.body,
        {
            where: {
                id: req.body.id
            },
        }
    );
    res.json(ok(child))
})
router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    await Children.destroy({where: {id},});
    res.json(ok(id));
});
router.post("/new", async (req,res)  =>{ await Children.create(req.body)
res.send("Was added")
}
)


const ok = (data = {}) => ({status: 200, messsage: "OK", data})
const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})


  module.exports = router

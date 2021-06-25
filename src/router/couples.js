const Router = require("express").Router;
const islogin = require("../middleware/index").islogin;
const Couples= require("../models/couples");

const router = Router();

router.get("/couples_list", async (req, res) => {
    const names = await Couples.findAll({
        attributes: ['id','title'],
    });
    res.send(names);


});
router.post("/get_info", async (req, res) => {
    const {id} = req.body
    
    const info = await Couples.findAll({
        where: {id:id},
  
  
      
     attributes: ['id','title',]
  },
  );
  res.send(info);
  
  
  });
  router.post('/update',async (req,res) => {
    const child = await Couples.update(
        req.body.data,
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
    await Couples.destroy({where: {id},});
    res.json(ok(id));
});
router.post("/new", async (req,res)  =>{ await Couples.create(req.body)
res.send("Was added")
}
)

const ok = (data = {}) => ({status: 200, messsage: "OK", data})
const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})


  module.exports = router

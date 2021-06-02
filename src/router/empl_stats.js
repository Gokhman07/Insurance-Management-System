const Router = require("express").Router;
const islogin = require("../middleware/index").islogin;
const Empl_stats= require("../models/empl_stats");

const router = Router();






router.get("/get_info", async (req, res) => {
  const info = await Empl_stats.findAll({


    
   attributes: ['id','title']
},
);
res.send(info);


});







    const ok = (data = {}) => ({status: 200, messsage: "OK", data})
    const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})
module.exports = router

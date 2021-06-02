const Router = require("express").Router;
const islogin = require("../middleware/index").islogin;
const Marit_statuses= require("../models/marit_statuses");

const router = Router();






router.get("/get_info", async (req, res) => {
  const info = await Marit_statuses.findAll({


    
   attributes: ['id','status']
},
);
res.send(info);


});







    const ok = (data = {}) => ({status: 200, messsage: "OK", data})
    const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})
module.exports = router

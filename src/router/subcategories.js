const Router = require("express").Router;
const islogin = require("../middleware/index").islogin;
const Subcategories= require("../models/subcategories");

const router = Router();

router.get("/subcategories_list", async (req, res) => {
    const names = await Subcategories.findAll({
        attributes: ['id','title'],
    });
    res.send(names);


});

const ok = (data = {}) => ({status: 200, messsage: "OK", data})
const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})


  module.exports = router
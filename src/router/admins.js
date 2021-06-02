const Router = require("express").Router;
const islogin = require("../middleware/index").islogin;
const { afterBulkCreate } = require("../database");
const Admins= require("../models/admins");
const jwt = require('jsonwebtoken')
const moment = require("moment")
const router = Router();

router.get("/admins_list", async (req, res) => {
    const list = await Admins.findAll({
        attributes: ['id','name','lastname'],
    });
    res.send(list);


});
router.get("/get_info", async (req, res) => {
    const {id} = req.body
    
    const info = await Admins.findAll({
        where: {id:id},
  
  
      
     attributes: ['id','name','lastname','username','password','email','phone','type']
  },
  );
  res.send(info);
  
  
  });

  router.get("/get_by_type", async (req, res) => {
    const {type} = req.body
    
    const info = await Admins.findAll({
        where: {type:type},
  
  
      
     attributes: ['id','name','lastname']
  },
  );
  res.send(info);
  
  
  });
  router.post('/update',async (req,res) => {
    const child = await Admins.update(
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
    await Admins.destroy({where: {id},});
    res.json(ok(id));
});
router.post("/new", async req => await Admins.create(req.body));


router.get('/auth', (req, res) => {
    if (!req.cookies.data) {
        res.json(error(404, 'No cookie'));
        return
    }
    res.json(ok(req.cookies.data))
});

router.get("/login", async (req, res) => {
    const exchange = await Admins.findOne({
        attributes: ['id','type'],
        where: {
            username: req.body.username,
            password: req.body.password
        }
    });
    const jwtconfig = {
        login: req.params.username,
        password: req.params.password,
        date: moment().format('YYYYMMDDhhmmss')
    }
    const token = jwt.sign(jwtconfig, 'shhhhh')
    if (exchange) {
        res.cookie('data', {username: req.params.username, id: exchange.dataValues.id, token})
        res.send({
            status: 200, data: {
                token,
                login: req.params.username, id: exchange.dataValues.id
            }
        });
    } else {
        res.json({
            message: 'Doesnt`t exist',
            status: 404
        })
    }

    await Admins.update(
        {
            token: token,
        },
        {
            where: {
                username: req.params.username,
            },
        }
    );

});
router.put("/logout", async (req, res) => {

    const {username} = req.body;
    res.clearCookie('data')
    const newauthor = await Admins.update(
        {
            token: '',
        },
        {
            where: {
                username: username,
            },
        }
    );

    res.send(newauthor);
});

const ok = (data = {}) => ({status: 200, messsage: "OK", data})
const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})


  module.exports = router
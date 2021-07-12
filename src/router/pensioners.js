const Router = require("express").Router;
const islogin = require("../middleware/index").islogin;
const Pensioners = require("../models/pensioners");
const router = Router();
const jwt = require('jsonwebtoken')
const moment = require("moment")
const {v4} = require('uuid')
const multer = require('multer')
const path = require('path');
const sequelize = require("../database");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

router.get("/names_list", async (req, res) => {
    const names = await Pensioners.findAll({
        attributes: ['id','name', 'lastname','passport_number'],
    });
    res.send(names);


});
router.post("/admin_clients", async (req, res) => {
    
    const names = await Pensioners.findAll({
        where: {

            'group_id': req.body.group_id
        },
        attributes: ['id','name', 'lastname','passport_number'],
    });
    res.send(names);


});

/*
router.put('/get_images', async (req, res) => {
    const {id_pensioner} = req.body
    const data = await Pensioners.findAll({
        where: {id: id_pensioner,},
        attributes: ['image_education_funds',
            'image_insur_doctors', 'image_insur_lives', 'image_insur_pensioners', 'image_loans',
            'image_monthly_deposit_savings', 'image_mortgages', 'image_work_incapacity_insurances']
    });
    res.json(ok(data))
})
*/

router.put('/update_images', async (req, res) => {
    const {mode,filename,id} = req.body
    console.log(req.body)
    const url = `${req.protocol}://${req.get('host')}/pensioners_info/${filename}`;
    await Pensioners.update({[mode] : url},{where : {id}})
    res.json(ok(url))
})

router.put('/update_admin', async (req, res) => {
    const  {id,group_id}= req.body
    

    await Pensioners.update({group_id: group_id},{where : {id}})
  //  res.json(ok(url))
})
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `./../src/static/pensioners_info`);
    },
    filename: function (req, file, cb) {
        cb(null, `${req.params.mode}__${v4()}_${path.extname(file.originalname)}`);
    }
})

const fileFilter = (req, file, cb) => {
    cb(null, true);
}

router.put('/upload/:mode', async (req, res) => {
    const upload = multer({storage, fileFilter}).single('image')
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
            res.json(error(err));
            return
        }
        const filename = res.req.file.filename
        res.json(ok(filename))
    })
})

router.put('/agent_info', async (req, res) => {
    const {data, id} = req.body
    await Pensioners.update(data, {where: {id}});
    res.json({
        status: 200
    })
})

router.get("/agent_info/:id", async (req, res) => {
    const info = await Pensioners.findOne({

            where: {

                'id': req.params.id
            },

            attributes: ['agent_name', 'agent_telephone', 'agent_mail', 'remarks', 'insurance_agency']
        },
    );
    res.send(info);


});

router.get("/personal_info/:id", async (req, res) => {
    const info = await Pensioners.findOne({

            where: {

                'id': req.params.id
            },

            attributes: ['name', 'lastname', 'passport_number','marital_id', 'occupation', 'belong_comp',
                'company', 'birth_date', 'card_number', 'pens_age', 'id_empl_status', 'occupation','belong_comp','couple_id','telephone','mail']
        },
    );
    res.send(info);});

    router.get("/partner_info/:id/:couple_id", async (req, res) => {
        const info = await Pensioners.findOne({
    
                where: {
                    'couple_id':req.params.couple_id,
                    'id':{ [Op.ne]:req.params.id}
                },
    
                attributes: ['name',  'passport_number', 'occupation', 'belong_comp',
                    'company', 'birth_date', 'card_number', 'pens_age', 'id_empl_status', 'occupation','belong_comp']
            },
        );
        res.send(info);
    
    
});
router.get("/agent_info/:id", async (req, res) => {
    const info = await Pensioners.findOne({

            where: {

                'id': req.params.id
            },

            attributes: ['agent_name', 'agent_telephone', 'agent_mail', 'remarks']
        },
    );
    res.send(info);


});


router.put("/new_user", async (req, res) => {
    const {username, password} = req.body;
    const newuser = await Pensioners.create({
        "username": username,
        "password": password
    });
    res.send(newuser);
});
const ok = (data = {}) => ({status: 200, messsage: "OK", data})
const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})

router.get('/auth', (req, res) => {
    if (!req.cookies.data) {
        res.json(error(404, 'No cookie'));
        return
    }
    res.json(ok(req.cookies.data))
});

router.post("/login_with_mail", async (req, res) => {
   const {username, email}=req.body
    const exchange = await Pensioners.findOne({
        attributes: ['id'],
        where: {
            passport_number: req.body.username,
            mail: req.body.email
        }
    });

   /*
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
    */
   const phoneToken = require('generate-sms-verification-code')
console.log(exchange)
    const token = phoneToken(4, {type: 'number'})
 await Pensioners.update(
        {
            token: token,
        },
        {
            where: {
                passport_number: username
               // password: req.body.email
            },
        }
    );
    var transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: 'ruzgokhman@gmail.com',
          pass: 'Printer21$'
        }
      }));
      let messageOptions = {
        from: 'ruzgokhman@gmail.com',
        to: req.body.email,
        subject: 'סיכום פגישה "עצה טובה"',
    
        text: "הקוד שלך לכניסה למערכת \"עצה טובה\"  הוא: "+token.toString()+" . הקוד תקף ל15 דקות"
        
      };
    
      transporter.sendMail(messageOptions, function(error, info) {
        if (error) {
           res.send("Something was wrong")
          throw error;
         
        } else {
          console.log('Email successfully sent!');
          res.send("Letter was sent")
        }
      });

    

    
    });
     



router.put("/logout", async (req, res) => {

    const {username} = req.body;
    res.clearCookie('data')
    const newauthor = await Pensioners.update(
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

router.post("/code_check", async (req, res) => {

    //const {username,code} = req.body;
    console.log(req.body.username)
    const newauthor = await Pensioners.findOne(
   {  attributes:['id']},
        {
            where: {
                passport_number: 1213,
              //  token:code
            },
        }
    );

    res.send(newauthor);
});

router.put("/delete_code", async (req, res) => {

    const {username} = req.body;
    res.clearCookie('data')
    const newauthor = await Pensioners.update(
        {
            token: 'NULL',
        },
        {
            where: {
                username: username,
            },
        }
    );

    
    res.send(newauthor);
});

router.get("/login_with_sms", async (req, res) => {
    const {username, phone}=req.body
     const exchange = await Pensioners.findOne({
         attributes: ['id'],
         where: {
             username: req.body.username,
             telephone: req.body.phone
         }
     });
 
     const phoneToken = require('generate-sms-verification-code')
     const token = phoneToken(4, {type: 'number'})
  await Pensioners.update(
         {
             token: token,
         },
         {
             where: {
                 username: username
                // password: req.body.email
             },
         }
     );
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
//const client = require('twilio')(accountSid, authToken);

var TMClient = require('textmagic-rest-client');
var c = new TMClient('username', 'C7XDKZOQZo6HvhJwtUw0MBcslfqwtp4');
c.Messages.send({text: 'test message', phones:'+380970753550'}, function(err, res){
    console.log('Messages.send()', err, res);
});
     
 
     
     });
router.delete("/delete/:id", islogin, async (req, res) => {
    const {id} = req.params;
    const deletepensioner = await Pensioners.destroy({
        where: {
            id: id,
        },
    });
    res.send(id);
});


router.post("/new", async (req,res)  =>{ await Pensioners.create(req.body)
res.send("Was added")
}
)


router.post('/update',async (req,res) => {
    const pensioner = await Pensioners.update(
        req.body,
        {
            where: {
                id: req.body.id
            },
        }
    );
    res.json(ok(pensioner))
})

//const ok = (data = {}) => ({status: 200, messsage: "OK", data})
//const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})
module.exports = router

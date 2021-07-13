const Router = require("express").Router;
const nodemailer = require('nodemailer');
const Mails = require("../models/mails");
const schedule = require('node-schedule');
var smtpTransport = require('nodemailer-smtp-transport');
const router = Router();

router.post("/send_mail", async (req, res) => {
    const {  id_pensioner,to,subject,text,date_info} = req.body;
    status="תהליך"
  
   // const date = new Date(2021, 04, 23, 23, 28, 0);
  
   const date = new Date(date_info);

  
   await Mails.create({  id_pensioner,subject,text,date: date_info,status});
    let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport

  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'ruzgokhman@gmail.com',
      pass: 'Printer21$'
    }
  }));
    console.log(subject)
  
    const job = schedule.scheduleJob(date, function(){
       // console.log('The world is going to end today.');
        let messageOptions = {
            from: 'ruzgokhman@gmail.com',
            to: to,
            subject: subject,
            text: text
          };
        
          transporter.sendMail(messageOptions, function(error, info) {
            if (error) {
              throw error;
            } else {
              console.log('Email successfully sent!');
              job.cancel();
            }
          });
        
        });
        

});


router.post("/contact_us", async (req, res) => {
    const {  name,mail,subject,text, number} = req.body;
    status="תהליך"
  
   // const date = new Date(2021, 04, 23, 23, 28, 0);
  
  

  
 ;
    let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport

  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'ruzgokhman@gmail.com',
      pass: 'Printer21$'
    }
  }));
  
    
       // console.log('The world is going to end today.');
        let messageOptions = {
            from: 'ruzgokhman@gmail.com',
            to: 'ruzgokhman@gmail.com',
            subject: subject,
            text:text+ "\n\n"+number+" :מספר טלפון\n"+mail+" :אימייל\n"+name+" :שם"
          };
        
          transporter.sendMail(messageOptions, function(error, info) {
            if (error) {
              throw error;
            } else {
              res.send('Email successfully sent!');
             
            }
          });
        
        });
        


router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await Mails.destroy({where: {id},});

});
router.post('/get',async (req,res) => {
  const {id_pensioner} = req.body
  const data = await Mails.findAll({
      where: {id_pensioner: id_pensioner,},
      attributes : ['subject','text','status','date','id']});
  res.json(ok(data))
})
router.put('/update_status', async (req, res) => {
  const {status,id} = req.body
 

  await Mails.update({status: status},{where : {id}})
  res.json(ok("Status is updated"))
})
const ok = (data = {}) => ({status: 200, messsage: "OK", data})
const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})
module.exports = router

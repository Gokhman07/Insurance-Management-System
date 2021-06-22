
require("dotenv").config();
require("./database");
require("./models");
const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const urlEncoderParser = bodyParser.urlencoded({ extended: false });
const compression = require("compression");
const  cookieParser = require('cookie-parser')

const pensioners=require("./router/pensioners")
const risk_insurances=require("./router/risk_insurances")
const pension_funds = require("./router/pension_funds")
const insur_pensioners = require('./router/insur_pensioners')
const education_funds = require('./router/education_funds')
const work_incapacity_insurances=require('./router/work_incapacity_insurances')
const mortgages=require('./router/mortgages')
const deposit_savings = require('./router/savings')
const pens_savings = require('./router/pens_savings')
const insur_doctors = require('./router/insur_doctors')
const loans = require('./router/loans')
const edu_funds = require('./router/education_funds')
const insur_lives = require('./router/insur_lives')
const empl_stats = require('./router/empl_stats')
const family_risks = require('./router/family_risks')
const children = require('./router/childrens')
const couples = require('./router/couples')
const admins=require('./router/admins')
const mail=require('./router/mails')
const templates=require('./router/templates')
const subcategoires=require('./router/subcategories')
const full_progrm_info=require('./router/full_progrm_info')
const app = express();
app.use(cookieParser())
app.use(cors({
  origin: "*",
  credentials: false}));
app.use(compression());
app.use(express.static('static'))

app.use(express.json({limit: '1000mb'}));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit : '100mb'
  })
);
app.use(urlEncoderParser); 


app.use("/pensioner",pensioners)
app.use("/risk_insurances",risk_insurances)
app.use("/pension_funds",pension_funds)
app.use("/insur_pensioners",insur_pensioners)
app.use("/education_funds",education_funds)
app.use("/family_risks",family_risks)
app.use("/full_progrm_info",full_progrm_info)
app.use('/work_incapacity_insurances',work_incapacity_insurances)
app.use('/mortgages',mortgages)
app.use("/savings",deposit_savings)
app.use("/pens_savings",pens_savings)
app.use("/edu_funds",edu_funds)
app.use("/loans",loans)
app.use("/insur_doctors",insur_doctors)
app.use("/insur_lives",insur_lives)
app.use("/empl_stats",empl_stats)
app.use("/children",children)
app.use("/couples",couples)
app.use("/admins",admins)
app.use("/mail",mail)
app.use("/templates",templates)
app.use("/subcategories",subcategoires)
app.listen(  process.env.PORT || 8080 , (err) => {
//  app.listen(   8080 , (err) => {
  err
    ? console.log(err)
    : console.log(`Server started on port ${ process.env.PORT} ⚡️`);
});

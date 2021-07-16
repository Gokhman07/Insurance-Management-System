const Router = require("express").Router;
const Insur_doctors = require("../models/insur_doctors");
const Work_incapacity_insurances = require("../models/work_incapacity_insurances");
const EduFunds = require('../models/education_funds')
const Monthly_deposit_savings = require("../models/pens_savings");
const Loans = require("../models/loans");
const Mortgages = require("../models/mortgages");
const Family_risks = require("../models/family_risks");
const Savings = require("../models/savings");
const router = Router();

router.post("/get", async (req, res) => {
	const {id_pensioner} = req.body
	const info=[];
	const loans = await Loans.findAll({
	    
		where: {
    
		    'id_pensioner': id_pensioner
		},
    
		
	    },
	);
	loans.push({type:'loans'})

	const doctors = await Insur_doctors.findAll({
	    
		where: {
    
		    'id_pensioner': id_pensioner
		},
    
		
	    },
	);
	doctors.push({type:'insur_doctors'})

	const work_incapacity = await Work_incapacity_insurances.findAll({
	    
		where: {
    
		    'id_pensioner': id_pensioner
		},
    
		
	    },
	);
	work_incapacity.push({type:'work_incapacity_insurances'})

	const edu_funds = await EduFunds.findAll({
	    
		where: {
    
		    'id_pensioner': id_pensioner
		},
    
		
	    },
	);
	edu_funds.push({type:'education_funds'})

	const pens_saving = await Monthly_deposit_savings.findAll({
	    
		where: {
    
		    'id_pensioner': id_pensioner
		},
    
		
	    },
	);
	pens_saving.push({type:'pens_savings'})

	const motrgages = await Mortgages.findAll({
	    
		where: {
    
		    'id_pensioner': id_pensioner
		},
    
		
	    },
	);
	motrgages.push({type:'mortgages'})

	const family_risks = await Family_risks.findAll({
	    
		where: {
    
		    'id_pensioner': id_pensioner
		},
    
		
	    },
	);
	family_risks.push({type:'family_risks'})

	const saving = await Savings.findAll({
	    
		where: {
    
		    'id_pensioner': id_pensioner
		},
    
		
	    },
	);
	saving.push({type:'savings'})

info.push(loans)
info.push(doctors)
info.push(work_incapacity)
info.push(edu_funds)
info.push(pens_saving)
info.push(motrgages)
info.push(family_risks)
info.push(saving)
res.json(ok(info));
    
    
    });

const ok = (data = {}) => ({status: 200, messsage: "OK", data})
const error = (status = 500, message = 'Request Error', data = {}) => ({status, message, data})
module.exports = router

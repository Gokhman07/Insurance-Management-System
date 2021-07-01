//const Funds=require("./funds")


const Pensioners =require("./pensioners")
const Marit_statuses =require("./marit_statuses")
const Empl_stats=require("./empl_stats")
const Group_admins=require("./group_admins")
const Childrens=require("./childrens")
const Couples = require("./couples")
const Risk_insurances =require("./risk_insurances")
const Insur_pensioners=require("./insur_pensioners")
const Education_funds  = require("./education_funds")
const Monthly_deposit_savings = require('./savings')
const PensSavings = require('./pens_savings')
const Family_risks = require('./family_risks')
const Insur_doctors = require('./insur_doctors')
const Work_incapacity_insurances=require('./work_incapacity_insurances')
const Insur_lives=require('./insur_lives')
const Mortgage = require('./mortgages')
const Mails = require('./mails')
const Plans = require('./plans')
const Templates = require('./templates')
const Subcategories = require('./subcategories')


Pensioners.hasMany(Plans, { foreignKey: "id_pensioner" });
Plans.belongsTo(Pensioners, { foreignKey: "id_pensioner" });

//Subcategories.hasMany(Plans, { foreignKey: "id_categor" });
//Plans.belongsTo(Subcategories, { foreignKey: "id_categor" });

Marit_statuses.hasMany(Pensioners, { foreignKey: "marital_id" });
Pensioners.belongsTo(Marit_statuses, { foreignKey: "marital_id" });

Empl_stats.hasMany(Pensioners, { foreignKey: "id_empl_status" });
Pensioners.belongsTo(Empl_stats, { foreignKey: "id_empl_status" });

Group_admins.hasMany(Pensioners, { foreignKey: "group_id" });
Pensioners.belongsTo(Group_admins, { foreignKey: "group_id" });

Group_admins.hasMany(Pensioners, { foreignKey: "group_id" });
Pensioners.belongsTo(Group_admins, { foreignKey: "group_id" });


Pensioners.hasMany(Mortgage, { foreignKey: "id_pensioner" });
Mortgage.belongsTo(Pensioners, { foreignKey: "id_pensioner" });

Pensioners.hasMany(Mails, { foreignKey: "id_pensioner" });
Mails.belongsTo(Pensioners, { foreignKey: "id_pensioner" });

Pensioners.hasMany(Insur_pensioners, { foreignKey: "id_pensioner" });
Insur_pensioners.belongsTo(Pensioners, { foreignKey: "id_pensioner" });

Pensioners.hasMany(Family_risks, { foreignKey: "id_pensioner" });
Family_risks.belongsTo(Pensioners, { foreignKey: "id_pensioner" });


Pensioners.hasMany(Education_funds, { foreignKey: "id_pensioner" });
Education_funds.belongsTo(Pensioners, { foreignKey: "id_pensioner" });

Pensioners.hasMany(Monthly_deposit_savings, { foreignKey: "id_pensioner" });
Monthly_deposit_savings.belongsTo(Pensioners, { foreignKey: "id_pensioner" });


Pensioners.hasMany(PensSavings, { foreignKey: "id_pensioner" });
PensSavings.belongsTo(Pensioners, { foreignKey: "id_pensioner" });

Pensioners.hasMany(Insur_doctors, { foreignKey: "id_pensioner" });
Insur_doctors.belongsTo(Pensioners, { foreignKey: "id_pensioner" });

Pensioners.hasMany(Work_incapacity_insurances, { foreignKey: "id_pensioner" });
Work_incapacity_insurances.belongsTo(Pensioners, { foreignKey: "id_pensioner" });

Pensioners.hasMany(Insur_lives, { foreignKey: "id_pensioner" });
Insur_lives.belongsTo(Pensioners, { foreignKey: "id_pensioner" });



Childrens.hasMany(Pensioners, { foreignKey: "couple_id" });
Couples.belongsTo(Childrens, { foreignKey: "couple_id" });




Pensioners.hasMany(Pensioners, { foreignKey: "id_pensioner" });
Risk_insurances.belongsTo(Couples, { foreignKey: "id_pensioner" });


const Users = require("../models/pensioners");
//sconst router = require("../router/user");

module.exports.islogin = async (req, res, next) => {
  console.log(req.headers)
 
 
 // router.get(`check_token/`){
    const names = await Users.findOne({
      where:{
        username:req.headers.login,
        token: req.headers.token
      },   
    })
    
  //   res.send(names);
     if(!names) return;
     
 // }

 else return next();
};

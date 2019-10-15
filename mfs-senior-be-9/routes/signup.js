var express = require('express');
var router = express.Router();


/* GET users listing. */
var users=[];
users.push(
    {
        username:"admin001",
        password:"123"
    }
);
function usernameExist(username){
    for(x in users){
        if(users[x].username==username){
            console.log(users[x].password);
            return true;
        }
    }
    return false;
}
function passwordCheck(username,password){
    for(x in users){
        if(users[x].username==username&&users[x].password==password){
            return true;
        }
    }
    return false;
}
router.get('/', function(req, res, next) {
  res.header({ "Access-Control-Allow-Origin": "*" });
  res.render('signup');
});
router.post('/username-check',function(req,res,next){
    res.header({ "Access-Control-Allow-Origin": "*" });
    console.log(req.body);
    if(usernameExist(req.body.username)){
        //如果已经存在
        console.log("1");
        res.json({"result":1})
    }
    else{
        console.log("0");
        res.json({"result":0})
    }
})
// router.post('/signup',function(req,res,next){
//     res.header({ "Access-Control-Allow-Origin": "*" });
//     console.log("signup");
//     console.log(req.data);
//     users.push({
//         username:req.body.username,
//         password:req.body.password
//     })
//     res.json({result:"success"});
// })
module.exports = router;

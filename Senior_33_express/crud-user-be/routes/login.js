var express = require('express');
var router = express.Router();
var User=require("../data/user")
var userTable=require("../data/userTable")
var {userList}=userTable;

router.patch("/",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    var username=req.body.username;
    var password=req.body.password;
    var user=new User("admin","123","1@qq.com");
    userTable.addUser(user);
    var userid=userTable.login(username,password)
    if(userid>=0){
        res.json({
            result:1,
            msg:"登陆成功",
            id:userid,
            email:userList[userid].email,
            intro:userList[userid].intro
        });
    }
    else {
        if(userid==-1){
            res.json({
                result:0,
                msg:"用户名不存在"
            })
        }else if(userid==-2){
            res.json({
                result:0,
                msg:"密码错误"
            })
        }
    }
})
module.exports=router;
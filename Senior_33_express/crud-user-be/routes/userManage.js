var express = require('express');
var router = express.Router();
var User=require("../data/user")
var userTable=require("../data/userTable")
var {userList}=userTable;

router.options("/",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, PATCH ")
    res.end();
})
router.patch("/login",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    var username=req.body.username;
    var password=req.body.password;
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
router.patch("/logout",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    var rs=userTable.logout(req.body.id);
    if(userTable.logout(req.body.id)){
        res.json({
            result:1,
            msg:"退出成功"
        })
    }else{
        res.json({
            result:0,
            msg:"未知错误"
        })
    }


})
router.delete("/delete",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    var rs=userTable.removeUser(req.body.id);
    if(userTable.logout(req.body.id)){
        res.json({
            result:1,
            msg:"删除成功"
        })
    }else{
        res.json({
            result:0,
            msg:"未知错误"
        })
    }


})
router.get("/username-check",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    var {username}=req.query;
    if(userTable.usernameCheck(username)){
        res.json({
            result:1,
            msg:"用户名可用",
        })
    }else{
        res.json({
            result:0,
            msg:"用户名不可用"
        })
    }

})
router.post("/signup",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    var {username,password,email}=req.body
    var user=new User(username,password,email)
    var userid=userTable.addUser(user);
    if(userid>=0){
        res.json({
            result:1,
            msg:"注册成功",
            id:userid
        })
    }else{
        res.json({
            result:0,
            msg:"未知错误"
        })
    }


})
router.get("/password-check",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    var {id,password}=req.query;
    if(userList[id].password!=password){
        res.json({
            result:0,
            msg:"密码错误"
        })
    }else{
        userTable.updatePassword(id,password);
        res.json({
            result:1,
            msg:"密码正确"
        })
    }
    
})
router.patch("/password-change",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    var {id,password,password_new}=req.body;
    if(userList[id].password!=password){
        res.json({
            result:0,
            msg:"密码错误"
        })
    }else{
        userTable.updatePassword(id,password_new);
        res.json({
            result:1,
            msg:"修改成功"
        })
    }
})
router.put("/userinfo-change",(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    var {id,username,email,intro}=req.body
    userTable.updateUsername(id,username);
    userTable.updateEmail(id,email);
    userTable.updateIntro(id,intro);
    res.json({
        result:1,
        msg:"个人信息更新成功"
    })
})
module.exports=router;
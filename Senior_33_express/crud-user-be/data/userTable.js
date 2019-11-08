
class UserInfoTable{
    constructor(){
        this.userList=[];
    }
    userSearch(username){
        for(var id in this.userList){
            if(this.userList[id].username==username&&this.userList[id].isDelete==false){
                return id;
            }
        }
        return -1;
    }
    usernameCheck(username){
        for(var user of this.userList){
            if(username==user.username&&user.isDelete==false){
                return false;
            }
        }
        return true;
    }
    addUser(user){//增加用户
        if(this.usernameCheck(user.username)){//检查用户名是否可用
            user.id=this.userList.length;
            this.userList.push(user)
            return user.id;
        }else{
            return false;
        }
    }
    removeUser(id){//用户注销
        this.userList[id].isDelete=true;
    }
    updateUsername(id,username){//修改用户名
        this.userList[id].username=username;
    }
    updateEmail(id,email){//修改email
        this.userList[id].email=email;
    }
    updatePassword(id,password){//修改密码
        this.userList[id].password=password;
    }
    updateIntro(id,intro){//更新自我介绍
        this.userList[id].intro=intro;

    }
    login(username,password){//登陆
        var userid=this.userSearch(username);
        if(userid<0||this.userList[userid].isDelete==true){
            //用户名不存在
            return -1
        }
        if(this.userList[userid].password==password){
            this.userList[userid].isLogin=true;
            return userid;
        }
        //密码错误
        return -2;
    }
    logout(id){//登出
        this.userList[id].isLogin=false;
        return true;
    }
}

var userTable=new UserInfoTable();
module.exports=userTable;
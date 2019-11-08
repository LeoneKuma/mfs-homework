module.exports= class User{
    constructor(username,password,email){
        this.username=username;
        this.password=password;
        this.email=email;
        this.id=null;
        this.isLogin=false;
        this.isDelete=false;
    }
    getInfo(){
        console.log(getUsername());
    }
    getUsername(){
        return this.username
    }
}


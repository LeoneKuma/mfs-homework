module.exports=class {
    constructor(){
        this.users=[]
        this.users.push(
            {
                username:"admin001",
                password:"123"
            }
        )
    }
    usernameExist(username){
        var users=this.users;
        for(var x in users){
            if(users[x].username==username){
                console.log(users[x].password);
                return true;
            }
        }
        return false;
    }
    passwordCheck(username,password){
        var users=this.users;
        for(var x in users){
            if(users[x].username==username&&users[x].password==password){
                return true;
            }
        }
        return false;
    }
}
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import qs from 'querystring'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id:"",
    username:"",
    email:"",
    intro:"",
    isLogin:false,
    isUsernameAvailable:true,
    isPasswordCorrect: true,
  },
  mutations: {
    updateId(state,id){
      state.id=id;
    },
    updateUsername(state,username){
      state.username=username;
    },
    updateEmail(state,email){
      state.email=email;
    },
    updateIntro(state,intro){
      state.intro=intro
    },
    updateLoginState(state,isLogin){
      state.isLogin=isLogin;
    },
    updateUsernameAvailable(state,isAvailbale){
      state.isUsernameAvailable=isAvailbale;
    },
    updatePasswordCheckState(state,isPasswordCorrect){
      state.isPasswordCorrect=isPasswordCorrect;
    }
  },
  actions: {
    login({commit,state},{username,password}){
      axios({
        method:"patch",
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        url:"http://localhost:3000/login",
        data:qs.stringify({
          username:username,
          password:password
        })
      }).then((res)=>{
        if(res.data.result==1){
          commit("updateId",res.data.id)
          commit("updateEmail",res.data.email)
          commit("updateIntro",res.data.intro)
          commit("updateUsername",username)
          commit("updateLoginState",true)
        }
        else{
          alert(res.data.msg);
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    logout({commit,state},id){
      axios({
        method:"patch",
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        url:"http://localhost:3000/logout",
        data:qs.stringify({
          id:id
        })
      }).then((res)=>{
        if(res.data.result==1){
          commit("updateLoginState",false)
        }
        else{
          alert(res.data.msg);
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    deleteUser({commit,state},id){
      axios({
        method:"delete",
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        url:"http://localhost:3000/delete",
        data:qs.stringify({
          id:id
        })
      }).then((res)=>{
        if(res.data.result==1){
          commit("updateLoginState",false)
        }
        else{
          alert(res.data.msg);
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    usernameCheck({commit,state},username){
      axios({
        method:"get",
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        url:"http://localhost:3000/username-check",
        params:{
          username:username
        }
      }).then((res)=>{
        if(res.data.result==1){
          commit("updateUsernameAvailable",true)
        }else{
          commit("updateUsernameAvailable",false)
        }
      }).catch((err)=>{
        console.log(err)
      })

    },
    signup({commit,state},{username,password,email}){
      axios({
        method:"post",
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        url:"http://localhost:3000/signup",
        data:qs.stringify({
          username:username,
          password:password,
          email:email
        })
      }).then((res)=>{
        if(res.data.result==1){
          commit("updateLoginState",true)
          commit("updateUsername",username)
          commit("updateEmail",email)
          commit("updateId",res.data.id)
          console.log("注册成功")
          router.push("/")
        }
        else{
          alert(res.data.msg);
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    passwordCheck({commit,state},password){
      //password=passwordEncrypt(password)
      axios({
        method:"get",
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        url:"http://localhost:3000/password-check",
        params:{
          id:state.id,
          password:password
        }
      }).then((res)=>{
        if(res.data.result==1){
          commit("updatePasswordCheckState",true)
        }else{
          commit("updatePasswordCheckState",false)
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    passwordChange({commit,dispatch,state},{password,password_new}){
      axios({
        method:"patch",
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        url:"http://localhost:3000/password-change",
        data:qs.stringify({
          id:state.id,
          password:password,
          password_new:password_new
        })
      }).then((res)=>{
        if(res.data.result==1){
          alert(res.data.msg);
          dispatch("logout",state.id)
          router.push("/")
        }else{
          commit("updatePasswordCheckState",false)
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    userinfoChange({commit,state},userinfo){
      var obj={id:state.id,...userinfo}
      axios({
        method:"put",
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        url:"http://localhost:3000/userinfo-change",
        data:qs.stringify(obj)
      }).then((res)=>{
        if(res.data.result==1){
          commit("updateUsername",userinfo.username);
          commit("updateEmail",userinfo.email);
          commit("updateIntro",userinfo.intro);
          alert(res.data.msg);
          router.push("/")
        }else{
        }
      }).catch((err)=>{
        console.log(err)
      })
    }

  },
  modules: {
  }
})

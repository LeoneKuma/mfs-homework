<template>
  <div id="home">
    <div class="container-info" v-if="isLogin">
      <div>
        ID:
        <span class="id" v-text="id"></span>
      </div>
      <div>
        用户名:
        <span class="username" v-text="username"></span>
      </div>
      <div>
        邮箱:
        <span class="email" v-text="email"></span>
      </div>
      <div>
        <span class="introtitle">自我介绍:</span>
        <span class="intro" v-text="intro"></span>
      </div>
      <div class="btns">
        <div class="manage" @click="manage">个人信息</div>
        <div class="password" @click="changePassword">修改密码</div>
        <div class="logout" @click="logout(id)">退出</div>
        <div class="delete" @click="deleteUser(id)">删除账号 </div>
      </div>
    </div>


    <div class="nav" v-if="!isLogin">
      <div class="container-login">
        <div class="input">
          用户名:
          <input type="text" class="username" v-model="input_username" />
        </div>
        <div class="input">
          密码:
          <input type="password" class="password" v-model="input_password" />
        </div>
        <div class="btns">
          <div id="login" @click="login(userinfo)">登陆</div>
          <div id="signup" @click="signup">注册</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import router from '../router'
export default {
  data() {
    return {
      input_username: "",
      input_password: ""
    };
  },
  computed: {
    userinfo(){
      return {
        username:this.input_username,
        password:this.input_password
      }
    },
    ...mapState(["id", "username", "email", "intro", "isLogin"])
  },
  methods: {
    signup(){
      router.push("/signup")
    },
    manage(){
      router.push("/infomanage")
    },
    changePassword(){
      router.push("/password-change")
    },
    ...mapActions(["login","logout","deleteUser"])
  }
};
</script>

<style lang="stylus" scoped>
#home {
  height: 400px;
  width: 500px;
  background: white;
  border: 2px solid rgba(0, 0, 0, 0.6);

  div.container-info {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;


    div {
      margin: 10px 20px;

      span.id{
        margin-left: 48px;
      }
      span.username{
        margin-left: 16px;
      }
      span.email{
        margin-left: 30px;
      }
      span.introtitle{
        position relative

      }
      span.intro {
        display: inline-block;
        margin-left 5px
        border: 1px solid rgba(0, 0, 0, 0.2);
        height: 150px;
        width: 300px;
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
    div.btns{
      display flex;
      justify-content space-around
      padding 0 20px
      div{
        cursor: pointer;
        margin: 10px;
        display: inline-block;
        text-align: center;
        line-height: 40px;
        width: 100px;
        height: 40px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 10px;

        &:hover {
          background: rgba(0, 0, 0, 0.2);
        }
      }
    }
  }

  div.nav {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div.container-login {
      width: 100%;
      height 100%
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items : center;
      padding-top 80px
      div.input{
        height 15%
        input.username{
          margin-left 5px;
        }
        input.password{
          margin-left 21px;
        }
      }
      div.btns{
        height:40%
        div#login, div#signup {
        cursor: pointer;
        margin: 10px;
        display: inline-block;
        text-align: center;
        line-height: 40px;
        width: 100px;
        height: 40px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 10px;

        &:hover {
          background: rgba(0, 0, 0, 0.2);
        }
      }
      }
      
    }
  }
}
</style>
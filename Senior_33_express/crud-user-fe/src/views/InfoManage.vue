<template>
  <div id="userinfo">
    <div class="container">
      <div class="input">
        用户名:
        <input type="text" @input="usernameCheck" v-model="input_username" />
        <span v-text="msg_username"></span>
      </div>
      <div class="input">
        Email:
        <input type="email" v-model="input_email" />
        <span v-text="msg_email"></span>
      </div>
      <div class="intro">
        <span>自我介绍:</span>
        <textarea cols="30" rows="10" v-model="input_intro"></textarea>
      </div>
    </div>
    <div class="btns">
      <div class="btn" @click="userinfoChange">确认</div>
      <div class="btn" @click="goBack">退出</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import router from "../router";
export default {
  created() {
    this.input_username = this.$store.state.username;
    this.input_email = this.$store.state.email;
    this.input_intro = this.$store.state.intro;
  },
  data() {
    return {
      input_username: "",
      input_email: "",
      input_intro: "",
      timer: undefined
    };
  },
  computed: {
    msg_username() {
      if (!this.input_username.match(/^[a-zA-Z]\w{5,17}$/)) {
        return "用户名格式错误，应以字母开头，6-18个字符";
      } else if (!this.$store.state.isUsernameAvailable) {
        return "用户名已存在";
      } else {
        return "";
      }
    },
    msg_email() {
      if (!this.input_email.match(/^\w+@(\w+\.)+\w+$/)) {
        return "邮箱格式错误";
      } else {
        return "";
      }
    },
    isValidate(){
        return (
            !this.msg_username&&!this.msg_email
        )
    }
  },
  methods: {
    goBack() {
      router.push("/");
    },
    usernameCheck() {
      this.$store.commit("updateUsernameAvailable", true);
      if (this.input_username == this.$store.state.username) {
        return;
      }
      if (this.timer != undefined) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.$store.dispatch("usernameCheck", this.input_username);
      }, 2000);
    },
    userinfoChange(){
        if(!this.isValidate){
            return
        }
        var userinfo={
            username:this.input_username,
            email:this.input_email,
            intro:this.input_intro
        }
        this.$store.dispatch("userinfoChange",userinfo)
    }
  }
};
</script>
<style lang="stylus" scoped>
div#userinfo {
  height: 400px;
  width: 500px;
  background: white;
  border: 2px solid rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  div.container {
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    margin-right: 185px;

    div.input {
      height: 50px;
      position: relative;

      input {
        width: 196px;
        margin-left: 10px;
      }

      span {
        width: 180px;
        margin-left: 10px;
        position: absolute;
        color: red;
      }
    }

    div.intro {
      height: 50px;
      position: relative;
      left: 85px;

      span {
        position: absolute;
        top: 0px;
        left: -82px;
      }

      textarea {
        width: 280px;
      }
    }
  }

  div.btns {
    display: flex;
    justify-content: center;
    padding: 0 20px;
    height: 20%;

    div.btn {
      cursor: pointer;
      margin: 0 30px;
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
</style>
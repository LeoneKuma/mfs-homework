<template>
  <div id="signup">
    <div class="container">
      <div class="inputs">
        <div class="input">
          用户名:
          <input type="text" @input="usernameCheck" v-model="input_username" />
          <span v-text="msg_username"></span>
        </div>
        <div class="input">
          密码:
          <input type="password" v-model="input_password" />
          <span v-text="msg_password"></span>
        </div>
        <div class="input">
          确认密码:
          <input type="password" v-model="input_passwordAgain" />
          <span v-text="msg_passwordAagin"></span>
        </div>
        <div class="input">
          邮件地址:
          <input type="email" v-model="input_email" />
          <span v-text="msg_email"></span>
        </div>
      </div>

      <div class="btns">
        <div @click="signup">注册</div>
        <div @click="goBack">返回</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import router from "../router";
export default {
  data() {
    return {
      input_username: "",
      input_password: "",
      input_passwordAgain: "",
      input_email: "",
      timer:undefined,
    };
  },
  computed: {
    userinfo() {
      return {
        username: this.input_username,
        password: this.input_password
      };
    },
    msg_username() {
      if (!this.input_username.match(/^[a-zA-Z]\w{5,17}$/)) {
        return "用户名格式错误，应以字母开头，6-18个字符";
      } else if (!this.$store.state.isUsernameAvailable) {
        return "用户名已存在";
      } else {
        return "";
      }
    },
    msg_password() {
      if (!this.input_password.match(/^\S{6,18}$/)) {
        return "密码格式错误，应以字母开头，6-18个字符";
      } else {
        return "";
      }
    },
    msg_passwordAagin() {
      if (this.input_password != this.input_passwordAgain) {
        return "两次密码不一致";
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
    isValidate() {
      return (
        !this.msg_username &&
        !this.msg_password &&
        !this.msg_passwordAagin &&
        !this.msg_email
      );
    },
    ...mapState([
      "id",
      "username",
      "email",
      "intro",
      "isLogin",
      "isUsernameAvailable"
    ])
  },
  methods: {
    signup() {
      if (!this.isValidate) {
        return;
      }
      var obj = {
        username: this.input_username,
        password: this.input_password,
        email: this.input_email
      };
      this.$store.dispatch("signup", obj);
    },
    goBack() {
      router.push("/");
    },
    usernameCheck() {
        this.$store.commit("updateUsernameAvailable",true)
      if (this.timer != undefined) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.$store.dispatch("usernameCheck", this.input_username);
      }, 2000);
    },
    ...mapActions([])
  }
};
</script>

<style lang="stylus" scoped>
div#signup {
  height: 400px;
  width: 500px;
  background: white;
  border: 2px solid rgba(0, 0, 0, 0.6);

  div.container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div.inputs {
      width: 100%;
      height: 80%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
      padding-right: 450px;

      div.input {
        display: inline-block;
        height: 80px;
        position: relative;

        span {
          position: absolute;
          display: inline-block;
          width: 180px;
          color: red;
          margin-left: 10px;
        }
      }
    }

    div.btns {
      display: flex;
      flex-direction: raw;

      div {
        cursor: pointer;
        margin: 0 50px;
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
</style>
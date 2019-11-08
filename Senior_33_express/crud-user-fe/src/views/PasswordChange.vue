<template>
  <div id="password-change">
    <div class="container">
      <div class="input">
        当前密码:
        <input type="password" @input="passwordCheck" v-model="input_password" />
        <span v-text="msg_password"></span>
      </div>
      <div class="input">
        新密码:
        <input type="password" v-model="input_password_new" />
        <span v-text="msg_password_new"></span>
      </div>
      <div class="input">
        确认新密码:
        <input type="password" v-model="input_password_new_again" />
        <span v-text="msg_password_new_again"></span>
      </div>
    </div>
    <div class="btns">
      <div class="btn" @click="passwordChange">确认</div>
      <div class="btn" @click="goBack">退出</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import router from "../router";
export default {
  data() {
    return {
      input_password: "",
      input_password_new: "",
      input_password_new_again: ""
    };
  },
  computed: {
    msg_password() {
      if (this.$store.state.isPasswordCorrect) {
        return "";
      } else {
        return "密码错误";
      }
    },
    msg_password_new() {
      if (!this.input_password_new.match(/^\S{6,18}$/)) {
        return "密码格式错误，应以字母开头，6-18个字符";
      } else {
        return "";
      }
    },
    msg_password_new_again() {
      if (this.input_password_new == this.input_password_new_again) {
        return "";
      } else {
        return "两次密码不一致";
      }
    },
    isValidate() {
      return !this.msg_password && !this.msg_password_new && !this.msg_password_new_again;
    },
    ...mapState(["id", "isPasswordCorrect"])
  },
  methods: {
    passwordCheck() {
      this.$store.commit("updatePasswordCheckState", true);
    //   this.$store.dispatch("passwordCheck", this.input_password);
    },
    passwordChange() {
     // passwordCheck();
     var obj={
         password:this.input_password,
         password_new:this.input_password_new
     }
      if (this.isValidate) {
        this.$store.dispatch("passwordChange", obj);
      }
    },
    goBack() {
      router.push("/");
    },
    ...mapActions(["login", "logout", "deleteUser"])
  }
};
</script>
<style lang="stylus" scoped>
div#password-change {
  height: 400px;
  width: 500px;
  background: white;
  border: 2px solid rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  div.container {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    margin-right: 200px;

    div.input {
      height: 50px;
      position: relative;

      span {
        width: 180px;
        margin-left: 10px;
        position: absolute;
        color: red;
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
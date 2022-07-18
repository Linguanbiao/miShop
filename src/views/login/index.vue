<template>
  <div class="loginContainer">
    <div class="login-header">
      <div class="headerContainer">
        <img src="@/assets/imgs/logo-mi.png" alt="小米商城logo" />
        <div class="title">
          <p class="logo-font">小米商城</p>
          <p>让每个人都能享受科技的乐趣</p>
        </div>
      </div>
    </div>
    <div class="login-wrapper">
      <div class="form-container">
        <div class="form-header">
          <span :class="isUserLogin ? 'selected' : ''">账号登录</span>
          |
          <span :class="isScanLogin ? 'selected' : ''">扫码登录</span>
        </div>
        <div class="form-body">
          <input type="text" placeholder="请输入账号" v-model="username" />
          <input type="password" placeholder="请输入密码" v-model="password" />
          <button class="btn btn-huge" @click="handleLogin">登录</button>
        </div>
        <div class="form-bottom">
          <div class="regiest" @click="handleRegister">手机短信登录/注册</div>
        </div>
      </div>
    </div>
    <div class="login-bottom">
      <div class="navbar">
        <div class="container">
          <a href="javajavascripy:;">简体</a>|
          <a href="javajavascripy:;">繁体</a>|
          <a href="javajavascripy:;">English</a>|
          <a href="javajavascripy:;">常见问题</a>|
          <a href="javajavascripy:;">隐私政策</a>
        </div>
      </div>
      <div class="copyright">
        <span
          >小米公司版权所有-京ICP10046444|京公网安备11010802020134号-京ICP证110506号</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { postLoginInfo, register } from "@/api/login.js";
export default {
  data() {
    return {
      isScanLogin: false,
      isUserLogin: true,
      username: "",
      password: "",
      userId: "",
    };
  },
  methods: {
    async handleLogin() {
      let { username, password } = this;
      postLoginInfo({
        username,
        password,
      }).then((res) => {
        console.log(res);
        this.$cookie.set("userId", res.id, { expires: "1M" });
        this.$store.dispatch("saveUserName", res.username);
        this.$message.success("登录成功"), this.$router.push("/");
      });
    },
    async handleRegister() {
      let { username, password } = this;
      register({
        username,
        password,
      }).then(() => {
        this.$message.success("注册成功,请登录！"), this.$router.push("/login");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/mixin.scss";
@import "~@/assets/scss/button.scss";
.login-header {
  width: 100%;
  height: 112px;
  .headerContainer {
    width: 1226px;
    height: 112px;
    margin: 0 auto;
    display: flex;
    img {
      width: 52px;
      height: 52px;
      margin-top: 19px;
      margin-right: 18px;
    }
    .title {
      height: 52px;
      p {
        font-size: 10px;
        font-weight: 300;
        color: #666666;
      }
      .logo-font {
        margin-top: 15px;
        font-size: 30px;
        font-weight: 400;
        color: #333333;
      }
    }
  }
}
.login-wrapper {
  position: relative;
  height: 567px;
  display: flex;
  justify-content: space-around;
  background: url("@/assets/imgs/login-bg.jpg") no-repeat center;
  .form-container {
    width: 410px;
    height: 510px;
    position: absolute;
    top: 37px;
    background-color: #ffffff;
    margin-left: 820px;
    padding: 40px 30px;
    box-sizing: border-box;
    .form-header {
      font-size: 24px;
      font-weight: bold;
      color: #333333;
      width: 100%;
      margin: 0 auto;
      span {
        margin: 0 35px;
      }
      .selected {
        color: #ff6600;
      }
    }
    .form-body {
      input {
        display: inline-block;
        width: 348px;
        height: 50px;
        margin-bottom: 20px;
        padding-left: 15px;
        box-sizing: border-box;
        border: 1px solid #e5e5e5;
        &:nth-child(1) {
          margin-top: 50px;
        }
        &:last-of-type {
          margin-bottom: 30px;
        }
      }
    }
    .form-bottom {
      .regiest {
        display: inline-block;
        margin-top: 14px;
        color: #ff6600;
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
}
.login-bottom {
  min-height: 391px;
  width: 100%;
  margin: 0 auto;
  margin-top: 80px;
  .navbar {
    width: 380px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    a {
      display: inline-block;
      font-size: 16px;
      margin: 0 9px;
      color: #666666;
    }
  }
  .copyright {
    display: flex;
    justify-content: center;
    color: #666666;
    font-size: 14px;
    margin-top: 20px;
  }
}
</style>

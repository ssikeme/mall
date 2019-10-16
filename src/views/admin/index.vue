<template>
  <div class="main">
    <div class="head">
      <div class="title" v-if="isRegister"><b class="back">&lt;</b>注册</div>
      <div class="title" v-else><b class="back">&lt;</b>登录</div>
    </div>
    <div class="logo">
      <img src="../../assets/logo.png" style="width:48px;height: 48px">
    </div>
    <div class="form">
      <div class="inputDiv">
        <label>
          <input class="adminInput" type="text" placeholder="用户名" v-model="username">
          <p v-show="usernameHint">请输入6-16个由数字，字母或下划线组成的用户名</p>
          <p v-if="usernameExistedHint">该用户名已存在</p>
          <p v-if="usernameNotExistHint">该用户名不存在</p>
        </label>
      </div>
      <div class="inputDiv">
        <label>
          <input type="password" class="adminInput" placeholder="请输入密码" v-model="passWd">
          <p v-show="passWdHint">请输入8-18个由ascii码组成的密码，不含空格</p>
          <p v-if="incorrectParamHint">您输入的用户名或密码错误!</p>
        </label>
      </div>
      <div class="inputDiv" v-if="isRegister">
        <label>
          <input type="password" class="adminInput" placeholder="请再次确认密码" v-model="passWdConfirm">
          <p v-show="passWdConfirmHint" class="red">两次密码不一致!</p>
        </label>
      </div>
    </div>
    <div v-if="isRegister">
      <div class="register-button" @click="handleRegister">
        <p>注册</p>
      </div>
      <div class="moreOpera">
        <div class="right">
          已有账号，点击<b class="orange" @click="toLogin">登录</b>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="login-button" @click="handleLogin">
        <p>登录</p>
      </div>
      <div class="moreOpera">
        <p class="left" @click="toRegister">新用户注册</p>
        <p class="right">忘记密码</p>
      </div>
      <div class="agreePolicy">
        <p>登录即代表您已同意<strong>《mall隐私政策》</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
import {register, login} from '@/api/admin'
import {checkStr} from '@/utils/string'
import {UserCode, CommonCode} from '@/utils/code'
export default {
  props: {
    isRegister: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      username: null,
      passWd: null,
      passWdConfirm: null,
      usernameExistedHint: false,
      usernameNotExistHint: false,
      incorrectParamHint: false
    }
  },
  methods: {
    handleRegister () {
      if (this.usernameHint === false && this.passWdHint === false && this.passWdConfirmHint === false) {
        register({username: this.username, passWd: this.passWd}).then(response => {
          let code = response.data.code
          if (code === CommonCode.SUCCESS) {
            alert('注册成功')
            this.$router.push('/admin/login')
          } else if (code === UserCode.USERNAME_ALREADY_EXISTS) {
            this.usernameExistedHint = true
          }
        }).catch(err => {
          alert(err)
        })
      }
    },
    handleLogin () {
      if (this.passWdHint === false && this.usernameHint === false) {
        login({username: this.username, passWd: this.passWd}).then(response => {
          let code = response.data.code
          if (code === CommonCode.SUCCESS) {
            this.$store.commit('user/setUserSessionInfo', response.data.data)
            alert('登陆成功')
            this.$router.push('/home')
          } else if (code === UserCode.INCORRECT_USERNAME_OR_PASSWORD) {
            this.incorrectParamHint = true
          } else if (code === UserCode.USERNAME_NOT_EXISTS) {
            this.usernameNotExistHint = true
          }
        }).catch(err => {
          alert(err)
        })
      }
    },
    toRegister () {
      this.$router.push('/admin/register')
    },
    toLogin () {
      this.$router.push('/admin/login')
    }
  },
  computed: {
    usernameHint () {
      return this.isRegister && !checkStr(this.username, len => len >= 6 && len <= 16, ch => ((ch >= 48 && ch <= 57) || (ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122) || ch === 95))
    },
    passWdHint () {
      return this.isRegister && !checkStr(this.passWd, len => len >= 8 && len <= 18, ch => (ch >= 0x20 && ch <= 0x7f && ch !== 32))
    },
    passWdConfirmHint () {
      return this.passWdConfirm !== this.passWd
    }
  }
}
</script>

<style scoped lang="scss">
  .main {
    width: 100%;

    .head {
      height: 36px;
      background-color: $quaternary-orange;

      .title {
        @include fonts(18px, white);
        padding-top: 7px;

        .back {
          float: left;
          margin-top: -7px;
          padding-left: 8px;
          font-size: 28px;
          color: white;
          font-weight: lighter;
        }
      }
    }

    .logo {
      width: 50px;
      margin: 20px auto;
    }

    .form {
      width: 100%;

      .inputDiv {
        width: 85%;
        margin: 32px auto 8px;

        .adminInput {
          border: none;
          border-bottom: 1px solid lightgray;
          width: 100%;
          height: 45px;
          font-size: 15px;
        }

        p {
          @include fonts(14px, gray, $align: left);
        }

        .red {
          color: red;
        }
      }
    }

    .register-button, .login-button {
      @include button(270px, 45px, 22px, $quaternary-orange);
      margin: 30px auto 0;

      p {
        padding-top: 14px;
        @include fonts(15px, white);
      }
    }

    .moreOpera {
      margin: 20px 20px;
      @include fonts(15px, gray);

      p {
        margin: 28px 10px;
      }

      .orange {
        color: $quaternary-orange;
        font-weight: normal;
      }
    }

    .agreePolicy {
      margin-top: 175px;
      @include fonts(13px, lightgray);

      strong {
        color: cornflowerblue;
        font-weight: lighter;
      }
    }

    .registerSuccess {
      @include div(80%, 120px, white);
      position: absolute;
      margin-top: -280px;
      margin-left: 10%;
      border: 1px solid $quaternary-orange;
      box-shadow: $tertiary-orange 5px -3px 9px;
      border-radius: 10px;

      div {
        @include fonts(18px, gray);
        margin-top: 26px;
      }

      .toLogin {
        @include fonts(19px, white);
        @include div(30%, 30px, $quaternary-orange);
        margin: 25px auto;
        border-radius: 10px;
      }
    }
  }
</style>

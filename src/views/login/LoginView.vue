<template>
  <div id="login" class="login" v-title :data-title=this.title>
    <div style="text-align: center;">
      <img class="title1" src="../../assets/logowithoutback.png" @click="handleToHome" />
    </div>
    <div class="login-word">
      <span class="word" style="font-size: 38px;">登录</span>
    </div>
    <div style="display: flex">
      <div style="flex: 1"></div>
      <div class="login-wrap">
        <el-form :model="form" ref="form" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input placeholder="邮箱" type="username" v-model="form.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item id="password" prop="pass">
            <el-input placeholder="密码" type="password" v-model="form.password" autocomplete="off"
              @keyup.enter.native="login"></el-input>
          </el-form-item>
          <el-form-item class="login-btn">
            <el-button type="primary" @click="login">登 录</el-button>
          </el-form-item>
        </el-form>
        <div class="register-text">
          <p @click="handleCommand">注册帐号</p>
        </div>
        <div class="forget-text">
          <p @click="handleForget" style="padding-bottom: 100px;">忘记密码？</p>
        </div>
      </div>
      <div style="flex: 1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView.vue",
  data() {
    return {
      title: '登录',
      is_login: true,
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const self = this;
      const formData = new FormData();
      formData.append("email", self.form.email);
      formData.append("password", self.form.password);
      if (self.form.email == "admin" && self.form.password == "admin") {
        this.$router.push('/home');
      }
      // self.$axios({
      //   method: 'post',
      //   url: '/Weblogin/login/',
      //   data: formData,
      // })
      //   .then(res => {
      //     switch (res.data.error) {
      //       case 0:
      //         // 前端保存用户信息
      //         this.$message.success("登录成功");
      //         this.$store.dispatch('saveUserInfo', {
      //           user: {
      //             'email': this.form.email,
      //             'userID': res.data.userID,
      //             'isAudit': res.data.isAudit
      //           }
      //         });
      //         console.log(res.data.userID)
      //         var curr = localStorage.getItem('preRoute');
      //         if (curr == null) {
      //           this.$router.push('/index');
      //         } else {
      //           this.$router.push({ path: curr });
      //         }
      //         break;
      //       case 3001:
      //         this.$message.error('表单验证失败！');
      //         break;
      //       case 4001:
      //         this.$message.warning('用户已登录！');
      //         this.$router.push('/seat');
      //         break;
      //       case 4002:
      //         this.$message.error('邮箱未注册！');
      //         break;
      //       case 4003:
      //         this.$message.error('密码错误！');
      //         break;
      //       case 4004:
      //         this.$message.error('用户未通过邮件确认，请及时确认！');
      //         break;
      //     }
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleCommand() {
      this.$router.push("/register");
    },
    handleToHome() {
      window.location.href = '/';
    },
    handleForget() {
      this.$router.push("/forget");
    }
  }
}
</script>

<style scoped>
.login {
  width: 100%;
  height: 800px;
  background: url("../../assets/background4.png") no-repeat;
  background-size: cover;
}

.title1 {
  background: rgba(255, 255, 255, 0);
  position: relative;
  top: 20px;
  font-size: 50px;
  font-weight: 2500;
  line-height: 80px;
  width: 200px;
  height: 150px;
  border-radius: 25px;
  display: inline-block;
  cursor: pointer;
}

.login-word {
  width: 80%;
  height: 28px;
  margin: 0 auto;
  border-bottom: 1px solid #ddd;
  margin-top: 50px;
  margin-bottom: 28px;
  text-align: center;
}

.login-word .word {
  height: 56px;
  line-height: 56px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 40px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  text-align: center;
}

.login-wrap {
  width: 350px;
  height: 250px;
  padding: 20px 25px 0 25px;
  line-height: 40px;
  position: relative;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  margin-top: 40px;
}

h3 {
  color: #0babeab8;
  font-size: 24px;
}

hr {
  background-color: #444;
  margin: 20px auto;
}

a {
  text-decoration: none;
  color: #aaa;
  font-size: 15px;
}

a:hover {
  color: coral;
}

.login-btn {
  margin-top: 25px;
  text-align: center;
}

.login-btn button {
  width: 100%;
  height: 38px;
}

.register-text {
  font-size: 14px;
  line-height: 10px;
  color: #999;
  cursor: pointer;
  float: right;
  padding-bottom: 100px;
}

.forget-text {
  font-size: 14px;
  line-height: 10px;
  color: #999;
  cursor: pointer;
  float: left;
}
</style>

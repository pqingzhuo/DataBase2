<template>
  <div class="register"  v-title data-title="注册">
    <div >
      <img class="title" src="../../assets/logowithoutback.png" @click="handleToHome"/>
    </div>
    <div class="register-word">
      <span class="word" style="font-size: 38px;">注册</span>
    </div>
    <div class="register-wrap">
      <div class="form">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input
                placeholder="用户名"
                type="username"
                v-model="ruleForm.username"
                autocomplete="off"
                maxlength="10"
                show-word-limit
                @keyup.enter.native="register('ruleForm')"
            ></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input
                placeholder="邮箱"
                type="email"
                v-model="ruleForm.email"
                autocomplete="off"
                @keyup.enter.native="register('ruleForm')"
            ></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input
                placeholder="密码"
                type="password"
                v-model="ruleForm.pass"
                autocomplete="off"
                @keyup.enter.native="register('ruleForm')"
            ></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input
                placeholder="确认密码"
                type="password"
                v-model="ruleForm.checkPass"
                autocomplete="off"
                @keyup.enter.native="register('ruleForm')"
            ></el-input>
          </el-form-item>
          <el-form-item class="register-btn">
            <el-button type="primary" @click="register('ruleForm')">注 册</el-button>
          </el-form-item>
        </el-form>
        <div class="login-text">
          <p @click="handleCommand">已有账号？直接登录</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.register-btn {
  margin-top: 25px;
  text-align: center;
}
.register-btn button{
  width:100%;
  height:38px;
}

.title{
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

.login-text {
  font-size:14px;
  line-height:10px;
  color:#999;
  cursor: pointer;
  float:right;
}

.register-word{
  width: 80%;
  height: 28px;
  margin: 0 auto;
  border-bottom: 1px solid #ddd;
  margin-top: 50px;
  margin-bottom: 28px;
  text-align: center;
}

.register-word .word{
  height: 56px;
  line-height: 56px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 40px;
  background: rgba(255,255,255,0.9);
  border-radius: 10px;
  text-align: center;
}

.register {
  width: 100%;
  height: 800px;
  background: url("../../assets/background4.png") no-repeat;
  background-size: cover;
  text-align: center;
}

.register-wrap {
  width: 350px;
  height: 350px;
  padding: 20px 25px 0 25px;
  line-height: 40px;
  position: relative;
  display: inline-block;
  background-color: rgba(255, 255, 255,0.8);
  border-radius: 10px;
  margin-top: 40px;
}
</style>

<script>
export default {
  name: "RegisterView",
  data() {
    var checkUsername = (rule, value, callback) => {
      const reg=/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;
      if (!value) {
        return callback(new Error('用户名不能为空'));
      } else if (!reg.test(value)) {
        callback(new Error('用户名由中英文、数字或下划线组成'))
      } else {
        callback();
      }
    };
    var checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('邮箱不能为空'));
      } else {
        var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if (!reg.test(value)) {
          callback(new Error('请输入有效的邮箱'));
        } else {
          callback();
        }
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        var reg_pwd=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,18}$/;
        if (!reg_pwd.test(value)) {
          callback(new Error('密码至少同时包含字母和数字，且长度为8-18'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: '',
        email: '',
        pass: '',
        checkPass: '',
      },
      rules: {
        username: [
          { validator: checkUsername, trigger: 'blur'}
        ],
        email: [
          { validator: checkEmail, trigger: 'blur'}
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    register: function (formName) {
      const self = this;
      const formData = new FormData();
      formData.append("username", self.ruleForm.username);
      formData.append("email", self.ruleForm.email);
      formData.append("password1", self.ruleForm.pass);
      formData.append("password2", self.ruleForm.checkPass);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          self.$axios({
            method: 'post',
            url: '/Weblogin/register/',
            data: formData,
          })
              .then(res => {
                console.log(res.data)
                switch (res.data.error) {
                  case 0:
                    this.$message.success('注册成功，请前往邮箱验证！');
                    this.$router.push("/login");
                    break;
                  case 3001:
                    this.$message.warning('请检查填写的内容！');
                    break;
                  case 4001:
                    this.$message.warning('用户名已注册！');
                    break;
                  case 4002:
                    this.$message.error('邮箱已注册或不可用！');
                    break;
                  case 4003:
                    this.$message.error('密码不符合规范！');
                    break;
                  case 4004:
                    this.$message.error('两次密码不一致！');
                    break;
                  case 4005:
                    this.$message.error('邮件验证发送失败，请检查邮箱是否填写正确！');
                    break;
                }
              })
              .catch(err => {
                console.log(err);
              })
        } else {
          console.log('提交失败!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleCommand() {
      this.$router.push("/login");
    },
    handleToHome() {
      window.location.href = '/';
    }
  }
}
</script>

<template>
  <div class="hello">
    <router-link to="/">
      <el-button>按钮</el-button>
    </router-link>
    <router-link to="/user">
      <el-button type="primary">change按钮</el-button>
    </router-link>
    <el-input v-model="input" placeholder="请输入内容">lll</el-input>
    <el-select v-model="value2" placeholder="目标表">
          <el-option
          v-for="item in optionOfTable"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          </el-option>
      </el-select>
      <el-button @click="change()" type="primary">change按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    change() {
      this.$router.push('/user')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

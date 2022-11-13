<template>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <div style="display: flex;color: #fff;">
            <div style="flex: 1"></div>
            <h3>图书馆系统</h3>
            <div style="flex: 1"></div>
        </div>
      <el-menu-item index="1" @click="click(1)">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="2" @click="click(2)">
        <i class="el-icon-reading"></i>
        <span slot="title">借阅</span>
      </el-menu-item>
      <el-menu-item index="3" @click="click(3)">
        <i class="el-icon-location-outline"></i>
        <span slot="title">座位</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
import seatHomeVue from '@/views/seat/seatHome.vue';
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      click(index){
        console.log(index);
        if(index==1) {
          this.$router.push('/home')
        } else if(index==2) {
          this.$router.push('/home')
        } else if(index==3) {
          seatHomeVue.methods.refresh();
          this.$router.push('/home/seatHome')
        } 
      }
    }
  }
</script>

<style>
.el-menu-vertical-demo{
  height: 100vh;
  border: 0;
}
</style>
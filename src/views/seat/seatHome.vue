<!-- 整体的框架 -->
<template>
    <div>
        <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal" text-color="#fff"
            active-text-color="rgb(120, 124, 147)" @select="handleSelect">
            <el-menu-item index=1>座位预览</el-menu-item>
            <el-menu-item index=2>座位信息</el-menu-item>
            <el-button type="info" style="margin: 1%;float: right;" @click="refresh()">刷新<i class="el-icon-refresh"></i></el-button>
        </el-menu>
        <div v-if="isO === true">
            <occupyVue></occupyVue>
        </div>
        <div v-if="isO === false">
            <totalVue></totalVue>
        </div>
    </div>
</template>

<script>
import router from '@/router';
import occupyVue from './occupy.vue';
import totalVue from './total.vue';
export default {
    name: "seatHome",
    data() {
        return {
            isO: false
        }
    },
    components: {
        router,
        occupyVue,
        totalVue
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, this.isO);
            if (key == 1) {
                this.isO = false;
                this.refresh();
            } else {
                this.isO = true
            }
        },
        refresh(){
            totalVue.methods.update();
        }
    }
}
</script>

<style scoped>
html,
body {
    margin: 0;
    padding: 0;
}

.el-menu-demo {
    background-color: rgb(23, 11, 36);

}
</style>

<!-- 整体的框架 -->

<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <CommonAside></CommonAside>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue';
import router from '@/router';

export default {
    name: "Home",
    data() {

    },
    components: {
        router,
        CommonAside
    }
}
</script>

<style>
html,
body {
    margin: 0;
    padding: 0;
}
.el-main{
    margin: 0;
    padding: 0;
}
</style>

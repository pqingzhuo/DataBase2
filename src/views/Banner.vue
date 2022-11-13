<!-- 首屏banner -->

<template>
    <div class="banner" id="banner">
        <img src="../assets/logowithoutback.png" width="250">
        <div style="margin-top: 6%;">
            <div style="display: flex">
                <div style="flex: 1"></div>
                <div>
                    <div style="background-color:rgba(255, 255, 255, 0.8);border-radius: 10px;padding: 10px 30px 10px 30px;text-align: center;">
                        <div>
                            <div class="typer white" style="color:black;font-size: 50px;margin: 10px;">
                                图书管理系统
                            </div>
                            <router-link :to="{ path: '/login' }" class="around"><i class="el-icon-d-arrow-right"
                        style="color:black;font-size:40px;margin: 5%;"></i></router-link>
                        </div>
                    </div>
                </div>
                <div style="flex: 1"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Banner'
}
</script>

<style scoped>
.banner {
    height: 100vh;
    background: url("../assets/login_background.jpg");
    background-size: cover;
}
</style>

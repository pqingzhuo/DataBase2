<!-- 整体的框架 -->
<template>
    <div>
        <div style="margin-top: 3%;margin-left: 3%;">
            <el-row style="display: flex" class="row-bg" justify="space-around">
                <el-col style="flex: 0.5"></el-col>
                <el-col style="flex: 5">
                    <div>
                        <img src="../../assets/room1.jpeg" class="totalPic">
                        <!-- <div style="text-align: center;">
                            <div class="seatDisplay">5号阅览室</div>
                            <div class="seatDisplay">今日剩余{{ curNum5 }},总量{{ totalNum5 }}</div>
                        </div> -->
                        <div style="display: flex">
                            <span class="seatDisplay">1号阅览室</span>
                            <span class="seatDisplay">共有{{ totalNum1 }}</span>
                            <span class="seatDisplay">现有{{ curNum1 }}</span>
                        </div>
                    </div>
                </el-col>
                <el-col style="flex: 1"></el-col>
                <el-col style="flex: 5">
                    <div>
                        <img src="../../assets/room2.jpeg" class="totalPic">
                        <div style="text-align: center;">
                            <div class="seatDisplay">5号阅览室</div>
                            <div class="seatDisplay">今日剩余{{ curNum5 }},总量{{ totalNum5 }}</div>
                        </div>
                        <div style="display: flex">
                            <span class="seatDisplay">2号阅览室</span>
                            <span class="seatDisplay">共有{{ totalNum2 }}</span>
                            <span class="seatDisplay">现有{{ curNum2 }}</span>
                        </div>
                    </div>
                </el-col>
                <el-col style="flex: 1"></el-col>
                <el-col style="flex: 5">
                    <div>
                        <img src="../../assets/room3.jpg" class="totalPic">
                        <div style="text-align: center;">
                            <div class="seatDisplay">5号阅览室</div>
                            <div class="seatDisplay">今日剩余{{ curNum5 }},总量{{ totalNum5 }}</div>
                        </div>
                        <div style="display: flex">
                            <span class="seatDisplay">3号阅览室</span>
                            <span class="seatDisplay">共有{{ totalNum3 }}</span>
                            <span class="seatDisplay">现有{{ curNum3 }}</span>
                        </div>
                    </div>
                </el-col>
                <el-col style="flex: 1"></el-col>
            </el-row>
        </div>
        <div style="margin-top: 3%;margin-left: 3%;">
            <el-row type="flex" class="row-bg" justify="space-around">
                <el-col style="flex: 0.5"></el-col>
                <el-col style="flex: 5">
                    <div>
                        <img src="../../assets/room4.jpg" class="totalPic">
                        <div style="text-align: center;">
                            <div class="seatDisplay">5号阅览室</div>
                            <div class="seatDisplay">今日剩余{{ curNum5 }},总量{{ totalNum5 }}</div>
                        </div>
                        <div style="display: flex">
                            <span class="seatDisplay">4号阅览室</span>
                            <span class="seatDisplay">共有{{ totalNum4 }}</span>
                            <span class="seatDisplay">现有{{ curNum4 }}</span>
                        </div>
                    </div>
                </el-col>
                <el-col style="flex: 1"></el-col>
                <el-col style="flex: 5">
                    <div>
                        <img src="../../assets/room5.jpg" class="totalPic">
                        <div style="text-align: center;">
                            <div class="seatDisplay">5号阅览室</div>
                            <div class="seatDisplay">今日剩余{{ curNum5 }},总量{{ totalNum5 }}</div>
                        </div>
                    </div>
                </el-col>
                <el-col style="flex: 1"></el-col>
                <el-col style="flex: 5">
                    <div>
                        <img src="../../assets/room6.jpeg" class="totalPic">
                        <div style="text-align: center;">
                            <div class="seatDisplay">5号阅览室</div>
                            <div class="seatDisplay">今日剩余{{ curNum5 }},总量{{ totalNum5 }}</div>
                        </div>
                        <div style="display: flex">
                            <span class="seatDisplay">6号阅览室</span>
                            <span class="seatDisplay">共有{{ totalNum6 }}</span>
                            <span class="seatDisplay">现有{{ curNum6 }}</span>
                        </div>
                    </div>
                </el-col>
                <el-col style="flex: 1"></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'seat_total',
    data() {
        return {
            totalNum1: 100,
            curNum1: 50,
            totalNum2: 100,
            curNum2: 50,
            totalNum3: 100,
            curNum3: 50,
            totalNum4: 100,
            curNum4: 50,
            totalNum5: 100,
            curNum5: 50,
            totalNum6: 100,
            curNum6: 50
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        click(index) {
            console.log(index);
            if (index == 2) {
                this.$router.push('/home/occupy')
            }
        },
        update() {
            console.log("total update");
            axios({
                method: 'get',
                url: '/seat/total',
                data:this.index
            }).then(res => {
                this.curNum1 = res;
                this.curNum2 = res;
                this.curNum3 = res;
                this.curNum4 = res;
                this.curNum5 = res;
                this.curNum6 = res;
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>

<style>
.totalPic {
    width: 100%;
    height: 200px;
}
.seatDisplay{
    flex: 1;
    margin-top: 4%;
    font-size: x-large;
}
html,
body {
  margin: 0;
  padding: 0;
}
</style>
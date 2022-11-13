<!-- 整体的框架 -->
<template>
    <div>
        <div style="font-size: 25px;margin: 5%;">
            当前时间:
            <span>{{ nowTime.toLocaleString() }}</span>
        </div>
        <div v-if="occupied === false">
            <div >
                <el-input v-model="curSeatNo" placeholder="请输入座位号" style="width:40%;margin-left: 5%;"></el-input>
                <el-button type="info" style="margin-left: 5%;" @click="submitSeatNo()">上传<i class="el-icon-upload el-icon--right"></i></el-button>
            </div>
        </div>
        <div v-if="occupied === true" style="margin-left: 5%;">
            <div style="font-size: 25px;">
                当前座位号:
                <span>{{ this.curSeatNo }}</span>
            </div>
            <div style="margin-top: 5%;">
                <el-button @click="leave">暂时离开</el-button>
                <el-dialog title="暂时离开" :visible.sync="dialogVisible" width="30%" style="font-size: 10px;">
                    <div>请带好随身物品!!!</div>
                    <div>已离开时间:</div>
                    <div style="font-size: 20px;">{{ hours }}:{{ minutes }}:{{ seconds }}</div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="destroy()">已返回</el-button>
                    </span>
                </el-dialog>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'seat_occupy',
    data() {
        return {
            nowTime: "",
            curSeatNo: "",
            beginLeftTime: "",
            diffTime: "",
            isComeBack: false,
            activeIndex: '2',
            hours: "",
            minutes: "",
            seconds: "",
            dialogVisible: false,
            timer: null,
            occupied: false
        }
    },
    methods: {
        getTime() {
            this.timer = setInterval(() => {
                this.nowTime = new Date();
                this.diffTime = this.nowTime - this.beginLeftTime;
                // 计算出小时数
                var leave1 = this.diffTime % (24 * 3600 * 1000) // 计算天数后剩余的毫秒数
                this.hours = Math.floor(leave1 / (3600 * 1000))
                if (this.hours < 10) {
                    this.hours = '0' + this.hours
                }
                // 计算相差分钟数
                var leave2 = leave1 % (3600 * 1000) // 计算小时数后剩余的毫秒数
                this.minutes = Math.floor(leave2 / (60 * 1000))
                if (this.minutes < 10) {
                    this.minutes = '0' + this.minutes
                }
                // 计算相差秒数
                var leave3 = leave2 % (60 * 1000) // 计算分钟数后剩余的毫秒数
                this.seconds = Math.round(leave3 / 1000)
                if (this.seconds < 10) {
                    this.seconds = '0' + this.seconds
                }
            }, 1000)
        },
        leave() {
            this.dialogVisible = true;
            this.beginLeftTime = new Date();
            this.hours = "00";
            this.minutes = "00";
            this.seconds = "00";
        },
        click(index) {
            console.log(index);
            if (index == 1) {
                this.$router.push('/home/total')
            }
        },
        destroy() {
            this.dialogVisible = false;
            this.hours = "00";
            this.minutes = "00";
            this.seconds = "00";
        },
        submitSeatNo(){
            this.occupied = true;
            axios({
                method: 'post',
                url: '/seat/occupy',
                data:this.index
            }).then(res => {
                
            }).catch(err => {
                console.log(err);
            })
        }
    },
    created() {
        this.beginLeftTime = new Date();
        this.getTime();
        this.hours = "00";
        this.minutes = "00";
        this.seconds = "00";
    }
}
</script>
<style>
.time {
    font-size: x-large;
}

html,
body {
  margin: 0;
  padding: 0;
}
</style>
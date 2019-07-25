<template>
    <div id="Login">
        <div class="Login_box">
            <div class="Login_welcome">登录</div>
            <div class="Login_form">
                <el-input class="userName" placeholder="用户名" v-model="userName"></el-input>
                <el-input class="passWord" type="password"  placeholder="密码" v-model="userPass" @keyup.enter.native="Login"></el-input>
                <el-button  type="primary" class="Login_btn" @click="Login">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
// import config from '@/config.js';
//引入vuex
import { mapMutations, mapState } from 'vuex'
// import {get_Login } from '@/api/index';
import api from '../api/index'
export default {
    name: 'Login',
    props: [],
    data() {
        return {
            userName:'',
            userPass:'',
            checked:true
        }
    },
    computed: {

    },
    updated(){
        const _this = this;
        if(_this.userName && _this.userPass){
            $('.Login_btn').css({background:'#4FACFE'})
        }else {
            $('.Login_btn').css({background:'rgba(32,41,88,1)'})
        }
    },
    components: {},
    mounted() {},
    methods: {
        ...mapMutations([
            'setFLAGCODE',
            'setUserId'
        ]),
        Login () {
            let _this = this;
            let params = {
                username:this.userName,
                password:this.userPass
            };
                api.GetUserLoginRes(params).then(result=>{
                    console.log(result)
                    if(result.data.status===1){
                        let FLAGCODE = result.data.data.flagCode;
                        let userId = result.data.data.id;
                        // let res = result.data.data.firstLevels;
                        // let index = res.filter((item)=>(item.label!=='首页'&&item.children.length));
                        // console.log(index);
                        // _this.setBackMenu(res);
                        // _this.$store.commit('setBackMenu', index)
                        _this.$store.commit('setFLAGCODE', FLAGCODE)
                        _this.$store.commit('setUserId', userId)

                        _this.$router.push('/');
                    }else{
                        this.$message({type:'error',message:'用户名或密码错误'});
                    }
                });
        },
       //登录
       //  Login(){
       //
       //      if(this.userName && this.userPass){
       //
       //          if(this.userPass ==='123456' && (this.userName==='shenzhou'||this.userName==='jinghai'||this.userName==='dacheng'||this.userName==='guangyang'||this.userName==='guan')){
       //              let value = this.userName;
       //              switch (value) {
       //                  case 'dacheng':
       //                      this.$router.push({path:'/DaCheng'});
       //                      break;
       //                  case 'shenzhou':
       //                      this.$router.push({path:'/ShenZhou'});
       //                      break;
       //                  case 'jinghai':
       //                      this.$router.push({path:'/JingHai'});
       //                      break;
       //                  case 'guangyang':
       //                      window.open('http://117.119.97.150:6916/','_self')
       //                      break;
       //                  case 'guan':
       //                      window.open('http://117.119.97.150:6917/','_self')
       //                      break;
       //              }
       //          }else {
       //              this.$message.error('请检查输正确账户名密码！');
       //          }
       //      }else {
       //          this.$message.error('请输入完整账户名密码！');
       //      }
       //
       //
       //  },
    },
}
</script>

<style lang="scss" scope>
#Login {
    width: 100%;
    height: 100%;
    background: url("../../static/images/LoginIcon/bgImg.png") center no-repeat;
    background-size: cover;
    text-align: center;
    color: #000;
    .Login_box{
        width: 500px;
        // @include center();
        margin: 0 auto;
        padding-top: 200px;
        .Login_welcome{
            height:34px;
            font-size:36px;
            font-family:SourceHanSansCN-Regular;
            font-weight:400;
            color:rgba(221,221,221,1);
            line-height:49px;
            margin-bottom: 28px;
        }
        .Login_form{
            padding: 20px 60px;
            .userName{
                input{
                    background: rgba(32,41,88,1) url('../../static/images/LoginIcon/userName.png') 20px center no-repeat;
                    background-size: 18px;
                    padding-left: 59px;
                    width:350px;
                    height:47px;
                    /*opacity:0.3;*/
                    border-radius:24px;
                    font-size:18px;
                    border: none;
                    font-family:MicrosoftYaHei;
                    font-weight:400;
                    color:#fff;
                }
            }
            .passWord{
                margin-top: 14px;
                input{
                    background: rgba(32,41,88,1) url('../../static/images/LoginIcon/passWord.png') 20px center no-repeat;
                    background-size: 18px;
                    padding-left: 59px;
                    width:350px;
                    height:47px;
                    /*opacity:0.3;*/
                    border-radius:24px;
                    font-size:18px;
                    border: none;
                    font-family:MicrosoftYaHei;
                    font-weight:400;
                    color:#fff;
                }
            }
            .checked{
                text-align: left;
                margin-top: 30px;
            }
            .Login_btn{
                width: 100%;
                margin-top: 36px;
                font-size: 22px;
                width:350px;
                height:47px;
                background:rgba(32,41,88,1);
                /*opacity:0.3;*/
                border-radius:24px;
                border: none;
            }
        }
    }
}
</style>

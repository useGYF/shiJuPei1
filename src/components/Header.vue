<template>
    <div class="atmoheader">
        <div class="menus-left">
            <span>大数据平台</span>
        </div>
        <!-- <div class="menus-cont">
            <img src="../assets/img/tongzhi.png" alt="">
            <div class="winBox" v-if='marqueeshowG'>
                <marquee behavior="scroll" direction="left" loop="3" scrollamount="100" scrolldelay="1500"  width=150 hspace=20 vspace=20>
{{update.updateTime}}时，我区累计AQI为{{update.aqi}}，市区组倒排：截止{{update.updateDate}}，月倒排{{update.rank}}
                </marquee>
            </div>
			<div class="winBox" v-if='marqueeshowI'>
				<marquee  direction="left" width=200 >
				{{update.updateTime}}时，我区累计AQI为{{update.aqi}}，市区组倒排：截止{{update.updateDate}}，月倒排{{update.rank}}
                </marquee>
			</div>
        </div> -->
        <div class="menus-right">
            <div class="target-panel">
                <ul>
                    <li v-for="(v,i) in tabmenus" @click="liClick(v,i)"><span :style='"color:"+(i===isChoose ? "#11DA88" : "#fff")'>{{v.label}}</span><div :class='i===isChoose && "menu-checked"'></div></li>
                    <!-- <span class="exit" @click="toLogin">退出登录</span> -->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
 import api from '../api/index'
    export default {
        name: 'atmoheader',
        data() {
            return {
                marqueeshowG:true,
                marqueeshowI:false,
                update:{},
                isChoose:1,
                tabmenus:[
                    {
                        path:'/',
                        label:'实时监测'
                    },
                    // {
                    //     path:'/likewinter',
                    //     label:'挂图作战'
                    // },{
                    //     path:'/GridMap',
                    //     label:'网格预测'
                    // },
                    // {
                    //     path:'/BigDataSource/CityRankings',
                    //     label:'大数据资源'
                    // },
                    {
                        path:'/case',
                        label:'案件'
                    },
                    {
                        path:'/Login',
                        label:'退出登录'
                    }
                ]
            }
        },
        props: {
            isChoose: {
                type: Number,
                default: 1
            }
        },
        mounted() {
           this.judgmentBrowser();
            api.GetAreaQualityRankRes().then(res =>{
                console.log('test');
                console.log(res);
                this.update = res.data.Data;
            })
        },
        methods: {
            //菜单选择
            liClick(v,i){
                this.$router.push({path:v.path});
            },
            //判断浏览器
        	judgmentBrowser(){
			    var ua = navigator.userAgent;
				if(/chrome/i.test(ua)){
					this.marqueeshowG = true;
                	this.marqueeshowI = false;
				}else {
					this.marqueeshowG = false;
                	this.marqueeshowI = true;
				}
			},
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .atmoheader{
        width: 100%;
        height:86px;
        background:rgba(27,33,67,1);
        box-shadow:0px 1px 16px 2px rgba(27,33,67,0.8);
        .menus-left{
            float: left;
            width: 250px;
            height: 86px;
            line-height: 86px;
            background: url("../../static/images/Logo/Logo.png") 30px center no-repeat;
            span{
                font-size: 18px;
                font-family:MicrosoftYaHei;
                font-weight:400;
                color:rgba(255,255,255,1)
            }
        }
        .menus-cont{
            float: left;
            height: 86px;
            width: 200px;
            line-height: 86px;
            color: #fff;
            img{
                margin-top: 34px;
                float: left;
                line-height: 86px;
                width: 18px;
            }
            .winBox {
                display: inline-block;
                width:170px;
                height:86px;
                overflow:hidden;
                position:relative;
                float: left;
            }
            .scroll {
                /*width的大小是根据下面li的长度和多少个li而定的，需注意！*/
                width:800px;
                position:absolute;
                left:0px;
                top:0px;
            }
            .scroll li {
                width:170px;
                float:left;
                line-height:86px;
                text-align:center;
            }

        }
        .menus-right{
            float: right;
            width: 280px;
            height:86px;
            .target-panel{
                 .exit{
                        display: inline-block;
                        height: 34px;
                        line-height: 34px;
                        border-left: 1px solid rgba(255,255,255,0.4);
                        margin: 27px 30px 0 30px;
                        padding-left: 30px;
                        &:hover{
                            cursor: pointer;
                        }
                    }
                ul{
                    list-style:none;
                    margin:0;
                    padding:0;
                    background:#1B2143;
                    color:#fff;
                }
                li{
                    line-height:86px;
                    cursor: pointer;
                    float: left;
                    text-align: center;
                    font-weight:400;
                    font-size:16px;
                    margin-left: 30px;
                    /*width:80px;*/
                    position: relative;
                    .menu-checked{
                        position: absolute;
                        width:15px;
                        height:4px;
                        display: inline-block;
                        text-align: center;
                        background:#12DA88;
                        line-height:86px;
                        margin-top:80px;
                        bottom: 4px;
                        left: calc(50% - 8px);
                    }
                }
            }
        }
    }
</style>

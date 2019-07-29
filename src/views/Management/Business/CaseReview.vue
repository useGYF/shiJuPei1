<!--后台管理-案件处理-->
<template>
  <div class="CaseReview">
      <v-header :isChoose="1"></v-header>
    <!--------------案件处理右侧数据展示------>
    <div id="right">
      <!----------案件处理-->
      <div class="box">
        <div class="warning">
          <a>案件处理</a>
        </div>
      </div>
      <!-----------查询部分------->
      <div class="search">
        <!--<div class="searchBox">-->
          <!--<span>案件来源</span>-->
          <!--<el-select v-model="CaseOriginVal" @change="selectChangeOrigin" clearable placeholder="请选择">-->
            <!--<el-option-->
              <!--v-for="item in optionsCaseOrigin"-->
              <!--:key="item.value"-->
              <!--:label="item.label"-->
              <!--:value="item.value">-->
            <!--</el-option>-->
          <!--</el-select>-->
        <!--</div>-->
        <div class="searchBox">
          <span>处理状态</span>
          <el-select v-model="CaseStatusVal" @change="selectChangeStatus" clearable placeholder="请选择">
            <el-option
              v-for="item in optionsCase"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <!--<span>案件序号</span>-->
          <!--<el-input v-model='CaseCode' clearable placeholder="请输入内容"></el-input>-->
        </div>
        <div>
          <div style="margin-top: 10px;">
            <div class="searchBox">
              <span>责任部门</span>
              <el-select v-model="DutyMainVal" @change="selectChangeDuty" clearable placeholder="请选择">
                <el-option
                  v-for="item in optionsDuty"
                  :key="item.value"
                  :label="item.name"
                  :value="item.code">
                </el-option>
              </el-select>
            </div>
            <div class="searchBox">
              <span>污染类别</span>
              <el-select v-model="PollutionClassVal" @change="selectChangePollution" clearable placeholder="请选择">
                <el-option
                  v-for="item in optionsPollution"
                  :key="item.value"
                  :label="item.name"
                  :value="item.code">
                </el-option>
              </el-select>
            </div>
            <!-- <span>乡镇名称</span>
            <el-input v-model='cityName' clearable placeholder="请输入内容"></el-input> -->
          </div>
          <div class="block" style="margin-top: 10px;">
            <span class="demonstration">案件时间</span>
            <el-date-picker
              v-model="CaseStartTime"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期时间"
              @change='startChange'>
            </el-date-picker>
            -
            <el-date-picker
              v-model="CaseEndTime"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期时间"
              @change='endChange'>
            </el-date-picker>
            <el-button type="primary" class='btns' @click='GetMonitoringDay'>查询</el-button>
            <!-- <div class="InsertOrOut">
              <span>
                <el-button type="primary" @click="GetExportCase">Excel导出</el-button>
              </span>
            </div> -->
          </div>
        </div>
      </div>

      <!--------------列表部分---------->
      <div class="box">
        <div class="warning">
          <a>列表</a>
        </div>
      </div>
      <el-table
        :data="ListData"
        style="width: 92%;margin:0 auto">
        <!--<el-table-column-->
          <!--prop="casecode"-->
          <!--label="案件序号"-->
          <!--width="200">-->
        <!--</el-table-column>-->
        <el-table-column
          prop="pollutiontype"
          label="污染类别">
        </el-table-column>
        <el-table-column
          prop="type"
          label="处理状态">
        </el-table-column>
        <el-table-column
          prop="createtime"
          label="案发时间">
        </el-table-column>
        <el-table-column
          prop="location"
          label="位置">
        </el-table-column>
        <el-table-column
          prop="departmenttype"
          label="责任部门">
        </el-table-column>
        <el-table-column
          label="操作">
          <template scope="scope">
            <span v-if="scope.row.status==='未处理'&&dealStatus!=='已提交'">
              <el-button @click="handleExamineClick(scope.row)"
                         type="text" size="small" class='eidt'>分配
              </el-button>
            </span>
            <span v-else>
              <el-button @click="handleExamineClick(scope.row)" type="text" size="small" class='eidt'>查看</el-button>
            </span>
            <!--<span>-->
              <!--<el-button @click="deleteCase(scope.row)" type="text" size="small">删除</el-button>-->
            <!--</span>-->
          </template>
        </el-table-column>
      </el-table>
      <div class="page">
        <span class="demonstration">共找到{{totalCount}}条记录</span>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pagesize"
          layout="prev, pager, next, jumper"
          :total="totalCount">
        </el-pagination>
      </div>
      <!--------------审核弹框部分--------------->
      <div class="popUp" v-if="isUpdate">
        <div class="mask"></div>
        <div class="succ-pop reply">
          <div class="title">
            <a>案件详情</a>
            <div class="el-icon-close" @click="isUpdate=false"></div>
          </div>
          <div class="content">
            <div class="block" style="margin-right: 40px;">
              <span>污染类别</span>
              <el-input v-model="PollutionClassPop" placeholder="" disabled></el-input>
            </div>
            <div class="block">
              <span>序号</span>
              <el-input v-model="Order" placeholder="" disabled></el-input>
            </div>
            <div class="block">
              <span>位置</span>
              <el-input v-model="CasePositionPop" placeholder="" style='width:504px' disabled></el-input>
            </div>
            <div class="block" style="margin-right: 40px;">
              <span>案件状态</span>
              <el-input v-model="CaseStatusPop" placeholder="" disabled></el-input>
            </div>
            <div class="block">
              <span>责任部门</span>
              <el-input v-model="CaseDutyPop" placeholder="" disabled></el-input>
            </div>
            <div class="block" style="margin-bottom: 10px;">
              <span class="left">描述</span>
              <el-input
                type="textarea"
                :rows="3"
                placeholder=""
                v-model="textarea"
                disabled>
              </el-input>
            </div>
            <div class="special" style="margin-bottom: 20px;">
              <span>派发时间</span>
              <el-input v-model="DispatchTime" placeholder="" disabled></el-input>
            </div>
            <div>
              <div class="block imgBox left" style="margin:0;">
                <span class="left">案件照片</span>
                <el-carousel height="200px">
                  <el-carousel-item v-for="(item,index) in hjwfBusCaseattachList" :key="index">
                    <img :src="item.attachment"/>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="block imgBox left" style="margin:0;">
                <span class="left">案后照片</span>
                <el-carousel height="200px">
                  <el-carousel-item v-for="(item,index) in afterCaseImg" :key="index">
                    <img :src="item"/>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <div class="special">
              <span>审核</span>
              <el-button type="primary" plain @click="GetCaseAduit(0)">通过</el-button>
              <el-button type="primary" plain @click="GetCaseAduit(1)">不通过</el-button>
            </div>
            <!--<div class="block">
                            <span>处理结果</span>
                            <el-input v-model="CaseDealPop" placeholder="" style='width:504px'></el-input>
                          </div>
                        <el-row style='position: absolute;bottom: 30px;right: 30px;'>
                            <el-button type="primary" @click='GetEditResult'>发布</el-button>
                            <el-button plain @click='isUpdate=false'>取消</el-button>
                        </el-row>-->
          </div>
        </div>
      </div>
      <!--------------查看弹框部分--------------->
      <div class="popUp" v-if="Examine">
        <div class="mask"></div>
        <div class="succ-pop examine">
          <div class="title">
            <a>案件详情</a>
            <div class="el-icon-close" @click="Examine=false"></div>
          </div>
          <div class="content">
            <div class="block" style="margin-right: 40px;">
              <span>污染类别</span>
              <el-input v-model="PollutionClassPopExamine" placeholder="" disabled></el-input>
            </div>
            <!--<div class="block">-->
              <!--<span>案件序号</span>-->
              <!--<el-input v-model="CaseOrder" placeholder="" disabled></el-input>-->
            <!--</div>-->
            <div class="block">
              <span>位置</span>
              <el-input v-model="CasePositionPopExamine" placeholder="" style='width:504px' disabled></el-input>
            </div>
            <div class="block" style="margin-right: 40px;">
              <span>案件状态</span>
              <el-input v-model="CaseStatusPopExamine" placeholder="" disabled></el-input>
            </div>
            <div class="block">
              <span>责任部门</span>
              <el-input v-model="CaseDutyPopExamine" placeholder="" disabled></el-input>
            </div>
            <div class="block" style="margin-bottom: 5px;">
              <span class="left">内容</span>
              <el-input
                type="textarea"
                :rows="3"
                placeholder="请输入内容"
                v-model="textareaExamine"
                disabled>
              </el-input>
            </div>
            <div class="special" v-if="CaseStatusPopExamine=='未处理'||CaseStatusPopExamine=='待审核'">
              <span>指派</span>
              <el-select v-model="distributePopVal" placeholder="请选择" @change="selectFenPeiChangeDuty">
                <el-option
                  v-for="item in optionsDistributePop"
                  :key="item.value"
                  :label="item.name"
                  :value="item.code">
                </el-option>
              </el-select>
              <div style="display: inline-block;" v-if="CaseStatusPopExamine=='待审核'">
                <span>派发时间</span>
                <el-input v-model="DispatchTimePopExamine" placeholder="" disabled></el-input>
              </div>
            </div>
            <div class="special" v-if="CaseStatusPopExamine=='已指派'||CaseStatusPopExamine=='已结案'">

              <div style="display: inline-block;" v-if="CaseStatusPopExamine=='已结案'">
                <span>案发时间</span>
                <el-input v-model="CaseTimePopExamine" placeholder="" disabled></el-input>
              </div>
              <div style="display: inline-block;" v-if="CaseStatusPopExamine=='已结案'">
                <span>派发时间</span>
                <el-input v-model="DispatchTimePopExamine" placeholder="" disabled></el-input>
              </div>
              <div style="display: inline-block;" v-if="CaseStatusPopExamine=='已指派'">
                <span>派发时间</span>
                <el-input v-model="DispatchTimePopExamine" placeholder="" disabled></el-input>
              </div>
            </div>
            <div class="special" v-if="CaseStatusPopExamine=='已结案'">
              <span>结案时间</span>
              <el-input v-model="closeTime" placeholder="" disabled></el-input>
              <div style="display: inline-block;margin-left: 35px;">
                <span>案件用时</span>
                <el-input v-model="CaseTime" placeholder="" disabled></el-input>
              </div>
            </div>
            <div class="special" >
              <span>上报人</span>
              <el-input v-model="creater" placeholder="" disabled></el-input>
              <div style="display: inline-block;margin-left: 35px;">
                <span>乡镇名称</span>
                <el-input v-model="netname" placeholder="" disabled></el-input>
              </div>
            </div>
            <div class="block imgBox">
              <span>案件照片</span>
              <el-carousel height="200px">
                <el-carousel-item v-for="(item,index) in hjwfBusCaseattachList" :key="index">
                  <img v-if='item.attachment' :src="item.attachment"/>
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="block imgBox secSpan" v-if="CaseStatusPopExamine=='待审核'||CaseStatusPopExamine=='已结案'">
              <span>案后照片</span>
              <el-carousel height="200px">
                <el-carousel-item v-for="(item,index) in afterCaseImg" :key="index">
                  <img :src="item"/>
                </el-carousel-item>
              </el-carousel>
            </div>
            <el-row style='position: absolute;bottom: 10px;right: 55px;'>
              <el-button plain @click='GetEditCase'
                         v-if="CaseStatusPopExamine=='未处理'||CaseStatusPopExamine=='待审核'">确定
              </el-button>
              <!--<el-button plain @click='GetEditResult' v-if="CaseStatusPopExamine=='已处理'">确定</el-button>-->
              <el-button plain @click='Examine=false'>取消</el-button>
            </el-row>
          </div>
        </div>
      </div>
      <case-entry></case-entry>
    </div>
  </div>
</template>

<script>
  import {Message} from 'element-ui';
  import {mapMutations, mapState} from 'vuex'
  import caseEntry from './CaseEntry'
  import api from '@/api/index'

  export default {
    name: 'CaseReview',
    data() {
      return {
        //案件状态
        optionsCase: [
          {
            value: '-1',
            label: '全部'
          },
            {
                value: '1',
                label: '未处理'
              },
            {
                value: '2',
                label: '已指派'
            },
            // {
            //     value: '3',
            //     label: '待审核'
            // },
            {
                value: '4',
                label: '已结案'
            },
          ],
        //责任部门
        optionsDuty: [],
        //污染类别
        optionsPollution: [],
        //分配弹框责任部门选择
        optionsDistributePop: [],
        //县市区选择
        options: [],
        gridCode: '',
        value1: '',//县(市、区)
        value2: '',//开始时间
        value3: '',//结束时间
        value4: '',
        value5: '',
        value6: '',
        tableData: [],
        currentPage: 1,
        pagesize: 10,
        isConfirm: false,
        Upload: false,
        //查询
        startTime: '',
        endTime: '',
        TotalRowsCount: null,
        totalCount: 1,
        InfoData: [],
        ListData: [],
        Id: '',
        fileList: [],
        isEdit: false,
        SO2: '',
        NO2: '',
        PM10: '',
        CO: '',
        O3: '',
        PM25: '',
        pageNo: 1,
        //案件状态
        CaseStatusVal: '-1',
        //责任部门
        DutyMainVal: '',
        //污染类别
        PollutionClassVal: '',
        //案件时间
        CaseStartTime: '',
        CaseEndTime: '',
        //回复提交弹框
        isUpdate: false,
        PollutionClassPop: '',//污染类别
        CaseTimePop: '',//案发时间
        CasePositionPop: '',//位置
        CaseStatusPop: '',//案件状态
        CaseDutyPop: '',//责任部门
        textarea: '',//内容
        CaseDealPop: '',//处理结果
        //分配弹框
        isDistribute: false,
        distributePopVal: '',
        //查看
        Examine: false,
        PollutionClassPopExamine: '',//污染类别
        CaseTimePopExamine: '',//案发时间
        CasePositionPopExamine: '',//位置
        CaseStatusPopExamine: '',//案件状态
        CaseDutyPopExamine: '',//责任部门
        textareaExamine: '',//内容
        CaseDealPopExamine: '',//处理结果
        hjwfBusCaseattachList: [],
        status: '',
        departmenttype: '',
        pollutiontype: '',
        id: '',
        zrxtCode: '',
        afterCaseImg: '',
        imgUrl: '',
        origin: '',
        cityName: '',
        DispatchTimePopExamine: '',//派发时间
        closeTime: '',
        DispatchTime: '',//审核派发时间
        dealStatus: '',
        //案发原因选择
        optionsCaseReason: [{
          value: '1',
          label: '未开治理设备'
        }, {
          value: '2',
          label: '设备故障'
        }, {
          value: '3',
          label: '搬迁'
        }, {
          value: '4',
          label: '查封'
        }, {
          value: '5',
          label: '摄像头被遮挡'
        }, {
          value: '6',
          label: '未营业'
        }, {
          value: '7',
          label: '误报'
        }],
        isDistort:'',
        //案件录入
        optionsCompany: [], //企业
        CaseInParam: {
          creater: '',//上报人
          casecode: '',//案件序号
          netname: '',//乡镇名称
          createtime: '',//案发时间
          dispatchTime: '',//派发时间
          closeTime: '',//结案时间
          fkDepartmenttype: '',//责任主体
          fkPollutiontype: '',//污染类型
          description: '',//案前描述
          handlingResult: '',//案后描述
          location: '',//地址
        },
        imagelist: [],//案前照片
        pass: null,
        fileUrl: '',
        params: {
          //						action:
          //						'http://gkpt.zq12369.com:8013/servicePlatform/admin/caseData/uploadAnalysisFile',
          data: {}
        },
        imagelist1: [],//案后照片
        pass: null,
        fileUrl1: '',
        params1: {
          data: {}
        },
        CaseTime: '',//案件用时
        CaseOrder: '',//案件序号
        CaseCode: '',//案件序号查询
        creater: '',//上报人
        netname: '',//乡镇名称
      }
    },
    created() {
        this.getAllDepartmenttype();
        this.getPollutiontype();
        this.GetMonitoringDay();
    },
    mounted() {

    },
    components: {caseEntry},
    computed: {
        ...mapState([
            'FLAGCODE'
        ])
    },
    methods: {
      //案件审核结案
      GetEditResult() {
        let t = this;
        let id = this.id;
        let handlingResult = '';
        let afterPath = '';
        api.GetEditResult(id, handlingResult, afterPath).then(res => {
          // console.log(res)
          if (res.data.status > 0) {
            t.GetMonitoringDay();
            t.$message.success("处理成功")
            t.Examine = false;
          }

        })
      },
      //点击查看
      handleExamineClick(row) {
        this.Examine = true;
        this.distributePopVal = '';
        console.log(row);
        this.id = row.id;
        let casecode = row.casecode;
        this.PollutionClassPopExamine = row.pollutiontype;//污染类别
        this.CaseTimePopExamine = row.createtime;//案发时间
        this.CasePositionPopExamine = row.location;//位置
        this.CaseStatusPopExamine = row.status;//案件状态
        this.CaseDutyPopExamine = row.departmenttype;//责任部门
        this.textareaExamine = row.description;//内容
        this.CaseDealPopExamine = row.handlingResult;//处理结果
        this.hjwfBusCaseattachList = row.hjwfBusCaseattachList;
        this.afterCaseImg = row.afterCaseImg;
        this.DispatchTimePopExamine = row.dispatchTime;
        this.closeTime = row.closeTime;
        // this.CaseOrder = row.casecode;//案件序号
        this.CaseTime = row.casejlsj;//案件用时
        this.creater = row.sysUser.name;//上报人
        this.netname = row.netname;//乡镇名称
        this.isDistort = row.isDistort;//乡镇名称
        //console.log(this.hjwfBusCaseattachList)
      },
      //开始时间选择
      startChange(val) {
        this.startTime = val;
      },
      //结束时间选择
      endChange(val) {
        this.endTime = val;
      },
      //分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
//      		this.GetMonitoringDay(10,val);
      },
      handleCurrentChange(val) {
        this.pageNo = val;
        this.GetMonitoringDay();
      },
      //关闭分配提示
      closeWin() {
        this.isUpdate = false;
      },
      //案件状态选择
      selectChangeStatus(val) {
        this.status = val;
      },
      //案件来源选择
      selectChangeOrigin(val) {
        this.origin = val;
      },
      //责任部门选择
      selectChangeDuty(val) {
        this.departmenttype = val;
      },
      //分配责任部门选择
      selectFenPeiChangeDuty(val) {
        this.zrxtCode = val;
      },
      //污染类型选择
      selectChangePollution(val) {
        this.pollutiontype = val;
      },
       GetEditCase () {
            /*分配责任部门**/
            let params = {
                FLAGCODE:this.FLAGCODE,
                id :this.id,
                zrxtCode :this.zrxtCode,
            };
            try {
                api.get_editCaseZrzt (params).then(result=>{
                    if (result.data.status === 1) {
                        this.$message({type:'success',message:'分配成功'});
                        this.Examine = false;
                        this.GetMonitoringDay();
                    }
                });
            } catch (error) {
                console.log (error);
            }
        },
        async GetExportCase () {
            let params = {
                FLAGCODE:this.FLAGCODE,
                // userId :this.$cookies.get('auth'),
                status :this.CaseStatusVal ? this.CaseStatusVal : -1,
                // datasource :this.origin,//案件来源
                fkDepartmenttype: this.DutyMainVal ? this.DutyMainVal : -1,
                location: this.cityName,
                fkPollutiontype : this.PollutionClassVal ? this.PollutionClassVal : -1,
                startTime: this.CaseStartTime ? this.CaseStartTime : '',
                endTime :this.CaseEndTime ? this.CaseEndTime : '',
                pageSize : 10,
                pageNo : this.pageNo,
                casecode : this.CaseCode,
            };
            try {
                await get_export (params);
            } catch (error) {
                console.log (error);
            }
        },
      //分页数据
      setPageTable(pageSize, pageNum) {
        let i = 1;
        let rtValue = [];
        let startNum = pageSize * (pageNum - 1);
        for (let i = 0; i < pageSize; i++) {
          if ((startNum + i + 1) > this.ListData.length)
            break;
          rtValue.push(this.ListData[startNum + i]);
        }
        this.tableData = rtValue;
      },

      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      //获取县市区数据（下拉框）
      GetFirstGridDropDown() {
        let t = this;
        api.GetFirstGridDropDown().then(res => {
          t.options = res.data.Data;
        })
      },
      //将时间戳转化为时间格式
      Format(timestamp) {
        var time = new Date(timestamp);
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var day = time.getDate();
        if (month < 10) {
          month = "0" + month;
        }
        if (day < 10) {
          day = "0" + day;
        }
        return year + '-' + month + '-' + day;
      },
      //案件状态判断
      StatusDeal(val) {
        switch (val) {
          case 1:
            return '未处理'
            break;
          case 2:
            return '已指派'
            break;
          case 3:
            return '待审核'
            break;
          case 4:
            return '已结案'
            break;
          default:
            break;
        }
      },
      //选择信息来源
      selectChangedatasource(val) {
        this.CaseInParam.datasource = val;
      },
      //选择责任部门
      selectChangefkDepartmenttype(val) {
        this.CaseInParam.fkDepartmenttype = val;
      },
      //选择污染类别
      selectChangefkPollutiontype(val) {
        this.CaseInParam.fkPollutiontype = val;
      },
      //删除案件
      deleteCase(row){
        let id = row.id;
        this.$confirm('此操作将删除此条案件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          api.deletedHjwfBusCaseinfo(id).then(res=>{
            console.log(res);
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            this.GetMonitoringDay();
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
        getAllDepartmenttype () {
            /*责任部门**/
            let params = {
                FLAGCODE:this.FLAGCODE,
            }; 
            api.get_getAllDepartmenttype (params).then(result=>{
                // console.log (result);
                if (result.data.status === 1) {
                    this.optionsDuty = result.data.data;
                    this.optionsDistributePop = result.data.data;
                }
            });
        },
        getPollutiontype () {
            /*污染类别**/
            let params = {
                FLAGCODE:this.FLAGCODE,
            };
            try {
                api.get_getPollutiontype (params).then(result=>{
                    // console.log (result);
                    if (result.data.status === 1) {
                        this.optionsPollution = result.data.data;
                        // this.optionsDistributePop = result.data.data;
                    }
                });
                
            } catch (error) {
                console.log (error);
            }
        },
        GetMonitoringDay () {
            let params = {
                FLAGCODE:this.FLAGCODE,
                // userId :this.$cookies.get('auth'),
                status :this.CaseStatusVal ? this.CaseStatusVal : -1,
                // datasource :this.origin,//案件来源
                fkDepartmenttype: this.DutyMainVal ? this.DutyMainVal : -1,
                location: this.cityName,
                fkPollutiontype : this.PollutionClassVal ? this.PollutionClassVal : -1,
                startTime: this.CaseStartTime ? this.CaseStartTime : '',
                endTime :this.CaseEndTime ? this.CaseEndTime : '',
                pageSize : 10,
                pageNo : this.pageNo,
                casecode : this.CaseCode,
            };

            this.ListData = [];
            let deal;
            switch (this.CaseStatusVal) {
                case '0':
                    deal = '';
                    break;
                case '1':
                    deal = '未处理';
                    break;
                case '2':
                    deal = '已指派';
                    break;
                case '3':
                    deal = '待审核';
                    break;
                case '4':
                    deal = '已结案';
                    break;
                // case '4':
                //     deal = '已派发';
                //     break;
                // case '5':
                //     deal = '误报';
                //     break;
            }
            this.dealStatus = deal;
            this.pageNo = 1;
            api.get_selectHjwfBusCaseinfoPage (params).then(result=>{
                console.log (result);
                if (result.data.status === 1) {
                    let InfoData = result.data.data.rows;
                    this.totalCount = result.data.data.total;
                    if (InfoData) {
                        InfoData.forEach(item => {
                            let tableData = {};
                            tableData.casecode = item.casecode;//案件编码
                            tableData.createtime = item.createtime;//案发时间
                            tableData.description = item.description;//案件内容
                            tableData.departmenttype = item.departmenttype;//责任部门
                            tableData.location = item.location;//位置
                            tableData.pollutiontype = item.pollutiontype;//污染类型
                            tableData.status = this.StatusDeal(item.status);//处理状态
                            tableData.hjwfBusCaseattachList = item.hjwfBusCaseattachList;//图片
                            tableData.afterCaseImg = item.aftercaseimg ? item.aftercaseimg.split(',') : [];//安后图片
                            tableData.username = item.username;
                            tableData.id = item.id;
                            tableData.handlingResult = item.handlingResult;//处理结果
                            tableData.dispatchTime = item.dispatchTime;//派发时间
                            tableData.closeTime = item.closeTime;//结案时间
                            tableData.casecode = item.casecode;//案件序号
                            tableData.sysUser = item.sysUser;//上报人
                            tableData.netname = item.netname;//乡镇名称
                            tableData.isDistort = item.isDistort;//乡镇名称
                            tableData.type = deal||this.StatusDeal(item.status);
                            tableData.casejlsj = item.casejlsj ? item.casejlsj.replace(/\-/g, '') : '--';
                            this.ListData.push(tableData);
                        })
                    }
                }
            });
                
        },
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .el-input, .el-input__inner {
    width: 200px;
  }
  .el-select{
      width: 200px;
  }
.CaseReview{
    width: 100%;
    height: calc(100% - 86px);
    float: left;

    .examine,.reply{
        .el-input.is-disabled .el-input__inner,.el-textarea__inner{
            color: #000;
        }
    }
    .el-carousel{
        display: inline-block;
        width: 200px!important;
        margin: 0!important;
    }
    .el-carousel__arrow{
        top: 100px!important;
    }
    .el-carousel__indicators{
        display: none;
    }
    .el-carousel__item{
        width: 200px;
        height:200px;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        text-align: center;
        margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #fff!important;
    }
    .el-carousel__item:nth-child(2n+1) {
        background-color: #fff!important;
    }
}
  #right {
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: #f6fbff;
      color: #000;
      overflow-y: auto;
    .left {
      float: left;
    }
    .box {
      width: 92%;
      margin:0 auto;
      height: auto;
      .warning {
        text-align: left;
        border-bottom: solid 1px #ccc;
        width: 100%;
        height: 40px;
        margin-top: 10px;
        margin-bottom: 20px;
        margin-left: 10px;
        a {
          display: inline-block;
          height: 20px;
          border-left: solid 3px #428bca;
          padding-left: 13px;
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
    .search {
      width:92%;
      margin:24px auto;
      text-align: left;
      padding-left: 20px;
      .searchBox {
        display: inline-block;
      }
      .block {
        display: inline-block;
      }
      .btns {
        margin-left: 40px;
      }
      .InsertOrOut {
        display: inline-block;
        margin-left: 40px;
        span {
          a {
            color: #000000;
            font-size: 14px;
            margin-right: 40px;
          }
          :hover {
            cursor: pointer;
            color: #1797ff;
            text-decoration: underline;
          }
        }

      }
    }
    .page {
      text-align: left;
      width:92%;margin:0 auto
    }
    .el-pagination {
      display: inline-block;
      margin-left: 170px;
      padding-bottom: 90px;
    }
    /*************弹出框**********/

    ::-webkit-scrollbar {
      width: 1px;
      height: 16px;
      background-color: #F5F5F5;
    }
    .popUp {
      /*灰色遮罩层*/
      .mask {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        position: fixed;
        left: 0;
        top: 0;
        z-index: 998;
      }
      /*****回复弹出框内容********/
      .reply {
        width: 655px;
        height: 690px;
        background: #fff;
        position: fixed;
        left: 50%;
        top: 50%;
        margin-left: -327px;
        margin-top: -345px;
        z-index: 999;
        border-radius: 10px;
        .title {
          width: 100%;
          height: 40px;
          line-height: 40px;
          text-align: left;
          border-bottom: 2px solid #3a90b3;
          a {
            color: #3a90b3;
            font-size: 18px;
            padding-left: 20px;
          }
          div {
            margin-top: 15px;
            float: right;
            width: 24px;
            height: 24px;
            color: #363636;
            margin-right: 6px;
          }
        }
        .content {
          padding: 0 40px;
          text-align: right;
          .block {
            float: left;
            margin-top: 20px;
            span {
              display: inline-block;
              width: 60px;
              text-align: right;
            }
          }
          .special {
            text-align: left;
            span {
              margin-top: 20px;
              display: inline-block;
              width: 60px;
              text-align: right;
            }
            button {
              margin-left: 20px;
            }
          }
          .el-textarea {
            width: 506px;
          }
          .el-upload .el-upload--picture-card {
            width: 200px !important;
            height: 200px !important;

          }
        }

      }
      /*//分配弹框*/
      .distribute {
        width: 400px;
        height: 224px;
        margin-left: -200px;
        margin-top: -112px;
        background: #fff;
        position: fixed;
        left: 50%;
        top: 50%;
        z-index: 999;
        border-radius: 10px;
        .title {
          width: 100%;
          height: 50px;
          line-height: 50px;
          text-align: left;
          border-bottom: 2px solid #3a90b3;
          /*margin-bottom:26px;*/
          a {
            color: #3a90b3;
            font-size: 18px;
            padding-left: 20px;
          }
          div {
            margin-top: 10px;
            float: right;
            width: 24px;
            height: 24px;
            color: #363636;
            margin-right: 6px;
          }
        }
        .content {
          margin-left: 30px;
          margin-top: 10px;
        }
      }
      /*查看弹框*/
      .examine {
        width: 640px;
        height: 500px;
        background: #fff;
        position: fixed;
        left: 50%;
        top: 50%;
        margin-left: -320px;
        margin-top: -250px;
        z-index: 999;
        border-radius: 10px;
        .title {
          width: 100%;
          height: 40px;
          line-height: 40px;
          text-align: left;
          border-bottom: 2px solid #3a90b3;
          /*margin-bottom:26px;*/
          a {
            color: #3a90b3;
            font-size: 18px;
            padding-left: 20px;
          }
          div {
            margin-top: 15px;
            float: right;
            width: 24px;
            height: 24px;
            color: #363636;
            margin-right: 6px;
          }
        }
        .content {
          padding: 0 20px;
          text-align: right;
          height: 400px;
          overflow-y: scroll;
          .block {
            float: left;
            margin-top: 10px;
            span {
              display: inline-block;
              width: 60px;
              text-align: right;
            }
          }
          .special {
            text-align: left;
            margin-top: 5px;
            span {
              display: inline-block;
              width: 60px;
              text-align: right;
            }
          }
          .el-textarea {
            width: 506px !important;
          }
        }

      }
      .imgBox {
        img {
          width: 200px;
          height: 200px;
        }
        span {
          vertical-align: top;
        }

      }
      .secSpan {
        margin-left: 35px;
      }
    }
    .case_submit {
      text-align: right;
    }

  }
</style>

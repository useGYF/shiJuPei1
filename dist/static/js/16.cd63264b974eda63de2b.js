webpackJsonp([16],{1005:function(t,a,e){a=t.exports=e(845)(!1),a.push([t.i,"[data-v-4b091658]{box-sizing:border-box}.el-input[data-v-4b091658],.el-input__inner[data-v-4b091658]{width:200px}.edit-input[data-v-4b091658]{width:100px}#right[data-v-4b091658]{width:100%;overflow:hidden;padding:20px;background-color:#f6fbff}#right .tanchuan-box[data-v-4b091658]{width:100%;height:auto}#right .tanchuan-box .clodfg[data-v-4b091658]{width:100%;height:180px;margin-left:12px!important}#right .tanchuan-box .clodfg .img_float[data-v-4b091658]{width:200px;height:180px;float:left;margin:10px;border:1px solid #ccc;position:relative}#right .tanchuan-box .clodfg .img_float .fix_index[data-v-4b091658]{position:absolute;display:inline-block;width:60px;background:#ccc;box-shadow:0 0 10px #777;top:-5px;right:0}#right .tanchuan-box .clodfg .img_float img[data-v-4b091658]{width:100%;height:100%}#right .tanchuan-box .block[data-v-4b091658]{width:96%;margin-top:15px;margin-left:-20px}#right .tanchuan-box .block span[data-v-4b091658]{display:inline-block;width:100px;text-align:right}#right .tanchuan-box .block .el-textarea[data-v-4b091658]{width:200px}#right .left[data-v-4b091658]{float:left}#right .box[data-v-4b091658]{width:100%;height:auto}#right .box .warning[data-v-4b091658]{text-align:left;border-bottom:1px solid #ccc;width:100%;height:40px;margin-top:10px;margin-bottom:20px;margin-left:10px}#right .box .warning a[data-v-4b091658]{display:inline-block;height:20px;border-left:3px solid #428bca;padding-left:13px;font-size:16px;line-height:20px}#right .search[data-v-4b091658]{margin-left:20px;text-align:left;margin-bottom:24px}#right .search .searchBox[data-v-4b091658]{display:inline-block;margin-right:20px}#right .search .block[data-v-4b091658]{display:inline-block;width:100%}#right .search .block .el-select[data-v-4b091658]{margin-right:30px;margin-left:10px}#right .search .block .el-date-editor[data-v-4b091658]{width:514px;margin-left:10px;margin-right:20px}#right .search .block .el-input[data-v-4b091658]{margin-left:10px}#right .search .btns[data-v-4b091658]{margin-left:30px}#right .page[data-v-4b091658]{text-align:left}#right .el-pagination[data-v-4b091658]{display:inline-block;margin-left:170px;padding-bottom:90px}",""])},1059:function(t,a,e){var i=e(1005);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(846)("8918930e",i,!0,{})},1139:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"handling-cases"},[e("div",{attrs:{id:"right"}},[t._m(0),t._v(" "),e("div",{staticClass:"search"},[e("div",{staticClass:"block",staticStyle:{"margin-top":"20px"}},[e("span",{staticClass:"demonstration"},[t._v("案件来源")]),t._v(" "),e("el-select",{attrs:{placeholder:"请选择"},on:{change:t.AddSelectName1},model:{value:t.EventSourceVal,callback:function(a){t.EventSourceVal=a},expression:"EventSourceVal"}},t._l(t.EventSources,function(t){return e("el-option",{key:t.Code,attrs:{label:t.Name,value:t.Code}})})),t._v(" "),e("span",{staticClass:"demonstration"},[t._v("案件类型")]),t._v(" "),e("el-select",{attrs:{placeholder:"请选择"},on:{change:t.AddSelectName2},model:{value:t.EventTypeVal,callback:function(a){t.EventTypeVal=a},expression:"EventTypeVal"}},t._l(t.EventTypes,function(t){return e("el-option",{key:t.Code,attrs:{label:t.Name,value:t.Code}})})),t._v(" "),e("span",{staticClass:"demonstration"},[t._v("案件状态")]),t._v(" "),e("el-select",{attrs:{placeholder:"请选择"},on:{change:t.AddSelectName3},model:{value:t.EventStatusVal,callback:function(a){t.EventStatusVal=a},expression:"EventStatusVal"}},t._l(t.EventStatus,function(t){return e("el-option",{key:t.Code,attrs:{label:t.Name,value:t.Code}})}))],1),t._v(" "),e("div",{staticClass:"block",staticStyle:{"margin-top":"10px"}},[e("span",{staticClass:"demonstration"},[t._v("案发时间")]),t._v(" "),e("el-date-picker",{attrs:{type:"datetimerange","value-format":"yyyy-MM-dd HH:mm:ss","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:t.classTime},model:{value:t.TimeCase,callback:function(a){t.TimeCase=a},expression:"TimeCase"}}),t._v(" "),e("span",{staticClass:"demonstration"},[t._v("网格名称")]),t._v(" "),e("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.GridName,callback:function(a){t.GridName=a},expression:"GridName"}}),t._v(" "),e("el-button",{staticClass:"btns",attrs:{type:"primary"},on:{click:t.GetMonitoringDay}},[t._v("查询")]),t._v(" "),e("el-button",{staticClass:"btns",attrs:{type:"primary"},on:{click:t.ExportStarExcel}},[t._v("导出")])],1)]),t._v(" "),t._m(1),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.ListData,border:""}},[e("el-table-column",{attrs:{prop:"EventTypeName",label:"污染类型",width:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"GridName",label:"网格名称",width:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"RecordingTime",label:"案发时间","show-overflow-tooltip":!0}}),t._v(" "),e("el-table-column",{attrs:{prop:"EventSource",label:"案件来源",width:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"Author",label:"提交人"}}),t._v(" "),e("el-table-column",{attrs:{prop:"Description",label:"描述","show-overflow-tooltip":!0}}),t._v(" "),e("el-table-column",{attrs:{prop:"Location",label:"位置","show-overflow-tooltip":!0}}),t._v(" "),e("el-table-column",{attrs:{prop:"Status",label:"案件状态"}}),t._v(" "),e("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",[e("el-button",{staticClass:"eidt",attrs:{type:"text",size:"small"},on:{click:function(e){t.handleExamineClick(a.row)}}},[t._v("查看")])],1)]}}])})],1),t._v(" "),e("div",{staticClass:"page"},[e("span",{staticClass:"demonstration"},[t._v("共找到"+t._s(t.totalCount)+"条记录")]),t._v(" "),e("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-size":t.pageSize,layout:"prev, pager, next, jumper",total:t.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),e("el-dialog",{attrs:{title:"案件详情",visible:t.dialogVisible,width:"500px"},on:{"update:visible":function(a){t.dialogVisible=a}}},[e("div",{staticClass:"tanchuan-box"},[e("div",{staticClass:"block"},[e("span",[t._v("巡查员名称")]),t._v(" "),e("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.listalldata.GridMember,callback:function(a){t.$set(t.listalldata,"GridMember",a)},expression:"listalldata.GridMember"}})],1),t._v(" "),e("div",{staticClass:"block"},[e("span",[t._v("案件地址")]),t._v(" "),e("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.listalldata.Location,callback:function(a){t.$set(t.listalldata,"Location",a)},expression:"listalldata.Location"}})],1),t._v(" "),e("div",{staticClass:"block"},[e("span",[t._v("案件状态")]),t._v(" "),e("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.listalldata.EventStatus,callback:function(a){t.$set(t.listalldata,"EventStatus",a)},expression:"listalldata.EventStatus"}})],1),t._v(" "),e("div",{staticClass:"block"},[e("span",[t._v("描述")]),t._v(" "),e("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.listalldata.Description,callback:function(a){t.$set(t.listalldata,"Description",a)},expression:"listalldata.Description"}})],1),t._v(" "),e("div",{staticClass:"block"},[e("span",[t._v("作者")]),t._v(" "),e("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.listalldata.Author,callback:function(a){t.$set(t.listalldata,"Author",a)},expression:"listalldata.Author"}})],1),t._v(" "),e("div",{staticClass:"block clodfg"},[e("div",{staticClass:"img_float"},[e("span",{staticClass:"fix_index"},[t._v("案前照片")]),t._v(" "),e("img",{attrs:{src:t.listalldata.AQFileUrl[0],alt:"案前照片"},on:{click:function(a){t.submitImages(t.listalldata.AQFileUrl)}}})]),t._v(" "),e("div",{staticClass:"img_float"},[e("span",{staticClass:"fix_index"},[t._v("案后照片")]),t._v(" "),e("img",{attrs:{src:t.listalldata.AHFileUrl[0],alt:"案后照片"},on:{click:function(a){t.submitImages(t.listalldata.AHFileUrl)}}})])])])]),t._v(" "),e("el-dialog",{attrs:{title:"详情图片",visible:t.imgVisible,width:"800px"},on:{"update:visible":function(a){t.imgVisible=a}}},[e("el-carousel",{attrs:{interval:2e3,type:"card",height:"400px"}},t._l(t.imgdata,function(t,a){return e("el-carousel-item",{key:a},[e("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t}})])}))],1)],1)])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"box"},[e("div",{staticClass:"warning"},[e("a",[t._v("案件处理")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"box"},[e("div",{staticClass:"warning"},[e("a",[t._v("列表")])])])}]}},891:function(t,a,e){function i(t){e(1059)}var l=e(1)(e(954),e(1139),i,"data-v-4b091658",null);t.exports=l.exports},954:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(6);a.default={name:"handling-cases",data:function(){return{listalldata:{GridMember:"",Location:"",Description:"",Author:"",EventStatus:"",AQFileUrl:[],AHFileUrl:[]},tableData:[],currentPage:1,pageSize:10,totalCount:1,value4:"",InfoData:[],ListData:[],pageNo:1,imgdata:[],imgVisible:!1,dialogVisible:!1,Bonus:"",Deeds:"",Remarks:"",Reward:"",GridName:"",griderName:"",griderOptions:[],AddGriderName:"",AddGriderOptions:[],TimeCase:[],AddObj1:{},AddObj2:{},AddObj3:{},AddObj4:{},EventStatusVal:"全部",EventStatus:[],EventTypeVal:"全部",EventTypes:[],ResponsibleDepartVal:"全部",ResponsibleDeparts:[],EventSourceVal:"全部",EventSources:[]}},created:function(){},mounted:function(){this.GetMonitoringDay(),this.GetGridName()},computed:{},methods:{handleAdd:function(){this.Bonus="",this.Deeds="",this.Remarks="",this.AddGriderName="",this.dialogVisible=!0},handleClose:function(t){this.$confirm("确认关闭？").then(function(a){t()}).catch(function(t){})},handleExamineClick:function(t){var a=this;a.dialogVisible=!0,console.log(t);var e=t.Id;i.a.CgetCaseDetail(e).then(function(t){console.log(t.data);var e=t.data.Data,i={GridMember:e.GridMember,Location:e.Location,Description:e.Description,EventStatus:e.EventStatus,Author:e.Author,AQFileUrl:!0===e.AQFileUrl?e.AQFileUrl:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544595486556&di=83b00114dbfa7a49aed21a624874c42c&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2F6IdO9FACPfxWqe%3Dnm3PV7AtMPqca9y8rUBpB7QcWHlCQf1542102570606compressflag.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544595486553&di=f1d0c55b6b054c10f51d082c89de74e5&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F04d44f5584fc4e3eb2c5a782e69fa656.jpeg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544595486532&di=357bd60a13c942d7040617b33fb9a8a4&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fe41fead4e0fc06aa9ecbbb7cc5116fea.jpeg"],AHFileUrl:!0===e.AHFileUrl?e.AHFileUrl:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544595486564&di=57c14845c9773c3f9ed2a6bcda383558&imgtype=0&src=http%3A%2F%2Fp1.qhimgs4.com%2Ft01d526f368e104b6e9.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544595486538&di=8ad6e42978b905af38c4d9d77c9d2c1b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F268a0afcf3314738bd0abd25a2351391.jpeg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544595486526&di=5549d0c7cd484ea7e3b75dbc38bce467&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181203%2F26f25d899eb54ac4b1f8aa2d08478393.jpeg"]};a.listalldata=i})},classTime:function(t){console.log(this.TimeCase)},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.pageNo=t,this.GetMonitoringDay()},GetGridName:function(){var t=this;i.a.CgetEventSource().then(function(a){t.EventSources=a.data.Data}),i.a.CgetEventType().then(function(a){t.EventTypes=a.data.Data}),i.a.CgetResponsibleDepart().then(function(a){t.ResponsibleDeparts=a.data.Data}),i.a.CgetEventStatus().then(function(a){t.EventStatus=a.data.Data})},GetMonitoringDay:function(){var t=this,a=t.GridName||"",e=t.AddObj3.Code||0,l=t.AddObj2.Code||0,n=t.TimeCase[0],s=t.TimeCase[1],o=t.AddObj1.Code||0;t.ListData=[],i.a.CpostCaseList(n,s,o,l,e,a).then(function(a){if(console.log(a),a){var e=a.data.Data;t.totalCount=a.data.TotalRowsCount||e.length,e&&e.forEach(function(a){var e={};e.RecordingTime=a.RecordingTime.replace("T"," "),e.Author=a.Author,e.Description=a.Description,e.Id=a.Id,e.EventSource=a.EventSource,e.EventTypeName=a.EventTypeName,e.GridName=a.GridName,e.Location=a.Location,e.ConcentrationRecord=a.ConcentrationRecord,e.Status=a.Status,t.ListData.push(e)})}})},AddSelectName1:function(t){this.AddObj1={},this.AddObj1=this.EventSources.find(function(a){if(t===a.Code)return a})},AddSelectName2:function(t){this.AddObj2={},this.AddObj2=this.EventTypes.find(function(a){if(t===a.Code)return a})},AddSelectName3:function(t){this.AddObj3={},this.AddObj3=this.EventStatus.find(function(a){if(t===a.Code)return a})},AddSelectName4:function(t){this.AddObj4={},this.AddObj4=this.ResponsibleDeparts.find(function(a){if(t===a.Code)return a})},submitImages:function(t){var a=this;a.imgVisible=!0,a.imgdata=t},ExportStarExcel:function(){var t=this,a=t.GridName||"",e=t.AddObj3.Code||0,l=t.AddObj2.Code||0,n=t.TimeCase[0],s=t.TimeCase[1],o=t.AddObj1.Code||0;i.a.CgetExcelOutPut(n,s,o,l,e,a)},setPageTable:function(t,a){for(var e=[],i=t*(a-1),l=0;l<t&&!(i+l+1>this.ListData.length);l++)e.push(this.ListData[i+l]);this.tableData=e}}}}});
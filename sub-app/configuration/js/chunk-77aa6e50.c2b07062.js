(window["webpackJsonp_configuration"]=window["webpackJsonp_configuration"]||[]).push([["chunk-77aa6e50"],{"0a6f":function(t,e,a){t.exports=a.p+"img/img-hint.78cd274d.png"},"134d":function(t,e,a){},"2b98":function(t,e,a){"use strict";a.r(e);var s,o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"duty"},[a("box",[a("div",{staticClass:"search"},[a("div",{staticClass:"search-body"},[a("a-form-model",{ref:"searchForm",staticClass:"search-main",attrs:{layout:"inline",model:t.searchForm}},[a("a-form-model-item",{attrs:{label:"班组名称：",prop:"name"}},[a("a-input",{staticClass:"default-input",attrs:{placeholder:"请输入班组名称","allow-clear":""},model:{value:t.searchForm.name,callback:function(e){t.$set(t.searchForm,"name",e)},expression:"searchForm.name"}})],1),a("a-form-model-item",{attrs:{label:"值班领导：",prop:"lead"}},[a("a-select",{staticClass:"default-select",attrs:{"dropdown-class-name":"default-select-dropdown",placeholder:"请选择值班领导",getPopupContainer:function(t){return t.parentNode}},model:{value:t.searchForm.lead,callback:function(e){t.$set(t.searchForm,"lead",e)},expression:"searchForm.lead"}},[a("a-select-option",{attrs:{value:"jack"}},[t._v(" 张三 ")]),a("a-select-option",{attrs:{value:"lucy"}},[t._v(" 李四 ")])],1)],1),a("a-form-model-item",{attrs:{label:"开始时间：",prop:"startTime"}},[a("a-date-picker",{staticClass:"default-date-picker",attrs:{"show-time":"","dropdown-class-name":"default-date-picker-dropdown","get-calendar-container":function(t){return t.parentNode}},model:{value:t.searchForm.startTime,callback:function(e){t.$set(t.searchForm,"startTime",e)},expression:"searchForm.startTime"}})],1),a("a-form-model-item",{attrs:{label:"结束时间：",prop:"endTime"}},[a("a-date-picker",{staticClass:"default-date-picker",attrs:{"show-time":"","dropdown-class-name":"default-date-picker-dropdown","get-calendar-container":function(t){return t.parentNode}},model:{value:t.searchForm.endTime,callback:function(e){t.$set(t.searchForm,"endTime",e)},expression:"searchForm.endTime"}})],1)],1)],1)]),a("div",{staticClass:"operation-nav"},[a("div",{staticClass:"btn-box"},[a("a-button",{staticClass:"operation-button"},[a("span",{staticClass:"iconfont iconfont-14 icon-sousuo1"}),a("span",{staticClass:"btn-title"},[t._v("查询")])]),a("a-button",{staticClass:"operation-button",on:{click:t.toReset}},[a("span",{staticClass:"iconfont iconfont-18 icon-zhongzhi"}),a("span",{staticClass:"btn-title"},[t._v("重置")])]),a("a-button",{staticClass:"operation-button",on:{click:t.addMessage}},[a("span",{staticClass:"iconfont iconfont-16 icon-bianji2"}),a("span",{staticClass:"btn-title"},[t._v("新增")])]),a("a-button",{staticClass:"operation-button"},[a("span",{staticClass:"iconfont iconfont-14 icon-shanchu"}),a("span",{staticClass:"btn-title"},[t._v("批量删除")])])],1)]),a("div",{staticClass:"contents"},[a("a-table",{staticClass:"default-table",attrs:{columns:t.columns,"data-source":t.data,pagination:!1,"row-selection":t.rowSelection,scroll:{y:"calc(90vh - 15.7vw)"}},scopedSlots:t._u([{key:"type",fn:function(e,s){return a("div",{},[s.type?a("div",{staticClass:"enabled"},[a("div",{staticClass:"spot"}),a("div",{staticClass:"type-name"},[t._v("已启用")])]):a("div",{staticClass:"no-enabled"},[a("div",{staticClass:"spot"}),a("div",{staticClass:"type-name"},[t._v("未启用")])])])}}])},[a("div",{staticClass:"operation",attrs:{slot:"operation"},slot:"operation"},[a("div",{staticClass:"count",on:{click:function(e){return t.editMessage()}}},[a("span",{staticClass:"iconfont iconfont-18 icon-bianji"}),a("span",{staticClass:"title"},[t._v("编辑")])]),a("div",{staticClass:"count",on:{click:function(e){return t.getMessage()}}},[a("span",{staticClass:"iconfont iconfont-18 icon-yanjing"}),a("span",{staticClass:"title"},[t._v("查看")])]),a("div",{staticClass:"count",on:{click:function(e){return t.deleteMessage()}}},[a("span",{staticClass:"iconfont iconfont-16 icon-del"}),a("span",{staticClass:"title"},[t._v("删除")])])])])],1),a("div",{staticClass:"content-pagination"},[a("pagination",{ref:"pagination",attrs:{total:100},on:{change:t.onPaginationChange}})],1)]),a("editmodal",{attrs:{title:"新增信息",visible:t.addModal},on:{close:t.closeModal}}),a("editmodal",{attrs:{title:"编辑信息",visible:t.editModal},on:{close:t.closeModal}}),a("editmodal",{attrs:{title:"查看详情",visible:t.examineModal},on:{close:t.closeModal}}),a("deletemodal",{attrs:{visible:t.deleteModal},on:{close:t.closeModal}})],1)},i=[],n=a("6b12"),l=a("333d"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"edit-modal"},[s("modal",{attrs:{width:"44.58vw",height:"30.78vw",title:t.title,visible:t.visible},on:{close:function(e){return t.$emit("close")}}},[s("img",{staticClass:"img-edit",attrs:{slot:"modalBg",src:a("5e82"),alt:""},slot:"modalBg"}),s("a-form-model",{ref:"ruleForm",staticClass:"form-edit",attrs:{layout:"inline",model:t.form,rules:t.rules}},[s("a-form-model-item",{attrs:{label:"班组名称：",prop:"groupName"}},[s("a-select",{staticClass:"default-select",attrs:{"dropdown-class-name":"default-select-dropdown",placeholder:"请选择班组名称",disabled:t.isShow,getPopupContainer:function(t){return t.parentNode}}},[s("a-select-option",{attrs:{value:"1"}},[t._v(" 班组名称1 ")]),s("a-select-option",{attrs:{value:"2"}},[t._v(" 班组名称2 ")])],1)],1),s("a-form-model-item",{attrs:{label:"值班领导：",prop:"leader"}},[s("a-select",{staticClass:"default-select",attrs:{"dropdown-class-name":"default-select-dropdown",placeholder:"请选择值班领导",disabled:t.isShow,getPopupContainer:function(t){return t.parentNode}}},[s("a-select-option",{attrs:{value:"1"}},[t._v(" 张三 ")]),s("a-select-option",{attrs:{value:"2"}},[t._v(" 李四 ")])],1)],1),s("a-form-model-item",{attrs:{label:"联系方式：",prop:"phone"}},[s("a-select",{staticClass:"default-select",attrs:{"dropdown-class-name":"default-select-dropdown",placeholder:"请选择联系方式",disabled:t.isShow,getPopupContainer:function(t){return t.parentNode}}},[s("a-select-option",{attrs:{value:"1"}},[t._v(" 15698745629 ")]),s("a-select-option",{attrs:{value:"2"}},[t._v(" 15698745629 ")])],1)],1),s("a-form-model-item",{attrs:{label:"值班人员：",prop:"operator"}},[s("a-select",{staticClass:"default-select",attrs:{"dropdown-class-name":"default-select-dropdown",placeholder:"请选择值班人员",disabled:t.isShow,getPopupContainer:function(t){return t.parentNode}}},[s("a-select-option",{attrs:{value:"1"}},[t._v(" 人员1，人员2 ")]),s("a-select-option",{attrs:{value:"2"}},[t._v(" 人员1，人员2 ")])],1)],1),s("a-form-model-item",{attrs:{label:"开始日期：",prop:"startTime"}},[s("a-date-picker",{staticClass:"default-date-picker",attrs:{"show-time":"","dropdown-class-name":"default-date-picker-dropdown",disabled:t.isShow,"get-calendar-container":function(t){return t.parentNode}}})],1),s("a-form-model-item",{attrs:{label:"结束日期：",prop:"endTime"}},[s("a-date-picker",{staticClass:"default-date-picker",attrs:{"show-time":"","dropdown-class-name":"default-date-picker-dropdown",disabled:t.isShow,"get-calendar-container":function(t){return t.parentNode}}})],1),s("a-form-model-item",{attrs:{label:"备注"}},[s("a-textarea",{staticClass:"default-textarea",attrs:{placeholder:"请填写",disabled:t.isShow}})],1)],1),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],staticClass:"line"}),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],staticClass:"operation-btn"},[s("a-button",{staticClass:"form-button",attrs:{type:"default"},on:{click:function(e){return t.$emit("close")}}},[t._v("取消")]),s("a-button",{staticClass:"form-button save-button",attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")])],1)],1)],1)},d=[],c=a("ade3"),u=a("cb15"),p=(s={data:function(){return{open:!1,open2:!1}},components:{Modal:u["a"]},props:{visible:{type:Boolean,default:!1},title:{type:String,default:""}}},Object(c["a"])(s,"data",(function(){return{form:{groupName:"",leader:"",operator:"",startTime:"",endTime:""},rules:{groupName:[{required:!0,message:"请选择班组名称！",trigger:"blur"}],rank:[{required:!0,message:"请选择值班领导！",trigger:"blur"}],phone:[{required:!0,message:"请选择联系方式！",trigger:"blur"}],leader:[{required:!0,message:"请选择值班领导！",trigger:"blur"}],operator:[{required:!0,message:"请选择值班人员！",trigger:"blur"}],startTime:[{required:!0,message:"请选择开始时间！",trigger:"blur"}],endTime:[{required:!0,message:"请选择结束时间！",trigger:"blur"}]},isShow:"查看详情"==this.title}})),Object(c["a"])(s,"methods",{save:function(){console.log(this.form),this.$refs.ruleForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;alert("submit!")}))},handleOpenChange:function(t){console.log("open",t),this.open=t},handleClose:function(){this.open=!1,this.open2=!1}}),s),m=p,f=a("2877"),h=Object(f["a"])(m,r,d,!1,null,null,null),v=h.exports,g=a("d028"),b={components:{Box:n["a"],Pagination:l["a"],editmodal:v,deletemodal:g["a"]},data:function(){return{pageSize:10,page:1,searchForm:{name:"",lead:void 0,startTime:null,endTime:null},columns:[{title:"班组名称",dataIndex:"name",key:"name",width:"7vw"},{title:"值班领导",dataIndex:"lead",key:"lead",width:"5vw"},{title:"联系方式",dataIndex:"phone",key:"phone",width:"8vw"},{title:"值班人员",dataIndex:"person",key:"person",width:"7vw"},{title:"开始日期",dataIndex:"startDate",key:"startDate",width:"9vw"},{title:"结束日期",dataIndex:"endDate",key:"endDate",width:"9vw"},{title:"开始时间",dataIndex:"startTime",key:"startTime",width:"7vw"},{title:"结束时间",dataIndex:"endTime",key:"endTime",width:"7vw"},{title:"操作",dataIndex:"operation",key:"operation",width:"13vw",scopedSlots:{customRender:"operation"}}],data:[],selectedRowKeys:[],addModal:!1,editModal:!1,examineModal:!1,deleteModal:!1}},computed:{rowSelection:function(){var t=this.selectedRowKeys;return{selectedRowKeys:t,onChange:this.onSelectChange,hideDefaultSelections:!0}}},mounted:function(){this.$refs.pagination.setData(this.page,this.pageSize),this.setList()},methods:{setList:function(){for(var t=[],e=0;e<this.pageSize;e++){var a={key:e,name:"班组名称".concat(e),lead:"张三",phone:"18356545698",person:"王五，李四",startDate:"2021-05-08",endDate:"2021-05-08",startTime:"10:46:20",endTime:"16:46:20"};t.push(a)}this.data=t},toReset:function(){this.$refs.searchForm.resetFields()},onSelectChange:function(t){console.log("selectedRowKeys changed: ",t),this.selectedRowKeys=t},closeModal:function(){this.addModal=!1,this.editModal=!1,this.examineModal=!1,this.deleteModal=!1},addMessage:function(){this.addModal=!0},editMessage:function(){this.editModal=!0},getMessage:function(){this.examineModal=!0},deleteMessage:function(){this.deleteModal=!0},onPaginationChange:function(t,e){console.log(t,e),this.pageSize=e,this.setList()}}},w=b,C=(a("6344"),Object(f["a"])(w,o,i,!1,null,null,null));e["default"]=C.exports},"5e82":function(t,e,a){t.exports=a.p+"img/img-edit2.ceaef14d.png"},6344:function(t,e,a){"use strict";var s=a("134d"),o=a.n(s);o.a},6354:function(t,e,a){"use strict";var s=a("a88a"),o=a.n(s);o.a},a88a:function(t,e,a){},d028:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"delete-modal"},[s("modal",{attrs:{width:"30.89vw",height:"15.05vw",title:"提示",visible:t.visible},on:{close:function(e){return t.$emit("close")}}},[s("img",{staticClass:"img-delete",attrs:{slot:"modalBg",src:a("0a6f"),alt:""},slot:"modalBg"}),s("div",{staticClass:"title-box"},[s("span",{staticClass:"iconfont icon-tishi warning-icon"}),s("span",{staticClass:"confirm"},[t._v("确认删除?")])]),s("div",{staticClass:"operation-btn"},[s("a-button",{staticClass:"form-button",attrs:{type:"default"},on:{click:function(e){return t.$emit("close")}}},[t._v("取消")]),s("a-button",{staticClass:"form-button confirm-button",attrs:{type:"primary"}},[t._v("确定")])],1)])],1)},o=[],i=a("cb15"),n={components:{Modal:i["a"]},props:{visible:{type:Boolean,default:!1}},methods:{}},l=n,r=(a("6354"),a("2877")),d=Object(r["a"])(l,s,o,!1,null,null,null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-77aa6e50.c2b07062.js.map
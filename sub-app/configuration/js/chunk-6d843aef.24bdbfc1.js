(window["webpackJsonp_configuration"]=window["webpackJsonp_configuration"]||[]).push([["chunk-6d843aef"],{"0a6f":function(t,e,a){t.exports=a.p+"img/img-hint.78cd274d.png"},"5e82":function(t,e,a){t.exports=a.p+"img/img-edit2.ceaef14d.png"},6354:function(t,e,a){"use strict";var s=a("a88a"),o=a.n(s);o.a},"7cd3":function(t,e,a){"use strict";var s=a("de8b"),o=a.n(s);o.a},a745:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"security-task"},[a("box",[a("div",{staticClass:"search"},[a("div",{staticClass:"search-body"},[a("a-form-model",{ref:"searchForm",staticClass:"search-main",attrs:{layout:"inline",model:t.searchForm}},[a("a-form-model-item",{attrs:{label:"任务名称：",prop:"name"}},[a("a-input",{staticClass:"default-input",attrs:{placeholder:"请输入任务名称","allow-clear":""},model:{value:t.searchForm.name,callback:function(e){t.$set(t.searchForm,"name",e)},expression:"searchForm.name"}})],1),a("a-form-model-item",{attrs:{label:"任务类型：",prop:"type"}},[a("a-input",{staticClass:"default-input",attrs:{placeholder:"请输入任务类型","allow-clear":""},model:{value:t.searchForm.type,callback:function(e){t.$set(t.searchForm,"type",e)},expression:"searchForm.type"}})],1),a("a-form-model-item",{attrs:{label:"签收状态：",prop:"signType"}},[a("a-select",{staticClass:"default-select",attrs:{"dropdown-class-name":"default-select-dropdown",placeholder:"请选签收状态",getPopupContainer:function(t){return t.parentNode}},model:{value:t.searchForm.signType,callback:function(e){t.$set(t.searchForm,"signType",e)},expression:"searchForm.signType"}},[a("a-select-option",{attrs:{value:"all"}},[t._v(" 全部 ")]),a("a-select-option",{attrs:{value:"1"}},[t._v(" 已签收 ")]),a("a-select-option",{attrs:{value:"2"}},[t._v(" 未签收 ")])],1)],1),a("a-form-model-item",{attrs:{label:"开始时间：",prop:"startTime"}},[a("a-date-picker",{staticClass:"default-date-picker",attrs:{"show-time":"","dropdown-class-name":"default-date-picker-dropdown","get-calendar-container":function(t){return t.parentNode}},model:{value:t.searchForm.startTime,callback:function(e){t.$set(t.searchForm,"startTime",e)},expression:"searchForm.startTime"}})],1),a("a-form-model-item",{attrs:{label:"结束时间：",prop:"endTime"}},[a("a-date-picker",{staticClass:"default-date-picker",attrs:{"show-time":"","dropdown-class-name":"default-date-picker-dropdown","get-calendar-container":function(t){return t.parentNode}},model:{value:t.searchForm.endTime,callback:function(e){t.$set(t.searchForm,"endTime",e)},expression:"searchForm.endTime"}})],1)],1)],1)]),a("div",{staticClass:"operation-nav"},[a("div",{staticClass:"btn-box"},[a("a-button",{staticClass:"operation-button"},[a("span",{staticClass:"iconfont iconfont-14 icon-sousuo1"}),a("span",{staticClass:"btn-title"},[t._v("查询")])]),a("a-button",{staticClass:"operation-button",on:{click:t.toReset}},[a("span",{staticClass:"iconfont iconfont-18 icon-zhongzhi"}),a("span",{staticClass:"btn-title"},[t._v("重置")])]),a("a-button",{staticClass:"operation-button"},[a("span",{staticClass:"iconfont iconfont-16 icon-qianshou"}),a("span",{staticClass:"btn-title"},[t._v("批量签收")])]),a("a-button",{staticClass:"operation-button"},[a("span",{staticClass:"iconfont iconfont-14 icon-shanchu"}),a("span",{staticClass:"btn-title"},[t._v("批量删除")])])],1)]),a("div",{staticClass:"contents"},[a("a-table",{staticClass:"default-table",attrs:{columns:t.columns,"data-source":t.data,pagination:!1,"row-selection":t.rowSelection,scroll:{y:"calc(90vh - 18.5vw)"}},scopedSlots:t._u([{key:"signType",fn:function(e,s){return a("div",{},[s.signType?a("div",{staticClass:"sign"},[t._v(" 已签收 ")]):a("div",{staticClass:"no-sign"},[t._v(" 未签收 ")])])}},{key:"operation",fn:function(e,s){return a("div",{staticClass:"operation"},[a("div",{class:{"count is-sign":s.signType,count:!s.signType}},[a("span",{staticClass:"iconfont iconfont-16 icon-qianshou"}),a("span",[t._v("签收")])]),a("div",{staticClass:"count",on:{click:function(e){return t.getMessage()}}},[a("span",{staticClass:"iconfont iconfont-18 icon-yanjing"}),a("span",{staticClass:"title"},[t._v("查看")])]),a("div",{staticClass:"count",on:{click:function(e){return t.deleteMessage()}}},[a("span",{staticClass:"iconfont iconfont-16 icon-del"}),a("span",{staticClass:"title"},[t._v("删除")])])])}}])})],1),a("div",{staticClass:"content-pagination"},[a("pagination",{ref:"pagination",attrs:{total:100},on:{change:t.onPaginationChange}})],1)]),a("editmodal",{attrs:{title:"编辑信息",visible:t.editModal},on:{close:t.closeModal}}),a("editmodal",{attrs:{title:"查看详情",visible:t.examineModal},on:{close:t.closeModal}}),a("deletemodal",{attrs:{visible:t.deleteModal},on:{close:t.closeModal}})],1)},o=[],n=a("6b12"),i=a("333d"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"edit-modal"},[s("modal",{attrs:{width:"44.58vw",height:"30.78vw",title:t.title,visible:t.visible},on:{close:function(e){return t.$emit("close")}}},[s("img",{staticClass:"img-edit",attrs:{slot:"modalBg",src:a("5e82"),alt:""},slot:"modalBg"}),s("a-form-model",{staticClass:"form-edit",attrs:{layout:"inline"}},[s("a-form-model-item",{attrs:{label:"任务名称："}},[s("a-input",{staticClass:"default-input",attrs:{placeholder:"请输入任务名称",disabled:t.isShow}})],1),s("a-form-model-item",{attrs:{label:"任务类型："}},[s("a-select",{staticClass:"default-select",attrs:{"dropdown-class-name":"default-select-dropdown",placeholder:"请选择任务类型",disabled:t.isShow,getPopupContainer:function(t){return t.parentNode}}},[s("a-select-option",{attrs:{value:"1"}},[t._v(" 任务类型1 ")]),s("a-select-option",{attrs:{value:"2"}},[t._v(" 任务类型2 ")])],1)],1),s("a-form-model-item",{attrs:{label:"任务等级："}},[s("a-select",{staticClass:"default-select",attrs:{"dropdown-class-name":"default-select-dropdown",placeholder:"请选择任务等级",disabled:t.isShow,getPopupContainer:function(t){return t.parentNode}}},[s("a-select-option",{attrs:{value:"1"}},[t._v(" 任务等级1 ")]),s("a-select-option",{attrs:{value:"2"}},[t._v(" 任务等级2 ")])],1)],1),s("a-form-model-item",{attrs:{label:"签收状态："}},[s("a-select",{staticClass:"default-select",attrs:{"dropdown-class-name":"default-select-dropdown",placeholder:"请选择签收状态",disabled:t.isShow,getPopupContainer:function(t){return t.parentNode}}},[s("a-select-option",{attrs:{value:"1"}},[t._v(" 已签收 ")]),s("a-select-option",{attrs:{value:"2"}},[t._v(" 未签收 ")])],1)],1),s("a-form-model-item",{attrs:{label:"开始时间："}},[s("a-date-picker",{staticClass:"default-date-picker",attrs:{"show-time":"","dropdown-class-name":"default-date-picker-dropdown",disabled:t.isShow,"get-calendar-container":function(t){return t.parentNode}}})],1),s("a-form-model-item",{attrs:{label:"结束时间："}},[s("a-date-picker",{staticClass:"default-date-picker",attrs:{"show-time":"","dropdown-class-name":"default-date-picker-dropdown",disabled:t.isShow,"get-calendar-container":function(t){return t.parentNode}}})],1)],1),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],staticClass:"line"}),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],staticClass:"operation-btn"},[s("a-button",{staticClass:"form-button",attrs:{type:"default"},on:{click:function(e){return t.$emit("close")}}},[t._v("取消")]),s("a-button",{staticClass:"form-button save-button",attrs:{type:"primary"}},[t._v("保存")])],1)],1)],1)},c=[],r=a("cb15"),d={components:{Modal:r["a"]},props:{visible:{type:Boolean,default:!1},title:{type:String,default:""}},data:function(){return{isShow:"查看详情"==this.title}},methods:{}},p=d,u=a("2877"),m=Object(u["a"])(p,l,c,!1,null,null,null),f=m.exports,h=a("d028"),v={components:{Box:n["a"],Pagination:i["a"],editmodal:f,deletemodal:h["a"]},data:function(){return{pageSize:10,page:1,searchForm:{name:"",type:"",signType:void 0,startTime:null,endTime:null},columns:[{title:"任务名称",dataIndex:"name",key:"name",width:"8vw"},{title:"任务类型",dataIndex:"type",key:"type",width:"8vw"},{title:"任务等级",dataIndex:"grade",key:"grade",width:"8vw"},{title:"开始时间",dataIndex:"startTime",key:"startTime",width:"12vw"},{title:"结束时间",dataIndex:"endTime",key:"endTime",width:"12vw"},{title:"签收状态",dataIndex:"signType",key:"signType",width:"8vw",scopedSlots:{customRender:"signType"}},{title:"操作",dataIndex:"operation",key:"operation",width:"13vw",scopedSlots:{customRender:"operation"}}],data:[],selectedRowKeys:[],editModal:!1,examineModal:!1,deleteModal:!1}},computed:{rowSelection:function(){var t=this.selectedRowKeys;return{selectedRowKeys:t,onChange:this.onSelectChange,hideDefaultSelections:!0}}},mounted:function(){this.$refs.pagination.setData(this.page,this.pageSize),this.setList()},methods:{setList:function(){for(var t=[],e=0;e<this.pageSize;e++){var a={key:e,name:"安保任务".concat(e),type:"车辆黑名单",grade:"一级",signType:e%2==1,startTime:"2021-05-08 10:46:20",endTime:"2021-05-12 10:46:20"};t.push(a)}this.data=t},toReset:function(){this.$refs.searchForm.resetFields()},onSelectChange:function(t){console.log("selectedRowKeys changed: ",t),this.selectedRowKeys=t},closeModal:function(){this.addModal=!1,this.editModal=!1,this.examineModal=!1,this.deleteModal=!1},editMessage:function(){this.editModal=!0},getMessage:function(){this.examineModal=!0},deleteMessage:function(){this.deleteModal=!0},onPaginationChange:function(t,e){console.log(t,e),this.pageSize=e,this.setList()}}},g=v,w=(a("7cd3"),Object(u["a"])(g,s,o,!1,null,null,null));e["default"]=w.exports},a88a:function(t,e,a){},d028:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"delete-modal"},[s("modal",{attrs:{width:"30.89vw",height:"15.05vw",title:"提示",visible:t.visible},on:{close:function(e){return t.$emit("close")}}},[s("img",{staticClass:"img-delete",attrs:{slot:"modalBg",src:a("0a6f"),alt:""},slot:"modalBg"}),s("div",{staticClass:"title-box"},[s("span",{staticClass:"iconfont icon-tishi warning-icon"}),s("span",{staticClass:"confirm"},[t._v("确认删除?")])]),s("div",{staticClass:"operation-btn"},[s("a-button",{staticClass:"form-button",attrs:{type:"default"},on:{click:function(e){return t.$emit("close")}}},[t._v("取消")]),s("a-button",{staticClass:"form-button confirm-button",attrs:{type:"primary"}},[t._v("确定")])],1)])],1)},o=[],n=a("cb15"),i={components:{Modal:n["a"]},props:{visible:{type:Boolean,default:!1}},methods:{}},l=i,c=(a("6354"),a("2877")),r=Object(c["a"])(l,s,o,!1,null,null,null);e["a"]=r.exports},de8b:function(t,e,a){}}]);
//# sourceMappingURL=chunk-6d843aef.24bdbfc1.js.map
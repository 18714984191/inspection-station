(window["webpackJsonp_warning"]=window["webpackJsonp_warning"]||[]).push([["chunk-6fa8b2a8"],{"3fcd":function(t,a,s){},5963:function(t,a,s){"use strict";var e=s("3fcd"),i=s.n(e);i.a},"95e9":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"warning-infomation"},[s("box",[s("div",{staticClass:"search"},[s("a-form",{staticClass:"default-search-form",attrs:{layout:"inline",form:t.form},on:{submit:t.handleSubmit}},[s("a-form-item",{attrs:{label:"位置："}},[s("a-select",{staticClass:"default-select",attrs:{placeholder:"请选择"}},[s("a-select-option",{attrs:{value:"1"}},[t._v(" 蓝色 ")])],1)],1),s("a-form-item",{attrs:{label:"选择时间："}},[s("a-range-picker",{staticClass:"default-range-picker",attrs:{separator:"","show-time":"","dropdown-class-name":"default-range-picker-dropdown","get-calendar-container":function(t){return t.parentNode}}})],1),s("a-form-item",{attrs:{label:"处理状态："}},[s("a-select",{staticClass:"default-select",attrs:{placeholder:"请选择"}},[s("a-select-option",{attrs:{value:"1"}},[t._v(" 蓝色 ")])],1)],1)],1)],1),s("div",{staticClass:"search-button-group"},[s("div",[s("a-button",{staticClass:"operation-button",attrs:{type:"primary","html-type":"submit"}},[s("span",{staticClass:"iconfont icon-sousuo1 iconfont-14",staticStyle:{"margin-right":"0.3vw"}}),t._v(" 查询 ")]),s("a-button",{staticClass:"operation-button",attrs:{type:"primary","html-type":"submit"}},[s("span",{staticClass:"iconfont icon-zhongzhi iconfont-16",staticStyle:{"margin-right":"0.3vw"}}),t._v(" 重置 ")]),s("a-button",{staticClass:"operation-button",attrs:{type:"primary","html-type":"submit"}},[s("span",{staticClass:"iconfont icon-xuanzhuan iconfont-16",staticStyle:{"margin-right":"0.3vw"}}),t._v(" 批量放行 ")]),s("a-button",{staticClass:"operation-button",attrs:{type:"primary","html-type":"submit"}},[s("span",{staticClass:"iconfont icon-xuanzhuan iconfont-16",staticStyle:{"margin-right":"0.3vw"}}),t._v(" 批量不通过 ")])],1),s("div",{staticClass:"search-type"},[s("div",{staticClass:"search-type-item",class:{"search-type-item-sel":!t.isTable},on:{click:function(a){return t.setIsTable(!1)}}},[t._v(" 栅 ")]),s("div",{staticClass:"search-type-item",class:{"search-type-item-sel":t.isTable},on:{click:function(a){return t.setIsTable(!0)}}},[t._v(" 表 ")])])]),s("div",{staticClass:"contents"},[s("cards",{directives:[{name:"show",rawName:"v-show",value:!t.isTable,expression:"!isTable"}],attrs:{lists:t.lists},on:{openModal:t.openModal}}),s("tables",{directives:[{name:"show",rawName:"v-show",value:t.isTable,expression:"isTable"}],attrs:{data:t.lists},on:{openModal:t.openModal}})],1),s("div",{staticClass:"pagination"},[s("pagination",{on:{change:t.onShowSizeChange}})],1)])],1)},i=[],n=s("fac8"),l=s("333d"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"warning-cards"},[e("div",{staticClass:"row"},t._l(t.lists,(function(a,i){return e("div",{key:i,staticClass:"col"},[e("triangle-box",[e("div",{staticClass:"card-content",on:{click:function(a){return t.$emit("openModal")}}},[e("div",{staticClass:"top-address"},[e("img",{attrs:{src:s("64a4")}}),e("span",{staticClass:"text-ellipsis"},[t._v(" "+t._s(a.address)+" ")])]),e("div",{staticClass:"middle"},[e("div",{staticClass:"middle-left"},[e("img",{attrs:{src:s("76e8")}}),e("div",{staticClass:"licence-plate",class:"licence-plate"+a.type},[t._v(" "+t._s(a.card)+" ")])]),e("div",{staticClass:"middle-right"},[e("div",{staticClass:"warning-icon-box"},[e("img",{staticClass:"warning-icon",attrs:{src:s("6471")}}),e("span",{staticClass:"warning-desc"},[t._v("在逃")])]),e("div",{staticClass:"warning-icon-box"},[e("img",{staticClass:"warning-icon",attrs:{src:s("a229")}}),e("span",{staticClass:"warning-desc"},[t._v("小型车")])]),e("div",{staticClass:"warning-icon-box"},[e("img",{staticClass:"warning-icon",attrs:{src:s("126e")}}),e("span",{staticClass:"warning-desc"},[t._v("颜色")])]),e("div",{staticClass:"warning-icon-box"},[e("img",{staticClass:"warning-icon",attrs:{src:s("3277")}}),e("span",{staticClass:"warning-desc"},[t._v("2021.04.15 15:37:20")])]),e("div",{staticClass:"warning-icon-box"},[e("a-config-provider",{attrs:{"auto-insert-space-in-button":!1}},[e("a-button",{staticClass:"default-button car-check-button",attrs:{type:"default"},on:{click:function(a){return t.toogleHandleModal(!0,"pass")}}},[t._v("放行")])],1),e("a-config-provider",{attrs:{"auto-insert-space-in-button":!1}},[e("a-button",{staticClass:"default-button car-check-button",attrs:{type:"primary"},on:{click:function(a){return t.toogleDisposalModal(!0)}}},[t._v("处置")])],1)],1)])])])])],1)})),0),e("div",{staticStyle:{height:"4vw"}}),e("vehicle-disposal-modal",{attrs:{carVisible:t.carVisible}}),e("handle-modal",{attrs:{visible:t.handleVisible,type:t.type}})],1)},c=[],r=s("5936"),d=s("aa8e"),u=s("abdb"),p={components:{TriangleBox:r["a"],vehicleDisposalModal:d["a"],handleModal:u["a"]},data:function(){return{handleVisible:!1,carVisible:!1,type:""}},props:{lists:{type:Array,default:function(){}}},methods:{toogleDisposalModal:function(t){this.carVisible=t},toogleHandleModal:function(t,a){this.type=a,this.handleVisible=t}}},v=p,m=s("2877"),b=Object(m["a"])(v,o,c,!1,null,"88d55542",null),f=b.exports,h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"warning-car-table"},[e("a-table",{staticClass:"default-table",attrs:{pagination:!1,columns:t.columns,"data-source":t.data,rowKey:"no",scroll:{y:"calc(90vh - 19vw)"}},scopedSlots:t._u([{key:"card",fn:function(a,s){return e("span",{},[0==s.type?e("div",{staticClass:"blue"},[t._v(" "+t._s(a)+" ")]):1==s.type?e("div",{staticClass:"green"},[t._v(" "+t._s(a)+" ")]):2==s.type?e("div",{staticClass:"yellow"},[t._v(" "+t._s(a)+" ")]):t._e()])}},{key:"img",fn:function(a,i){return e("span",{},[e("img",{staticClass:"card-img",attrs:{src:s("76e8")},on:{click:function(a){return t.handlePreview(i.img)}}})])}}])},[e("div",{attrs:{slot:"action"},slot:"action"},[e("a-config-provider",{attrs:{"auto-insert-space-in-button":!1}},[e("a-button",{staticClass:"default-button car-check-button",attrs:{type:"default"},on:{click:function(a){return t.toogleHandleModal(!0,"pass")}}},[t._v("放行")])],1),e("a-config-provider",{attrs:{"auto-insert-space-in-button":!1}},[e("a-button",{staticClass:"default-button car-check-button",attrs:{type:"primary"},on:{click:function(a){return t.toogleDisposalModal(!0)}}},[t._v("处置")])],1)],1)]),e("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleCancel}},[e("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})]),e("vehicle-disposal-modal",{attrs:{carVisible:t.carVisible}}),e("handle-modal",{attrs:{visible:t.handleVisible,type:t.type}})],1)},g=[],y=[{title:"序列",dataIndex:"no",key:"no"},{title:"车牌号",key:"card",dataIndex:"card",scopedSlots:{customRender:"card"}},{title:"车辆抓拍图",dataIndex:"img",key:"img",scopedSlots:{customRender:"img"}},{title:"号牌种类",dataIndex:"carType",key:"carType"},{title:"预警类别",dataIndex:"warningType",key:"warningType"},{title:"车辆颜色",dataIndex:"carColor",key:"carColor"},{title:"等级",dataIndex:"level",key:"level"},{title:"位置",dataIndex:"address",key:"address",ellipsis:!0},{title:"通行时间",dataIndex:"time",key:"time",ellipsis:!0},{title:"操作",dataIndex:"action",key:"action",scopedSlots:{customRender:"action"}}],C={components:{vehicleDisposalModal:d["a"],handleModal:u["a"]},props:{data:{type:Array,default:function(){return[]}}},data:function(){return{columns:y,previewVisible:!1,previewImage:"",handleVisible:!1,carVisible:!1,type:""}},methods:{handleCancel:function(){this.previewVisible=!1},handlePreview:function(t){this.previewImage=t,this.previewVisible=!0},toogleDisposalModal:function(t){this.carVisible=t},toogleHandleModal:function(t,a){this.type=a,this.handleVisible=t}}},w=C,_=Object(m["a"])(w,h,g,!1,null,"83e0e904",null),k=_.exports,x={components:{Box:n["a"],Pagination:l["a"],cards:f,tables:k},data:function(){return{lists:[],isTable:!1,visible:!1,form:this.$form.createForm(this,{name:"horizontal_login"})}},mounted:function(){for(var t=[],a=0;a<10;a++){var e={no:a+1,card:"皖A·03EU8",img:s("76e8"),time:"2021.04.15 15:37:50",address:"岗集入城卡口相机一",type:a%3,carType:"小型车",warningType:"在逃",level:"等级一",carColor:"银色"};t.push(e)}this.lists=t},methods:{getCalendarContainer:function(){return function(t){return t.parentNode}},onShowSizeChange:function(){},openModal:function(){this.visible=!0},closeModal:function(){this.visible=!1},handleSubmit:function(t){t.preventDefault(),this.form.validateFields((function(t,a){t||console.log("Received values of form: ",a)}))},setIsTable:function(t){this.isTable=t}}},M=x,T=(s("5963"),Object(m["a"])(M,e,i,!1,null,null,null));a["default"]=T.exports}}]);
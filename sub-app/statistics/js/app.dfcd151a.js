(function(e,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports["StatisticsApp"]=n():e["StatisticsApp"]=n()})(window,(function(){return function(e){function n(n){for(var r,a,s=n[0],u=n[1],i=n[2],f=0,d=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(n);while(d.length)d.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,a=1;a<t.length;a++){var s=t[a];0!==c[s]&&(r=!1)}r&&(o.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},a={app:0},c={app:0},o=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0f6e186a":"13b07089","chunk-27f32a82":"21db478b","chunk-55896f54":"59ff1541","chunk-9856db24":"6fabbc2c","chunk-35f50214":"d9ead30d","chunk-5d81a38c":"ce24c9f8","chunk-a2d48408":"8b979bce","chunk-d4fcc176":"24b94ddb"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-0f6e186a":1,"chunk-27f32a82":1,"chunk-55896f54":1,"chunk-9856db24":1,"chunk-35f50214":1,"chunk-5d81a38c":1,"chunk-a2d48408":1,"chunk-d4fcc176":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-0f6e186a":"e496322f","chunk-27f32a82":"875f2986","chunk-55896f54":"1f5fb780","chunk-9856db24":"7243bb8a","chunk-35f50214":"a214f776","chunk-5d81a38c":"61b8e23f","chunk-a2d48408":"37959091","chunk-d4fcc176":"f3d3b91c"}[e]+".css",c=u.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var i=o[s],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===r||f===c))return n()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],f=i.getAttribute("data-href");if(f===r||f===c)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],l.parentNode.removeChild(l),t(o)},l.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=o);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=s(e);var d=new Error;i=function(n){f.onerror=f.onload=null,clearTimeout(l);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,t[1](d)}c[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp_statistics"]=window["webpackJsonp_statistics"]||[],f=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var l=f;return o.push([0,"chunk-vendors"]),t()}({0:function(e,n,t){e.exports=t("56d7")},"0fbc":function(e,n,t){"use strict";t.r(n);t("d3b7");var r={routes:[{path:"/statistics",name:"统计分析",component:function(){return t.e("chunk-d4fcc176").then(t.bind(null,"7abe"))},redirect:"/statistics/swan-car",children:[{path:"swan-car",name:"卡口车辆",component:function(){return Promise.all([t.e("chunk-9856db24"),t.e("chunk-a2d48408")]).then(t.bind(null,"8c17"))}},{path:"through-car",name:"通行车辆",component:function(){return Promise.all([t.e("chunk-9856db24"),t.e("chunk-35f50214")]).then(t.bind(null,"915b"))}},{path:"through-people",name:"通行人员",component:function(){return Promise.all([t.e("chunk-9856db24"),t.e("chunk-5d81a38c")]).then(t.bind(null,"5234"))}},{path:"lane-car-echarts",name:"车道车辆统计",component:function(){return t.e("chunk-55896f54").then(t.bind(null,"dd45"))}},{path:"swan-car-echarts",name:"卡口车辆统计",component:function(){return t.e("chunk-27f32a82").then(t.bind(null,"fb9a"))}},{path:"through-people-echarts",name:"通行人员统计",component:function(){return t.e("chunk-0f6e186a").then(t.bind(null,"4822"))}}]}]};n["default"]=r},2395:function(e,n,t){},4678:function(e,n,t){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc10","./be.js":"1fc10","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var n=c(e);return t(n)}function c(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id="4678"},"56d7":function(e,n,t){"use strict";t.r(n),t.d(n,"bootstrap",(function(){return Q})),t.d(n,"mount",(function(){return X})),t.d(n,"unmount",(function(){return G}));t("96cf");var r=t("1da1"),a=(t("e623"),t("e379"),t("5dc8"),t("37e1"),t("2b0e")),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("a-config-provider",{attrs:{locale:e.locale}},[t("div",{attrs:{id:"app"}},[t("router-view")],1)])},o=[],s=t("677e"),u=t.n(s),i={data:function(){return{locale:u.a}}},f=i,d=(t("7c55"),t("2877")),l=Object(d["a"])(f,c,o,!1,null,null,null),b=l.exports,p=(t("13d5"),t("d3b7"),t("ac1f"),t("5319"),t("ddb0"),t("2f62"));a["a"].use(p["a"]);var h=t("c653"),j=h.keys().reduce((function(e,n){var t=n.replace(/^\.\/(.*)\.\w+$/,"$1"),r=h(n);return e[t]=r.default,e}),{}),m=new p["a"].Store({modules:j}),k=m,v=t("f23d"),g=(t("202f"),t("5530")),y=t("8c4f");function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mode:"hash"},n=t("0fbc").default;return e.routes=n.routes,new y["a"](Object(g["a"])({},e))}a["a"].use(y["a"]);var _=w,E=t("313e"),O=t.n(E),x=function(e){Object.defineProperties(e.prototype,{$echarts:{get:function(){return{initCharts:function(e,n,t){var r=O.a.init(n);return e=r||O.a.init(n),e.setOption(t),e}}}}})},T={install:x},z=(t("c975"),t("d81d"),t("bc3a")),P=t.n(z),S=t("a78e"),U=t.n(S),N="http://192.168.0.130/api",C="",D={baseUrl:N,baseImgUrl:C},A=P.a.create({baseURL:D.baseUrl,timeout:3e5,headers:{"X-Requested-With":"XMLHttpRequest"}});A.setToken=function(e){A.defaults.headers["token"]=e.token,U.a.set("token",JSON.stringify(e),{expires:31})};var I=!1,L=[];A.interceptors.request.use((function(e){var n=R();if(e.headers["token"]=n.token,e.url.indexOf("/rereshToken")>=0||e.url.indexOf("/login")>=0)return e;if(n.token&&n.tokenExpireTime){var t=Date.now();if(t>=n.tokenExpireTime){I||(console.log("刷新token ing..."),I=!0,M().then((function(e){var n=e.data,r=n.token,a=n.tokenExprieIn,c=t+1e3*a;return A.setToken({token:r,tokenExpireTime:c}),I=!1,r})).then((function(e){console.log("刷新token成功，执行队列"),L.map((function(n){return n(e)})),L=[]})).catch((function(e){console.error("refresh token error: ",e)})));var r=new Promise((function(n){L.push((function(t){e.headers["token"]=t,n(e)}))}));return r}}return e}),(function(e){return Promise.reject(e)})),A.interceptors.response.use((function(e){var n=e.data.code;return 1234===n&&(window.location.href="/"),e}),(function(e){return console.log("catch",e),Promise.reject(e)}));var R=function(){var e={};try{e=U.a.get("token"),e=e?JSON.parse(e):{}}catch(n){console.error("Cookies获取token失败")}return e},M=function(){return A.post("/refreshtoken").then((function(e){return e.data}))},$=A,K=t("4328"),q=t.n(K),B={get:function(e,n){return new Promise((function(t,r){$.get(e,{params:n||""}).then((function(e){t(e.data)})).catch((function(e){r(e.data)}))}))},post:function(e,n){return new Promise((function(t,r){$.post(e,n,{headers:{"Content-Type":"application/json"}}).then((function(e){t(e.data)})).catch((function(e){r(e.data)}))}))},formPost:function(e,n){return new Promise((function(t,r){$.post(e,q.a.stringify(n),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){t(e.data)})).catch((function(e){r(e.data)}))}))},delete:function(e,n){return new Promise((function(t,r){$.delete(e,{params:n||""}).then((function(e){t(e.data)})).catch((function(e){r(e.data)}))}))},put:function(e,n){return new Promise((function(t,r){$.put(e,q.a.stringify(n),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){t(e.data)})).catch((function(e){r(e.data)}))}))},upload:function(e,n){var t=new FormData;return t.append("file",n),$.post(e,t)}},F={login:function(e){return B.get("/customer/login",e)}};t("83f4");a["a"].prototype.$api=F,a["a"].prototype.$baseImgUrl=D.baseImgUrl,a["a"].prototype.$baseUrl=D.baseUrl,a["a"].prototype.$Cookies=U.a,a["a"].config.productionTip=!1,a["a"].use(v["a"]),a["a"].use(T);var J=null,Y=null;function H(){Y=_({}),J=new a["a"]({router:Y,store:k,render:function(e){return e(b)}}).$mount("#app")}function Q(){return W.apply(this,arguments)}function W(){return W=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),W.apply(this,arguments)}function X(e){return Z.apply(this,arguments)}function Z(){return Z=Object(r["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:H(n);case 1:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}function G(){return V.apply(this,arguments)}function V(){return V=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:J.$destroy(),J=null,Y=null;case 3:case"end":return e.stop()}}),e)}))),V.apply(this,arguments)}window.__POWERED_BY_QIANKUN__||H()},7010:function(e,n,t){"use strict";t.r(n);var r=t("a78e"),a=t.n(r),c={size:"default"},o={SET_SIZE:function(e,n){e.size=n,a.a.set("size",n)}},s={setSize:function(e,n){var t=e.commit;t("SET_SIZE",n)}};n["default"]={namespaced:!1,state:c,mutations:o,actions:s}},"7c55":function(e,n,t){"use strict";var r=t("2395"),a=t.n(r);a.a},"83f4":function(e,n,t){window.__POWERED_BY_QIANKUN__&&(t.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},b0b6:function(e,n,t){"use strict";t.r(n);var r={menuData:[],defaultKeys:[]},a={SET_MENU:function(e,n){e.menuData=n},SET_DEFAULT_KEYS:function(e,n){e.defaultKeys=n}},c={setMenu:function(e,n){var t=e.commit;t("SET_MENU",n)},setDefaultKeys:function(e,n){var t=e.commit;t("SET_DEFAULT_KEYS",n)}};n["default"]={namespaced:!1,state:r,mutations:a,actions:c}},c653:function(e,n,t){var r={"./config.js":"b0b6","./example.js":"7010"};function a(e){var n=c(e);return t(n)}function c(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id="c653"}})}));
//# sourceMappingURL=app.dfcd151a.js.map
(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["DashboardApp"]=t():e["DashboardApp"]=t()})(window,(function(){return function(e){function t(t){for(var r,a,c=t[0],u=t[1],i=t[2],f=0,d=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e459a":"a05329ea","chunk-8df9e768":"a9ff52f1"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-8df9e768":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0e459a":"31d6cfe0","chunk-8df9e768":"56892798"}[e]+".css",o=u.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var i=s[c],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===r||f===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){i=d[c],f=i.getAttribute("data-href");if(f===r||f===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],l.parentNode.removeChild(l),n(s)},l.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=c(e);var d=new Error;i=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp_dashboard"]=window["webpackJsonp_dashboard"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=f;return s.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("56d7")},"0fbc":function(e,t,n){"use strict";n.r(t);n("d3b7");var r={routes:[{path:"/dashboard",name:"工作台",component:function(){return n.e("chunk-2d0e459a").then(n.bind(null,"909f"))},children:[{path:"",name:"dashboard",component:function(){return n.e("chunk-8df9e768").then(n.bind(null,"9406"))}}]}]};t["default"]=r},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc10","./be.js":"1fc10","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return Y})),n.d(t,"mount",(function(){return Q})),n.d(t,"unmount",(function(){return X}));n("96cf");var r=n("1da1"),a=(n("e623"),n("e379"),n("5dc8"),n("37e1"),n("2b0e")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-config-provider",{attrs:{locale:e.locale}},[n("div",{attrs:{id:"app"}},[n("router-view")],1)])},s=[],c=n("677e"),u=n.n(c),i={data:function(){return{locale:u.a}}},f=i,d=n("2877"),l=Object(d["a"])(f,o,s,!1,null,null,null),p=l.exports,b=(n("13d5"),n("d3b7"),n("ac1f"),n("5319"),n("ddb0"),n("2f62"));a["a"].use(b["a"]);var j=n("c653"),h=j.keys().reduce((function(e,t){var n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),r=j(t);return e[n]=r.default,e}),{}),m=new b["a"].Store({modules:h}),g=m,v=n("f23d"),y=(n("202f"),n("5530")),k=n("8c4f");function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n("0fbc").default;return e.routes=t.routes,new k["a"](Object(y["a"])({},e))}a["a"].use(k["a"]);var _=w,E=function(e){Object.defineProperties(e.prototype,{$echarts:{get:function(){return{initCharts:function(e,t,n){var r=echarts.init(t);return e=r||echarts.init(t),e.setOption(n),e}}}}})},O={install:E},x=(n("c975"),n("d81d"),n("bc3a")),T=n.n(x),z=n("a78e"),P=n.n(z),S="http://192.168.0.130/api",D="",U={baseUrl:S,baseImgUrl:D},N=T.a.create({baseURL:U.baseUrl,timeout:3e5,headers:{"X-Requested-With":"XMLHttpRequest"}});N.setToken=function(e){N.defaults.headers["token"]=e.token,P.a.set("token",JSON.stringify(e),{expires:31})};var C=!1,A=[];N.interceptors.request.use((function(e){var t=I();if(e.headers["token"]=t.token,e.url.indexOf("/rereshToken")>=0||e.url.indexOf("/login")>=0)return e;if(t.token&&t.tokenExpireTime){var n=Date.now();if(n>=t.tokenExpireTime){C||(console.log("刷新token ing..."),C=!0,L().then((function(e){var t=e.data,r=t.token,a=t.tokenExprieIn,o=n+1e3*a;return N.setToken({token:r,tokenExpireTime:o}),C=!1,r})).then((function(e){console.log("刷新token成功，执行队列"),A.map((function(t){return t(e)})),A=[]})).catch((function(e){console.error("refresh token error: ",e)})));var r=new Promise((function(t){A.push((function(n){e.headers["token"]=n,t(e)}))}));return r}}return e}),(function(e){return Promise.reject(e)})),N.interceptors.response.use((function(e){var t=e.data.code;return 1234===t&&(window.location.href="/"),e}),(function(e){return console.log("catch",e),Promise.reject(e)}));var I=function(){var e={};try{e=P.a.get("token"),e=e?JSON.parse(e):{}}catch(t){console.error("Cookies获取token失败")}return e},L=function(){return N.post("/refreshtoken").then((function(e){return e.data}))},R=N,$=n("4328"),M=n.n($),K={get:function(e,t){return new Promise((function(n,r){R.get(e,{params:t||""}).then((function(e){n(e.data)})).catch((function(e){r(e.data)}))}))},post:function(e,t){return new Promise((function(n,r){R.post(e,t,{headers:{"Content-Type":"application/json"}}).then((function(e){n(e.data)})).catch((function(e){r(e.data)}))}))},formPost:function(e,t){return new Promise((function(n,r){R.post(e,M.a.stringify(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){n(e.data)})).catch((function(e){r(e.data)}))}))},delete:function(e,t){return new Promise((function(n,r){R.delete(e,{params:t||""}).then((function(e){n(e.data)})).catch((function(e){r(e.data)}))}))},put:function(e,t){return new Promise((function(n,r){R.put(e,M.a.stringify(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){n(e.data)})).catch((function(e){r(e.data)}))}))},upload:function(e,t){var n=new FormData;return n.append("file",t),R.post(e,n)}},q={login:function(e){return K.get("/customer/login",e)}};n("83f4");a["a"].prototype.$api=q,a["a"].prototype.$baseImgUrl=U.baseImgUrl,a["a"].prototype.$baseUrl=U.baseUrl,a["a"].prototype.$Cookies=P.a,a["a"].config.productionTip=!1,a["a"].use(v["a"]),a["a"].use(O);var B=null,F=null;function J(){F=_({}),B=new a["a"]({router:F,store:g,render:function(e){return e(p)}}).$mount("#app")}function Y(){return H.apply(this,arguments)}function H(){return H=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("DashboardApp bootstraped");case 1:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}function Q(e){return W.apply(this,arguments)}function W(){return W=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("DashboardApp mount",t,window.commonComponent),a["a"].prototype.$mainProps=t,J(t);case 3:case"end":return e.stop()}}),e)}))),W.apply(this,arguments)}function X(){return Z.apply(this,arguments)}function Z(){return Z=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("DashboardApp unmount"),B.$destroy(),B=null,F=null;case 4:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}window.__POWERED_BY_QIANKUN__||J()},7010:function(e,t,n){"use strict";n.r(t);var r=n("a78e"),a=n.n(r),o={size:"default"},s={SET_SIZE:function(e,t){e.size=t,a.a.set("size",t)}},c={setSize:function(e,t){var n=e.commit;n("SET_SIZE",t)}};t["default"]={namespaced:!1,state:o,mutations:s,actions:c}},"83f4":function(e,t,n){window.__POWERED_BY_QIANKUN__&&(n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},b0b6:function(e,t,n){"use strict";n.r(t);var r={menuData:[],defaultKeys:[]},a={SET_MENU:function(e,t){e.menuData=t},SET_DEFAULT_KEYS:function(e,t){e.defaultKeys=t}},o={setMenu:function(e,t){var n=e.commit;n("SET_MENU",t)},setDefaultKeys:function(e,t){var n=e.commit;n("SET_DEFAULT_KEYS",t)}};t["default"]={namespaced:!1,state:r,mutations:a,actions:o}},c653:function(e,t,n){var r={"./config.js":"b0b6","./example.js":"7010"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="c653"}})}));
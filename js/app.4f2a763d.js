(function(t){function e(e){for(var r,a,i=e[0],u=e[1],s=e[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},c=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d0cf73f":"b40c7150","chunk-2d0d6376":"197f9e96","chunk-2d0e26c3":"eada0ba7","chunk-33530e94":"16cfbb70","chunk-5de0e6f2":"8c2ab197","chunk-73ada2b0":"cc4d0434","chunk-a2505fa0":"b8c21693"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-5de0e6f2":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0cf73f":"31d6cfe0","chunk-2d0d6376":"31d6cfe0","chunk-2d0e26c3":"31d6cfe0","chunk-33530e94":"31d6cfe0","chunk-5de0e6f2":"ff1075c8","chunk-73ada2b0":"31d6cfe0","chunk-a2505fa0":"31d6cfe0"}[t]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[t],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var d=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"39f1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],c=(n("5c0b"),n("2877")),i={},u=Object(c["a"])(i,a,o,!1,null,null,null),s=u.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-aside",{attrs:{width:"auto"}},[n("common-menu")],1),n("div",{staticClass:"app-main"},[n("el-header",{staticClass:"app-header"},[n("common-header")],1),n("el-main",{staticClass:"app-wrap"},[n("common-tab-view")],1)],1)],1)},f=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-menu",{staticClass:"el-menu-vertical-demo",staticStyle:{width:"100%"},attrs:{collapse:t.isCollapse,"default-active":t.$route.path,"default-openeds":t.defaultOpenProps,"background-color":"#24292e","text-color":"#fff","active-text-color":"#ffd04b","collapse-transition":!1}},[n("div",{staticClass:"menu-title"},[n("img",{staticClass:"logo",attrs:{src:"https://img.icons8.com/color/96/000000/avengers.png"}}),n("h4",{directives:[{name:"show",rawName:"v-show",value:!t.isCollapse,expression:"!isCollapse"}]},[t._v("花栗鼠后台管理系统")])]),t._l(t.menuData,(function(e,r){return[e.hidden||e.children?t._e():n("el-menu-item",{key:r,attrs:{index:e.path},on:{click:function(n){return t.clickMenu(e)}}},[n("i",{class:e.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.label))])]),!e.hidden&&e.children&&e.children.length?n("el-submenu",{key:r,attrs:{index:r+""}},[n("template",{slot:"title"},[n("i",{class:e.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.label))])]),t._l(e.children,(function(e){return n("el-menu-item",{key:e.path,attrs:{index:e.path},on:{click:function(n){return t.clickMenu(e)}}},[n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.label))])])}))],2):t._e()]}))],2)},h=[],m=[{path:"/",name:"Home",label:"首页",icon:"el-icon-s-home"},{path:"/book",name:"书籍",label:"书籍",icon:"el-icon-reading",children:[{path:"/cover",name:"cover",label:"封面"},{path:"/codex",name:"codex",label:"附录"}]},{path:"/other",name:"other",label:"其他",icon:"el-icon-magic-stick",children:[{path:"/about",name:"about",label:"关于"}]}],b=m,v={computed:{isCollapse:function(){return this.$store.state.isCollapse}},methods:{clickMenu:function(t){this.$router.push({path:t.path})}},data:function(){return{defaultOpenProps:["1"],menuData:b}}},g=v,k=(n("c241"),Object(c["a"])(g,p,h,!1,null,"793e7b64",null)),y=k.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"l-content"},[n("el-button",{staticStyle:{color:"#fff"},attrs:{type:"text",icon:"el-icon-menu"},on:{click:t.triggerCollapse}}),n("el-breadcrumb",{staticStyle:{display:"inline-block","margin-left":"20px"},attrs:{"separator-class":"el-icon-arrow-right"}},t._l(t.breadcrumbList,(function(e){return n("el-breadcrumb-item",{key:e.path,attrs:{to:e}},[t._v(" "+t._s(e.name)+" ")])})),1)],1),n("div",{staticClass:"r-content"},[n("el-dropdown",{attrs:{trigger:"click",size:"mini"}},[n("span",{staticClass:"el-dropdown-link",staticStyle:{color:"#fff"}},[n("span",{staticStyle:{"margin-right":"5px"}},[t._v("我的")]),n("i",{staticClass:"el-icon-caret-bottom"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(e){return t.$router.push("/")}}},[t._v("个人中心")]),n("el-dropdown-item",{nativeOn:{click:function(e){return t.logOut(e)}}},[t._v("退出")])],1)],1)],1)])},x=[],_={computed:{isCollapse:function(){return this.$store.state.isCollapse},currentIndex:function(){return this.$store.state.tab.currentIndex},breadcrumbList:function(){return this.$store.state.breadcrumbList}},data:function(){return{}},methods:{triggerCollapse:function(){this.$store.commit("collapse-menu")},logOut:function(){this.$router.push("/login")}}},w=_,C=(n("96d5"),Object(c["a"])(w,O,x,!1,null,"137d8208",null)),$=C.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%"}},[t.tabOptions.length?n("el-tabs",{staticClass:"content-wrap",attrs:{type:"border-card"},on:{"tab-click":t.tabClick,"tab-remove":t.tabRemove},model:{value:t.currentIndex,callback:function(e){t.currentIndex=e},expression:"currentIndex"}},t._l(t.tabOptions,(function(t){return n("el-tab-pane",{key:t.route,attrs:{closable:"/"!==t.route,label:t.name,name:t.route}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("keep-alive",{attrs:{include:/Keep$/}},[n("router-view")],1)],1)],1)})),1):t._e()],1)},S=[],P=(n("99af"),n("4de4"),n("c740"),n("b0c0"),n("ac1f"),n("5319"),{watch:{$route:{immediate:!0,handler:function(t){var e=this.tabOptions.findIndex((function(e){return e.route===t.fullPath}))>-1;!e&&this.$store.commit("add-tab",{route:t.fullPath,name:t.name}),this.$store.commit("set-index",t.fullPath)}}},computed:{tabOptions:function(){return this.$store.state.tab.tabOptions},currentIndex:{get:function(){return this.getBreadCrumb(this.$route),this.$store.state.tab.currentIndex},set:function(t){this.$store.commit("set-index",t),this.getBreadCrumb(this.$route)}}},data:function(){return{}},methods:{tabClick:function(t){this.$router.push({path:this.currentIndex})},tabRemove:function(t){"/"!==t&&(this.$store.commit("delete-tab",t),this.currentIndex===t&&(this.tabOptions&&this.tabOptions.length?(this.$store.commit("set-index",this.tabOptions[this.tabOptions.length-1].route),this.$router.replace({path:this.currentIndex})):this.$router.replace({path:"/"})))},getBreadCrumb:function(t){var e=t.matched.filter((function(t){return t.path&&t.name}));"/"!==e[0].path&&(e=[{path:"/",name:"首页"}].concat(e)),this.$store.commit("set-breadcrumb",e)}}}),I=P,E=(n("f507"),Object(c["a"])(I,j,S,!1,null,"5e6862c2",null)),L=E.exports,T={components:{commonMenu:y,commonHeader:$,commonTabView:L},data:function(){return{}}},M=T,N=(n("8f4f"),Object(c["a"])(M,d,f,!1,null,"d5dc0b44",null)),A=N.exports,B=l["a"].prototype.push;l["a"].prototype.push=function(t){return B.call(this,t).catch((function(t){return t}))},r["default"].use(l["a"]);var D,H,q=[{path:"/login",name:"登录",component:function(){return n.e("chunk-5de0e6f2").then(n.bind(null,"a55b"))}},{path:"/",name:"Layout",component:A,children:[{path:"/",name:"首页",component:function(){return n.e("chunk-33530e94").then(n.bind(null,"bb51"))}}]},{path:"/book",name:"书籍",component:A,redirect:"/cover",children:[{path:"/cover",name:"封面",component:function(){return n.e("chunk-2d0e26c3").then(n.bind(null,"7f42"))}},{path:"/codex",name:"附录",component:function(){return n.e("chunk-2d0d6376").then(n.bind(null,"7238"))}},{path:"/detail",name:"详情页",component:function(){return n.e("chunk-73ada2b0").then(n.bind(null,"3be4"))}}]},{path:"/other",name:"其他",redirect:"/about",component:A,children:[{path:"/about",name:"关于",component:function(){return n.e("chunk-a2505fa0").then(n.bind(null,"f820"))}}]},{path:"*",name:"No Found",component:function(){return n.e("chunk-2d0cf73f").then(n.bind(null,"647b"))}}],F=new l["a"]({mode:"hash",base:"/",routes:q}),J=F,K=n("ade3"),R=n("2909"),z=n("2f62"),U=(n("a434"),"collapse-menu"),V="set-breadcrumb",G="add-tab",Q="delete-tab",W="set-index",X="clear-tab",Y={nameSpace:!0,state:{tabOptions:[{route:"/",name:"首页"}],currentIndex:"/",breadcrumbList:[]},mutations:(D={},Object(K["a"])(D,G,(function(t,e){t.tabOptions.push(e)})),Object(K["a"])(D,Q,(function(t,e){var n=t.tabOptions.findIndex((function(t){return t.route===e}));t.tabOptions.splice(n,1)})),Object(K["a"])(D,W,(function(t,e){t.currentIndex=e})),Object(K["a"])(D,X,(function(t){t.tabOptions=[]})),D),actions:{}};r["default"].use(z["a"]);var Z=new z["a"].Store({state:{isCollapse:!1,breadcrumbList:[]},mutations:(H={},Object(K["a"])(H,U,(function(t){t.isCollapse=!t.isCollapse})),Object(K["a"])(H,V,(function(t,e){t.breadcrumbList=Object(R["a"])(e)})),H),actions:{},modules:{tab:Y}}),tt=n("5c96"),et=n.n(tt);n("0fae");r["default"].config.productionTip=!1,r["default"].use(et.a),r["default"].prototype.$defer=function(t){return t.then((function(t){return[t,void 0]})).catch((function(t){return Promise.resolve([void 0,t])}))},r["default"].directive("_focus",(function(t){console.log(t),t.focus()})),new r["default"]({router:J,store:Z,render:function(t){return t(s)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},6028:function(t,e,n){},"6ab9":function(t,e,n){},"8f4f":function(t,e,n){"use strict";var r=n("6ab9"),a=n.n(r);a.a},"96d5":function(t,e,n){"use strict";var r=n("ba28"),a=n.n(r);a.a},"9c0c":function(t,e,n){},ba28:function(t,e,n){},c241:function(t,e,n){"use strict";var r=n("6028"),a=n.n(r);a.a},f507:function(t,e,n){"use strict";var r=n("39f1"),a=n.n(r);a.a}});
//# sourceMappingURL=app.4f2a763d.js.map
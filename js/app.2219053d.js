(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)r=s[u],o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{"chunk-2d0e95df":"aab3e392","chunk-2d22d746":"d7d7395b","chunk-6d1b7928":"d73c2124","chunk-9396f192":"6cec1d38","chunk-956e57d8":"51c89a46",about:"4b429e95","chunk-2d21af87":"7014b867"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-6d1b7928":1,"chunk-956e57d8":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{"chunk-2d0e95df":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-6d1b7928":"9386aaaf","chunk-9396f192":"31d6cfe0","chunk-956e57d8":"4c3065a4",about:"31d6cfe0","chunk-2d21af87":"31d6cfe0"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}o[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/english-club/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0abe":function(t,e,n){},"4ea8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{app:"","disable-resize-watcher":!0,"mobile-break-point":9999},model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title"},[t._v("\n          English Club\n        ")])],1)],1),n("v-divider"),n("v-list",{attrs:{nav:""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item",{attrs:{to:{name:"class"}}},[t._v("Class")]),n("v-list-item",{attrs:{to:{name:"journal"}}},[t._v("Journal")]),n("v-list-item",{attrs:{to:"/about"}},[t._v("About")])],1)],1)],1)],1),n("v-app-bar",{staticClass:"pink white--text",attrs:{app:""}},[n("v-toolbar-title",{staticClass:"text-uppercase custom-pointer",on:{click:t.goHome}},[n("span",{staticClass:"display-2"},[t._v("english")]),n("span",{staticClass:"font-weight-bold"},[t._v("club")])]),n("v-spacer"),t.$vuetify.breakpoint.mdAndUp?n("span",[n("v-btn",{attrs:{text:"",color:"white",large:!0,to:{name:"class"}}},[n("span",{staticClass:"mr-2 font-italic"},[t._v("Class")])]),n("v-btn",{attrs:{text:"",color:"white",large:!0,to:{name:"journal"}}},[n("span",{staticClass:"mr-2 font-italic"},[t._v("Journal")])]),n("v-btn",{attrs:{text:"",color:"white",large:!0,to:"/about"}},[n("span",{staticClass:"mr-2 font-italic"},[t._v("About")])])],1):n("v-app-bar-nav-icon",{staticClass:"white--text",on:{click:function(e){t.open=!0}}})],1),n("v-content",[n("div",{staticClass:"c-fullbg"}),n("router-view",{staticClass:"c-elevate"})],1),n("v-footer",{staticClass:"footer",attrs:{app:"",absolute:!0}},[n("v-card",{staticClass:"transparent text-center py-3",attrs:{flat:"",width:"100%"}},[n("v-card-text",{staticClass:"deep-purple--text"},[t._v("臺北市立圖書館木柵分館")]),n("v-divider",{staticClass:"c-line"}),n("v-card-text",{staticClass:"deep-purple--text"},[t._v("英文讀書會")])],1)],1)],1)},o=[],i={name:"App",data:function(){return{open:!1}},created:function(){this.$store.dispatch("getJournal"),this.$store.dispatch("getClass"),this.ghPagesSpaRedirect()},methods:{goHome:function(){this.$router.push("/")},ghPagesSpaRedirect:function(){var t=this.$route.query.p;t&&this.$router.push(t)}}},s=i,c=(n("c575"),n("2877")),l=n("6544"),u=n.n(l),d=n("7496"),f=n("40dc"),p=n("5bc1"),h=n("8336"),v=n("b0af"),m=n("99d9"),b=n("a75b"),g=n("ce7e"),k=n("553a"),x=n("8860"),y=n("da13"),C=n("5d23"),_=n("f774"),w=n("2fa4"),j=n("2a7f"),V=Object(c["a"])(s,r,o,!1,null,"17301896",null),A=V.exports;u()(V,{VApp:d["a"],VAppBar:f["a"],VAppBarNavIcon:p["a"],VBtn:h["a"],VCard:v["a"],VCardText:m["a"],VContent:b["a"],VDivider:g["a"],VFooter:k["a"],VList:x["a"],VListItem:y["a"],VListItemContent:C["a"],VListItemTitle:C["b"],VNavigationDrawer:_["a"],VSpacer:w["a"],VToolbarTitle:j["a"]});var S=n("8c4f"),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"custom-lg-container"},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",sm6:"","mb-7":""}},[n("div",{staticClass:"c-headings"},t._l(t.headings,function(e){return n("div",{key:e.title},[n("span",{staticClass:"c-title"},[t._v(t._s(e.title))]),n("span",{class:e.color+"--text"},[t._v(t._s(e.text))])])}),0)]),n("v-flex",{attrs:{xs12:"",sm6:"","mb-7":""}},[n("h3",[t._v("Taipei MuCha Library English Club")]),n("h3",[t._v("木柵英文讀書會")]),t._l(t.links,function(e){return n("h4",{key:e.name},[n("v-icon",[t._v("mdi-menu-right")]),n("router-link",{attrs:{to:{name:e.name}}},[t._v(t._s(e.text))])],1)})],2)],1)],1)},L=[],P={data:function(){return{headings:[{title:"E",text:"njoy readings,",color:"green"},{title:"N",text:"urture ideas,",color:"blue"},{title:"G",text:"ain knowledge,",color:"lime"},{title:"L",text:"ove ourselves,",color:"deep-orange"},{title:"I",text:"mprove writings,",color:"deep-purple"},{title:"S",text:"hare feelings, and",color:"green"},{title:"H",text:"ave fun!",color:"yellow"}],links:[{name:"class",text:"Class"},{name:"journal",text:"Journal"},{name:"about",text:"About"}]}}},T=P,O=(n("bece"),n("a523")),$=n("0e8f"),N=n("132d"),B=n("a722"),I=Object(c["a"])(T,E,L,!1,null,"712e940c",null),J=I.exports;u()(I,{VContainer:O["a"],VFlex:$["a"],VIcon:N["a"],VLayout:B["a"]}),a["a"].use(S["a"]);var M=new S["a"]({mode:"history",base:"/english-club/",scrollBehavior:function(t,e,n){return n||{x:0,y:0}},routes:[{path:"/",name:"home",component:J},{path:"/journals",name:"journal",component:function(){return Promise.all([n.e("chunk-956e57d8"),n.e("about")]).then(n.bind(null,"baff"))}},{path:"/journals/*",name:"article",component:function(){return n.e("chunk-9396f192").then(n.bind(null,"3ad6"))}},{path:"/classes",name:"class",component:function(){return Promise.all([n.e("chunk-956e57d8"),n.e("chunk-2d21af87")]).then(n.bind(null,"be7e"))}},{path:"/classes/*",name:"class-content",component:function(){return n.e("chunk-6d1b7928").then(n.bind(null,"4106"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/*",name:"default-not-found",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}},{path:"/not-found",name:"navigate-not-found",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}}]}),D=(n("7f7f"),n("2f62"));a["a"].use(D["a"]);var H=new D["a"].Store({state:{domain:"https://timtnleeproject.github.io/english-club",journal:[],journalControl:[],classList:[],classControl:[]},mutations:{set:function(t,e){var n=e.name,a=e.value;t[n]=a}},actions:{getJournal:function(t){fetch("".concat(t.state.domain,"/journal.json")).then(function(t){return t.json()}).then(function(e){t.commit("set",{name:"journal",value:e})})},getClass:function(t){fetch("".concat(t.state.domain,"/class.json")).then(function(t){return t.json()}).then(function(e){t.commit("set",{name:"classList",value:e})})}}}),q=n("f309");a["a"].use(q["a"]);var F=new q["a"]({icons:{iconfont:"mdi"},theme:{light:{primary:"pink"}}});n("4ea8"),n("d122"),n("6d93");a["a"].config.productionTip=!1,new a["a"]({router:M,store:H,vuetify:F,render:function(t){return t(A)}}).$mount("#app")},"75f7":function(t,e,n){},bece:function(t,e,n){"use strict";var a=n("0abe"),r=n.n(a);r.a},c575:function(t,e,n){"use strict";var a=n("75f7"),r=n.n(a);r.a},d122:function(t,e,n){}});
//# sourceMappingURL=app.2219053d.js.map
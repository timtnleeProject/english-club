(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"07e3":function(e,t){var i={}.hasOwnProperty;e.exports=function(e,t){return i.call(e,t)}},"11e9":function(e,t,i){var n=i("52a7"),s=i("4630"),r=i("6821"),o=i("6a99"),a=i("69a8"),c=i("c69a"),l=Object.getOwnPropertyDescriptor;t.f=i("9e1e")?l:function(e,t){if(e=r(e),t=o(t,!0),c)try{return l(e,t)}catch(i){}if(a(e,t))return s(!n.f.call(e,t),e[t])}},"1bc3":function(e,t,i){var n=i("f772");e.exports=function(e,t){if(!n(e))return e;var i,s;if(t&&"function"==typeof(i=e.toString)&&!n(s=i.call(e)))return s;if("function"==typeof(i=e.valueOf)&&!n(s=i.call(e)))return s;if(!t&&"function"==typeof(i=e.toString)&&!n(s=i.call(e)))return s;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(e,t,i){var n=i("f772"),s=i("e53d").document,r=n(s)&&n(s.createElement);e.exports=function(e){return r?s.createElement(e):{}}},"294c":function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},"35e8":function(e,t,i){var n=i("d9f6"),s=i("aebd");e.exports=i("8e60")?function(e,t,i){return n.f(e,t,s(1,i))}:function(e,t,i){return e[t]=i,e}},"454f":function(e,t,i){i("46a7");var n=i("584a").Object;e.exports=function(e,t,i){return n.defineProperty(e,t,i)}},"456d":function(e,t,i){var n=i("4bf8"),s=i("0d58");i("5eda")("keys",function(){return function(e){return s(n(e))}})},"46a7":function(e,t,i){var n=i("63b6");n(n.S+n.F*!i("8e60"),"Object",{defineProperty:i("d9f6").f})},4804:function(e,t,i){},"584a":function(e,t){var i=e.exports={version:"2.6.9"};"number"==typeof __e&&(__e=i)},"5eda":function(e,t,i){var n=i("5ca1"),s=i("8378"),r=i("79e5");e.exports=function(e,t){var i=(s.Object||{})[e]||Object[e],o={};o[e]=t(i),n(n.S+n.F*r(function(){i(1)}),"Object",o)}},"63b6":function(e,t,i){var n=i("e53d"),s=i("584a"),r=i("d864"),o=i("35e8"),a=i("07e3"),c="prototype",l=function(e,t,i){var h,d,u,p=e&l.F,f=e&l.G,v=e&l.S,m=e&l.P,b=e&l.B,g=e&l.W,y=f?s:s[t]||(s[t]={}),O=y[c],S=f?n:v?n[t]:(n[t]||{})[c];for(h in f&&(i=t),i)d=!p&&S&&void 0!==S[h],d&&a(y,h)||(u=d?S[h]:i[h],y[h]=f&&"function"!=typeof S[h]?i[h]:b&&d?r(u,n):g&&S[h]==u?function(e){var t=function(t,i,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,i)}return new e(t,i,n)}return e.apply(this,arguments)};return t[c]=e[c],t}(u):m&&"function"==typeof u?r(Function.call,u):u,m&&((y.virtual||(y.virtual={}))[h]=u,e&l.R&&O&&!O[h]&&o(O,h,u)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,e.exports=l},"794b":function(e,t,i){e.exports=!i("8e60")&&!i("294c")(function(){return 7!=Object.defineProperty(i("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},"85f2":function(e,t,i){e.exports=i("454f")},"8e60":function(e,t,i){e.exports=!i("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"8e6e":function(e,t,i){var n=i("5ca1"),s=i("990b"),r=i("6821"),o=i("11e9"),a=i("f1ae");n(n.S,"Object",{getOwnPropertyDescriptors:function(e){var t,i,n=r(e),c=o.f,l=s(n),h={},d=0;while(l.length>d)i=c(n,t=l[d++]),void 0!==i&&a(h,t,i);return h}})},9093:function(e,t,i){var n=i("ce10"),s=i("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,s)}},"990b":function(e,t,i){var n=i("9093"),s=i("2621"),r=i("cb7c"),o=i("7726").Reflect;e.exports=o&&o.ownKeys||function(e){var t=n.f(r(e)),i=s.f;return i?t.concat(i(e)):t}},ac6a:function(e,t,i){for(var n=i("cadf"),s=i("0d58"),r=i("2aba"),o=i("7726"),a=i("32e9"),c=i("84f2"),l=i("2b4c"),h=l("iterator"),d=l("toStringTag"),u=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=s(p),v=0;v<f.length;v++){var m,b=f[v],g=p[b],y=o[b],O=y&&y.prototype;if(O&&(O[h]||a(O,h,u),O[d]||a(O,d,b),c[b]=u,g))for(m in n)O[m]||r(O,m,n[m],!0)}},aebd:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},baff:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("h1",[e._v("Journal")]),i("v-treeview",{attrs:{items:e.journal,dense:!0,"open-on-click":!0},scopedSlots:e._u([{key:"label",fn:function(t){var n=t.item,s=t.open;return[0===n.children.length?i("div",{staticClass:"custom-pointer light-blue--text",on:{click:function(t){return e.go(n.path)}}},[e._v("\n        "+e._s(n.name)+"\n      ")]):i("span",[i("v-icon",[e._v("\n          "+e._s(s?"mdi-folder-open":"mdi-folder")+"\n        ")]),e._v("\n        "+e._s(n.name)+"\n      ")],1)]}}])})],1)},s=[],r=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),o=i("2f62");function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(i,!0).forEach(function(t){Object(r["a"])(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}var l,h={data:function(){return{items:[]}},computed:c({},Object(o["b"])(["journal"])),methods:{go:function(e){this.$router.push("/journal".concat(e))}}},d=h,u=i("2877"),p=i("6544"),f=i.n(p),v=i("a523"),m=(i("4804"),i("a9ad")),b=i("af2b"),g=i("7560"),y=i("80d2"),O=i("2b0e"),S=i("58df");function C(e){return["fas","far","fal","fab"].some(t=>e.includes(t))}function w(e){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4}(function(e){e["xSmall"]="12px",e["small"]="16px",e["default"]="24px",e["medium"]="28px",e["large"]="36px",e["xLarge"]="40px"})(l||(l={}));const j=Object(S["a"])(m["a"],b["a"],g["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1}},methods:{getIcon(){let e="";return this.$slots.default&&(e=this.$slots.default[0].text.trim()),Object(y["n"])(this,e)},getSize(){const e={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},t=Object(y["l"])(e).find(t=>e[t]);return t&&l[t]||Object(y["d"])(this.size)},getDefaultData(){const e=Boolean(this.$listeners.click||this.$listeners["!click"]),t={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":e,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!e,role:e?"button":null,...this.$attrs},on:this.$listeners};return t},applyColors(e){e.class={...e.class,...this.themeClasses},this.setTextColor(this.color,e)},renderFontIcon(e,t){const i=[],n=this.getDefaultData();let s="material-icons";const r=e.indexOf("-"),o=r<=-1;o?i.push(e):(s=e.slice(0,r),C(s)&&(s="")),n.class[s]=!0,n.class[e]=!o;const a=this.getSize();return a&&(n.style={fontSize:a}),this.applyColors(n),t(this.tag,n,i)},renderSvgIcon(e,t){const i=this.getDefaultData();i.class["v-icon--svg"]=!0,i.attrs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:"24",width:"24",role:"img","aria-hidden":!this.$attrs["aria-label"],"aria-label":this.$attrs["aria-label"]};const n=this.getSize();return n&&(i.style={fontSize:n,height:n,width:n},i.attrs.height=n,i.attrs.width=n),this.applyColors(i),t("svg",i,[t("path",{attrs:{d:e}})])},renderSvgIconComponent(e,t){const i=this.getDefaultData();i.class["v-icon--is-component"]=!0;const n=this.getSize();n&&(i.style={fontSize:n,height:n}),this.applyColors(i);const s=e.component;return i.props=e.props,i.nativeOn=i.on,t(s,i)}},render(e){const t=this.getIcon();return"string"===typeof t?w(t)?this.renderSvgIcon(t,e):this.renderFontIcon(t,e):this.renderSvgIconComponent(t,e)}});var x=O["a"].extend({name:"v-icon",$_wrapperFor:j,functional:!0,render(e,{data:t,children:i}){let n="";return t.domProps&&(n=t.domProps.textContent||t.domProps.innerHTML||n,delete t.domProps.textContent,delete t.domProps.innerHTML),e(j,t,n?[n]:i)}}),L=(i("fa9e"),function(e="",t=!1){const i=t?"width":"height",n=`offset${Object(y["o"])(i)}`;return{beforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,visibility:e.style.visibility,overflow:e.style.overflow,[i]:e.style[i]}},enter(t){const s=t._initialStyle,r=`${t[n]}px`;t.style.setProperty("transition","none","important"),t.style.visibility="hidden",t.style.visibility=s.visibility,t.style.overflow="hidden",t.style[i]="0",t.offsetHeight,t.style.transition=s.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame(()=>{t.style[i]=r})},afterEnter:r,enterCancelled:r,leave(e){e._initialStyle={transition:"",visibility:"",overflow:e.style.overflow,[i]:e.style[i]},e.style.overflow="hidden",e.style[i]=`${e[n]}px`,e.offsetHeight,requestAnimationFrame(()=>e.style[i]="0")},afterLeave:s,leaveCancelled:s};function s(t){e&&t._parent&&t._parent.classList.remove(e),r(t)}function r(e){const t=e._initialStyle[i];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[i]=t),delete e._initialStyle}});Object(y["g"])("carousel-transition"),Object(y["g"])("carousel-reverse-transition"),Object(y["g"])("tab-transition"),Object(y["g"])("tab-reverse-transition"),Object(y["g"])("menu-transition"),Object(y["g"])("fab-transition","center center","out-in"),Object(y["g"])("dialog-transition"),Object(y["g"])("dialog-bottom-transition"),Object(y["g"])("fade-transition"),Object(y["g"])("scale-transition"),Object(y["g"])("scroll-x-transition"),Object(y["g"])("scroll-x-reverse-transition"),Object(y["g"])("scroll-y-transition"),Object(y["g"])("scroll-y-reverse-transition"),Object(y["g"])("slide-x-transition"),Object(y["g"])("slide-x-reverse-transition"),Object(y["g"])("slide-y-transition"),Object(y["g"])("slide-y-reverse-transition");const I=Object(y["e"])("expand-transition",L());Object(y["e"])("expand-x-transition",L("",!0));var P=i("3206");const _=Object(S["a"])(m["a"],Object(P["a"])("treeview")),k={activatable:Boolean,activeClass:{type:String,default:"v-treeview-node--active"},color:{type:String,default:"primary"},expandIcon:{type:String,default:"$vuetify.icons.subgroup"},indeterminateIcon:{type:String,default:"$vuetify.icons.checkboxIndeterminate"},itemChildren:{type:String,default:"children"},itemDisabled:{type:String,default:"disabled"},itemKey:{type:String,default:"id"},itemText:{type:String,default:"name"},loadChildren:Function,loadingIcon:{type:String,default:"$vuetify.icons.loading"},offIcon:{type:String,default:"$vuetify.icons.checkboxOff"},onIcon:{type:String,default:"$vuetify.icons.checkboxOn"},openOnClick:Boolean,rounded:Boolean,selectable:Boolean,selectedColor:{type:String,default:"accent"},shaped:Boolean,transition:Boolean};var T=_.extend().extend({name:"v-treeview-node",inject:{treeview:{default:null}},props:{item:{type:Object,default:()=>null},...k},data:()=>({hasLoaded:!1,isActive:!1,isIndeterminate:!1,isLoading:!1,isOpen:!1,isSelected:!1}),computed:{disabled(){return Object(y["j"])(this.item,this.itemDisabled)},key(){return Object(y["j"])(this.item,this.itemKey)},children(){return Object(y["j"])(this.item,this.itemChildren)},text(){return Object(y["j"])(this.item,this.itemText)},scopedProps(){return{item:this.item,leaf:!this.children,selected:this.isSelected,indeterminate:this.isIndeterminate,active:this.isActive,open:this.isOpen}},computedIcon(){return this.isIndeterminate?this.indeterminateIcon:this.isSelected?this.onIcon:this.offIcon},hasChildren(){return!!this.children&&(!!this.children.length||!!this.loadChildren)}},created(){this.treeview.register(this)},beforeDestroy(){this.treeview.unregister(this)},methods:{checkChildren(){return new Promise(e=>{if(!this.children||this.children.length||!this.loadChildren||this.hasLoaded)return e();this.isLoading=!0,e(this.loadChildren(this.item))}).then(()=>{this.isLoading=!1,this.hasLoaded=!0})},open(){this.isOpen=!this.isOpen,this.treeview.updateOpen(this.key,this.isOpen),this.treeview.emitOpen()},genLabel(){const e=[];return this.$scopedSlots.label?e.push(this.$scopedSlots.label(this.scopedProps)):e.push(this.text),this.$createElement("div",{slot:"label",staticClass:"v-treeview-node__label"},e)},genContent(){const e=[this.$scopedSlots.prepend&&this.$scopedSlots.prepend(this.scopedProps),this.genLabel(),this.$scopedSlots.append&&this.$scopedSlots.append(this.scopedProps)];return this.$createElement("div",{staticClass:"v-treeview-node__content"},e)},genToggle(){return this.$createElement(x,{staticClass:"v-treeview-node__toggle",class:{"v-treeview-node__toggle--open":this.isOpen,"v-treeview-node__toggle--loading":this.isLoading},slot:"prepend",on:{click:e=>{this.disabled||(e.stopPropagation(),this.isLoading||this.checkChildren().then(()=>this.open()))}}},[this.isLoading?this.loadingIcon:this.expandIcon])},genCheckbox(){return this.$createElement(x,{staticClass:"v-treeview-node__checkbox",props:{color:this.isSelected?this.selectedColor:void 0},on:{click:e=>{this.disabled||(e.stopPropagation(),this.isLoading||this.checkChildren().then(()=>{this.$nextTick(()=>{this.isSelected=!this.isSelected,this.isIndeterminate=!1,this.treeview.updateSelected(this.key,this.isSelected),this.treeview.emitSelected()})}))}}},[this.computedIcon])},genNode(){const e=[this.genContent()];return this.selectable&&e.unshift(this.genCheckbox()),this.hasChildren&&e.unshift(this.genToggle()),this.$createElement("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-treeview-node__root",class:{[this.activeClass]:this.isActive},on:{click:()=>{this.disabled||(this.openOnClick&&this.children?this.open():this.activatable&&(this.isActive=!this.isActive,this.treeview.updateActive(this.key,this.isActive),this.treeview.emitActive()))}}}),e)},genChild(e){return this.$createElement(T,{key:Object(y["j"])(e,this.itemKey),props:{activatable:this.activatable,activeClass:this.activeClass,item:e,selectable:this.selectable,selectedColor:this.selectedColor,color:this.color,expandIcon:this.expandIcon,indeterminateIcon:this.indeterminateIcon,offIcon:this.offIcon,onIcon:this.onIcon,loadingIcon:this.loadingIcon,itemKey:this.itemKey,itemText:this.itemText,itemDisabled:this.itemDisabled,itemChildren:this.itemChildren,loadChildren:this.loadChildren,transition:this.transition,openOnClick:this.openOnClick,rounded:this.rounded,shaped:this.shaped},scopedSlots:this.$scopedSlots})},genChildrenWrapper(){if(!this.isOpen||!this.children)return null;const e=[this.children.map(this.genChild)];return this.$createElement("div",{staticClass:"v-treeview-node__children"},e)},genTransition(){return this.$createElement(I,[this.genChildrenWrapper()])}},render(e){const t=[this.genNode()];return this.transition?t.push(this.genTransition()):t.push(this.genChildrenWrapper()),e("div",{staticClass:"v-treeview-node",class:{"v-treeview-node--leaf":!this.hasChildren,"v-treeview-node--click":this.openOnClick,"v-treeview-node--disabled":this.disabled,"v-treeview-node--rounded":this.rounded,"v-treeview-node--shaped":this.shaped,"v-treeview-node--selected":this.isSelected,"v-treeview-node--excluded":this.treeview.isExcluded(this.key)},attrs:{"aria-expanded":String(this.isOpen)}},t)}}),$=i("d9bd");function A(e,t,i){const n=Object(y["j"])(e,i);return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}function E(e,t,i,n,s,r,o){if(e(t,i,s))return!0;const a=Object(y["j"])(t,r);if(a){let t=!1;for(let c=0;c<a.length;c++)E(e,a[c],i,n,s,r,o)&&(t=!0);if(t)return!0}return o.add(Object(y["j"])(t,n)),!1}var D=Object(S["a"])(Object(P["b"])("treeview"),g["a"]).extend({name:"v-treeview",provide(){return{treeview:this}},props:{active:{type:Array,default:()=>[]},dense:Boolean,filter:Function,hoverable:Boolean,items:{type:Array,default:()=>[]},multipleActive:Boolean,open:{type:Array,default:()=>[]},openAll:Boolean,returnObject:{type:Boolean,default:!1},search:String,selectionType:{type:String,default:"leaf",validator:e=>["leaf","independent"].includes(e)},value:{type:Array,default:()=>[]},...k},data:()=>({activeCache:new Set,nodes:{},openCache:new Set,selectedCache:new Set}),computed:{excludedItems(){const e=new Set;if(!this.search)return e;for(let t=0;t<this.items.length;t++)E(this.filter||A,this.items[t],this.search,this.itemKey,this.itemText,this.itemChildren,e);return e}},watch:{items:{handler(){const e=Object.keys(this.nodes).map(e=>Object(y["j"])(this.nodes[e].item,this.itemKey)),t=this.getKeys(this.items),i=Object(y["a"])(t,e);if(!i.length&&t.length<e.length)return;i.forEach(e=>delete this.nodes[e]);const n=[...this.selectedCache];this.selectedCache=new Set,this.activeCache=new Set,this.openCache=new Set,this.buildTree(this.items),Object(y["h"])(n,[...this.selectedCache])||this.emitSelected()},deep:!0},active(e){this.handleNodeCacheWatcher(e,this.activeCache,this.updateActive,this.emitActive)},value(e){this.handleNodeCacheWatcher(e,this.selectedCache,this.updateSelected,this.emitSelected)},open(e){this.handleNodeCacheWatcher(e,this.openCache,this.updateOpen,this.emitOpen)}},created(){this.buildTree(this.items),this.value.forEach(e=>this.updateSelected(e,!0)),this.active.forEach(e=>this.updateActive(e,!0))},mounted(){(this.$slots.prepend||this.$slots.append)&&Object($["c"])("The prepend and append slots require a slot-scope attribute",this),this.openAll?this.updateAll(!0):(this.open.forEach(e=>this.updateOpen(e,!0)),this.emitOpen())},methods:{updateAll(e){Object.keys(this.nodes).forEach(t=>this.updateOpen(Object(y["j"])(this.nodes[t].item,this.itemKey),e)),this.emitOpen()},getKeys(e,t=[]){for(let i=0;i<e.length;i++){const n=Object(y["j"])(e[i],this.itemKey);t.push(n);const s=Object(y["j"])(e[i],this.itemChildren);s&&t.push(...this.getKeys(s))}return t},buildTree(e,t=null){for(let i=0;i<e.length;i++){const n=e[i],s=Object(y["j"])(n,this.itemKey),r=Object(y["j"])(n,this.itemChildren,[]),o=this.nodes.hasOwnProperty(s)?this.nodes[s]:{isSelected:!1,isIndeterminate:!1,isActive:!1,isOpen:!1,vnode:null},a={vnode:o.vnode,parent:t,children:r.map(e=>Object(y["j"])(e,this.itemKey)),item:n};this.buildTree(r,s),!this.nodes.hasOwnProperty(s)&&null!==t&&this.nodes.hasOwnProperty(t)?(a.isSelected=this.nodes[t].isSelected,a.isIndeterminate=this.nodes[t].isIndeterminate):(a.isSelected=o.isSelected,a.isIndeterminate=o.isIndeterminate),a.isActive=o.isActive,a.isOpen=o.isOpen,this.nodes[s]=r.length?this.calculateState(a,this.nodes):a,this.nodes[s].isSelected&&this.selectedCache.add(s),this.nodes[s].isActive&&this.activeCache.add(s),this.nodes[s].isOpen&&this.openCache.add(s),this.updateVnodeState(s)}},calculateState(e,t){const i=e.children.reduce((e,i)=>{return e[0]+=+Boolean(t[i].isSelected),e[1]+=+Boolean(t[i].isIndeterminate),e},[0,0]);return e.isSelected=!!e.children.length&&i[0]===e.children.length,e.isIndeterminate=!e.isSelected&&(i[0]>0||i[1]>0),e},emitOpen(){this.emitNodeCache("update:open",this.openCache)},emitSelected(){this.emitNodeCache("input",this.selectedCache)},emitActive(){this.emitNodeCache("update:active",this.activeCache)},emitNodeCache(e,t){this.$emit(e,this.returnObject?[...t].map(e=>this.nodes[e].item):[...t])},handleNodeCacheWatcher(e,t,i,n){e=this.returnObject?e.map(e=>Object(y["j"])(e,this.itemKey)):e;const s=[...t];Object(y["h"])(s,e)||(s.forEach(e=>i(e,!1)),e.forEach(e=>i(e,!0)),n())},getDescendants(e,t=[]){const i=this.nodes[e].children;t.push(...i);for(let n=0;n<i.length;n++)t=this.getDescendants(i[n],t);return t},getParents(e){let t=this.nodes[e].parent;const i=[];while(null!==t)i.push(t),t=this.nodes[t].parent;return i},register(e){const t=Object(y["j"])(e.item,this.itemKey);this.nodes[t].vnode=e,this.updateVnodeState(t)},unregister(e){const t=Object(y["j"])(e.item,this.itemKey);this.nodes[t]&&(this.nodes[t].vnode=null)},isParent(e){return this.nodes[e].children&&this.nodes[e].children.length},updateActive(e,t){if(!this.nodes.hasOwnProperty(e))return;this.multipleActive||this.activeCache.forEach(e=>{this.nodes[e].isActive=!1,this.updateVnodeState(e),this.activeCache.delete(e)});const i=this.nodes[e];i&&(t?this.activeCache.add(e):this.activeCache.delete(e),i.isActive=t,this.updateVnodeState(e))},updateSelected(e,t){if(!this.nodes.hasOwnProperty(e))return;const i=new Map;if("independent"!==this.selectionType){const n=[e,...this.getDescendants(e)];n.forEach(e=>{this.nodes[e].isSelected=t,this.nodes[e].isIndeterminate=!1,i.set(e,t)});const s=this.getParents(e);s.forEach(e=>{this.nodes[e]=this.calculateState(this.nodes[e],this.nodes),i.set(e,this.nodes[e].isSelected)})}else this.nodes[e].isSelected=t,this.nodes[e].isIndeterminate=!1,i.set(e,t);for(const[n,s]of i.entries())this.updateVnodeState(n),"leaf"===this.selectionType&&this.isParent(n)||(!0===s?this.selectedCache.add(n):this.selectedCache.delete(n))},updateOpen(e,t){if(!this.nodes.hasOwnProperty(e))return;const i=this.nodes[e],n=Object(y["j"])(i.item,this.itemChildren);n&&!n.length&&i.vnode&&!i.vnode.hasLoaded?i.vnode.checkChildren().then(()=>this.updateOpen(e,t)):n&&n.length&&(i.isOpen=t,i.isOpen?this.openCache.add(e):this.openCache.delete(e),this.updateVnodeState(e))},updateVnodeState(e){const t=this.nodes[e];t&&t.vnode&&(t.vnode.isSelected=t.isSelected,t.vnode.isIndeterminate=t.isIndeterminate,t.vnode.isActive=t.isActive,t.vnode.isOpen=t.isOpen)},isExcluded(e){return!!this.search&&this.excludedItems.has(e)}},render(e){const t=this.items.length?this.items.map(T.options.methods.genChild.bind(this)):this.$slots.default;return e("div",{staticClass:"v-treeview",class:{"v-treeview--hoverable":this.hoverable,"v-treeview--dense":this.dense,...this.themeClasses}},t)}}),B=Object(u["a"])(d,n,s,!1,null,null,null);t["default"]=B.exports;f()(B,{VContainer:v["a"],VIcon:x,VTreeview:D})},bd86:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var n=i("85f2"),s=i.n(n);function r(e,t,i){return t in e?s()(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},d864:function(e,t,i){var n=i("79aa");e.exports=function(e,t,i){if(n(e),void 0===t)return e;switch(i){case 1:return function(i){return e.call(t,i)};case 2:return function(i,n){return e.call(t,i,n)};case 3:return function(i,n,s){return e.call(t,i,n,s)}}return function(){return e.apply(t,arguments)}}},d9f6:function(e,t,i){var n=i("e4ae"),s=i("794b"),r=i("1bc3"),o=Object.defineProperty;t.f=i("8e60")?Object.defineProperty:function(e,t,i){if(n(e),t=r(t,!0),n(i),s)try{return o(e,t,i)}catch(a){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(e[t]=i.value),e}},e4ae:function(e,t,i){var n=i("f772");e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},e53d:function(e,t){var i=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=i)},f1ae:function(e,t,i){"use strict";var n=i("86cc"),s=i("4630");e.exports=function(e,t,i){t in e?n.f(e,t,s(0,i)):e[t]=i}},f772:function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},fa9e:function(e,t,i){}}]);
//# sourceMappingURL=about.1bd4ab3b.js.map
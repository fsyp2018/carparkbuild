(function(e){function t(t){for(var r,s,i=t[0],o=t[1],l=t[2],d=0,p=[];d<i.length;d++)s=i[d],n[s]&&p.push(n[s][0]),n[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],r=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},c=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=o;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0811":function(e,t,a){"use strict";var r=a("aa3c"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=a("bc3a"),c=a.n(n),s=a("a7fe"),i=a.n(s),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("HelloWorld")],1)},l=[],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"fixed"},[a("p",[e._v("提供桃園市各停車場目前相關資訊，此資料由桃園市政府開放資料提供")]),a("p",[e._v("最後更新："+e._s(e.lastupdate))]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.areaname,expression:"areaname"}],staticClass:"custom-select custom-select-lg mb-3",staticStyle:{"text-align":"center"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.areaname=t.target.multiple?a:a[0]},e.changearea]}},[a("option",{attrs:{selected:""}},[e._v("全部")]),e._l(e.filterareaname,function(t){return a("option",{key:t.id},[e._v(e._s(t))])})],2)]),a("div",{staticClass:"fixedcontent"},[a("div",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"center","flex-wrap":"wrap"}},e._l(e.filteredcarpark,function(t){return a("div",{key:t.id,staticClass:"card border-dark mb-3 mr-3 ml-3",class:{"bg-success":t.surplusSpace>=50,"bg-danger":t.surplusSpace<=10},staticStyle:{width:"40%"}},[a("div",{staticClass:"card-header bg-transparent border-dark"},[e._v(e._s(t.parkName))]),a("div",{staticClass:"card-body text-dark"},[a("h5",{staticClass:"card-title"},[e._v("停車場地址")]),a("p",{staticClass:"card-text "},[e._v(e._s(t.address))]),a("h5",{staticClass:"card-title text-dark"},[e._v("收費方式")]),a("p",{staticClass:"card-text"},[e._v(e._s(t.payGuide))])]),a("div",{staticClass:"card-footer bg-transparent border-dark"},[e._v("總車位:"+e._s(t.totalSpace)+"     剩餘車位:"+e._s(t.surplusSpace))])])}),0)])])},d=[],p={data:function(){return{carpark:[],filterareaname:{},filteredcarpark:[],areaname:"全部",lastupdate:"",test:[]}},methods:{getData:function(){var e=this,t="https://cors-anywhere.herokuapp.com/",a="https://data.tycg.gov.tw/api/v1/rest/datastore/0daad6e6-0632-44f5-bd25-5e1de1e9146f?format=json";this.$http.get(t+a).then(function(t){e.lastupdate=new Date(t.headers.date),e.carpark=t.data.result.records,e.filteredcarpark=t.data.result.records;for(var a=new Array,r=0;r<e.carpark.length;r++)a.push(e.carpark[r].areaName);e.filterareaname=a.filter(function(e,t,a){return a.indexOf(e)===t})})},changearea:function(){var e=this;"全部"===e.areaname?e.filteredcarpark=Object.assign({},e.carpark):e.filteredcarpark=e.carpark.filter(function(t){if(t.areaName===e.areaname)return!0})}},created:function(){var e=this;e.getData()}},f=p,v=(a("0811"),a("2877")),h=Object(v["a"])(f,u,d,!1,null,"cd7f6832",null),m=h.exports,b={name:"app",components:{HelloWorld:m}},g=b,_=(a("5c0b"),Object(v["a"])(g,o,l,!1,null,null,null)),y=_.exports;r["a"].config.productionTip=!1,r["a"].use(i.a,c.a),new r["a"]({render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var r=a("5e27"),n=a.n(r);n.a},"5e27":function(e,t,a){},aa3c:function(e,t,a){}});
//# sourceMappingURL=app.ee21490c.js.map
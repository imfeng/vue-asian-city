/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{218:function(t,e,o){var content=o(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(29).default)("053c03d3",content,!0,{sourceMap:!1})},229:function(t,e,o){"use strict";var n=o(218);o.n(n).a},230:function(t,e,o){(t.exports=o(28)(!1)).push([t.i,".lotto-api{display:inline-block}",""])},260:function(t,e,o){"use strict";o.r(e);o(20);var n={props:["apiServer","lottoType","rows"],data:function(){return{countdownTimeRemain:75,countdownMin:1,countdownSec:15,lottos:{endTime:"0",expect:"0",gameId:"0",interval:"0",no:1,opencode:"?",opendate:"0",opentime:"0",opentimestamp:1555059901,startTime:"0",type:"A"}}},mounted:function(){var t=this;this.$axios.$get(this.apiServer+"/race168/vv16888/api.php?type=A1").then(function(e){if(console.log(e),e instanceof Object){var data=e.data;data instanceof Array&&(t.lottos=data[0],console.log(t.lottos))}})},methods:{},computed:{lottoNum:function(){return this.lottos.opencode.split(",")},expireTime:function(){return new Date(lottos.opentime).getTime()}}},r=(o(229),o(22)),c={components:{lottoApiVue:Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"lotto-api"},[o("h1",[t._v("no-use")]),t._v(" "),o("h1",[t._v(t._s(t.apiServer))]),t._v(" "),o("pre",[t._v("here u r RAW")]),t._v(" "),o("pre",[t._v("    "+t._s(t.lottos.opencode)+"\n    "),t._v("\n    "+t._s(t.lottos.expect)+" \n    "+t._s(t.lottos.opentime)+"\n    "+t._s(t.lottos.interval)+"\n  ")]),t._v(" "),o("section",t._l(t.lottoNum,function(e){return o("div",{staticClass:"lotto-num"},[t._v(t._s(e))])}),0),t._v(" "),o("div",{staticClass:"timer"},[t._v(t._s(t.countdownTimeRemain))])])},[],!1,null,null,null).exports},props:[],created:function(){this.aest()},watch:{},data:function(){return{apiServer:"/api-service"}},methods:{aest:function(){this.aTest="aa"}}},l=Object(r.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("no-ssr",{attrs:{placeholder:"Loading..."}},[e("lottoApiVue",{attrs:{"api-server":this.apiServer,lottoType:"A1",rows:"25"}})],1)},[],!1,null,null,null);e.default=l.exports}}]);
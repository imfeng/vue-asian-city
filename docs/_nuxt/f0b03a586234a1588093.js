(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{214:function(t,e,n){t.exports=n.p+"img/4567ba7.png"},215:function(t,e,n){t.exports=n.p+"img/770bf3c.png"},216:function(t,e,n){t.exports=n.p+"img/88ec1f0.png"},221:function(t,e,n){"use strict";(function(t){n(20);var o=n(127);n(43);e.a={components:{},data:function(){return{logo:"",historyCnt:0,historiesList:[],didLoad:!1,title:"",gameId:null,interval:0,test:"1",maplist:[{type:"A1"},{type:"A2"},{type:"A3"}],item:{},catlist:[]}},methods:{getHistories:function(){var t=this;this.historyCnt+=5,this.$axios.$get("/race168/vv16888/api.php?type="+this.gameId+"&rows="+this.historyCnt).then(function(e){if(e instanceof Object){var data=e.data;data instanceof Array&&(t.historiesList=data)}})},ballStartRotate:function(e){var n=this,o=t((e="#"+e)+" > div"),r={ballHold:t(e).width()+0,diameter:o.height()+10,perimeter:Math.PI,n:o.length,total:15,i:0};r.perimeter=r.perimeter*r.diameter;var l=setInterval(function(){r.i>r.n&&clearInterval(l),n.ballRotaing(r,o),r.i++},200)},ballRotaing:function(e,n){var o=e.ballHold-e.diameter*(e.i%e.total),r=Math.floor(e.i/e.total),l=360*o/e.perimeter,c="2s cubic-bezier(1.000, 1.450, 0.185, 0.850)";n.eq(e.i).css({transition:c,transform:"translateX("+o+"px)",top:r*e.diameter,opacity:"1"}).find("div").css({transition:c,transform:"rotate("+l+"deg)"}).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){t(this).css("transform","rotate(0)")})}},asyncData:function(t){var e=t.params;console.log("===========asyncData============"),console.log(e)},mounted:function(){var t=this;console.log("===========mounted============"),console.log(this.$route.params);var e=this.$route.params.id.split("-"),r=Object(o.a)(e,3),l=r[0],c=r[1],d=r[2];this.gameId=c,this.title=l,this.interval=d,this.logo=n(235)("./"+this.$route.params.id+".png"),this.$axios.$get("/race168/vv16888/api.php?type="+this.gameId).then(function(e){if(e instanceof Object){var data=e.data;data instanceof Array&&(Object.assign(t.item,data[0]),t.item.codes=t.item.opencode.split(","),t.item.currentSeries=t.item.expect.slice(-3),t.didLoad=!0,console.log(t.item))}}),this.getHistories()},created:function(){this.catlist=[{title:"极速赛车",gameId:"A1",interval:"75",cimg:n(216)},{title:"极速赛车",gameId:"A2",interval:"120",cimg:n(214)},{title:"极速赛车",gameId:"A3",interval:"300",cimg:n(215)}]}}}).call(this,n(134))},222:function(t,e,n){t.exports=n.p+"img/eb7952e.png"},223:function(t,e,n){var content=n(254);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("d339b084",content,!0,{sourceMap:!1})},235:function(t,e,n){var map={"./11s5.png":236,"./airship.png":237,"./ball1.png":238,"./c120.png":214,"./c300.png":215,"./c75.png":216,"./car.png":222,"./dice.png":239,"./move-top.png":135,"./亚洲快3-C1-75.png":240,"./亚洲快3-C2-120.png":241,"./亚洲快3-C3-300.png":242,"./亚洲时时彩-D1-75.png":243,"./亚洲时时彩-D2-120.png":244,"./亚洲时时彩-D3-300.png":245,"./亚洲赛车-A1-75.png":246,"./亚洲赛车-A2-120.png":247,"./亚洲赛车-A3-300 (2).png":248,"./亚洲赛车-A3-300.png":249,"./亚洲飞艇-B1-75.png":250,"./亚洲飞艇-B2-120.png":251,"./亚洲飞艇-B3-300.png":252};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=235},236:function(t,e,n){t.exports=n.p+"img/53e17d6.png"},237:function(t,e,n){t.exports=n.p+"img/c59785d.png"},238:function(t,e,n){t.exports=n.p+"img/a931cd7.png"},239:function(t,e,n){t.exports=n.p+"img/7ec4594.png"},240:function(t,e,n){t.exports=n.p+"img/bc28c21.png"},241:function(t,e,n){t.exports=n.p+"img/19c101a.png"},242:function(t,e,n){t.exports=n.p+"img/f8636af.png"},243:function(t,e,n){t.exports=n.p+"img/afd57fd.png"},244:function(t,e,n){t.exports=n.p+"img/c76fd78.png"},245:function(t,e,n){t.exports=n.p+"img/80dede2.png"},246:function(t,e,n){t.exports=n.p+"img/b93b8a5.png"},247:function(t,e,n){t.exports=n.p+"img/ff7a30b.png"},248:function(t,e,n){t.exports=n.p+"img/9b905f7.png"},249:function(t,e,n){t.exports=n.p+"img/bb66a4d.png"},250:function(t,e,n){t.exports=n.p+"img/f7b5adc.png"},251:function(t,e,n){t.exports=n.p+"img/bb1243b.png"},252:function(t,e,n){t.exports=n.p+"img/2ddd251.png"},253:function(t,e,n){"use strict";var o=n(223);n.n(o).a},254:function(t,e,n){(t.exports=n(28)(!1)).push([t.i,"#page-lotto .resultheader{text-align:center;padding:1rem}#page-lotto .resultheader h4{display:block;width:100%}#page-lotto .resultheader .balls{margin:.5rem 0 .3rem;display:block;width:100%}#page-lotto .resultheader .countdown{border:3px solid #939393;padding:.2rem .4rem;border-radius:5px;font-size:2.3rem;margin:.3rem 0;color:#dc3737;width:100%;display:block}#page-lotto .banner-cont{text-align:center}#page-lotto .banner-sub-img{height:330px;width:auto;margin:0 auto;max-width:100%;height:auto}#page-lotto .banner-cont.container-fluid{background-color:#2a2b2b}#page-lotto .lotto-history{background-color:#fff}#page-lotto .lotto-history h3{font-size:2.5rem;margin:1.6rem 0}#page-lotto .lotto-history .ctrl-btns{text-align:center}#page-lotto #lotto.container-fluid{background-color:#f4f4f4}#page-lotto .banner-img{width:100%}#page-lotto .content{background-color:#1a120f}#page-lotto .ball{position:relative;display:inline-block;margin:5px;width:60px;height:60px;background:#004e99;border-radius:50%;transition:all .7s ease-out}#page-lotto .ball.drop{bottom:10px}#page-lotto .ball>div{position:absolute;width:100%;height:100%;border-radius:50%}#page-lotto .ball>div>span{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:34.28571px;height:34.28571px;border-radius:50%;text-align:center;line-height:30px;font-size:14px;font-weight:700;background:#fff;display:flex;align-items:center;justify-content:center}#page-lotto .ball.blue{background:linear-gradient(90deg,#536976,#292e49)}#page-lotto .ball.red{background:linear-gradient(90deg,#da4453,#89216b)}#page-lotto .ball.green{background:linear-gradient(90deg,#00b09b,#96c93d)}#page-lotto .ball.yellow{background:linear-gradient(90deg,#ffe259,#ffa751)}",""])},265:function(t,e,n){"use strict";n.r(e);var o=n(221).a,r=(n(253),n(22)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page-lotto"}},[n("section",{staticClass:"banner-cont container-fluid"},[n("img",{staticClass:"banner-sub-img",attrs:{src:t.logo}})]),t._v(" "),n("section",{staticClass:"container-fluid ",attrs:{id:"lotto"}},[n("div",{staticClass:"text-left container"},[n("div",{staticClass:"row "},[n("div",{staticClass:"col-md-9"},[n("div",{staticClass:"resultheader"},[t.didLoad?n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"balls small-12 medium-3 columns",attrs:{id:"balls-"+t.gameId}},t._l(t.item.codes,function(code){return n("div",{staticClass:"ball yellow"},[n("div",[n("span",[t._v(t._s(code))])])])}),0)]):t._e()])]),t._v(" "),t._m(1)])])]),t._v(" "),n("section",{staticClass:"lotto-history container-fluid"},[t._m(2),t._v(" "),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table"},[t._m(3),t._v(" "),n("tbody",t._l(t.historiesList,function(e){return n("tr",[n("th",{staticClass:"d-none d-sm-block",attrs:{scope:"row"}},[t._v("     ")]),t._v(" "),n("td",[t._v(t._s(e.expect))]),t._v(" "),n("td",[t._v(t._s(e.opentime))]),t._v(" "),n("td",[t._v(t._s(e.opencode))])])}),0)])]),t._v(" "),n("div",{staticClass:"ctrl-btns"},[n("b-button",{staticClass:"btn-more",attrs:{size:"lg",variant:"dark"},on:{click:t.getHistories}},[t._v("查看更多")])],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h4",[this._v("\r\n                期号：\r\n                "),e("span",{staticClass:"txtbold",attrs:{id:"Clock"}},[e("span",{staticClass:"txtbold"},[this._v("20190413556, 2019-04-13 20:03:45")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-3 resultheader"},[e("h4",{staticClass:"resulttxt2"},[this._v("距离下次开彩")]),this._v(" "),e("div",{staticClass:"countdown"},[this._v("00:00:06")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center container"},[e("h3",[this._v("历史开彩清单")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticClass:"d-none d-sm-block"},[this._v("     ")]),this._v(" "),e("th",{staticClass:"th-sm"},[this._v("编号")]),this._v(" "),e("th",{staticClass:"th-sm"},[this._v("日期")]),this._v(" "),e("th",{staticClass:"th-sm"},[this._v("期号")])])])}],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{228:function(t,n,e){t.exports=e.p+"img/4567ba7.png"},229:function(t,n,e){t.exports=e.p+"img/770bf3c.png"},230:function(t,n,e){t.exports=e.p+"img/88ec1f0.png"},236:function(t,n,e){"use strict";(function(t){var o=e(133);e(24),e(13);n.a={head:function(){return{title:"亚洲娱乐网 - "+this.title,meta:[{charset:"utf-8"},{"http-equiv":"X-UA-Compatible",content:"ie=edge"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:this.title+"祝您中奖"}],script:[]}},components:{},data:function(){return{alarm:!1,audio:null,logo:"",historyCnt:0,historiesList:[],didLoad:!1,title:"",gameId:null,interval:0,test:"1",maplist:[{type:"A1"},{type:"A2"},{type:"A3"}],item:{},catlist:[],countdownRemain:-1,volume:.5}},methods:{updateApi:function(){var t=this;this.$axios.$get("/race168/vv16888/api.php?type="+this.gameId).then(function(n){if(n instanceof Object){var data=n.data;data instanceof Array&&(Object.assign(t.item,data[0]),t.item.codes=t.item.opencode.split(","),t.item.currentSeries=t.item.expect.slice(-3),t.didLoad=!0,console.log(t.item))}})},getHistories:function(){var t=this;this.historyCnt+=20,this.$axios.$get("/race168/vv16888/api.php?type="+this.gameId+"&rows="+this.historyCnt).then(function(n){if(n instanceof Object){var data=n.data;data instanceof Array&&(t.historiesList=data.map(function(t){return t.codes=t.opencode.split(","),t}))}})},ballStartRotate:function(n){var e=this,o=t((n="#"+n)+" > div"),r={ballHold:t(n).width()+0,diameter:o.height()+10,perimeter:Math.PI,n:o.length,total:15,i:0};r.perimeter=r.perimeter*r.diameter;var l=setInterval(function(){r.i>r.n&&clearInterval(l),e.ballRotaing(r,o),r.i++},200)},ballRotaing:function(n,e){var o=n.ballHold-n.diameter*(n.i%n.total),r=Math.floor(n.i/n.total),l=360*o/n.perimeter,c="2s cubic-bezier(1.000, 1.450, 0.185, 0.850)";e.eq(n.i).css({transition:c,transform:"translateX("+o+"px)",top:r*n.diameter,opacity:"1"}).find("div").css({transition:c,transform:"rotate("+l+"deg)"}).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){t(this).css("transform","rotate(0)")})},toggleAlarm:function(){this.alarm=!this.alarm}},asyncData:function(t){var n=t.params;console.log("===========asyncData============"),console.log(n)},mounted:function(){var t=this;console.log("===========mounted============"),console.log(this.$route.params);var n=this.$route.params.id.split("-"),r=Object(o.a)(n,3),l=r[0],c=r[1],d=r[2];this.gameId=c,this.title=l,this.interval=d,this.logo=e(259)("./"+this.$route.params.id+".png"),this.updateApi();var audio=new Audio("beep.mp3");audio.volume=this.volume,this.audio=audio,setInterval(function(){var n=new Date(t.item.opentime).getTime()+1e3*t.item.interval,e=(new Date).getTime();t.countdownRemain=n-e,t.countdownRemain<0&&t.updateApi(),t.alarm&&t.countdownRemain<9001&&t.audio.play()},1e3),this.getHistories()},computed:{countdown:function(){return this.countdownRemain<0?0:Math.floor(this.countdownRemain/1e3)+1}}}}).call(this,e(142))},237:function(t,n,e){t.exports=e.p+"img/eb7952e.png"},238:function(t,n,e){t.exports=e.p+"img/2cd505c.png"},239:function(t,n,e){t.exports=e.p+"img/05e76ce.png"},240:function(t,n,e){t.exports=e.p+"img/4173bf9.png"},241:function(t,n,e){t.exports=e.p+"img/9a7f8e2.png"},242:function(t,n,e){t.exports=e.p+"img/62d64a0.png"},243:function(t,n,e){var content=e(283);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(31).default)("d339b084",content,!0,{sourceMap:!1})},259:function(t,n,e){var map={"./11s5.png":260,"./airship.png":261,"./ball1.png":262,"./c120.png":228,"./c300.png":229,"./c75.png":230,"./car.png":237,"./dice.png":263,"./icon.png":264,"./logos/auth.png":238,"./logos/key.png":265,"./logos/key2.png":239,"./logos/kroo.png":240,"./logos/nok.png":241,"./logos/ssl.png":242,"./move-top.png":143,"./亚洲11选5-E1-75.png":266,"./亚洲11选5-E2-120.png":267,"./亚洲11选5-E3-300.png":268,"./亚洲快3-C1-75.png":269,"./亚洲快3-C2-120.png":270,"./亚洲快3-C3-300.png":271,"./亚洲时时彩-D1-75.png":272,"./亚洲时时彩-D2-120.png":273,"./亚洲时时彩-D3-300.png":274,"./亚洲赛车-A1-75.png":275,"./亚洲赛车-A2-120.png":276,"./亚洲赛车-A3-300 (2).png":277,"./亚洲赛车-A3-300.png":278,"./亚洲飞艇-B1-75.png":279,"./亚洲飞艇-B2-120.png":280,"./亚洲飞艇-B3-300.png":281};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=259},260:function(t,n,e){t.exports=e.p+"img/53e17d6.png"},261:function(t,n,e){t.exports=e.p+"img/c59785d.png"},262:function(t,n,e){t.exports=e.p+"img/a931cd7.png"},263:function(t,n,e){t.exports=e.p+"img/7ec4594.png"},264:function(t,n,e){t.exports=e.p+"img/8492b48.png"},265:function(t,n,e){t.exports=e.p+"img/a7c49dc.png"},266:function(t,n,e){t.exports=e.p+"img/3e26855.png"},267:function(t,n,e){t.exports=e.p+"img/c1c3515.png"},268:function(t,n,e){t.exports=e.p+"img/ade4846.png"},269:function(t,n,e){t.exports=e.p+"img/bc28c21.png"},270:function(t,n,e){t.exports=e.p+"img/19c101a.png"},271:function(t,n,e){t.exports=e.p+"img/f8636af.png"},272:function(t,n,e){t.exports=e.p+"img/afd57fd.png"},273:function(t,n,e){t.exports=e.p+"img/c76fd78.png"},274:function(t,n,e){t.exports=e.p+"img/80dede2.png"},275:function(t,n,e){t.exports=e.p+"img/b93b8a5.png"},276:function(t,n,e){t.exports=e.p+"img/ff7a30b.png"},277:function(t,n,e){t.exports=e.p+"img/9b905f7.png"},278:function(t,n,e){t.exports=e.p+"img/bb66a4d.png"},279:function(t,n,e){t.exports=e.p+"img/f7b5adc.png"},280:function(t,n,e){t.exports=e.p+"img/bb1243b.png"},281:function(t,n,e){t.exports=e.p+"img/2ddd251.png"},282:function(t,n,e){"use strict";var o=e(243);e.n(o).a},283:function(t,n,e){(t.exports=e(30)(!1)).push([t.i,"#page-lotto .resultheader{text-align:center;padding:1rem}#page-lotto .resultheader button{padding:.1rem;margin-top:-6px}#page-lotto .resultheader h4{display:block;width:100%}#page-lotto .resultheader .balls{margin:.5rem 0 .3rem;display:block;width:100%}#page-lotto .resultheader .countdown{border:3px solid #939393;padding:.2rem .4rem;border-radius:5px;font-size:2.3rem;margin:.3rem 0;color:#dc3737;width:100%;display:block}#page-lotto .banner-cont{text-align:center}#page-lotto .banner-sub-img{height:330px;width:auto;margin:0 auto;max-width:100%;height:auto}#page-lotto .banner-cont.container-fluid{background-color:#2a2b2b}#page-lotto .lotto-history{background-color:#fff}#page-lotto .lotto-history h3{font-size:2.5rem;margin:1.6rem 0}#page-lotto .lotto-history .ctrl-btns{text-align:center;margin-bottom:1rem}@media (max-width:767.9px){#page-lotto .lotto-history .table td,#page-lotto .lotto-history .table th{display:inline-block}}#page-lotto #lotto.container-fluid{background-color:#f4f4f4}#page-lotto .banner-img{width:100%}#page-lotto .content{background-color:#1a120f}#page-lotto .ball{position:relative;display:inline-block;margin:5px;width:60px;height:60px;background:#004e99;border-radius:50%;transition:all .7s ease-out}#page-lotto .ball.drop{bottom:10px}#page-lotto .ball>div{position:absolute;width:100%;height:100%;border-radius:50%}#page-lotto .ball>div>span{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:34.28571px;height:34.28571px;border-radius:50%;text-align:center;line-height:30px;font-size:21px;color:#202020;font-weight:700;background:#fff;display:flex;align-items:center;justify-content:center}#page-lotto .ball.blue{background:linear-gradient(90deg,#536976,#292e49)}#page-lotto .ball.red{background:linear-gradient(90deg,#da4453,#89216b)}#page-lotto .ball.green{background:linear-gradient(90deg,#00b09b,#96c93d)}#page-lotto .ball.yellow{background:linear-gradient(90deg,#ffe259,#ffa751)}#page-lotto .ball.grey{background:linear-gradient(90deg,#5c5c5c,#3d3d3d)}",""])},294:function(t,n,e){"use strict";e.r(n);var o=e(236).a,r=(e(282),e(23)),component=Object(r.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"page-lotto"}},[e("section",{staticClass:"banner-cont container-fluid"},[e("img",{staticClass:"banner-sub-img",attrs:{src:t.logo}})]),t._v(" "),e("section",{staticClass:"container-fluid",attrs:{id:"lotto"}},[e("div",{staticClass:"text-left container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-9"},[e("div",{staticClass:"resultheader"},[t.didLoad?e("div",{staticClass:"row"},[e("h4",[t._v("\n                "+t._s(t.$t("期号"))+"：\n                "),e("span",{staticClass:"txtbold",attrs:{id:"Clock"}},[e("span",{staticClass:"txtbold"},[t._v(t._s(t.item.expect)+", "+t._s(t.item.opentime))])])]),t._v(" "),e("div",{staticClass:"balls small-12 medium-3 columns",attrs:{id:"balls-"+t.gameId}},t._l(t.item.codes,function(code){return e("div",{staticClass:"ball yellow"},[e("div",[e("span",[t._v(t._s(code))])])])}),0)]):t._e()])]),t._v(" "),e("div",{staticClass:"col-md-3 resultheader"},[e("h4",{staticClass:"resulttxt2"},[t._v(t._s(t.$t("距离下次开彩"))+"\n          "),t.alarm?e("b-button",{attrs:{variant:"light",size:"sm"},on:{click:t.toggleAlarm}},[e("fa",{attrs:{icon:["fas","bell"]}})],1):t._e(),t._v(" "),t.alarm?t._e():e("b-button",{attrs:{variant:"light",size:"sm"},on:{click:t.toggleAlarm}},[e("fa",{attrs:{icon:["fas","bell-slash"]}})],1)],1),t._v(" "),t.didLoad?e("div",{staticClass:"countdown"},[t._v(t._s(t.countdown))]):t._e()])])])]),t._v(" "),e("section",{staticClass:"lotto-history container-fluid"},[e("div",{staticClass:"text-center container"},[e("h3",[t._v(t._s(t.$t("历史开彩清单")))])]),t._v(" "),e("div",{staticClass:"table-responsive container"},[e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",{staticClass:"d-none d-sm-block"},[t._v("#")]),t._v(" "),e("th",{staticClass:"th-sm"},[t._v(t._s(t.$t("编号")))]),t._v(" "),e("th",{staticClass:"th-sm"},[t._v(t._s(t.$t("日期")))]),t._v(" "),e("th",{staticClass:"th-sm"},[t._v(t._s(t.$t("期号")))])])]),t._v(" "),e("tbody",t._l(t.historiesList,function(n,o){return e("tr",{key:o},[e("th",{staticClass:"d-none d-sm-block",attrs:{scope:"row"}},[t._v(t._s(o+1))]),t._v(" "),e("td",[t._v(t._s(n.expect))]),t._v(" "),e("td",[t._v(t._s(n.opentime))]),t._v(" "),e("td",[e("div",{staticClass:"balls small-12 medium-3 columns"},t._l(n.codes,function(n){return e("div",{staticClass:"ball grey"},[e("div",[e("span",[t._v(t._s(n))])])])}),0)])])}),0)])]),t._v(" "),e("div",{staticClass:"ctrl-btns"},[e("b-button",{staticClass:"btn-more",attrs:{size:"lg",variant:"dark"},on:{click:t.getHistories}},[t._v(t._s(t.$t("查看更多")))])],1)])])},[],!1,null,null,null);n.default=component.exports}}]);
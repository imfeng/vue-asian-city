<template>
  <div id="page-lotto">
    <section class="banner-cont container-fluid">
      <!-- <div class="banner-bg-img"></div> -->
      <img class="banner-sub-img" :src="logo">
    </section>
    <section id="lotto" class="container-fluid">
      <div class="text-left container">
        <div class="row">
          <div class="col-md-9">
            <div class="resultheader">
              <div v-if="didLoad" class="row">
                <h4>
                  {{$t('期号')}}：
                  <span id="Clock" class="txtbold">
                    <span class="txtbold">{{ item.expect }}, {{ item.opentime }}</span>
                  </span>
                </h4>
                <div v-bind:id="'balls-'+gameId" class="balls small-12 medium-3 columns">
                  <div class="ball stand yellow" v-for="code in item.codes">
                    <div>
                      <span>{{code}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        <div class="col-md-3 resultheader">
          <h4 class="resulttxt2">{{$t('距离下次开彩')}}
            <button @click="toggleAlarm" type="button" class="btn btn-light btn-sm">
              <fa v-if="alarm" class="" :icon="['fas', 'bell']" />
              <fa v-else class="" :icon="['fas', 'bell-slash']" />
            </button>

          </h4>
          <div v-if="didLoad" class="countdown">{{ countdown }}</div>
        </div>
        </div>
      </div>
    </section>
    <section class="lotto-history container-fluid">
      <div class="text-center container">
        <h3>{{$t('历史开彩清单')}}</h3>
      </div>

      <div class="table-responsive container">
        <!--Table-->
        <table class="table">
          <!--Table head-->
          <thead>
            <tr>
              <th class="d-none d-sm-block">#</th>
              <th class="th-sm">{{$t('编号')}}</th>
              <th class="th-sm">{{$t('日期')}}</th>
              <th class="th-sm">{{$t('期号')}}</th>
            </tr>
          </thead>
          <!--Table head-->

          <!--Table body-->
          <tbody>
            <tr v-for="(hitem, key) in historiesList" :key="key">
              <th class="d-none d-sm-block" scope="row">{{key+1}}</th>
              <td>{{hitem.expect}}</td>
              <td>{{hitem.opentime}}</td>
              <!-- <td>{{hitem.opencode}} </td> -->
              <td>
                <div class="balls small-12 medium-3 columns">
                  <div class="ball grey" v-for="hcode in hitem.codes">
                    <div>
                      <span>{{hcode}}</span>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
          <!--Table body-->
        </table>
        <!--Table-->
      </div>
      <div class="ctrl-btns">
        <b-button @click="getHistories" class="btn-more" size="lg" variant="dark">{{$t('查看更多')}}</b-button>
        <!-- <b-button block variant="primary">查看更多...</b-button> -->
      </div>
    </section>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue';
// import LottoSingle  from '~/components/LottoSingle.vue';
export default {
  head () {
    return {
      title: '亚洲娱乐网 - ' + this.title,
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'X-UA-Compatible', content:'ie=edge' },

        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: this.title + '祝您中奖' }
      ],

      script: [

      ]
    };
  },
  components: {},
  data: function() {
    return {
      opt: {},
      $ball: {},
      isRotating: false,
        alarm: false,
        audio: null,
      logo: "",
      historyCnt: 0,
      historiesList: [],
      didLoad: false,
      title: "",
      gameId: null,
      interval: 0,
      test: "1",
      maplist: [{ type: "A1" }, { type: "A2" }, { type: "A3" }],
      item: {},
      catlist: [],
      countdownRemain: -1,
      volume: 0.5
    };
  },
  methods: {
    counting: function() {
      let expireTime =
        new Date(this.item.opentime).getTime() + this.item.interval * 1000;
      let now = new Date().getTime();

      this.countdownRemain = expireTime - now;
      //? seems no need excepttion handler, itll back to here  :bind=opentime
      if (this.countdownRemain < 0) {
        //? <999
        // this.countdownRemain = 0;
        this.updateApi();
        this.ballRotaing(true);
      }
      if (this.countdownRemain < 10001) {
        if(this.alarm) {
          this.audio.play();  
        };
        if(!this.isRotating) { this.ballStandbyOut()}
      }
    },
    updateApi: function() {
      this.$axios
        .$get("/vv16888/api.php?type=" + this.gameId)
        .then(res => {
          if (res instanceof Object) {
            let data = res["data"];
            if (data instanceof Array) {
              Object.assign(this.item, data[0]);
              this.item["codes"] = this.item["opencode"].split(",");
              this.item["currentSeries"] = this.item["expect"].slice(-3);
              this.didLoad = true;
              // this.getHistories(false);
              this.historiesList.unshift(this.item);
              //   setTimeout(() => {
              //     this.ballStartRotate('balls-'+this.gameId);
              //   }, 700);
              setTimeout(() => {
                this.ballStartRotate("balls-" + this.gameId);
              }, 500);
            }
          }
        });
    },
    getHistories: function(plus = true) {
      if(plus) { this.historyCnt += 20; }
      this.$axios
        .$get(
          "/vv16888/api.php?type=" +
            this.gameId +
            "&rows=" +
            this.historyCnt
        )
        .then(res => {
          if (res instanceof Object) {
            let data = res["data"];
            if (data instanceof Array) {
              
              this.historiesList = data.map(v => { v.codes = v.opencode.split(','); return v; });
            }
          }
        });
    },
    ballStartRotate: function(eid) {
      eid = "#" + eid;
      // console.log(eid);

      let $ball = $(eid + " > div");
      this.$ball = $ball;
      let gutter = 0;
      let opt = {
        // standard foundation guttering
        ballHold: $(eid).width() + gutter * 1.5, // width of the column they're sat in
        diameter: $ball.height() + 10, // width/height of ball + 10px for spacin
        perimeter: Math.PI, //  ratio of the circumference of a circle to its diameter
        // how many balls
        n: $ball.length,
        // max amount of balls per line, 11 is a nice fit
        total: 15,
        // base
        i: 0
      };
      opt.perimeter = opt.perimeter * opt.diameter;
      this.opt = opt;
      this.ballRotaing();
    },
    // get the balls rolling
    ballStandbyOut: function() {
      this.isRotating = true;
      this.$ball.each(function(index) {
        $(this).addClass('rotating-class');
      });
    },
    ballRotaing: function(isOut = false) {
      let $ball = this.$ball, opt = this.opt;
      let distance = opt.ballHold - opt.diameter * (opt.i % opt.total);
      let depth = Math.floor(opt.i / opt.total);
      let degree = (distance * 360) / opt.perimeter,
        // reusuable transition
        transition = ((!isOut) ? '1.5' : '0.75') + "s cubic-bezier(1.000, 1.450, 0.185, 0.850)",
        opacity = (!isOut) ? 1 : 0;
      let offset = (!isOut) ? 0 : 200;

      // rotate the balls
      this.$ball
        .each(function(index) {
          let that = $(this);
          if(isOut) {
            this.isRotating = false;
            that.removeClass('rotating-class');
          }
          setTimeout(function() {
            
            that.css({
              transition: transition,
              transform: "translateX(" + offset + "px)",
              top: depth * opt.diameter,
              opacity: opacity

              // rotate the inner text
            })
            .find("div")
            .css({
              transition: transition,
              transform: "rotate(" + 720 + "deg)"

              // on animation end, rotate all the balls back to their starting position
            })
            .one(
              "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function() {
                $(this).css("transform", "rotate(0)");
              }
            );
          }, index * 200);
          
        });
        // .eq(opt.i)
    },
    toggleAlarm: function() {
      console.log(this.alarm)
      this.alarm = !this.alarm;
    },
  },
  beforeDestroy: function() {
    this.audio.pause();
    clearInterval(this.intervalIns);
  },
  // ? no idea why cant use here
  // beforeMount: function() {
  //   this.updateApi();
  // },
  beforeMount() {
    // this.updateApi();
  },
  mounted: function() {
    console.log("===========mounted============");
    console.log(this.$route.params);
    const [slug, id, interval] = this.$route.params["id"].split("-");
    this.gameId = id;
    this.title = slug;
    this.interval = interval;
    this.logo = require("../../assets/images/" +
      this.$route.params["id"] +
      ".png");

    //* combine api countdown beep
    this.updateApi();
    let audio = new Audio(require('../../static/beep.mp3'));
    audio.volume = this.volume;
    this.audio = audio;
    console.log(audio);
 
    this.intervalIns = setInterval(() => {
      this.counting();
    }, 1000);

    this.getHistories();
  },
  computed: {
    countdown: function() {
      return this.countdownRemain<0? 0 : Math.floor(this.countdownRemain / 1000) + 1;
    }
  }
};
</script>

<style lang="scss">
#page-lotto {
  .banner-bg-img {
    min-height: 640px;
    background-image: url('../../assets/images/banner-bg.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .resultheader {
    button {
        padding: .1rem;
        margin-top: -6px;
    }
    text-align: center;
    h4 {
      display: block;
      width: 100%;
    }
    .balls {
      margin: 0.5rem 0 0.3rem 0;
      display: block;
      width: 100%;
    }
    padding: 1rem;
    .countdown {
      border: 3px solid #939393;
      padding: 0.2rem 0.4rem;
      border-radius: 5px;
      font-size: 2.3rem;
      margin: 0.3rem 0;
      color: #dc3737;
      width: 100%;
      display: block;
    }
  }

  .banner-cont {
    // min-height: 330px;
    text-align: center;
  }
  .banner-sub-img {
    height: 330px;
    width: auto;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
  }
  .banner-cont.container-fluid {
    background-color: #2a2b2b;
  }
  .lotto-history {
    h3 {
      font-size: 2.5rem;
      margin: 1.6rem 0;
    }
    background-color: white;
    .ctrl-btns {
      text-align: center;
      margin-bottom: 1rem;
    }

    @media (max-width: 767.9px) {
      .table th, .table td {
        display: inline-block;
      }
    }
  }
  #lotto.container-fluid {
    background-color: #f4f4f4;
  }

  .banner-img {
    width: 100%;
  }
  .content {
    /* background-color:  #0f1314; */
    background-color: #1a120f;
  }
  /**/

  $small-space: 5px;
  $medium-space: 20px;
  $large-space: 40px;
  $xlarge-space: 60px;
  $lottoball: 45px;

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    $lottoball: 60px;
  }
  // [id^=balls-] {
  //   min-height: 110px;
  //   width: 100%;
  //   position: relative;
  // }
  .ball {
    &.stand {
      opacity: 0;
      transform: translateX(-200px);
    }
    position: relative;
    display: inline-block;
    margin: 5px;
    // opacity: 0;
    //   opacity: 0;
    // left: -($lottoball * 1.5);
    // transform: translateX(-200px);

    //   position: absolute;
    //   bottom: 55px;

    width: $lottoball;
    height: $lottoball;
    background: #004e99;
    border-radius: 50%;
    transition: all 0.7s ease-out;

    &.drop {
      bottom: 10px;
      //transition: 2s cubic-bezier(1.000, 1.450, 0.185, 0.850);
    }
    > div {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      // the white number holder
      > span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: ($lottoball / 1.75);
        height: ($lottoball / 1.75);
        border-radius: 50%;
        text-align: center;
        line-height: ($lottoball / 2);
        font-size: 21px;
        color: #202020;
        font-weight: bold;
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &.blue {
      background: linear-gradient(to right, #536976, #292e49);
    }
    &.red {
      background: linear-gradient(to right, #da4453, #89216b);
    }
    &.green {
      background: linear-gradient(to right, #00b09b, #96c93d);
    }
    &.yellow {
      background: linear-gradient(to right, #ffe259, #ffa751);
    }
    &.grey {
      background: linear-gradient(to right, #5c5c5c, #3d3d3d);
    }
  }
}
</style>

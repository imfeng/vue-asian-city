<template>
  <div class="col-lg-4 ltt-cont" :key="gameId">
    <div class="agileits-services-grids mt-lg-0 mt-md-0 mt-5">
      <template v-if="!didLoad">
        <b-spinner class="ltt-spinner" variant="primary" label="Spinning"></b-spinner>
      </template>
      <template v-else>
        <p class="ltt-seris">{{item.expect}}</p>
        <p
          class="ltt-seris-desc"
        >全天{{item.maxSeries}}期 当前{{item.currentSeries}}期 剩余{{item.maxSeries-item.currentSeries}}期</p>
        <div class="ltt-icons">
          <b-button variant="link" size="sm">
            <fa :icon="['fas', 'info']"/>
          </b-button>
          <b-button variant="link" size="sm">
            <fa :icon="['fas', 'bell']"/>
          </b-button>
        </div>
        <h4 class="ltt-title mt-4 mb-1">
          {{item.title}}
          <img class="countdown-img" :src="item.cimg">
        </h4>

        <!-- <p>{{item.opencode}}</p> -->

        <div v-if="item.codes" class="row">
          <div v-bind:id="'balls-'+gameId" class="small-12 medium-3 columns">
            <div class="ball yellow" v-for="code in item.codes">
              <div>
                <span>{{code}}</span>
              </div>
            </div>
          </div>
        </div>
        <p class="ltt-time">{{item.opentime}}</p>
        <p class="ltt-countdown">下期倒数：{{ countdown }}</p>
        <!-- <button @click="ballStartRotate('balls-'+item.gameId)">click</button> -->
      </template>
    </div>
  </div>
  <!-- <div class="ball blue">
    <div><span>7</span></div>
  </div>
  <div class="ball green">
    <div><span>48</span></div>
  </div>
  <div class="ball red">
    <div><span>15</span></div>
  </div>
  <div class="ball yellow">
    <div><span>22</span></div>
  </div>-->
</template>

<script>
export default {
  props: ["gameId", "title", "interval"],
  data() {
    let maxSeries = 0;
    switch (this.interval) {
      case "75":
        maxSeries = 961;
        break;
      case "120":
        maxSeries = 601;
        break;
      case "300":
        maxSeries = 241;
        break;
      default:
        break;
    }
    return {
      countdownRemain: 998000,
      volume: 0.5,
      didLoad: false,
      item: {
        maxSeries: maxSeries,
        currentSeries: 0,
        cimg: require("~/assets/images/c" + this.interval + ".png"),
        title: this.title,
        gameId: this.gameId
      }
    };
  },
  beforeMount() {
    this.updateApi();
  },
  mounted() {
    var audio = new Audio("beep.mp3");
    audio.volume = this.volume;

    setInterval(() => {
      let expireTime =
        new Date(this.item.opentime).getTime() + this.item.interval * 1000;
      let now = new Date().getTime();

      this.countdownRemain = expireTime - now;
      if (this.countdownRemain < 9000) {
        audio.play();
      }
      //? seems no need excepttion handler, itll back to here  :bind=opentime
      if (this.countdownRemain < 0) {
        //? <999
        // this.countdownRemain = 0;
        this.updateApi();
      }
    }, 1000);
  },
  methods: {
    ballStartRotate: function(eid) {
      eid = "#" + eid;
      // console.log(eid);

      let $ball = $(eid + " > div");
      // console.log($ball)
      let gutter = 0;
      let opt = {
        // standard foundation guttering
        ballHold: $(eid).width() + gutter * 1.5, // width of the column they're sat in
        diameter: $ball.height() + 10, // width/height of ball + 10px for spacin
        perimeter: Math.PI, //  ratio of the circumference of a circle to its diameter
        // how many balls
        n: $ball.length,
        // max amount of balls per line, 11 is a nice fit
        total: $ball.length >= 5 ? 5 : 3,
        // base
        i: 0
      };
      opt.perimeter = opt.perimeter * opt.diameter;

      // the time between balls rolling
      let interval = setInterval(() => {
        // if we have number balls
        if (opt.i > opt.n) clearInterval(interval);
        // use the column var to gauage rolling width
        this.ballRotaing(opt, $ball);
        // up dee count
        opt.i++;
      }, 200);
    },
    // get the balls rolling
    ballRotaing: function(opt, $ball) {
      let distance = opt.ballHold - opt.diameter * (opt.i % opt.total);
      let depth = Math.floor(opt.i / opt.total);
      var degree = (distance * 360) / opt.perimeter,
        // reusuable transition
        transition = "2s cubic-bezier(1.000, 1.450, 0.185, 0.850)",
        opacity = "1";

      // rotate the balls
      $ball
        .eq(opt.i)
        .css({
          transition: transition,
          transform: "translateX(" + 0 + "px)",
          top: depth * opt.diameter,
          opacity: opacity

          // rotate the inner text
        })
        .find("div")
        .css({
          transition: transition,
          transform: "rotate(" + degree + "deg)"

          // on animation end, rotate all the balls back to their starting position
        })
        .one(
          "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
          function() {
            $(this).css("transform", "rotate(0)");
          }
        );
    },
    updateApi: function() {
      // console.log(this.title + 'GET:');
      this.$axios
        .$get("/race168/vv16888/api.php?type=" + this.gameId)
        .then(res => {
          if (res instanceof Object) {
            let data = res["data"];
            if (data instanceof Array) {
              Object.assign(this.item, data[0]);
              // console.log(this.item);
              this.item["codes"] = this.item["opencode"].split(",");
              this.item["currentSeries"] = this.item["expect"].slice(-3);

              this.didLoad = true;
              setTimeout(() => {
                this.ballStartRotate("balls-" + this.gameId);
              }, 700);
            }
          }
        });
    }
  },
  computed: {
    countdown: function() {
      return this.countdownRemain<0? 0 : Math.floor(this.countdownRemain / 1000) + 1;
    }
  }
};
</script>

<style lang="scss">
.ltt-cont {
  margin-top: 2.5rem;
}
.agileits-services-grids {
  position: relative;
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0px 0px 9px 3px rgba(255, 255, 255, 0.57),
    0px 2px 3px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 1.5rem 1rem;
  border-radius: 6px;
}
.ltt-spinner.text-primary {
  color: #ccb520 !important;
}
.ltt-icons {
  /* float: right; */
  position: absolute;
  right: 5px;
  top: 0;
  font-size: 0.7rem;
  .btn-link {
    color: #525252;
  }
  button {
    padding: 0.25rem 0.25rem;
  }
}
.ltt-seris {
  padding-bottom: 0;
  color: #3e3e3e;
  /* font-family: sans-serif; */
  font-weight: 600;
  line-height: 0.5;
}
.ltt-countdown {
  color: red;
  font-weight: bold;
  font-size: 1.2rem;
}
.ltt-seris-desc {
  font-size: 0.5rem;
}
.countdown-img {
  // position: absolute;
  display: block;
  margin: 0 auto;
  width: 90px;
  right: -0.5rem;
  top: 0.5rem;
}
h4.ltt-title {
  position: relative;
  font-family: "Noto Sans SC Sliced", sans-serif;
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 1;
  text-transform: CAPITALIZE;
  letter-spacing: -0.015em;
  color: #ccb520;
  text-shadow: -2px 0px 5px #f6f2d5;
}

$small-space: 5px;
$medium-space: 20px;
$large-space: 40px;
$xlarge-space: 60px;
$lottoball: 40px;

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
  $lottoball: 60px;
}
.ltt-cont [id^="balls-"] {
  // min-height: 110px;
  width: 100%;
  position: relative;
}
.ltt-cont {
  // Extra small devices (portrait phones, less than 576px)
  @media (max-width: 767.98px) {
    $lottoball: 60px;
    .ball {
      left: -($lottoball * 1.5);
      width: $lottoball;
      height: $lottoball;
      > span {
        width: ($lottoball / 1.75);
        height: ($lottoball / 1.75);
        line-height: ($lottoball / 2);
      }
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    $lottoball: 40px;
    .ball {
      left: -($lottoball * 1.5);
      width: $lottoball;
      height: $lottoball;
      > span {
        width: ($lottoball / 1.75);
        height: ($lottoball / 1.75);
        line-height: ($lottoball / 2);
      }
    }
  }
  .ball {
    // position: relative;
    display: inline-block;
    margin: 5px;
    opacity: 0;
    left: -($lottoball * 1.5);
    // position: absolute;
    bottom: 55px;
    transform: translateX(-200px);
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
        font-size: 14px;
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
  }
}
</style>

<template>
  <div class="lotto-api">
    <!-- ! nav should have padding  -->
    <h1>no-use</h1>
    <h1>{{apiServer}}</h1>
    <pre>here u r RAW</pre>
    <pre> 
      {{lottos.opencode}}
      <!-- 期號 -->
      {{ lottos.expect }} 
      {{lottos.opentime}}
      {{lottos.interval}}
    </pre>
    <h1 class="timer">倒數：{{countdownTimeRemain}}</h1>
    <!-- TODO: 歷史資料呈現  (pre tag 直接json噴出來，table (tr/td)顯示)  -->
    <!-- TODO: 聲音開關? vuex? -->
    <section>
      <!-- lotto num balls -->
      <div class="lotto-num" :v-for="e in lottoNum">{{ e }}</div>
    </section>
    <!-- countdown -->
    <!-- TODO timer count distance till interval end -->
    <div class="timer">{{ countdownTimeRemain }}</div>
  </div>
</template>

<script>
export default {
  props: ["apiServer", "lottoType", "rows"],
  data() {
    return {
      countdownTimeRemain: 75, // lol
      // countdownMin: 1,
      // countdownSec: 15,
      lottos: {
        //! fake data
        // endTime: "14400",
        // expect: "2019041200437",
        // gameId: "A1",
        // interval: "75",
        // no: 1,
        // opencode: "8,10,4,7,5,3,1,6,2,9",
        // opendate: "20190412",
        // opentime: "2019-04-12 17:05:01",
        // opentimestamp: 1555059901,
        // startTime: "28800",
        // type: "A"
        endTime: "0",
        expect: "0",
        gameId: "0",
        interval: "0",
        no: 1,
        opencode: "?",
        opendate: "0",
        opentime: "0",
        opentimestamp: 1555059901,
        startTime: "0",
        type: "A"
      }
    };
  },
  beforeMount() {
    this.updateApi();
  },
  mounted() {
    // TODO : setInterval 1000ms update time
    setInterval(() => {
      let expireTime =
        new Date(this.lottos.opentime).getTime() + this.lottos.interval * 1000;
      let now = new Date().getTime();

      this.countdownTimeRemain = expireTime - now;
      //? seems no need excepttion handle, itll back to here  :bind=opentime
      if (this.countdownTimeRemain < 0) { //? <999
        // this.countdownTimeRemain = 0;
        this.updateApi();
      }
    }, 1000);
  },
  methods: {
    // todo: time's up call update() => lottos. $data
    // todo: if update() => data same reupdate in 100ms?
    // todo: count down beep-sound
    //    // todo: VUEX may solve too many update at same time (exactly only 5, async can handle it?)

    // call api update latest lotto data
    updateApi: function() {
      this.$axios
        .$get(this.apiServer + "/race168/vv16888/api.php?type=A1")
        .then(res => {
          console.log(res);
          if (res instanceof Object) {
            let data = res["data"];
            if (data instanceof Array) {
              this.lottos = data[0];
              console.log(this.lottos);
            }
          }
        });
    }
  },
  computed: {
    lottoNum: function() {
      return this.lottos.opencode.split(",");
      //   .sort((a, b)=>  a - b)
      //? may must not sort
    },
    countdownTimeRemain: function() {
      // return new Date(this.lottos.opentime).getTime() + this.lottos.interval * 1000
    }
  }
};
</script>

<style>
.lotto-api {
  display: inline-block;
}
</style>

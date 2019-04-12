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
    <!-- TODO: 歷史資料呈現  (pre tag 直接json噴出來，table (tr/td)顯示)  -->
    <!-- TODO: 聲音開關? vuex? -->
    <section>
      <!-- lotto num balls -->
      <div class="lotto-num" v-for="e in lottoNum" :key>{{ e }}</div>
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
      countdownTimeRemain: 75,
      countdownMin: 1,
      countdownSec: 15,
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
        //   @lottos {"data":[{"no":1,
        // "expect":"2019041200391",
        //* "opencode":"8,6,1,7,10,5,2,4,9,3",
        //* "opentime":"2019-04-12 16:07:30",
        // "opentimestamp":1555056450,
        // "opendate":"20190412",
        // "type":"A"
        // ,"gameId":"A1",
        // "startTime":"28800",
        // "endTime":"14400",
        //* "interval":"75"
        // }],"rows":1}
      }
    };
  },
  mounted() {
    // ! meth1    application/json
    // this.$axios.get("/api/race168/vv16888/api.php?type=A1").then(res => {
    //   console.log(res);
    // });
    // ! meth2
    
    // fetch(this.apiServer + "/race168/vv16888/api.php?type=A1", {
    //   method: "GET",
    //   mode: "no-cors",
    // //   body: JSON.stringify()//data
    // })
    //   .then(res => console.log(res))
    //   .then(data => {
    //     // console.log(data);
    //   });
    this.$axios.$get(this.apiServer + "/race168/vv16888/api.php?type=A1")
    .then(res => {
      console.log(res);
      if(res instanceof Object) {
        data = res['data'];
        if(data instanceof Array) {
          this.lottos = data[0];
          console.log(this.lottos);
        }
      }
    });
    // ! meth 3
    // const url = this.apiServer + '?type=A1';
    // fetch(url, {mode: 'no-cors'}) // for local test use-only
    // // .then(response => response.json())
    // .then(data=> {
    //   //this.lottos = data
    //   console.log(data)
    //   //   this.lottos = ['asd','asd','asd']
    // })

    // TODO : setInterval 1000ms update time
  },
  methods: {
    // todo: time's up call update() => lottos. $data
    // todo: if update() => data same reupdate in 100ms?
    // todo: count down beep-sound
    // todo: VUEX may solve too many update at same time (exactly only 5, async can handle it?)
  },
  computed: {
    lottoNum: function() {
      return this.lottos.opencode.split(",");
      //   .sort((a, b)=>  a - b)
      //? may must not sort
    },
    expireTime: function() {
      return new Date(lottos.opentime).getTime()
    }
  }
};
</script>

<style>
.lotto-api {
  display: inline-block;
}
</style>

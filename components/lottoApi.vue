<template>
  <div class="lotto-api">
    <!-- ! nav should have padding  -->
    <h1>no-use</h1>
    <h1>{{apiServer}}</h1>
    <pre>hey</pre>
  </div>
</template>

<script>
export default {
  props: ["apiServer", "lottoType", "rows"],
  data() {
    return {
      lottos: []
      //   @lottos {"data":[{"no":1,
                          // "expect":"2019041200391",
                          // "opencode":"8,6,1,7,10,5,2,4,9,3",
                          // "opentime":"2019-04-12 16:07:30",
                          // "opentimestamp":1555056450,
                          // "opendate":"20190412",
                          // "type":"A"
                          // ,"gameId":"A1",
                          // "startTime":"28800",
                          // "endTime":"14400",
                          // "interval":"75"
            // }],"rows":1}
    };
  },
  mounted() {
    // ! meth1    application/json
    // this.$axios.get("/api/race168/vv16888/api.php?type=A1").then(res => {
    //   console.log(res);
    // });
    // ! meth2
    // fetch("/api/race168/vv16888/api.php?type=A1", {
    //   method: "GET",
    //   headers: {
    //     "Content-type": "text/html"
    //     // token: ""
    //   },
    //   mode: "no-cors",
    // //   body: JSON.stringify()//data
    // })
    //   .then(res => console.log(res))
    //   .then(data => {
    //     // console.log(data);
    //   });
    // ! meth 3
    // console.log(this.apiServer + '?type=A1')
    // fetch(this.apiServer + '?type=A1'
    // , {mode: 'no-cors'}) // for local test use-only
    // .then(response => response.json())
    // .then(data=> {
    //     this.lottos = data
    //   console.log(data)
    //   //   this.lottos = ['asd','asd','asd']
    // })
  },
  methods:{
    // todo: time's up call update()
    // todo: if update() => data same reupdate in 100ms?
    // todo: count down beep-sound
  }
};
</script>

<style>
.lotto-api {
  display: inline-block;
}
</style>

<template>
<div class="content">
  <section class="banner-cont container-fluid">
    <img class="banner-img" src="../assets/images/banner-2.jpg" />
  </section>
  	<div class="agileits-services" id="services">
		  <div class="container">
		   <h2 class="heading text-capitalize"> 热门彩种 </h2>
		   <!-- <p class="subs mt-4">Proin ac fermentum est. Cras mi ipsum, consectetur.</p> -->
       <!-- <p class="centerd cat-logo"><img src="../assets/images/airship.png" alt=""></p> -->
          <div class="agileits-services-row row pt-md-5 pb-5  text-center">
            <LottoOne gameId="A1" title="极速赛车" interval="75"/>
            <LottoOne gameId="A2" title="极速赛车" interval="120"/>
            <LottoOne gameId="A3" title="极速赛车" interval="300"/>
            <LottoOne gameId="B1" title="亚洲飞艇" interval="75"/>
            <LottoOne gameId="B2" title="亚洲飞艇" interval="120"/>
            <LottoOne gameId="B3" title="亚洲飞艇" interval="300"/>
            <LottoOne gameId="C1" title="亚洲快3" interval="75"/>
            <LottoOne gameId="C2" title="亚洲快3" interval="120"/>
            <LottoOne gameId="C3" title="亚洲快3" interval="300"/>
            <LottoOne gameId="D1" title="亚洲时时彩" interval="75"/>
            <LottoOne gameId="D2" title="亚洲时时彩" interval="120"/>
            <LottoOne gameId="D3" title="亚洲时时彩" interval="300"/>
            <LottoOne gameId="E1" title="亚洲11选5" interval="75"/>
            <LottoOne gameId="E2" title="亚洲11选5" interval="120"/>
            <LottoOne gameId="E3" title="亚洲11选5" interval="300"/>



          </div>
<!--             
			<p class="subs mb-4">Proin ac fermentum est. Cras mi ipsum, consectetur?</p>
			<a @click="getd" class="banner-button btn">My recent work</a> -->
    </div>
	</div>
  <!-- <section class="container">
    <div>
      <logo />
      <h1 class="title">
亞洲娛樂城
      </h1>
      <h2 class="subtitle">
        20190408
      </h2>
    </div>
  </section> -->
</div>
  
</template>

<script>
import Logo from '~/components/Logo.vue';
import LottoOne  from '~/components/LottoOne.vue';
export default {
  components: {
    Logo, LottoOne
  },  
  data: function() {
    return {
      test: '1',
      maplist: [
        {type: 'A1'}, {type: 'A2'}, {type: 'A3'},
      ],
      catlist: [
     
      ]
    }
  },
  methods: {
    getd: function() {
      
    },

  },
  mounted: function() {
    console.log('===============================');
    
    
  },
  created: function () {
    this.catlist = [
      { "title": "极速赛车", "gameId":"A1", "interval":"75",
        "cimg": require("~/assets/images/c75.png"),
      },
      { "title": "极速赛车", "gameId":"A2", "interval":"120",
        "cimg": require("~/assets/images/c120.png"),
        },
      { "title": "极速赛车", "gameId":"A3", "interval":"300",
        "cimg": require("~/assets/images/c300.png"),
        },
      
    ];
    // console.log(this.$axios);

  }
}
</script>

<style lang="scss">
.banner-img {
  width: 100%;
}
.content {
  /* background-color:  #0f1314; */
  background-color:  #1a120f;
  
}


</style>

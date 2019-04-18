<template>
  <div class="content">
    <Banner />
    <div class="agileits-services" id="services">
      <div class="container">
        <h2 class="heading text-capitalize">{{$t('热门彩种')}} </h2>
        <div class="agileits-services-row row pt-md-5 pb-5  text-center">
            <LottoOne gameId="A1" title="亚洲赛车" interval="75" />
            <LottoOne gameId="A2" title="亚洲赛车" interval="120" />
            <LottoOne gameId="A3" title="亚洲赛车" interval="300" />
            <LottoOne gameId="B1" title="亚洲飞艇" interval="75" />
            <LottoOne gameId="B2" title="亚洲飞艇" interval="120" />
            <LottoOne gameId="B3" title="亚洲飞艇" interval="300" />
            <LottoOne gameId="C1" title="亚洲快3" interval="75" />
            <LottoOne gameId="C2" title="亚洲快3" interval="120" />
            <LottoOne gameId="C3" title="亚洲快3" interval="300" />
            <LottoOne gameId="D1" title="亚洲时时彩" interval="75" />
            <LottoOne gameId="D2" title="亚洲时时彩" interval="120" />
            <LottoOne gameId="D3" title="亚洲时时彩" interval="300" />
            <LottoOne gameId="E1" title="亚洲11选5" interval="75" />
            <LottoOne gameId="E2" title="亚洲11选5" interval="120" />
            <LottoOne gameId="E3" title="亚洲11选5" interval="300" />
        </div>
      </div>
    </div>
    <section class="logos">
      <h2 class="heading text-capitalize">{{$t('合作伙伴')}} </h2>

      <div class="logo"><img src="../assets/images/logos/ag.png" alt="ag gaming"></div>

      <div class="logo"><img src="../assets/images/logos/micro.png" alt="亚洲赛车"></div>

      <div class="logo"><img src="../assets/images/logos/night.png" alt="摇彩网"></div>

      <div class="logo"><img src="../assets/images/logos/oriental.png" alt="中奖"></div>

      <div class="logo"><img src="../assets/images/logos/in.png" alt="key iamge"></div>

      <div class="logo"><img src="../assets/images/logos/key2.png" alt="key iamge"></div>
      <div class="logo"><img src="../assets/images/logos/auth.png" alt="auth iamge"></div>
      <div class="logo"><img src="../assets/images/logos/ssl.png" alt="ssl iamge"></div>
      <div class="logo"><img src="../assets/images/logos/kroo.png" alt="casino iamge"></div>
    </section>
  </div>

</template>

<script>
// import Logo from '~/components/Logo.vue';
import LottoOne  from '~/components/LottoOne.vue';
import Banner from '~/components/Banner.vue'
export default {
  head: {
    title: '亚洲赛车 - 摇彩开奖首页',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content:'ie=edge' },
  
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '祝您中奖，好处多多，有鉴于市场转变，彩种额外增加高频玩法，亚洲赛车，亚洲飞艇，亚洲快三，亚洲时时彩，亚洲11选5，分为75/125/300秒开奖，独家采用美商Smartplay Inc乱数摇码器，为第三方摇彩界之先驱！' },
       { hid: 'keywords', name: 'keywords', content: '亚洲娱乐网,亚洲赛车,亚洲飞艇,亚洲快3 ,亚洲时时彩,亚洲11选5,北京赛车,极速赛车,PK拾,开奖网,摇彩网' },

    ],

    script: [

    ]
  },
  components: {
    LottoOne, Banner
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
      { "title": "亚洲赛车", "gameId":"A1", "interval":"75",
        "cimg": require("~/assets/images/c75.png"),
      },
      { "title": "亚洲赛车", "gameId":"A2", "interval":"120",
        "cimg": require("~/assets/images/c120.png"),
        },
      { "title": "亚洲赛车", "gameId":"A3", "interval":"300",
        "cimg": require("~/assets/images/c300.png"),
        },
      
    ];
    // console.log(this.$axios);

  }
}
</script>

<style lang="scss">

section.logos {
  .heading {
    margin: 1rem 0;
  }
  background: #212121;
  // overflow: hidden;
  // max-height: 170px;
  text-align: center;
  padding: 1.5rem;
  .logo {
    display: inline-block;

    overflow: hidden;
    margin: .6rem .3rem;
    img {
      max-height: 120px;
    }
  }
}
  @media (min-width: 768px) {
    section.logos {
      
      .logo {
        
        img {
          max-height: 120px;
        }
      }
    }
  }
.content {
  /* background-color:  #0f1314; */
  background-color:  #1a120f;
  
}
  @media (max-width: 767.9px) {
    section.logos {
      padding: .5rem;
      .logo {
        padding: 1rem 1rem;
        margin: 1rem 0!important;
        img {
          max-height: 60px;
        }
      }
    }
  }

</style>

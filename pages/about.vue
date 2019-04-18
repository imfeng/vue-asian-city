<template>
    <div id="page-about">
      <Banner />
      <section class="container-fluid">
        <div class="agileits-services" id="services">
		      <h2 class="heading text-capitalize"> 关于我们 </h2>
          <div class="video">
            <video autoplay preload="auto" loop>
              <source src="../assets/lotto.mp4" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
              
          </div>
          <div class="content">
            <ol class="tt">
            <li>{{$t('ABOUT_ME_1')}}</li>
            <li>{{$t('ABOUT_ME_2')}}</li>
            <li>{{$t('ABOUT_ME_3')}}</li>
            <li>{{$t('ABOUT_ME_4')}}</li>
            <li>{{$t('ABOUT_ME_5')}}</li>
            <li>{{$t('ABOUT_ME_6')}}</li>
<div class="qrcodes row">
  <div class="col-md-4 col-sm-3">
    <img src="../assets/qrcodes/line.jpg" alt="line qrcode">
  </div>
  <div class="col-md-4 col-sm-3">
    <img src="../assets/qrcodes/qq.jpg" alt="qq qrcode">
  </div>
  <div class="col-md-4 col-sm-3">
    <img src="../assets/qrcodes/asian.jpg" alt="asian qrcode">
  </div>
</div>
            </ol>
          </div>
        </div>
        
      </section>
    </div>
</template>

<script>
import Banner from '~/components/Banner.vue'

export default {
  head: {
    title: '亚洲娱乐网 - 关于我们',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content:'ie=edge' },

      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '关于我们，本公司于2017022正式营运，是崭新且公正的第三方摇彩平台，本司于2009年经营第三分摇彩平台至今，一贯秉持公正，公开，创新三大理念！' },
             { hid: 'keywords', name: 'keywords', content: '亚洲娱乐网,关于我们' },

    ],
  },
  components: {
    Banner
  }
}
</script>

<style lang="scss">
#page-about {
  .video {
    // max-width: 700px;
    max-height: 310px;
    margin: 1rem auto;
    video {
      max-height: 100%;
      width: 450px;
      max-width: 90%;
    }
  }
.content {
  .tt {
    padding: 0 1rem;
    margin: 1rem auto;
    max-width: 600px;
    li {
      margin-left: 1.3rem;
      text-align: left;
      color: #e2e2e2;
      font-size: 1.2rem;
    }
  }
}
.container-fluid {
  background-color: #1a120f;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.qrcodes {
  
  img {
    margin-top: 1rem; 
    width: 100%;
  }
}

}
</style>

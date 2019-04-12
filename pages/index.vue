<template>
<div class="content">
  <section class="banner-cont container-fluid">
    <img class="banner-img" src="../assets/images/banner-2.jpg" />
  </section>
  	<div class="agileits-services" id="services">
		  <div class="container">
		   <h2 class="heading text-capitalize"> 热门彩种 </h2>
		   <p class="subs mt-4">Proin ac fermentum est. Cras mi ipsum, consectetur.</p>
            <div class="agileits-services-row row pt-md-5 pb-5  text-center">
                <div class="col-lg-4">
                    <div class="agileits-services-grids mt-lg-0 mt-md-0 mt-5">
                       <span class="fa fa-code"></span>
                        <h4 class="mt-4 mb-4">极速赛车 期号, 20190411698</h4>
                        <p>0804010206 0305100709</p>
                        <p>下一期倒数： 20190411699   00:00:22 </p>
                       
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="agileits-services-grids mt-lg-0 mt-5">
                        <span class="fa fa-copy"></span>
                        <h4 class="mt-4 mb-4">Adipisicing</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur.</p>
                    </div>
                </div>
                <div class="col-lg-4  mt-lg-0 mt-5">
                    <div class="agileits-services-grids">
                       <span class="fa fa-diamond"></span>
                       <h4 class="mt-4 mb-4">Sit amet</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur.</p>
                    </div>
                </div>
            </div>
			<p class="subs mb-4">Proin ac fermentum est. Cras mi ipsum, consectetur?</p>
			<a @click="getd" class="banner-button btn">My recent work</a>
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
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
  methods: {
    getd: function() {
      console.log('res');
      this.$axios.$request({
          method: 'get',
          url:'http://127.0.0.1:3000/test',
          // responseType: 'json'
          })
          .then(res => {
            console.log('res');
            console.log(res)
          });
    }
  },
  created: function () {
    
    // console.log(this.$axios);

  }
}
</script>

<style>
.banner-img {
  width: 100%;
}
.content {
  /* background-color:  #0f1314; */
  background-color:  #1a120f;
  
}
.agileits-services-grids {
    background: rgba(255, 255, 255, 0.86);
    box-shadow: 0px 0px 9px 3px rgba(255, 255, 255, 0.57), 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 3em 2em 3.5em 2em;
    border-radius: 6px;
}
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
} */
</style>

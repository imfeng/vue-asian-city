<template>
<div class="content">
  <section class="banner-cont container-fluid">
    <img class="banner-img" src="../assets/images/banner-cn.jpg" />
  </section>
  	<div class="agileits-services" id="services">
		  <div class="container">
		   <h2 class="heading text-capitalize"> 热门彩种 </h2>
		   <p class="subs mt-4">Proin ac fermentum est. Cras mi ipsum, consectetur.</p>
            <div class="agileits-services-row row pt-md-5 pb-5  text-center">
                <div class="col-lg-4">
                    <div class="agileits-services-grids mt-lg-0 mt-md-0 mt-5">
                       <span class="fa fa-code"></span>
                        <h4 class="mt-4 mb-4">Consectetur</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum inventore consectetur. </p>
                       
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
			<a href="#work" class="banner-button btn">My recent work</a>
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
  }
}
</script>

<style>
.banner-img {
  width: 100%;
}
.content {
  background-color: #0f1314;
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

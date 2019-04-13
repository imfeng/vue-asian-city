<template>
    <div id="page-about">
      <logo />
      <section class="container-fluid">
        <div class="agileits-services" id="services">
		      <h2 class="heading text-capitalize"> 关于我们 </h2>
          <div class="content">
            <ol class="tt">
            <li>本公司在英属维京群岛 British Virgin Islands注册为合法开彩公司</li>
            <li>本公司秉持公平公正公开的信念，全彩种采用合法的Smartplay Inc摇奖机开彩</li>
            <li>本公司拥有强大的工程团队，可以提供稳定的API和客制化系统制作</li>
            <li>目前与本公司合作的平台已达上百家，诚信开奖是本公司的最大核心理念</li>
            <li>连络我们 微信 </li>
            <li>欢迎加入我们的团队，共同创造无限未来</li>
            </ol>
          </div>
        </div>
        
      </section>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
#page-about {
.content {
  .tt {
    margin: 1rem auto;
    max-width: 600px;
    li {
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
}}
</style>

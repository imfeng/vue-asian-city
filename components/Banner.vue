<template>
  <section class="banner-cont container-fluid">
    <div class="banner-bg-img"></div>
    <div class="business-bg-img"></div>
    <img class="banner-img" src="../assets/images/banner-cn.jpg" alt="南韩娱乐网 vv7978.com" />
  </section>
</template>

<style lang="scss">
.banner-cont {
  .banner-img {
    width: 100%;
    z-index: 0;
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
  }
  .banner-bg-img {
    min-height: 570px;
    background-image: url('../assets/images/banner-cn.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .business-bg-img {
    height: 190px;
    background-image: url('../assets/images/business-all.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
@media (min-width: 768px) {
  .banner-cont {
    .banner-img {
      width: 100%;
    }
    .banner-bg-img {
      min-height: 530px;
      background-image: url('../assets/images/banner-cn.jpg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}
@media (max-width: 767.9px) {
  .banner-cont {
    overflow: hidden;
    .banner-img {
      width: auto;
      height: 270px;
      margin: 0 auto;
      // transform: translateX(-50%);
    }
    .banner-bg-img {
      min-height: 290px;
      background-image: url('../assets/images/banner-cn.jpg');
      background-position: center center;
    }
  }
}
</style>

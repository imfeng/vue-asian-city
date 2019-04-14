<template>
  <section class="banner-cont container-fluid">
    <div class="banner-bg-img"></div>
    <!-- <img class="banner-img" src="../assets/images/banner-cn2.jpg" /> -->
  </section>
</template>

<style lang="scss">

  .banner-cont {
    .banner-img {
      width: 100%;
    }
    .banner-bg-img {
      min-height: 640px;
      background-image: url('../assets/images/banner-cn.jpg');
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
            min-height: 640px;
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
        background-image: url('../assets/images/banner-cn2.jpg');
        background-position: center center;
        
      }
    }
  }
</style>

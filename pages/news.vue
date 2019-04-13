<template>
    <div id="page-news">
      <logo />
      <section class="container-fluid">
        <div class="agileits-services" id="services">
		      <h2 class="heading text-capitalize"> 最新消息 </h2>
          <div class="content">
            <div class="table-responsive">

            <!--Table-->
            <table class="table">

                <!--Table head-->
                <thead>
                <tr>
                    <!-- <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th> -->
                    <th class="th-sm">日期</th>
                    <th class="th-sm">公告</th>
                </tr>
                </thead>
                <!--Table head-->

                <!--Table body-->
                <tbody>
                    

                </tbody>
                <!--Table body-->

            </table>
            <!--Table-->

        </div>
        <div class="ctrl-btns">
             <b-button @click="getHistories" class="btn-more" size="lg" variant="dark">查看更多</b-button>
            <!-- <b-button block variant="primary">查看更多...</b-button> -->
        </div>
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
#page-news {
  .table {
    th {
      color: white;
    }
  }
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

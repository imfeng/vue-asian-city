<template>
    <div id="page-news">
  <!-- <Banner /> -->
      <section class="container-fluid">
        <div class="agileits-services" id="services">
		      <h2 class="heading text-capitalize"> 最新消息 </h2>
          <div class="content">
            <div class="table-responsive">
               <div class="overflow-auto">


    <!-- <p class="mt-3">Current Page: {{ currentPage }}</p> -->

    <b-table
      id="my-table"
      :fields="fields"
      :items="items"
      small
    ></b-table>
    <!--       :items="items"
      :per-page="perPage"
      :total-rows="rows"
      :current-page="currentPage" -->
    <b-pagination
      class="justify-content-center"
      size="sm"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"

      @change="pageChange"
    ></b-pagination>
    <!--       aria-controls="my-table" -->
  </div>

            <!--Table-->
            <table class="table">

                <!--Table head-->
                <thead>
                <tr>
                    <th>#</th>
                    <th class="th-sm">發佈日期</th>
                    <th class="th-sm">標題</th>
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
             <b-button class="btn-more" size="lg" variant="dark">查看更多</b-button>
            <!-- <b-button block variant="primary">查看更多...</b-button> -->
        </div>
          </div>
        </div>
        
      </section>
    </div>
</template>

<script>
import Banner from '~/components/Banner.vue';
import Paginate from '~/components/Paginate.vue';

export default {
  computed: {
      rows() {
        return this.items.length
      }
  },
  data() {
    return {
      pageCount: 10,
      rows: 100,
      perPage: 5,
      currentPage: 1,
      fields: [{ key: 'id', label: '#', },
        { key: 'title', label: '標題', },
        { key: 'date', label: '發佈日期', }],
      items: [
        { id: 1, title: 'Fred', date: '2019/12/12' },
        { id: 2, title: 'Fred', date: '2019/12/12' },
        { id: 3, title: 'Fred', date: '2019/12/12' },
        { id: 4, title: 'Fred', date: '2019/12/12' },
      ]
    }
  },
  methods: {
    pageChange: function(page) {
      console.log(page);
    },
    getNewsList: function() {
      
    },
    getSingleNew: function(id) {

    },

  },
  head: {
    title: '亚洲娱乐网 - 最新消息',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content:'ie=edge' },

      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '最新消息' }
    ],

    script: [

    ]
  },
  components: {
    Banner, Paginate
  }
}
</script>

<style lang="scss">
#page-news {
  .table-sm td {
    padding: 0.3rem;
    color: white;
}
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

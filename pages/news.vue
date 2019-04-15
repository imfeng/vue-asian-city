<template>
    <div id="page-news">
  <Banner />
      <section class="container-fluid">
        <div class="agileits-services" id="services">
		      <h2 class="heading text-capitalize"> 最新消息 </h2>
          <div class="content container">
           



    <!-- <p class="mt-3">Current Page: {{ currentPage }}</p> -->
<b-spinner v-if="!didLoad" class="ltt-spinner" variant="primary" label="Spinning"></b-spinner>
    <b-table
    responsive="true"
      id="my-table"
      class="table-responsive"
      :fields="fields"
      :items="items"
      :per-page="perPage"
      :total-rows="rows"
      :current-page="currentPage"
      small
    ></b-table>
    <b-pagination
      class="justify-content-center"
      size="sm"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      @change="pageChange"
      variant="dark"
    ></b-pagination>


        <!-- <div class="ctrl-btns">
             <b-button class="btn-more" size="lg" variant="dark">查看更多</b-button>
            <b-button block variant="primary">查看更多...</b-button>
        </div> -->
          </div>
        </div>
        
      </section>
    </div>
</template>

<script>
import Banner from '~/components/Banner.vue';
import Paginate from '~/components/Paginate.vue';

export default {

  data() {
    return {
      didLoad: false,
      pageCount: 10,
      rows: 0,
      perPage: 5,
      currentPage: 1,
      fields: [{ key: 'date', label: this.$i18n.t('Date'), },
        { key: 'title', label: this.$i18n.t('Title'), },
        { key: 'content', label: this.$i18n.t('Content'), }],
      items: [
        { content: '@@@@@@@@@@@@@@@@@@@@@@@@@@@dasdasddqwd qwd qwd qwd qw qwd wq dwq qdqwd qwdq wdq wd qwdq wd efwef wef @@@@@@@@@@@@@@@@@@',
          title: 'Fred asdasdasd asd asd asd as', date: '2019/12/12' },
        // { id: 2, title: 'Fred', date: '2019/12/12' },
        // { id: 3, title: 'Fred', date: '2019/12/12' },
        // { id: 4, title: 'Fred', date: '2019/12/12' },
      ]
    }
  },
  mounted() {
    this.$axios.$get('https://script.googleusercontent.com/macros/echo?user_content_key=ga1yf9_r2wIV3azl0ThhLCiUGMli4tYaE1u2mwma6JdBnlNhebRU7usqxZOua8kzIfOcUTuIgo4PF-_tblA0kmLKR2lIcFbim5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLQi37cmPYA1b6YjKqxNk5C807tFmmHRFSJBE6CjJNVXJu9VaB2OjQFHifCTaSiyb8LyN_VEIsoN&lib=MTQXupb0zB-PxNrobIabZL0_dEq4q8EAS')
    .then(res => {
      // console.log(res)
      // res = JSON.parse(res) || {};
      if(res['results']) {
        // this.items = res['results'];
        this.rows = res['rows'];
        this.didLoad = true;
        // this.rows = 
      }
    })
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
  h2.heading {
    margin: 2rem auto;
  }
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

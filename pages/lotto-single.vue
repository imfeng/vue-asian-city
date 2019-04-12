// TODO: change page by url #tag change
// TODO: get api
<template>
  <lottoApiVue :api-server="apiServer" lottoType="A1" rows="25"/>
</template>

<script>
import lottoApiVue from "../components/lottoApi.vue";
export default {
  components: {
    lottoApiVue
  },
  props: [],

  created() {
    this.aest();
  },
  // mounted: () => aest(),
  watch: {},
  data() {
    return {
      apiServer: "http://knem.chickenkiller.com/race168/vv16888/api.php"
    };
  },
  methods: {
    aest: function() {
      this.aTest = "aa";
      // console.log(this.apiServer)
    }
  }
};
</script>

<style>
</style>

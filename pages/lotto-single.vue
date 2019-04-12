// TODO: change page by url #tag change
// TODO: get api
<template>
<no-ssr placeholder="Loading...">
    <lottoApiVue :api-server="apiServer" lottoType="A1" rows="25"/>
</no-ssr>
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
      // apiServer: "http://knem.chickenkiller.com/race168/vv16888/api.php"
      apiServer: "/api-service"

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

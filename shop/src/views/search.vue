<template>
  <div style="height: 100vh;background-color: #f7f7f7">
    <div style="background-color: white">
      <Head></Head>
      <SearchHistory></SearchHistory>
    </div>
  </div>
</template>

<script>
  import Head from "./search/Head";
  import SearchHistory from "./search/SearchHistory";
    export default {
        name: "",
        components:{
          Head,
          SearchHistory
        },
    }
</script>

<style scoped>

</style>

<template>
  <div style="overflow: hidden">
    <Head></Head>
    <Middle></Middle>
    <Button></Button>
  </div>
</template>

<script>
  import Head from "./login/Head";
  import Middle from "./login/Middle";
  import Button from './login/Button'
  export default {
    name: 'Index',
    components:{
      Head,
      Middle,
      Button
    },
    data(){
      return{
      }
    },
    methods: {
    }
  }
</script>
<style scoped>
</style>

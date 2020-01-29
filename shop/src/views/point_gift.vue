<template>
  <div id="wrap">
    <div style="width: 100%;height: 44px;position: absolute;z-index: 999">
      <jd_top_wrap></jd_top_wrap>
    </div>
      <jd_head></jd_head>
      <jd_neck></jd_neck>
      <jd_body></jd_body>
      <jd_hair></jd_hair>
      <jd_foot></jd_foot>
  </div>
</template>

<script>
  import jd_top_wrap from "./Point_gift/jd_top_wrap";
  import jd_head from '@/views/Point_gift/jd_head'
  import jd_body from '@/views/Point_gift/jd_body'
  import jd_neck from '@/views/Point_gift/jd_neck'
  import jd_foot from '@/views/Point_gift/jd_foot'
  import jd_hair from '@/views/Point_gift/jd_hair'

  export default {
    name:'point_gift',
    components:{
      jd_top_wrap,
      jd_head,
      jd_neck,
      jd_body,
      jd_foot,
      jd_hair
    },
    data(){
      return{

      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #wrap{
    position: relative;
    box-sizing: border-box;
  }
</style>

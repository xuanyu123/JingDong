<template>
  <div id="wrap">
    <div id="imgone">

    </div>
    <div id="imgtwo">
      <jd_thigh></jd_thigh>
      <jd_shank></jd_shank>
    </div>
  </div>
</template>

<script>
  import jd_thigh from '@/views/Point_gift/jd_thigh'
  import jd_shank from '@/views/Point_gift/jd_shank'
  export default {
    name:'jd_body',
    components:{
      jd_thigh,jd_shank
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
  #wrap{
    width: 100vw;
    height: 35vh;
  }
  #wrap>#imgone{
    margin-top: 3vh;
    width: 100vw;
    height: 12vh;
    background-image: url(http://img12.360buyimg.com/mcoss/jfs/t1/106603/7/10717/70742/5e217978eaea02426/2f64b112991724d8.gif);
    background-size: 100vw 12vh;
    background-repeat: no-repeat;
  }
  #wrap>#imgtwo{
    width: 100vw;
    height: 23vh;
    background-image: url(http://img12.360buyimg.com/img/s750x304_jfs/t1/96627/16/10674/18291/5e203186e8dc2fc49/b955617c3d80e2d3.png);
    background-size: 100vw 23vh;
    background-repeat: no-repeat;
    position: relative;
    top: 0;
    left: 0;
  }
</style>

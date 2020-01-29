<template>
  <div id="wrap">
    <div id="top">
      <van-swipe :autoplay="5000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
  export default {
    name:'jd_jaw',
    data(){
      return{
        images: [
          'https://img12.360buyimg.com/mcoss/s710x206_jfs/t1/101554/6/10858/69367/5e23bd6fe6dbf1404/7e3bf20285069dff.jpg!q70.dpg.webp',
          'https://img14.360buyimg.com/mcoss/s710x206_jfs/t1/87289/11/10239/101211/5e1846c0e2aceef88/0bf410b8c2b30bf4.jpg!q70.dpg.webp'
        ],
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  #wrap{
    width: 100vw;
    height: 28vh;
    background: url(https://img12.360buyimg.com/jdphoto/jfs/t1/107253/8/2435/27836/5e05eb2bec07277ef/a6301a36c8fb49d1.png.webp);
    background-size: 100vw 30vh;
    background-repeat: no-repeat;
  }
  #wrap>#top{
    width: 90vw;
    height: 20vh;
    position: absolute;
    top: 13vh;
    left: 5vw;
  }
  #wrap>#top>div{
    width: 90vw;
    height: 20vh;
  }
  #wrap>#top>div>div>div{
    width: 90vw;
    height: 20vh;
  }
  #wrap>#top>div>div>div>img{
    width: 90vw;
    height: 16vh;
    border-radius: 1px;
    position: relative;
    top: 0;
    left: 0;
  }
</style>

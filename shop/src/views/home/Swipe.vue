<template>
  <div style="padding-top: 45px;text-align: center" id="go_top">
    <van-swipe  :autoplay="3000">
      <van-swipe-item  v-for="(image, index) in images" :key="index">
        <img style="width:350px;height: 140px;border-radius: 10px" :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        images: [
          'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/36958/34/5025/100639/5cbf5749Ee9fcfb22/b6eb36331095813a.jpg!cr_1125x445_0_171!q70.jpg.dpg',
          'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/107272/4/3830/149433/5e15cf9fE8c2f81ed/8355287a766a59ca.jpg!cr_1125x445_0_171!q70.jpg.dpg',
          'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/31746/32/1528/111163/5c500f8aEe3c6c0e7/0e1519939f544e8d.jpg!cr_1125x445_0_171!q70.jpg.dpg',
          'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/108149/1/2270/148750/5e056c4bE075a75a5/14044bf2fbc99daa.jpg!cr_1125x445_0_171!q70.jpg.dpg',
          'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/108327/22/4449/121914/5e1ea180E437aacfb/c9cdc73635fc8b2f.jpg!cr_1125x445_0_171!q70.jpg.dpg',
          'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/84950/39/9494/164222/5e0eaf9fEecca86ec/85c7874c12f58f39.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        ]
      }
    }
  }
</script>
<style scoped>
</style>

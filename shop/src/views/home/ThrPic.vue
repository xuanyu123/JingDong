<template>
  <div class="wrap">
    <van-swipe style="flex: 1;margin-left: 10px" :autoplay="5000" :duration="200">
      <van-swipe-item v-for="(image, index) in images1" :key="index">
        <img style="width: 109px;height: 83px" :src="image" />
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">
      </div>
    </van-swipe>
    <van-swipe style="flex: 1;margin-left: -8px" :autoplay="5000" :duration="200">
      <van-swipe-item v-for="(image, index) in images2" :key="index">
        <img style="width: 122px;height: 93px" :src="image" />
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">
      </div>
    </van-swipe>
    <van-swipe style="flex: 1;margin-left: 6px" :autoplay="5000" :duration="200">
      <van-swipe-item v-for="(image, index) in images3" :key="index">
        <img style="width: 109px;height: 83px" :src="image" />
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">
      </div>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        images1: [
          'https://m.360buyimg.com/mobilecms/s244x187_jfs/t1/108697/2/4711/39068/5e2181a2E515ded8d/1e0811b176196222.png!q70.jpg.dpg',
          'https://m.360buyimg.com/mobilecms/s244x187_jfs/t1/89630/39/10717/30860/5e214e70Ed23c2330/d3465fb609bd1151.png!q70.jpg.dpg',
          'https://m.360buyimg.com/mobilecms/s244x187_jfs/t1/98799/24/10653/32211/5e1ee6f9E759e32b0/1ac689d8c487eb53.png!q70.jpg.dpg'
        ],
        images2: [
          'https://m.360buyimg.com/mobilecms/s244x187_jfs/t1/89630/39/10717/30860/5e214e70Ed23c2330/d3465fb609bd1151.png!q70.jpg.dpg',
          'https://m.360buyimg.com/mobilecms/s244x187_jfs/t1/98799/24/10653/32211/5e1ee6f9E759e32b0/1ac689d8c487eb53.png!q70.jpg.dpg',
          'https://m.360buyimg.com/mobilecms/s244x187_jfs/t1/108697/2/4711/39068/5e2181a2E515ded8d/1e0811b176196222.png!q70.jpg.dpg',
        ],
        images3: [
          'https://m.360buyimg.com/mobilecms/s244x187_jfs/t1/98799/24/10653/32211/5e1ee6f9E759e32b0/1ac689d8c487eb53.png!q70.jpg.dpg',
          'https://m.360buyimg.com/mobilecms/s244x187_jfs/t1/108697/2/4711/39068/5e2181a2E515ded8d/1e0811b176196222.png!q70.jpg.dpg',
          'https://m.360buyimg.com/mobilecms/s244x187_jfs/t1/89630/39/10717/30860/5e214e70Ed23c2330/d3465fb609bd1151.png!q70.jpg.dpg',
        ],
      }
    }
  }
</script>
<style scoped>
  .wrap{
    width: 100%;
    height: 104px;
    background: #e45041;
    display: flex;
  }
</style>

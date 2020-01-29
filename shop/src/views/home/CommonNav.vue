<template>
  <div>
    <router-view />
    <van-tabbar route v-model="active" class="van-tabbar-item--active" type="fixed">
      <van-tabbar-item replace to="/">
        <img
          style="height: 46px;width: 60px"
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.active : icon.inactive"
        >
      </van-tabbar-item>
      <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/point_gift" icon="point-gift">京喜</van-tabbar-item>
      <van-tabbar-item info="5" icon="shopping-cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0,
        icon:{'active': 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png',
          'inactive': 'https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/81741/30/12345/4140/5d9c4b13E726f0a1e/82c582e7c375e4b3.png'},
        }
      }
    }
</script>
<style scoped>
  .van-tabbar-item--active {
    color: #f41206;
  }
</style>

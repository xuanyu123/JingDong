<template>
  <div>
    <router-view />
    <van-tabbar route v-model="active" class="van-tabbar-item--active" type="fixed">
      <van-tabbar-item replace to="/">
        <span>首页</span>
        <img
          style="height: 18px;width: 18px"
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.active : icon.inactive"
        >
      </van-tabbar-item>
      <van-tabbar-item replace to="/classify" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/point_gift" icon="point-gift">京喜</van-tabbar-item>
      <van-tabbar-item replace to="/order" info="4" icon="shopping-cart">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/me" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0,
        icon:{'active': '/static/img/jd_icon0.svg',
          'inactive': '/static/img/jd_icon.svg'},
        }
      }
    }
</script>
<style scoped>
  .van-tabbar-item--active {
    color: #f41206;
  }
</style>

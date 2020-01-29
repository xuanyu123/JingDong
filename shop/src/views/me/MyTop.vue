<template>
  <div id="top">
      <van-nav-bar title="我的京东" left-arrow @click-left="onClickLeft">
        <van-icon name="ellipsis" slot="right" />
      </van-nav-bar>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods:{
      onClickLeft() {
      this.$router.push({path:'/'})
    },
    onClickRight() {
      Toast('按钮');}
    },
  }
</script>

<style>
  #top{
    width: 100vw;
    height: 45px;
  }
  .van-nav-bar .van-icon{
    color: black;
  }
  .van-nav-bar__left .van-nav-bar__text{
    color: #000000;
  }
</style>

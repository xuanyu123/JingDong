<template>
      <div>
        <van-nav-bar title="京喜" left-arrow @click-left="onClickLeft">
          <van-icon size="25px" name="ellipsis" slot="right" />
        </van-nav-bar>
      </div>
</template>

<script>
    import { Toast } from 'vant';

    export default {
        name: "jd_top_wrap",
        methods: {
          onClickLeft() {
            this.$router.push({path:'/'});
          }
        }
    }
</script>

<style scoped>
  .van-nav-bar .van-icon {
    color: #000000;
  }
  .van-nav-bar__text{
    color: black;
  }
  .van-nav-bar__arrow {
    font-size: 20px;
  }
</style>

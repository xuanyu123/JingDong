<template>
    <div>
      <router-link to='/'><van-nav-bar left-text="返回" left-arrow/></router-link>
      <span class="title_txt">京东登录注册</span>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
</template>

<script>
  import { Toast } from 'vant';

  export default {
    methods: {
      onClickLeft() {
        Toast('返回');
      },
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
  .title_txt{
    position: fixed;
    margin-left: 150px;
    margin-top: -34px;
    z-index: 99;

  }
</style>

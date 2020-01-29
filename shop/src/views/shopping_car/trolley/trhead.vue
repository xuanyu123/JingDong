<template>
  <div class="top">
    <van-nav-bar style="background: url(../../../assets/7.png);background-size: cover;"
      title="填写订单"
      left-text
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
  import { Toast } from 'vant';
  export default{
    name:'',
    data(){
      return{
        isLoading: false
      }
    },
    methods:{
      onClickLeft() {
            this.$router.push({path:'/order'})
          },
    }
  }
</script>

<style scoped>
  .top{
    background: url(../../../assets/7.png);
    background-size: cover;
  }
</style>

<template>
  <div class="wrap">
    <p>支付方式</p>
    <div class="logo"><van-icon style="margin: auto;" name="weapp-nav" color="#6a6a6a" size="15px"/></div>
    <p>在线支付</p>

  </div>
</template>

<script>
  export default{
    name:'',
    data(){
      return{
      }
    },
    methods:{
    }
  }
</script>

<style scoped>
  .wrap{
    font-size: 13px;
    background: #FFFFFF;
    border-radius: 10px;
    height: 50px;
    margin-top: 7px;
    position: relative;
  }
  .wrap>p:nth-child(1){
    float: left;
    margin-left: 20px;
    line-height: 50px;
  }
  .wrap>p:nth-child(3){
    float: right;
    margin-right: 40px;
    line-height: 50px;

  }
  .wrap>.logo{
    position: absolute;
    right: 15px;
    line-height: 50px;
    top: 3px;
  }
</style>

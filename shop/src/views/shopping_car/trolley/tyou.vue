<template>
  <div class="wrap">
    <div class="fapiao">
      <p>发票</p>
      <p>普票(商品明细-个人)</p>
      <div class="logo"><van-icon style="margin: auto;" name="weapp-nav" color="#6a6a6a" size="15px"/></div>
    </div>
    <div class="youhui">
      <p>优惠券</p>
      <p>无可用</p>
      <div class="logo"><van-icon style="margin: auto;" name="weapp-nav" color="#6a6a6a" size="15px"/></div>
    </div>
    <div class="ka">
      <p>礼品卡(京东卡/E卡)</p>
      <p>无可用</p>
      <div class="logo"><van-icon style="margin: auto;" name="weapp-nav" color="#6a6a6a" size="15px"/></div>
    </div>
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
    background: #FFFFFF;
    border-radius: 10px;
    height: 100px;
    margin-bottom: 7px;
    font-size: 12px;
    position: relative;
  }
  .fapiao{
    line-height: 30px;
    height: 30px;
    position: relative;
  }
  .fapiao>p:nth-child(1){
    position: absolute;
    left: 20px;

  }
  .fapiao>p:nth-child(2){
    position: absolute;
    right: 35px;

  }
  .youhui{
    line-height: 30px;
    height: 30px;
    position: relative;
  }
  .youhui>p:nth-child(1){
    position: absolute;
    left: 20px;

  }
  .youhui>p:nth-child(2){
    position: absolute;
    right: 35px;

  }
  .ka{
    line-height: 30px;
    height: 30px;
    position: relative;
  }
  .ka>p:nth-child(1){
    position: absolute;
    left: 20px;

  }
  .ka>p:nth-child(2){
    position: absolute;
    right: 35px;

  }
  .logo{
    position: absolute;
    right: 15px;
    top: 1px;
  }
</style>

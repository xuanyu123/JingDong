<template>
  <div class="wrap">
    <div class="jine">
      <p>商品金额</p>
      <p>￥2196.80</p>
    </div>
    <div class="yunfei">
      <p>运费(总重:0.080kg)</p>
      <p>+￥0.00</p>
    </div>
    <div class="tui">
      <p>退换无忧</p>
      <p>+￥0.00</p>
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
    margin-bottom: 83px;
    font-size: 12px;
    position: relative;
  }
  .jine{
    line-height: 30px;
    height: 30px;
    position: relative;
  }
  .jine>p:nth-child(1){
    position: absolute;
    left: 20px;

  }
  .jine>p:nth-child(2){
    position: absolute;
    right: 15px;

  }
  .yunfei{
    line-height: 30px;
    height: 30px;
    position: relative;
  }
  .yunfei>p:nth-child(1){
    position: absolute;
    left: 20px;

  }
  .yunfei>p:nth-child(2){
    position: absolute;
    right: 15px;
    color: #FF0000;
  }
  .tui{
    line-height: 30px;
    height: 30px;
    position: relative;
  }
  .tui>p:nth-child(1){
    position: absolute;
    left: 20px;

  }
  .tui>p:nth-child(2){
    position: absolute;
    right: 15px;
    color: #FF0000;

  }
</style>

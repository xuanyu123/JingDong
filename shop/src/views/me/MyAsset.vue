<template>
  <div style="background-color: #f0f2f5;">
    <div style="background-color: #fff;top: 15px"  class="wrap" >
      <div class="assets_item">
        <div class="assets_item_val">
        <span class="assets_val">0
          <span class="assets_unit">张</span>
        </span>
        </div>
        <span class="assets_item_key">京东券</span>
      </div>
      <div class="assets_item">
        <span class="openBaitiaoRed">立减40元</span>
        <div class="assets_item_val">
          <span class="assets_val" style="font-size: 12px">开通有礼</span>
        </div>
        <span class="assets_item_key">白条</span>
      </div>
      <div class="assets_item">
        <div class="assets_item_val">
        <span class="assets_val">0
          <span class="assets_unit">个</span>
        </span>
        </div>
        <span class="assets_item_key">京豆</span>
      </div>
      <div class="assets_item">
        <div class="assets_item_val">
        <span class="assets_val">0
          <span class="assets_item">元</span>
        </span>
        </div>
        <span class="assets_item_key">红包</span>
      </div>
      <div class="assets_item assets-all">
        <div class="assets_item_val my_asset">
          <span class="assets_item_key" style="line-height:70px">我的资产</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
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
    line-height: 44px;
    display: flex;
    position: relative;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row nowrap;
    height: 72px;
    box-sizing: border-box;
  }
  .assets_item{
    position: relative;
    -webkit-flex: 1;
    flex: 1;
    padding: 17px 0 10px;
    text-align: center;
  }
  .assets_item_val{
    font-size: 10px;
    line-height: 18px;
    height: 18px;
    color: #e93b3d;
    white-space: nowrap;
  }
  .assets_val {
    display: inline;
    font-size: 16px;
  }
  .assets_unit {
    display: inline;
    font-size: 10px;
  }
  .assets_item_key{
    display: block;
    font-size: 12px;
    color: #666;
    line-height: 34px;
  }
  .openBaitiaoRed {
    position: absolute;
    top: 0;
    left: 30%;
    height: 16px;
    line-height: 16px;
    font-size: 12px;
    padding: 0 8px;
    background: #e93b3d;
    background: -webkit-gradient(linear,left top,right top,from(#e93b3d),to(#ff9574));
    background: -webkit-linear-gradient(left, #E93B3D, #FF9574);
    border-radius: 8px;
    border-bottom-left-radius: 0;
    -webkit-transform: scale(.8);
    transform: scale(.8);
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    white-space: nowrap;
    color: #fff;
  }
  .assets-all:before {
    position: absolute;
    z-index: 1;
    top: 0;
    left: -5px;
    width: 10px;
    height: 72px;
    background: url(https://img11.360buyimg.com/jdphoto/s20x144_jfs/t14743/330/1610539369/321/10d659d3/5a53580eNa26a8177.png);
    background-size: 10px;
    content: "";
  }
  .my_asset {
    background: url(https://img11.360buyimg.com/jdphoto/s40x40_jfs/t20329/11/1228908740/243/73a7934c/5b235f37Ne85fdb85.png) no-repeat 50% scroll;
    background-size: auto 100%;
  }
</style>

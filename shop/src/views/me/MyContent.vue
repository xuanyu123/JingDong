<template>
  <div>
    <div id="content">
      <span class="one"style="margin-top: 15px;margin-right: 15px;">
        <span style="float: right;font-size: 0.8em;color: rgba(76,0,0,.7);">账户设置</span>
        <van-icon style="float: right;"name="setting" size="1.2em"/>
      </span>
      <span class="two" style="flex: 1;">
        <div class="three"style="margin-top: 7px;background: url('https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png') 0px 0px / 100% 100% no-repeat;"></div>
        <div class="real_name">待实名认证</div>
        <div class="four">sherry</div>
        <div class="five">用户名：sherry</div>
        <div class="hor-tips">
          <div class="notice">京享值226</div>
          <div class="notice arrow">小白信用64.7</div>
        </div>
      </span>
      <span class=""></span>
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
  #content{
    width: 100%;
    height: 134px;
    background: linear-gradient(90deg,#eb3c3c,#ff7459);
    border-radius: 0 0 300px 300px/0 0 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  .three{
    height: 60px;
    width: 60px;
    margin-left: 20px;
  }
  .two{
     position: relative;
  }
  .four{
    flex: 1;
    left: 100px;
    top:  10px;
    font-size: 0.8em;
    position: absolute;
    color: #fff;
  }
  .five{
    left: 100px;
    top: 30px;
    font-size: 0.8em;
    position: absolute;
    color: hsla(0,0%,100%,.7);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .hor-tips {
    display: -webkit-box;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
    margin-top: -18px;
    margin-left: 100px;
  }
  .notice{
    max-width: 150px;
    height: 16px;
    line-height: 16px;
    padding: 0 8px;
    margin: 6px 8px 0 0;
    border-radius: 10px;
    font-size: 10px;
    color: #fff;
    background: #c8483f;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: JDZH-Regular;
  }
  .arrow {
    position: relative;
    padding-right: 14px!important;
  }
  .arrow:after {
    display: block;
    content: "";
    width: 4px;
    height: 4px;
    border-top: 1px solid hsla(0,0%,100%,.7);
    border-left: 1px solid hsla(0,0%,100%,.7);
    -webkit-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    position: absolute;
    right: 6px;
    top: 5px;
  }
  .real_name{
    position: absolute;
    left: 50%;
    top: 55px;
    z-index: 1;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    padding: 0 14px 0 6px;
    height: 15px;
    line-height: 15px;
    border-radius: 15px;
    font-size: 10px;
    white-space: nowrap;
    color: hsla(0,0%,100%,.7);
    background-color: rgba(0,0,0,.5);
    font-family: JDZH-Regular;
    margin-left: -136px;
  }
  .real_name:after {
    content: "";
    display: block;
    width: 4px;
    height: 4px;
    border-top: 1px solid hsla(0,0%,100%,.7);
    border-left: 1px solid hsla(0,0%,100%,.7);
    -webkit-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    position: absolute;
    right: 6px;
    top: 5px;
  }
</style>

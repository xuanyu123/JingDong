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
        <div class="plus_black_wrap">
          <div class="inner">
            <div class="title">
              <div class="plus_title">尊享会员特权</div>
              <div class="plus_subtitle">立即查看</div>
            </div>
          </div>
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
    height: 39.733vw;
    background: linear-gradient(90deg,#eb3c3c,#ff7459);
    border-radius: 0 0 300px 300px/0 0 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 4px rgba(228,57,60,.4);
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
  .plus_black_wrap {
    width: 100%;
    height: 37px;
    box-sizing: border-box;
    padding: 0 20px;
    color: #ffe678;
    font-size: 12px;
  }
  .inner {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin-top: 10px;
    padding: 7px 10px 10px;
    background: url(https://img11.360buyimg.com/jdphoto/s710x134_jfs/t1/43463/14/4447/108469/5cd2c002Ee4dcb4c9/445d4efb8eee08e9.png) no-repeat 0 0;
    background-size: 100% 67px;
    border-radius: 0 0 300px 300px/0 0 20px 20px;
  }
  .title {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
  }
  .plus_title {
    position: relative;
    padding-left: 78px;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .plus_title:before {
    position: absolute;
    content: "";
    width: 57px;
    height: 12px;
    left: 0;
    top: 3px;
    background: url(https://img11.360buyimg.com/jdphoto/s113x21_jfs/t1/44130/31/4355/2489/5cd2d9bdE7fd63a96/155d2b916c3ede73.png) no-repeat 50%;
    background-size: 100% 100%;
  }
  .plus_title:after {
    position: absolute;
    content: "";
    width: 1px;
    height: 7px;
    background: #ffe678;
    left: 67px;
    top: 5px;
  }
  .plus_subtitle{
    position: relative;
    padding-right: 10px;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    height: 18px;
  }
  .plus_subtitle:after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 6px;
    height: 10px;
    background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 20'%3E%3Cpath fill='%23FFE678' fill-rule='evenodd' d='M2 20c-.8 0-1.5-.5-1.8-1.2-.3-.8-.2-1.6.4-2.2L7.2 10 .6 3.4c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0l8 8c.4.4.6 1 .6 1.4 0 .5-.2 1-.6 1.4l-8 8c-.4.4-1 .6-1.4.6z'/%3E%3C/svg%3E);
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -6px;
    }
</style>

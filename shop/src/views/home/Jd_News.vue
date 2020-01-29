<template>
  <div class="wrap">
    <img src="https://m.360buyimg.com/mobilecms/jfs/t14752/82/2574581467/6535/c8158ace/5aa8935bN94e31ff6.jpg.dpg">
    <div>
      <van-swipe style="height: 30px;" :autoplay="3000" vertical>
        <van-swipe-item>
          <a class="text" style="color: #000000" href="#"><span class="txt">推荐</span>选择正确天气钓鱼，在冬季去钓鱼渔获多多</a>
        </van-swipe-item>
        <van-swipe-item>
          <a class="text" style="color: #000000" href="#"><span class="txt">精选</span>猫王霹雳唱机，带你穿越回80年代</a>
        </van-swipe-item>
        <van-swipe-item>
          <a class="text" style="color: #000000" href="#"><span class="txt">生活</span>别再喝毒水了，教你挑选净水机</a>
        </van-swipe-item>
        <van-swipe-item>
          <a class="text" style="color: #000000" href="#"><span class="txt">数码</span>头戴式蓝牙耳机，给你更加好的音乐体验</a>
        </van-swipe-item>
        <div class="custom-indicator" slot="indicator">
        </div>
      </van-swipe>
    </div>
    <a class="new_more" href="#"><i class="line"></i>更多</a>
  </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        },
        methods: {}
    }
</script>
<style scoped>
  .wrap{
    width: 94%;
    height: 30px;
    margin-left: 10px;
    background-color: #ffffff;
    border-radius: 8px;
    position: relative;
  }
  .wrap>img{
    width: 73px;
    height: 16px;
    position: absolute;
    top: 7px;
    left: 6px;
  }
  .text{
    display: block;
    line-height: 30px;
    font-size: 10px;
    margin-left: 87px;
  }
  .txt{
    color: #ff0000;
    font-weight: 700;
    padding-right: 5px
  }
  .new_more{
    font-size: 10px;
    color: #181818;
    position: absolute;
    right: 6px;
    top: 9px;
    line-height: 12px;
  }
  .line{
    background: #ececec;
    width: 1px;
    height: 12px;
    display: inline-block;
    margin-right: 2px;
    vertical-align: middle;
  }
</style>

<template>
  <div>
    <div style="height: 70px">
      <div style="width: 90%;margin: 15px auto">
        <p class="recent_txt">最近搜索</p>
        <i class="gar_pic"></i>
      </div>
      <div>
        <a  href="javascript:void(0)">手机</a>
        <a href="javascript:void(0)">显卡</a>
        <a href="javascript:void(0)">耳机</a>
      </div>
    </div>
    <div style="height: 150px">
      <div style="width: 90%;margin: 15px auto">
        <p class="recent_txt">热门搜索</p>
        <span class="hot_right_txt">隐藏</span>
      </div>
      <div>
        <a  href="javascript:void(0)">精选年货低至9.9</a>
        <a href="javascript:void(0)">爱车装扮满299减100</a>
        <a href="javascript:void(0)">毛巾</a>
        <a href="javascript:void(0)">蓝牙音箱</a>
        <a href="javascript:void(0)">厨房碗柜</a>
        <a href="javascript:void(0)">办公室靠枕</a>
        <a href="javascript:void(0)">无线网卡</a>
        <a href="javascript:void(0)">独轮平衡车</a>
        <a href="javascript:void(0)">电视柜</a>
      </div>
    </div>
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
  .gar_pic{
    float: right;
    display: block;
    background: url("//st.360buyimg.com/so/images/layout/search-sprites.png") no-repeat;
    height: 15px;
    width: 15px;
    margin-top: -13px;
    background-position: 0 -35px;
    background-size: 50px 50px;
    position: relative;
    top: -1px;
  }
  .recent_txt{
    font-size: 15px;
    line-height: 15px;
    color: #232326;
    width: 100px;
    padding-left: 1px;
  }
  a{
    height: 23px;
    line-height: 23px;
    text-align: center;
    border-radius: 5px;
    display: block;
    width: 18%;
    color: #686868;
    white-space: nowrap;
    text-overflow: ellipsis;
    background-color: #f0f2f5;
    font-size: 12px;
    float: left;
    margin-bottom: 10px;
    margin-left: 18px;
    overflow: hidden;
    box-sizing: border-box;
  }
  .hot_right_txt{
    float: right;
    margin-top: -18px;
    color: #cccccc;
  }
</style>

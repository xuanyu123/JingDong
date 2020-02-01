<template>
    <div class="wrap">
      <div class="wrap1">
        <van-row type="flex" justify="center">
          <van-col class="login" span="8">
            <a style="color: #848689" href="javascript:void(0)">sherry&nbsp;&nbsp;</a><i class="line" ></i>
          </van-col>
          <van-col span="4">
            <a style="color: #848689;margin-right: 15px" href="javascript:void(0)">注册</a><i class="line"></i>
          </van-col>
          <van-col span="6">
            <a style="color: #848689" href="javascript:void(0)">客户服务</a><i class="line"></i>
          </van-col>
          <van-col span="6">
            <a style="color: #848689;margin-right: 5px" href="javascript:void(0)">返回到顶部</a>
          </van-col>
        </van-row>
      </div>
      <div>
        <van-grid :column-num="3">
          <van-grid-item style="height: 69px" v-for="(item,index) in list" :key="index">
            <van-image style="height: 60px;width: 60px" :src="item.img" />
          </van-grid-item>
        </van-grid>
      </div>
      <div class="common-copyright">Copyright © 2004-2019 京东JD.com 版权所有</div>
      <ScrollTop_wrap></ScrollTop_wrap>
    </div>

</template>

<script>
    import ScrollTop_wrap from "./ScrollTop_wrap";

    export default {
        name: '',
        components:{
          ScrollTop_wrap
        },
        data() {
            return {
              list:[
                {'img':'https://m.360buyimg.com/mobilecms/jfs/t16423/186/2517573622/5186/75a541f7/5ab1c0deN947bdcba.png'},
                {'img':'https://m.360buyimg.com/mobilecms/jfs/t18550/294/898388074/6574/3a8c5413/5ab0b8e9Ne9c48331.png'},
                {'img':'https://m.360buyimg.com/mobilecms/jfs/t14581/218/2689195961/4696/203b872a/5ab1c0f2N51c3f1bb.png'}
              ]
            }
        },
        methods: {}
    }
</script>
<style scoped>
  .wrap{
    width: 100%;
    height: 56vw;
  }
  .wrap1{
    width: 100%;
    background-color: white;
    line-height: 58px;
    text-align: center;
  }
  .line{
    background: #d7d7d7;
    width: 1px;
    height: 12px;
    display: inline-block;
    box-sizing: border-box;
    margin-left: 10px;
    vertical-align: middle;
  }
  .common-copyright{
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background-color: white;
    color: #848689;
    font-size: 10px;
    padding: 2vw 0
  }
  .go_top{
    bottom: 65px;
    right:2px;
    color: #e45041;
    width: 38px;
    height: 38px;
    position: fixed;

  }
</style>

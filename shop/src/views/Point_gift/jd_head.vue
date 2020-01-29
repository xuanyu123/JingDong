<template>
  <div id="wrap">
    <jd_jaw></jd_jaw>
    <div id="top_background">
      <div id="top">
        <van-row>
          <van-col span="4">
            <img src="https://img12.360buyimg.com/mcoss/jfs/t1/97157/26/10782/6542/5e1ebeafeff2a3e70/dea7d7ae96be1292.png.webp"/>
          </van-col>
          <van-col span="16">
              <form action="/">
                <van-search
                  v-model="need"
                  placeholder="请输入您需要的商品名称"
                  show-action
                  @search=""
                  @cancel=""
                />
              </form>
          </van-col>
          <van-col span="4">
            <img src="https://img13.360buyimg.com/mcoss/jfs/t1/102324/18/10749/6375/5e2003cde47770bf5/3e52e2e275c8b0d4.gif"/>
          </van-col>
        </van-row>
      </div>
    </div>
    <div id="content">
      <van-row>
        <van-col span="4">
          <div>精选</div>
          <div></div>
        </van-col>
        <van-col span="17">
          <div><img src="https://img12.360buyimg.com/img/jfs/t1/103689/8/9326/2942/5e0eb435eb17f8c99/a691646c3f11ef8b.gif"/></div>
          <div>手机</div>
          <div>食品</div>
          <div>内衣</div>
          <div>家电</div>
          <div>数码</div>
          <div>运动</div>
          <div>生鲜</div>
          <div>百货</div>
          <div>配饰</div>
          <div>家具</div>
          <div>图书</div>
          <div>水果</div>
          <div>家装</div>
          <div>汽车</div>
          <div>母婴</div>
          <div>箱包</div>
          <div>美妆</div>
          <div>钟表</div>
          <div>个护</div>
          <div>鞋靴</div>
          <div>女装</div>
          <div>男装</div>
        </van-col>
        <van-col span="3">
          <van-icon name="arrow-down" />
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  import jd_jaw from '@/views/Point_gift/jd_jaw'
  export default {
    name:'jd_head',
    components:{
      jd_jaw,
    },
    data(){
      return{
        'need':'美食'
      }
    },
    methods: {

      }
  }
</script>

<style scoped>
  #wrap{
    width: 100vw;
    height: 29vh;
    font-size: 20px;
  }
  #wrap>#top_background{
    width: 100vw;
    height: 13vh;
    background: url(https://img12.360buyimg.com/jdphoto/jfs/t1/107253/8/2435/27836/5e05eb2bec07277ef/a6301a36c8fb49d1.png.webp);
    background-size: 100vw 33vh;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
  #wrap>#top_background>#top{
    width: 100vw;
    height: 7vh;
  }
  #wrap>#top_background>#top>.van-row{
    position: fixed;

    top: 0;
    left: 0;
  }
  #wrap>#top_background>#top>.van-row>.van-col>img{
    height: 4.5vh;
    padding: 0vh 2vw 0 4.45vw;
  }
  #wrap>#top_background>#top>.van-row{
    width: 100vw;
    height: 7vh;
    position: absolute;
    top: 0;
    left: 0;
  }
  #wrap>#top_background>#top>.van-row>.van-col--4:nth-child(1){
    position: absolute;
    top: 1.5vh;
    left: -2vw;
  }
  #wrap>#top_background>#top>.van-row>.van-col--4:nth-child(3){
    position: absolute;
    top: 1.5vh;
    right: -2vw;
  }
  #wrap>#top_background>#top>.van-row>.van-col--16{
    width: 76vw;
    position: absolute;
    top: 1.5vh;
    left: 12vw;
  }
  /*.van-search是form下第一个div*/
  .van-search{
    height: 4.5vh;
    border-radius: 3vh;
  }
  .van-search__content{
    height: 4.1vh;
    background-color: transparent;
  }
  .van-cell{
    line-height: 3vh;
  }
  #content{
    width: 100vw;
    height: 6vh;
    position: fixed;
    top: 7vh;
    left: 0;
    z-index: 100;
  }
  #content>.van-row{
    color: #FFF;
  }
  #content>.van-row>.van-col--4>div:nth-child(1){
    position: absolute;
    left: 3vw;
    font-size: 0.9em;
    font-weight: bold;
  }
  #content>.van-row>.van-col--4>div:nth-child(2){
    content: "";
    width: 3vw;
    height: 0.3vh;
    background-color: #fff;
    position: absolute;
    bottom: 1.7vh;
    left: 6.27vw;
  }
  #content>.van-row>.van-col--3{
    padding-left: 5vw;
  }
  #content>.van-row>.van-col--17{
    display: -webkit-box;
    overflow-x: scroll;
    font-size: 0.8em;
  }
  #content>.van-row>.van-col--17::-webkit-scrollbar{
    background-color: transparent;
  }
  #content>.van-row>.van-col--17>div{
    margin: 0.3vh auto;
    margin-right: 3.8vw;
    padding: 5px;
    box-sizing: border-box;
  }
  #content>.van-row>.van-col--17>div>img{
    width: 10vw;
    height: 2.5vh;
  }
</style>

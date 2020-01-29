<template>
  <div class="wrap">
    <div class="goods">
      <div class="goods1">
        <div class="top">
          <span>JD 京东自营</span>
          <div class="img">
            <img src="../../../assets/3.jpg" />
          </div>
          <div class="txt">
            <p>日本珂润(Curel)润浸保湿滋养乳霜 40g(…</p>
            <p>颜色:滋养面霜(明星产品)</p>
            <p>￥188.00 <van-icon name="info-o" color="#b0b0b0"/></p>
            <p>0.080kg×1</p>
            <p><van-tag plain type="danger">支持7天无理由退货(拆封后不支持)</van-tag></p>
          </div>
        </div>
        <div class="bottom">
          <p>配送</p>
          <p>京东快递</p>
          <div class="logo"><van-icon style="margin: auto;" name="weapp-nav" color="#6a6a6a" size="15px"/></div>
          <p>1月30日</p>
          <p>[周四]</p>
          <p>09:00-12:00</p>
          <p>退换无忧 ￥0.60 可享受1次免费上门取件 <van-icon name="info-o" /></p>
          <div class="switch"><van-switch v-model="checked" size="15px" active-color="#ff0000" /></div>
        </div>
      </div>
      <div class="goods2">
        <div class="top">
          <span><van-icon name="shop-o" /> 罗西尼专卖店</span>
          <div class="img">
            <img src="../../../assets/1.jpg" />
          </div>
          <div class="txt">
            <p>罗西尼(ROSSINI)手表 典美系列 花漾镶…</p>
            <p>颜色:玫瑰金钢带 女表518870G01A[女神挚爱款]</p>
            <p>￥1540.00 <van-icon name="info-o" color="#b0b0b0"/></p>
            <p>×1</p>
            <p><van-tag plain type="danger">支持7天无理由退货</van-tag></p>
          </div>
        </div>
        <div class="bottom">
          <p>配送</p>
          <p>快递运输</p>
          <div class="logo"><van-icon style="margin: auto;" name="weapp-nav" color="#6a6a6a" size="15px"/></div>
          <p>1月22日至1月29日下单的商品预计在1月30日前发货</p>
          <p>退换无忧 商家赠送 享运费补贴或免费取件服务 <van-icon name="info-o" /></p>
          <p>留言</p>
          <p>建议留言前先与商家沟通确认</p>
        </div>
      </div>
      <div class="goods3">
        <div class="top">
          <span>JD 京东自营</span>
          <div class="img">
            <span><img src="../../../assets/2.jpg" /></span>
            <span><img src="../../../assets/4.jpg" /></span>
          </div>
          <div class="txt">
            <p>共4件</p>
          </div>
        </div>
        <div class="bottom">
          <p>含有不支持7天无理由退货的商品</p>
          <p>配送</p>
          <p>京东快递</p>
          <div class="logo"><van-icon style="margin: auto;" name="weapp-nav" color="#6a6a6a" size="15px"/></div>
          <p>1月30日</p>
          <p>[周四]</p>
          <p>09:00-12:00</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'',
    data(){
      return{
        checked: true
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
    font-size: 10px;
  }
  .goods1{
    border-bottom: 5px;
    border-radius: 15px;
    background: #ffffff;
    margin-bottom:10px;
    height: 220px;
    position: relative;
    margin-top: 7px;
  }
  .top{
    display: flex;
    height: 150px;
    width: 100%;
    position: relative;
  }
  .top>span{
    position: absolute;
    left: 20px;
    top: 15px;
    font-size: 1.3em;
  }
  .top>.img{
    position: relative;
    width: 110px;
  }
  .top>.img>img{
    position: absolute;
    top: 40px;
    left: 20px;
    width: 110px;
    height: 110px;
  }
  .top>.txt{
    flex: 1;
    position: relative;
  }
  .top>.txt>p:nth-child(1){
    position: absolute;
    top: 35px;
    left: 30px;
    font-size: 1.2em;
  }
  .top>.txt>p:nth-child(2){
    position: absolute;
    top: 55px;
    left: 30px;
    font-size: 1em;
    color: #939393;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }
  .top>.txt>p:nth-child(3){
    position: absolute;
    top: 88px;
    left: 30px;
    font-size: 1.5em;
    color: #FF0000;
  }
  .top>.txt>p:nth-child(4){
    position: absolute;
    top: 90px;
    right: 10px;
    font-size: 1em;
  }
  .top>.txt>p:nth-child(5){
    position: absolute;
    top: 115px;
    left: 30px;
  }
  .bottom>p{
    font-size: 1.2em;
    margin: 0;
  }
  .bottom>p:nth-child(1){
    position: absolute;
    left: 20px;
    top: 150px;
  }
  .bottom>p:nth-child(2){
    position: absolute;
    right: 35px;
    top: 150px;
  }
  .goods1>.bottom>p:nth-child(4){
    position: absolute;
    right: 145px;
    top: 170px;
  }
  .goods1>.bottom>p:nth-child(5){
    position: absolute;
    right: 110px;
    top: 170px;
    color: #FF0000;
  }
  .goods1>.bottom>p:nth-child(6){
    position: absolute;
    right: 36px;
    top: 170px;
  }
  .goods1>.bottom>p:nth-child(7){
    position: absolute;
    left: 20px;
    bottom: 10px;
  }
  .logo{
    position: absolute;
    right: 15px;
    top: 152px;
  }
  .switch{
    position: absolute;
    right: 15px;
    bottom: 10px;
  }
  .goods2{
    border-bottom: 5px;
    border-radius: 15px;
    background: #ffffff;
    margin-bottom:10px;
    height: 260px;
    position: relative;
    margin-top: 7px;
  }
  .goods2>.bottom>p:nth-child(4){
    position: absolute;
    right: 145px;
    top: 170px;
  }
  .goods2>.bottom>p:nth-child(5){
    position: absolute;
    right: 110px;
    top: 170px;
  }
  .goods2>.bottom>p:nth-child(6){
    position: absolute;
    right: 40px;
    top: 170px;
  }
  .goods2>.bottom>p:nth-child(7){
    position: absolute;
    left: 20px;
    bottom: 10px;
  }
  .logo{
    position: absolute;
    right: 15px;
    top: 152px;
  }
  .goods2>.bottom>p:nth-child(4){
    position: absolute;
    right: 35px;
    top: 170px;
  }
  .goods2>.bottom>p:nth-child(5){
    position: absolute;
    left: 20px;
    top: 190px;
    width: 90%;
  }
  .goods2>.bottom>p:nth-child(6){
    position: absolute;
    left: 20px;
    top:225px;
  }
  .goods2>.bottom>p:nth-child(7){
    position: absolute;
    left: 60px;
    top:225px;
    color: #d0d0d0;
  }
  .goods3{

    background: #ffffff;
    height: 200px;
    position: relative;
    margin-top: 7px;

  }
  .goods3>.top{
    position: relative;
    display: flex;
  }
  .goods>.top>.img{
    position: relative;
    width: 170px;
  }
  .goods3>.top>.img>span>img{
    width: 60px;
    height: 60px;
  }
  .goods3>.top>.img>span:nth-child(1)>img{
    position: absolute;
    top:50px;
    left:20px;
  }
  .goods3>.top>.img>span:nth-child(2)>img{
    position: absolute;
    top:50px;
    left: 85px;
  }
  .goods3>.top>.txt{
    flex: 1;
  }
  .goods3>.top>.txt>p:nth-child(1){
    position: absolute;
    left: 200px;
    top: 60px;
  }
  .goods3>.top>.txt>p:nth-child(2){
    position: absolute;
    left: 235px;
    top: 53px;
  }
  .goods3>.bottom>p:nth-child(1){
    position: absolute;
    left: 20px;
    top: 120px;
    font-size: 0.8em;
    color: #c6c6c6;
  }
  .goods3>.bottom>p:nth-child(2){
    position: absolute;
    left: 20px;
    top: 150px;
  }
  .goods3>.bottom>p:nth-child(3){
    position: absolute;
    right: 35px;
    top: 150px;
  }
  .goods3>.bottom>p:nth-child(5){
    position: absolute;
    right: 145px;
    top: 170px;
  }

  .goods3>.bottom>p:nth-child(6){
    position: absolute;
    right: 110px;
    top: 170px;
    color: #FF0000;
  }
  .goods3>.bottom>p:nth-child(7){
    position: absolute;
    right: 40px;
    top: 170px;
  }

</style>

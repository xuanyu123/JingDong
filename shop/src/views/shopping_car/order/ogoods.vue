<template>
  <div class="wrap">
    <div class="goods1">
      <van-checkbox v-model="checked1" checked-color="#ff0000" icon-size="15px">JD京东国际自营</van-checkbox>
      <div class="top">
        <van-tag type="danger">满减</van-tag>
        <span>已满两件，已减117.2元</span>
        <span>再逛逛></span>
      </div>
      <div class="goods">
        <ul>
          <li>
            <van-checkbox v-model="checked1" checked-color="#ff0000" icon-size="15px"></van-checkbox>
            <div class="img">
              <img src="../../../assets/2.jpg" />
            </div>
            <div class="txt">
              <p>
                <van-tag color="#000000" >京东</van-tag>
                <van-tag color="#ffef0f" text-color="#000">精选</van-tag>
                <van-tag color="#ff0000">京东国际</van-tag>
                日本进口 资生堂(SHISEIDO)安热沙ANESSA小金瓶防晒乳
              </p>
              <p><van-tag color="#f0f0f0" text-color="#000">防晒乳，60ml∨</van-tag></p>
             <p><van-tag color="#f0f0f0" text-color="#000">换促销∨</van-tag></p>
              <p>￥259.00</p>

            </div>
            <p><van-stepper v-model="value1" /></p>
          </li>
          <li>
            <van-checkbox v-model="checked1" checked-color="#ff0000" icon-size="15px"></van-checkbox>
            <div class="img">
              <img src="../../../assets/4.jpg" />
            </div>
            <div class="txt">
              <p>
                <van-tag color="#000000">京东</van-tag>
                <van-tag color="#ffef0f" text-color="#000">精选</van-tag>
                <van-tag color="#ff0000">京东国际</van-tag>
                韩国进口 蒂佳婷(Dr.jart+)水动力活力水润蓝色药丸面膜
              </p>
              <p><van-tag color="#f0f0f0" text-color="#000">爆款蓝色 补水保湿∨</van-tag></p>
              <p><van-tag color="#f0f0f0" text-color="#000">换促销∨</van-tag></p>
              <p>￥109.00</p>

            </div>
            <p><van-stepper v-model="value2" /></p>
          </li>
        </ul>
      </div>
    </div>
    <div class="goods2">
      <van-checkbox v-model="checked2" checked-color="#ff0000" icon-size="15px">JD京东自营</van-checkbox>
      <div class="top">
        <van-tag type="danger">满减</van-tag>
        <span>满两件总价8折</span>
        <span>去凑单></span>
      </div>

      <div class="goods">
        <ul>
          <li>
            <van-checkbox v-model="checked2" checked-color="#ff0000" icon-size="15px"></van-checkbox>
            <div class="img">
              <img src="../../../assets/3.jpg" />
            </div>
            <div class="txt">
              <p>
                日本珂润(Curel)润浸保湿滋养乳霜 40g(花王 原装进口 长效补水 敏感肌肤可用)
              </p>
              <p><van-tag color="#f0f0f0" text-color="#000">滋养面霜(明…,选服务∨</van-tag></p>
              <p><van-tag color="#f0f0f0" text-color="#000">换促销∨</van-tag></p>
              <p>￥188.00</p>

            </div>
           <p><van-stepper v-model="value3" /></p>
          </li>
        </ul>
      </div>
    </div>
    <div class="goods3">
      <van-checkbox v-model="checked3" checked-color="#ff0000" icon-size="15px">罗西尼专卖店</van-checkbox>
      <div >
        <div class="top">
          <van-tag color="#f4f4f4" text-color="#000" >闪购</van-tag>
          <span>活动结束时间 01月26日 10:00</span>
        </div>

        <div class="goods">
          <ul>
            <li>
              <van-checkbox v-model="checked3" checked-color="#ff0000"icon-size="15px"></van-checkbox>
              <div class="img">
                <img src="../../../assets/1.jpg" />
              </div>
              <div class="txt">
                <p>
                  罗西尼(ROSSINI)手表 典美系列 花漾镶钻女表 优雅风机械表 钢带女士腕表
                </p>
                <p><van-tag color="#f0f0f0" text-color="#000">玫瑰金钢带 女表518870G01…,选服务∨</van-tag></p>
                <p></p>
                <p>￥1540.00</p>

              </div>
             <p><van-stepper v-model="value4" /></p>
            </li>
          </ul>
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
        checked1: false,
        checked2: false,
        checked3: false,
        value1: 1,
        value2: 1,
        value3: 1,
        value4: 1,
        show: false,
              sku: {
                // 数据结构见下方文档
              },
              goods: {
                // 数据结构见下方文档
              },
              messageConfig: {
                // 数据结构见下方文档
              }
      }
    },
    methods:{
    }
  }
</script>
<style scoped>
  .wrap{
    font-size: 12px;
    border-top:5px ;
    border-radius: 20px;
    margin-top: 8px;
    margin-bottom: 50px;
  }
  .top{
    padding-left: 30px;
    padding-top: 5px;

  }
  .top>span:nth-child(3){
    float: right;
  }
  .goods1{
    border-bottom: 5px;
    border-radius: 15px;
    background: #ffffff;
    padding: 20px;
    margin-bottom:10px;
  }
  .goods2{
    border-bottom: 5px;
    border-radius: 15px;
    background: #ffffff;
    padding: 20px;
    margin-bottom: 10px;
  }
  .goods3{
    border-bottom: 5px;
    border-radius: 15px;
    background: #ffffff;
    padding: 20px;
    margin-bottom: 10px;
  }
  .goods{
    overflow: auto;
    position: relative;
  }
  .goods>ul>li{
    list-style: none;
    height:150px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .goods>ul>li>.img{
    width: 110px;
    text-align: center;
    position: relative;
  }
  .goods>ul>li>.img>img{
    width: 110px;
    height: 110px;
  }
  .goods>ul>li>.txt{
    flex: 1;
    padding-left:10px;
    position: relative;
  }
  .goods>ul>li>.txt>p:nth-child(1){
    position: absolute;
    top: -60px;
   }
  .goods>ul>li>.txt>p:nth-child(2){
    position: absolute;
    top: -10px;
  }
  .goods>ul>li>.txt>p:nth-child(3){
    position: absolute;
    right: 10px;
    top: -10px;
  }
  .goods>ul>li>.txt>p:nth-child(4){
    color: #ff0000;
    font-size: 17px;
    position: absolute;
    top: 12vw;
  }
  .goods>ul>li>p{
    position: absolute;
    bottom: 5px;
    right: 10px;
  }
</style>

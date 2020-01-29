<template>
  <div class="shop">
    <div class="logo">
      <img src="https://img10.360buyimg.com/cms/jfs/t20791/247/1924472256/8639/23ddcbb9/5b3db437N9014e7fe.jpg!q70.dpg.webp">
    </div>
    <div class="name">
      <span>卡罗莱旗舰店</span>
      <div class="star">
        <span>店铺星级</span>
        <img src="./红五角星.svg">
        <img src="./红五角星.svg">
        <img src="./红五角星.svg">
        <img src="./红五角星.svg">
        <img src="./红五角星.svg">
      </div>
    </div>
    <div class="fans">
      <div class="left">
        <p>228568</p>
        <div>粉丝人数</div>
      </div>
      <div class="mid">
        <p>488</p>
        <div>全部商品</div>
      </div>
      <div class="right">
        <span>评价</span><b>8.85|中</b>
        <span>物流</span><b>9.82|高</b>
        <span>售后</span><b>8.84|低</b>
      </div>
    </div>
    <div class="pic">
      <van-button icon="star-o" size="small" color="#666666"  type="info">关注店铺</van-button>
      <van-button icon="shop-o" size="small" color="#666666" type="info">进入店铺</van-button>
    </div>

  </div>
</template>

<script>
export default{
	name:"Shops",
	data(){
		return{

		}
	},
	methods:{

	}
}
</script>

<style scoped>
  .shop{
    padding: 10px 0;
    border-bottom: 10px solid #e8e8ed;
  }
  .logo{
    display: inline-block;
  }
  .logo>img{
    width: 90px;
    height: 30px;
  }
  .name>span{
    color: #333333;
    font-size: 14px;
  }
  .name{
    display: inline-block;
    margin-left: 10px;
  }
  .star{
    width: 110px;
    background-color: #f7f7f7;
    border-radius: 5px;
    padding: 0;
  }
  .star>span{
    color: #666666;
    font-size: 10px;
  }
  .star>img{
    margin-left: 1px;
    width: 8px;
    height: 8px;
  }
  .fans{
    margin-top: 10px;
  }
  p{
    color: #333333;
    font-size: 14px;
  }
  div{
    color: #999999;
    font-size: 12px;
  }
  .left{
    width:146px ;
    text-align: center;
    display: inline-block;
    border-right: #999999 solid 1px;
  }
  .left>p{
    margin: 0;

  }
  .mid{
    width: 146px;

    display: inline-block;
    text-align: center;
  }
  .mid>p{
    margin: 0;
  }
  .right>span{
    color: #999999;
    font-size: 10px;
  }
  .right>b{
    color: #e4393c;
    font-size: 10px;
  }
  .right>b:nth-child(6){
    color: #18c461;
    font-size: 10px;
  }
  .right{
    width: 63px;
    float: right;
  }
  .pic{
    text-align: center;
    margin-top: 20px;
  }
</style>

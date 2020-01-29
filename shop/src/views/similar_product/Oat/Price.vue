<template>
    <div class="price">
      <div class="left">
        <span>￥</span><b>39.</b><span>90</span>
      </div>
      <div class="right">
        <div class="downprice">
            <a href="#">
              <img src="./降价提醒15.svg">
              <p>降价提醒</p>
            </a>
        </div>
        <div class="favor">
          <a href="#">
            <img src="./五角星.svg">
            <p>收藏</p>
          </a>
        </div>
      </div>
      <div class="name">
        <b>金日禾野 纯燕麦片 共1800g 两罐装 无加蔗糖 澳洲麦源 即食早餐 代餐免煮</b>
      </div>
      <div class="easy-buy">
        <img src="data:image/png;base64,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">
        <a>
          闪电退款 极速审核 破损包退换
          <img src="./三个点.svg">
        </a>
      </div>
    </div>
</template>

<script>
export default{
	name:'Price',
	data(){
		return{

		}
	},
	methods:{

	}
}
</script>

<style scoped>
  .price{
    width: 375px;
    position: relative;
    border-bottom: 10px solid #e8e8ed;
  }
  .left{
    color: red;
    font-size:15px;
    padding-top: 16px;
    margin-top: -4px;
  }
  .left>b{
    font-size: 25px;
  }
  a{
    color: #323233;
    font-size: 10px;
  }
  .downprice{
    position: absolute;
    right: 40px;
    top: 8px;
    text-align: center;
  }
  .downprice>a>img{
    width: 15px;
    height: 15px;
  }
  .downprice>a>p{
    font-size: 10px;
    margin: 0;
  }
  .favor{
    position: absolute;
    right: 10px;
    top: 8px;
    text-align: center;
  }
  .favor>a>img{
    width: 15px;
    height: 15px;
  }
  .favor>a>p{
    font-size: 10px;
    margin: 0;
  }
  .name{
    width: 375pw;
    height: 48px;
    padding: 0 0 10px 10px;
  }
  .easy-buy{
    width: 375px;
    height: 35px;
    background-color: #fbf0fd;
    position: relative;
  }
  .easy-buy>img{
    width: 77px;
    height: 15px;
    padding: 10px;
  }
  .easy-buy>a{
    font-size: 14px;
    color: #e93b3d;
    width: 270px;
    margin:0 ;
    padding: 0;
    position: absolute;
    top: 7px;
  }
  .easy-buy>a>img{
    position: absolute;
    right: 5px;
    top: 6px;
    width: 13px;
    height: 13px;
  }
</style>

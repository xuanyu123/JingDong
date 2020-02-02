<template>
  <div>
      <van-cell  class="address">
         <van-row class="top">
           <van-col class="left" span="3"><p>送至</p></van-col>
           <van-col class="mid" span="18">
             <div class="txt1">
               <p>北京朝阳区三环到四环之间</p>
               <b>现货</b><span>春节1月18日至2月2日下单的商品预计在2月4日前发货，大件定制等特数据商品以店铺咨询为准</span>
             </div>

           </van-col>
           <van-col class="right" span="3"><img src="./三个点灰.svg" ></van-col>
         </van-row>
      </van-cell>
      <van-row class="deliver">
        <van-col class="left" span="3"><span>运费</span></van-col>
        <van-col class="mid" span="21"><b>免运费</b></van-col>
      </van-row>
  </div>
</template>

<script>
export default{
	name:"Address",
	data(){
		return{

		}
	},
	methods:{

	}
}
</script>

<style scoped>
  .address{
      width: 375px;
      height:85px;
      padding: 0;
    }
    .top{
      height: 100px;
    }
    .left>p{
      font-size: 12px;
      color: #999999;
      text-align: center;
      margin-top: 5px;
    }
    .right{
      width: 25px;
      float: right;
      margin: 10px;
    }
    .right>img{
      width:20px ;
      height: 20px;
    }
    .mid>.txt1{
      margin: 6px 0;
    }
    .mid>.txt1>p{
      color: #333333;
      font-size: 14px;
      margin: 0;
    }
    .mid>.txt1>b{
      color: #E4393C;
      font-size: 12px;
    }
    .mid>.txt1>span{
      color: #999999;
      font-size: 10px;
    }
    .deliver{
      height: 30px;
    }
    .deliver>.left{
      text-align: center;
    }
    .deliver>.left>span{
      color: #999999;
      font-size: 12px;
    }
    .deliver>.mid{
      margin: 0;
    }
    .deliver>.mid>b{
      color: #333333;
      font-size: 13px;
    }
</style>

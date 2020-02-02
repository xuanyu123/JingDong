<template>
  <div>
    <van-cell
    class="discount">
       <van-row class="top">
         <van-col class="left" span="3"><p>优惠</p></van-col>
         <van-col class="mid" span="18">
           <div class="txt1">
             <span>满25减8</span>
             <b>满2件，总价打8.50折</b>
           </div>
           <div class="txt2">
             <span>赠品</span>
             <b>贺卡 红色*1</b>
           </div>
         </van-col>
         <van-col class="right" span="3"><img src="./三个点灰.svg" ></van-col>
       </van-row>
    </van-cell>
</div>
</template>

<script>
export default{
	name:"Youhui",
	data(){
		return{
        // show:false
		}
	},
	methods:{
      // showPopup(){
      //   this.show=true;
      // }
	}
}
</script>

<style scoped>
  .discount{
    width: 375px;
    height: 70px;
    border-bottom: 10px solid #E8E8ED;
    padding: 0;
  }
  .top{
    height: 63px;
  }
  .left>p{
    margin-top: 2px;
    font-size: 12px;
    color: #999999;
    text-align: center;
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
  .mid{
    margin: 5px 0;
  }
  .mid>.txt1>span{
    color: #e4393c;
    border: #E4393C 1px solid;
    font-size: 10px;
  }
  .mid>.txt1>b{
    color: #333333;
    font-size: 12px;
  }
  .mid>.txt2>span{
    color: #e4393c;
    border: #E4393C 1px solid;
    font-size: 10px;
  }
  .mid>.txt2>b{
    color: #333333;
    font-size: 12px;
  }
.top2{
  background-color: #42B983;
}
</style>

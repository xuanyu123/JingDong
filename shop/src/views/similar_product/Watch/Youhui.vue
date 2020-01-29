<template>
  <div>
    <!-- //is-link @click="showPopup" -->
    <van-cell
    class="discount">
       <van-row class="top">
         <van-col class="left" span="3"><p>白条</p></van-col>
         <van-col class="mid" span="18">
           <div class="txt1">
             <b>6期内免息</b>
           </div>
         </van-col>
         <van-col class="right" span="3"><img src="./三个点灰.svg" ></van-col>
       </van-row>
    </van-cell>

   <!-- <van-popup class="top2" v-model="show">
      内容
    </van-popup>
    <van-popup
      v-model="show"
      closeable
      overlay="false"
      position="bottom"
      :style="{ height: '20%' }"
    /> -->
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
    height: 50px;
    border-bottom: 10px solid #E8E8ED;
    padding: 0;
  }
  .top{
    height: 50px;
  }
  .left>p{
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
    margin: 10px 0;
  }
  .mid>.txt1>b{
    color: #333333;
    font-size: 12px;
  }
</style>

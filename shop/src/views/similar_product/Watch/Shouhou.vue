<template>
  <div>
    <van-cell is-link @click="showPopup" class="shouhou">
          <div class="left">
            <img src="./支持.svg">
            <span>商家发货&售后</span>
          </div>
          <div class="mid">
            <img src="./禁止.svg">
            <span>不支持7天无理由退货</span>
          </div>
    </van-cell>
    <van-popup
     class="popu"
      style="z-index: 2010;"
      v-model="show"
      closeable
      position="bottom"
      :style="{ height: '50%' }"
    >
      <div class="top">
        <p>服务说明</p>
      </div>
      <div class="mid">
        <img src="./支持.svg">
        <span>商家发货&售后</span>
        <p>由金日禾野官方旗舰店从 福建厦门市 发货，并提供售后服务。</p>
      </div>
      <div class="bottom">
        <img src="./禁止.svg">
        <span>不支持7天无理由退货</span>
        <p>不支持7天无理由退货</p>
      </div>

    </van-popup>
  </div>
</template>

<script>
export default{
	name:"Shouhou",
	data(){
		return{
        show:false
		}
	},
	methods:{
      showPopup(){
        this.show=true;
      }
	}
}
</script>

<style scoped>
  .shouhou{
    width: 375px;
    height: 50px;
    position: relative;
    border-bottom: 10px solid #E8E8ED;
  }
  .left{
    width: 100px;
    margin-left: 10px;
    display: inline-block;
  }
  .mid{
    width: 140px;
    display: inline-block;
  }
  .shouhou img{
    width: 12px;
    height: 12px;
  }
  .shouhou span{
    color: #999999;
    font-size: 12px;
  }
  .popu>.top{
    padding-left:10px ;
    background-color: #f3f2f8;
    height: 40px;
  }
  .popu>.top>p{
    font-size: 14px;
    color: #333333;
    padding-top: 10px;
    margin: 0;
  }
  .popu>.mid{
    margin-left: 10px;
    padding: 15px 0;
    width: 375px;
  }
  .popu>.mid>img{
    width: 12px;
    height: 12px;
  }
  .popu>.mid>span{
    font-size: 12px;
    color: #333333;
  }
  .popu>.mid>p{
    color: #999999;
    font-size: 12px;
    margin: 0;
    padding-left: 15px;
  }
  .popu>.bottom{
    margin-left: 10px;
    padding: 15px 0;
    width: 375px;
  }
  .popu>.bottom>img{
    width: 12px;
    height: 12px;
  }
  .popu>.bottom>span{
    font-size: 12px;
    color: #333333;
  }
  .popu>.bottom>p{
    color: #999999;
    font-size: 12px;
    margin: 0;
    padding-left: 15px;
  }
</style>

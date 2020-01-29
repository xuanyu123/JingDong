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
          <!-- <div class="right">
            <img src="./三个点灰.svg">
          </div> -->
    </van-cell>

    <van-popup v-model="show" >内容</van-popup>
    <van-popup
      style="z-index: 2010;"
      v-model="show"
      closeable
      position="bottom"
      :style="{ height: '50%' }"
    />
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
  /* ight{
    display: inline-block;
  }
  .right>img{
    width: 20px;
    height: 20px;
    position: absolute;
    right: 15px;
    top: 0px;
  } */
</style>

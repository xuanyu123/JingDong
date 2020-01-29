<template>
  <div class="top">
    <a name="B"></a>
    <div class="left">
      <span>评价</span><b>好评 99%</b>
    </div>
    <div class="right">
      <span>共2.4万+条</span>
      <img src="./尖括号.svg">
    </div>
  </div>
</template>

<script>
export default{
	name:"Assess",
	data(){
		return{

		}
	},
	methods:{

	}
}
</script>

<style scoped>
  .top{
    width: 375px;
    height: 25px;
    padding: 10px;
    position: relative;
  }

  .left>span{
    color: #333333;
    font-size: 16px;
  }

  .left>b{
    margin-left: 10px;
    color: #E4393C;
    font-size: 12px;
  }
  .right>img{
    position: absolute;
    right: 30px;
    top:10px;
    width: 25px;
    height: 25px;
  }
  .right>span{
    position: absolute;
    right: 70px;
    top:15px;
    color: #333333;
    font-size: 12px;
  }
</style>

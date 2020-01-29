<template>
  <div class="top">
    <router-link to="/"><a href="#"><img src="./尖括号-左.svg"></a></router-link>
    <a href="#A">商品</a><a href="#B">评价</a><a href="#C">详情</a><a href="#D" >推荐</a>
    <a href="#"><img src="./三个点黑.svg"></a>
  </div>
</template>

<script>
export default{
	name:"Introduce",
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
  display: flex;
  align-items: center;
  height: 44px;
  width: 375px;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color:white;
  }
  .top img{
   width:20px ;
   height: 20px;
   margin: 10px ;
  }
  .top>a{
    flex: 1;
    text-align: center;
    color: #252525;
    font-size: 14px;
  }
</style>

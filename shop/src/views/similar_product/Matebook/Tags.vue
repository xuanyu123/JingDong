<template>
  <div class="top">
    <div>运行速度（2043）</div>
    <div>轻薄精巧（299）</div>
    <div>运行超快（205）</div>
    <div>方便快捷（170）</div>
    <div>反应灵敏（159）</div>
  </div>
</template>

<script>
export default{
	name:"Tags",
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
    height: 70px;
    align-items: center;
  }
 .top>div{
   width: 85px;
   height: 25px;
   background-color: #fdf0f0;
   float: left;
   font-size: 10px;
   color: #666666;
   margin-left: 10px;
   border-radius: 5px;
   line-height: 25px;
 }
</style>

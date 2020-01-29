<template>
  <div class="top">
    <div>口感俱佳（14）</div>
    <div>分量充足（10）</div>
    <div>方便实用（4）</div>
    <div>省事方便（4）</div>
    <div>营养丰富（4）</div>
    <div>新鲜味美（3）</div>
    <div>口感细腻（3）</div>
    <div>颗粒饱满（2）</div>

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
   width: 72px;
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

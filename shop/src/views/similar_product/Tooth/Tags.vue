<template>
  <div class="top">
    <div>易于操控（13）</div>
    <div>外观漂亮（11）</div>
    <div>非常好用（11）</div>
    <div>使用舒适（9）</div>
    <div>声音很轻（7）</div>
    <div>美观大方（3）</div>
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

<template>
  <div class="top">
    <div>尺寸合适（2）</div>
    <div>组装简便（1）</div>
    <div>纹理清晰（1）</div>
    <div>立体感强（1）</div>
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

<template>
  <div class="top">
    <div>计时准确（5）</div>
    <div>高端大气（4）</div>
    <div>简单时尚（2）</div>
    <div>佩戴美观（2）</div>
    <div>漂亮大气（1）</div>
    <div>大方得体（1）</div>
    <div>佩戴舒服（1）</div>
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

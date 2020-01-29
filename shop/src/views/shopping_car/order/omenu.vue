<template>
	<div class="top">
		<van-tabs v-model="active">
		  <van-tab title="全部(4)"></van-tab>
		  <van-tab title="降价(0)"></van-tab>
		  <van-tab title="常买(0)"></van-tab>
		  <van-tab title="分类∨">
		  </van-tab>
		</van-tabs>
	</div>

</template>

<script>
  export default{
    name:'',
    data(){
      return{
        active: 0,

      }
    },
    methods:{

    }
  }
</script>

<style scoped>
	.top{
    
	}
</style>

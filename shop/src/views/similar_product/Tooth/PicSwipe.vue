<template>
<van-swipe :autoplay="3000">
  <a name="A"></a>
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img style="width: 100vw;height: 375px;" :src="image" />
  </van-swipe-item>
</van-swipe>
</template>

<script>
export default{
	name:'PicSwipe',
	data(){
		return{
        images:[
          'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/90120/38/1257/207612/5dbba0b4Ebb61d9f3/326ea6515d8cf588.jpg!q80.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/85706/15/5819/363398/5df051d1E3bcb1f83/48a5b1fe588f8788.jpg!q70.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/85979/17/5991/398574/5df051f3Ee553fa0a/e623831100db5797.jpg!q70.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/83429/15/14211/210473/5dbba0ceE408ced4e/8809a92731493875.jpg!q70.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/89999/23/1218/243988/5dbba0cdE0598d85a/aa0044daff819e68.jpg!q70.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/86645/34/5891/358095/5df051e2Eecfff9d6/a2b9e97fde8b3b34.jpg!q70.dpg.webp'
        ]
		}
	}
}
</script>

<style>

</style>

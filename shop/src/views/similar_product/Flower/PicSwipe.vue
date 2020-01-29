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
          'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/28473/2/3028/103515/5c23a69bEc34eb1af/99859ca182f06099.jpg!q80.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/25655/34/3091/103133/5c23a69aE65b4f507/f28f3dac0df41b99.jpg!q70.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/29260/14/3087/55878/5c23a69aE4a0c8da9/19b713183228f67a.jpg!q70.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/28912/23/3037/127708/5c23a69aE159a5c21/7660fcadae6ebe68.jpg!q70.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/18707/7/3119/103515/5c23a69fE9220896b/de1b0ca2a0813323.jpg!q70.dpg.webp',
        ]
		}
	}
}
</script>

<style>

</style>

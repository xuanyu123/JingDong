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
          'http://m.360buyimg.com/mobilecms/s750x750_jfs/t1/108917/2/2351/670026/5e059ab0E28d5fbb2/660b82826c43b6c1.jpg!q80.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/99803/21/10581/589209/5e1ed4aeEe8508eb4/4fea8c3da2bef9de.jpg!q70.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/5042/35/3744/598199/5b9a2607Ea14b01d4/5e5c9d1f5142fe70.jpg!q70.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/2758/3/3680/500448/5b9a1e33E022e6a26/51ccbd5b137acf7b.jpg!q70.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/5744/16/3701/360360/5b9a1e4cEec86f4e2/106f0c5ba48e89a2.jpg!q70.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/4382/38/3741/776877/5b9a22f0E999429db/84963227b4865daa.jpg!q70.dpg.webp'
        ]
		}
	}
}
</script>

<style>

</style>

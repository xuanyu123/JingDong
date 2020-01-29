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
          'https://m.360buyimg.com/mobilecms/s750x750_jfs/t19810/303/663686830/737202/20736077/5b039308N19c4dd68.jpg!q80.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t17050/7/2584526722/737202/20736077/5b03930cNc982801e.jpg!q70.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t21001/33/201834439/737202/20736077/5b03930fN7f0d46f9.jpg!q70.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t17461/171/2673106772/737202/20736077/5b039311N023081c4.jpg!q70.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t19375/142/2639932340/581306/3c1031cc/5b039332N410d4051.jpg!q70.dpg.webp',
        ]
		}
	}
}
</script>

<style>

</style>

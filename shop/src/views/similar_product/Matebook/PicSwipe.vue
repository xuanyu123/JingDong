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
          'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/85358/12/9694/337732/5e1289e2E29ca9e5c/2cce418aac17828e.jpg!q80.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/46185/28/10482/283518/5d78b834Eebb762d2/5543a99a058e7282.png.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/74296/10/10088/100400/5d78b834Ec856cdf2/25ec4c46224c745e.png.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/41791/29/14690/72858/5d78b834E480ed9b6/7e54800e2a13490d.png.webp',
        ]
		}
	}
}
</script>

<style>

</style>

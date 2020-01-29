<template>
<van-swipe :autoplay="3000">
  <a name="A"></a>
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img style="width: 375px;height: 375px;" :src="image" />
  </van-swipe-item>
</van-swipe>
</template>

<script>
export default{
	name:'PicSwipe',
	data(){
		return{
        images:[
          'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/27733/19/8036/153269/5c739bf4E91c6dbff/55f16363ab30a8fb.jpg!q80.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/52044/39/8355/93605/5d5cf99eE360ae228/c62c4fed67654c25.jpg!q70.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/79758/20/7853/105715/5d5cf939E9f161d22/064a03ccd638e013.jpg!q70.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/44475/30/8951/128641/5d5cf939E749239a2/a25b5037d9e91ded.jpg!q70.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/42554/7/12571/137627/5d5cf93aEcb32002c/71f166d1333eda9b.jpg!q70.dpg.webp',
          'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/70742/22/7923/114496/5d5cf93aE9c3ca6fa/99e57687f2259e3e.jpg!q70.dpg.webp'
        ]
		}
	}
}
</script>

<style>

</style>

<template>
  <div>
    <a name="C"></a>
    <div v-for="(item,index) in list" :key="index">
      <img :src="item.img">
    </div>
  </div>

</template>

<script>
export default{
	name:"Xiangqing",
	data(){
		return{
        list:[
          {'img':'https://img30.360buyimg.com/popWaterMark/jfs/t19489/145/2701613553/27450/8e4d5ece/5b039370N58bfd603.jpg!q70.dpg.webp',},
          {'img':'https://img30.360buyimg.com/popWaterMark/jfs/t20959/189/199479993/673117/ee133c5c/5b03937aN84f63b3c.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWaterMark/jfs/t18439/5/2660860495/208988/4088988b/5b03938aNeb9b3192.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWaterMark/jfs/t19705/46/2649207230/190452/c576c2d7/5b03938fN43f6c34f.jpg!q70.dpg.webp',},
          {'img':'https://img30.360buyimg.com/popWaterMark/jfs/t19669/55/2691770673/270468/34563755/5b039393N29ebc8fd.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWaterMark/jfs/t18850/219/2683211805/204666/2817f93f/5b039395Nbbcb8fca.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWaterMark/jfs/t21475/230/197445075/282136/5551a4dd/5b0393a1N9e21b726.jpg!q70.dpg.webp',},
        ]
		}
	},
	methods:{

	}
}
</script>

<style scoped>
  img{
    width: 375px;
    float: left;
  }
</style>

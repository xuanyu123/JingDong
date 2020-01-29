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
          {'img':'https://img12.360buyimg.com/imgzone/jfs/t1/109912/37/2932/228191/5e0c5ff0E5aec99a5/4410644755cde1fb.jpg!q70.dpg.webp',},
          {'img':'https://img13.360buyimg.com/imgzone/jfs/t1/63603/38/16415/320759/5dde412eE8c28ca5b/3b5fe05ff7187a95.jpg!q70.dpg.webp'},
          {'img':'https://img14.360buyimg.com/imgzone/jfs/t1/44850/15/9582/79176/5d6e5206E0c40b7b6/c99348878d7f2976.jpg!q70.dpg.webp'},
          {'img':'https://img12.360buyimg.com/imgzone/jfs/t1/97249/5/10655/491062/5e1eb5bfEf96ffbac/d8659d8e01b280cb.jpg!q70.dpg.webp',},
          {'img':'https://img14.360buyimg.com/imgzone/jfs/t1/49862/13/9677/164840/5d6f6116Ed835ba82/66709dcfef928115.jpg!q70.dpg.webp'},
          {'img':'https://img14.360buyimg.com/imgzone/jfs/t1/57331/37/9613/132155/5d6f6116E1390e42d/cebce694699bf1f2.jpg!q70.dpg.webp'},
          {'img':'https://img13.360buyimg.com/imgzone/jfs/t1/100857/20/3552/216631/5de0db95Ee4846460/c58e9d24adc2a9cc.jpg!q70.dpg.webp',},
          {'img':'https://img14.360buyimg.com/imgzone/jfs/t1/68593/36/9148/139080/5d6f60e6Ed14537d8/f00657bedd602f59.jpg!q70.dpg.webp'},
          {'img':'https://img14.360buyimg.com/imgzone/jfs/t1/47405/30/9962/297530/5d73163aE638949ac/08dcbc740386a896.jpg!q70.dpg.webp'},
          {'img':'https://img12.360buyimg.com/imgzone/jfs/t1/52328/22/10121/293459/5d731639E55cf5c0a/3102cc373c3f52c2.jpg!q70.dpg.webp'},
          {'img':'https://img13.360buyimg.com/imgzone/jfs/t1/52820/36/9955/368836/5d73163aEae2ecdb7/18b80f1c5368b056.jpg!q70.dpg.webp',},
          {'img':'https://img14.360buyimg.com/imgzone/jfs/t1/60194/29/9423/182842/5d73163aE124bc1df/c0bbfa3852bd93b4.jpg!q70.dpg.webp'},
          {'img':'https://img13.360buyimg.com/imgzone/jfs/t1/56848/4/9958/159846/5d73163aE93c5dfa1/cdd124f499792f27.jpg!q70.dpg.webp'},
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

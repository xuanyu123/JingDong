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
          {'img':'https://img10.360buyimg.com/imgzone/jfs/t1/95801/5/6300/242708/5df2ebcbEf1d6fe62/ee1dbee22e6ef631.jpg!q70.dpg.webp',},
          {'img':'https://img30.360buyimg.com/popWareDetail/jfs/t1/75949/23/7909/103087/5d5cfa16E4d122354/e084454790088b8a.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWareDetail/jfs/t1/68131/28/7860/96343/5d5cfa16E16a56d59/3da5b26c198454bc.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWareDetail/jfs/t1/56363/12/8426/103080/5d5cfa16Ec8f1b308/bb1b19670f96c123.jpg!q70.dpg.webp',},
          {'img':'https://img30.360buyimg.com/popWareDetail/jfs/t1/62062/7/7906/111949/5d5cfa16Ef90c1d6f/fb84bd86edf0eabc.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWareDetail/jfs/t1/77215/33/7791/114126/5d5cfa17E8c27dfd0/b5556bd12d9051ea.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWareDetail/jfs/t1/65620/14/7888/119680/5d5cfa17E19b8d6ea/e0428a04a8ea9a52.jpg!q70.dpg.webp',},
          {'img':'https://img30.360buyimg.com/popWareDetail/jfs/t1/79146/9/7921/111920/5d5cfa17E0d8dd857/1634663f7e00571a.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWareDetail/jfs/t1/71147/8/7829/110272/5d5cfa17Ede03e9d9/cefdc392e36e5171.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWareDetail/jfs/t1/70256/28/7864/75344/5d5cfa17E0553e537/7661ba4d0aaf2ea5.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWareDetail/jfs/t1/52053/16/8304/126708/5d5cfa18E248b0165/e207bd4e0694247a.jpg!q70.dpg.webp',},
          {'img':'https://img30.360buyimg.com/popWareDetail/jfs/t1/73810/23/7931/83597/5d5cfa17E8397469a/6e458be3f45acc0a.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWareDetail/jfs/t1/57019/25/8281/98454/5d5cfa18Ed1cb77ae/893025dda758234c.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWareDetail/jfs/t1/48673/31/8355/195370/5d5cfa18E88d0cf40/3a8023a5128698f2.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWareDetail/jfs/t1/75023/36/7789/119627/5d5cfa18E9dd8c3e2/b9f15970bbf71033.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWareDetail/jfs/t1/71547/16/7780/122806/5d5cfa19E84f5619d/325f5a65fb9aee1b.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWareDetail/jfs/t1/51461/28/8384/122047/5d5cfa19Ec476a49a/0b631cf70ac08e50.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWareDetail/jfs/t1/62385/1/7826/146469/5d5cfa19E3b63bb58/813ba7933798ceb9.jpg!q70.dpg.webp'},
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

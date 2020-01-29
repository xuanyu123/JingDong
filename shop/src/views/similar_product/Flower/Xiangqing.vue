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
          {'img':'https://img30.360buyimg.com/popWaterMark/jfs/t1/68696/21/4197/109992/5d24a801Ed6a9dc31/ec3b2adba70b1519.jpg!q70.dpg.webp',},
          {'img':'https://img30.360buyimg.com/popWaterMark/jfs/t1/42120/2/8850/248763/5d24a802Eef76f92f/0a9a1263f73c6b9e.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWaterMark/jfs/t1/59305/26/4536/90383/5d24a802Ee6451bc0/cb1e35768b208f0e.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWaterMark/jfs/t1/53633/22/4692/296374/5d24a803E7cecb830/a64fa415f5dbc37a.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWaterMark/jfs/t1/53633/22/4692/296374/5d24a803E7cecb830/a64fa415f5dbc37a.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWaterMark/jfs/t1/36452/36/14391/111096/5d24a803E65dba4dc/2558959bf0d2471a.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWaterMark/jfs/t1/60211/24/4106/213349/5d24a803E98950987/85504a73987d3c94.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWaterMark/jfs/t1/84667/10/4458/116536/5d24a819Ed7ece3e5/287ba8ec7073d116.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWaterMark/jfs/t1/68415/24/4158/196622/5d24a81bEf69e403f/c1837e9ad684576e.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWaterMark/jfs/t1/80492/40/4183/289566/5d24a81bEa7c0dcad/946a17502b58b4ea.jpg!q70.dpg.webp'},
          {'img':'https://img30.360buyimg.com/popWaterMark/jfs/t1/61287/36/4110/196983/5d24a81bEf7fc56ca/54f4c0e025e9a3cd.jpg!q70.dpg.webp'},
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

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
          {'img':'https://img10.360buyimg.com/cms/jfs/t1/34799/28/10467/353382/5cdfb2baEe66c23a1/6eaa968c0735e0a7.jpg',},
          {'img':'https://img12.360buyimg.com/cms/jfs/t7807/16/1762731529/662061/262f0d02/59a0eb89Ne4aa5d4f.jpg'},
          {'img':'https://img14.360buyimg.com/cms/jfs/t7456/343/1710235318/729026/aabb3e4d/59a0eb86N153295d5.jpg'},
          {'img':'https://img13.360buyimg.com/cms/jfs/t1/62954/6/11444/402307/5d8c921dE79b40992/ab5a7e25d41446fa.jpg',},
          {'img':'https://img14.360buyimg.com/cms/jfs/t8080/289/108580442/282722/6d433cc0/59a0eb8cNc8e0e27c.jpg'},
          {'img':'https://img13.360buyimg.com/cms/jfs/t7393/299/1762699998/368814/f417d265/59a0eb88N6b22ef2e.jpg'},
          {'img':'https://img11.360buyimg.com/cms/jfs/t9013/270/109918938/322424/9eaa8f62/59a0eb8eNd271a30f.jpg',},
          {'img':'https://img10.360buyimg.com/cms/jfs/t8740/273/112460722/524081/cf09319b/59a0eb8fNe64c303b.jpg'},
          {'img':'https://img12.360buyimg.com/cms/jfs/t7714/12/1795533813/323257/30059e9b/59a0eb7fN63496787.jpg'},
          {'img':'https://img10.360buyimg.com/cms/jfs/t9427/303/102906042/380357/bfa3c2a4/59a0eb91N9bf92e6e.jpg'},
          {'img':'https://img12.360buyimg.com/cms/jfs/t9352/304/107369658/851098/4dffaecc/59a0eb92N968c5b21.jpg',},
          {'img':'https://img13.360buyimg.com/cms/jfs/t8539/305/105863607/897895/7965ae91/59a0eb93N099d36c0.jpg'},
          {'img':'https://img13.360buyimg.com/cms/jfs/t7954/325/1812298425/466006/ae04aa48/59a0eb94N31637277.jpg'},
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

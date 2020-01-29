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
          {'img':'https://img30.360buyimg.com/sku/jfs/t1/104321/28/3309/86000/5ddf36f6Ec682e332/f4796a7bfdf35d8a.jpg',},
          {'img':'https://img30.360buyimg.com/sku/jfs/t1/100008/23/5898/338864/5df046ebEa3f2330d/19be4fb1096d0800.jpg'},
          {'img':'https://img30.360buyimg.com/sku/jfs/t1/98815/6/5662/368444/5def1635E1ea73760/1a343a8a16629e06.jpg'},
          {'img':'https://img30.360buyimg.com/sku/jfs/t1/90802/2/5808/354092/5def1635E2fa71c5b/bddcaac6da062f37.jpg',},
          {'img':'https://img30.360buyimg.com/sku/jfs/t1/103150/31/5712/309785/5def1633E604b0a42/7c41a1798a0b8774.jpg'},
          {'img':'https://img30.360buyimg.com/sku/jfs/t1/89355/4/5662/367150/5def1636Ef7ff39e0/eff23e0a345c1296.jpg'},
          {'img':'https://img30.360buyimg.com/sku/jfs/t1/85239/11/5662/333840/5def1636E2a17c3e4/e8d51be45d16a344.jpg',},
          {'img':'https://img30.360buyimg.com/sku/jfs/t1/90415/37/5750/381158/5def1636Ef1fb4018/7deaf0723ae71f93.jpg'},
          {'img':'https://img30.360buyimg.com/sku/jfs/t1/105095/5/5557/81363/5def1630E2e83e3cd/065df5ad754878bb.jpg'},
          {'img':'https://img30.360buyimg.com/sku/jfs/t1/101334/26/5685/295765/5def1634E8e73da2d/f3370faf2bb96bca.jpg'},
          {'img':'https://img30.360buyimg.com/sku/jfs/t1/95739/12/5740/102959/5def1631E2731f0f7/5bf685007d84a006.jpg'},
          {'img':'https://img30.360buyimg.com/sku/jfs/t1/97917/37/5777/153672/5def1631E8e791b4f/fb80c1831eed06e0.jpg'},
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

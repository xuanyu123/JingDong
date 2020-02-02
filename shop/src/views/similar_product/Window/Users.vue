<template>
  <div class="ping">
    <div class="user" v-for="(item,index) in list" :key=index>
      <div class="top">
        <img :src="item.img"><span>{{item.name}}</span><b><img src="./红五角星.svg"><img src="./红五角星.svg"><img src="./红五角星.svg"><img src="./红五角星.svg"><img src="./红五角星.svg"></b>
        <div class="date">
          <p>{{item.date}}</p>
        </div>
      </div>
      <p>{{item.txt}}</p>
      <img :src="item.pic1">
      <img :src="item.pic2">
    </div>
  </div>
</template>

<script>
export default{
	name:"",
	data(){
		return{
        list:[
          {'img':'/static/similar_img/32.png','name':'h***1','date':'2019-10-16',
          'txt':'质量超级棒~卖家服务态度很好',
          'pic1':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t23233/221/1406436059/173322/7028f9e9/5b5fb4a1Ndb39ca41.jpg!cc_100x100!q70.dpg.webp',
          'pic2':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t21958/98/2680785689/150194/6a6e19dd/5b5fb4a0Nb46593fb.jpg!cc_100x100!q70.dpg.webp'},
          {'img':'/static/similar_img/33.png','name':'jd_147814','date':'2019-9-3',
          'txt':'因为急用所以选择在京东购买，物流很给力！在约定时间内送货到家！这次买了两套4扇门的屏风质量非常好，显档次，很满意！打算再买一套',
          'pic1':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/6957/34/9040/488895/5c128808E23023b74/cc113b4511414673.jpg!cc_100x100!q70.dpg.webp',
          'pic2':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t26710/50/227362925/391299/70a435ea/5b8b3754N31c99f12.jpg!cc_100x100!q70.dpg.webp'}
        ]
		}
	},
	methods:{

	}
}
</script>

<style scoped>
  .ping{
    border-bottom: 10px solid #e8e8ed;
  }
  .uesr{
    border-bottom: 1px solid #333333;
  }
  .top{
    position: relative;
  }
  .top>img{
    width: 25px;
    height: 25px;
    border-radius: 12.5px;
    margin-left: 5px ;
    margin-top: 5px;
  }
  .top>span{
    width: 48px;
    height: 25px;
    color: #333333;
    font-size: 12px;
    margin-left: 10px;
  }
  .top>b{
    margin-left: 10px;
  }
  .top>b>img{
    width: 10px;
    height: 10px;
  }
  .top>.date>p{
    color: #999999;
    font-size: 12px;
    position: absolute;
    right: 10px;
    top: 10px;
  }
  p{
    margin: 5px;
    color: #333333;
    font-size: 14px;
  }
  .user{
    margin-left: 5px ;
  }
  .uesr>img{
    width: 80px;
    height: 80px;
  }

</style>

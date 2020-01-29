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
          {'img':'/static/28.png','name':'贵和同享','date':'2019-10-16',
          'txt':'原来一直在线下商超买燕麦片，第一次在京东买燕麦产品，比较了好几个品牌，最终选择了金日禾野，主要是对于这种产品没有太多的了解，也没有品牌感知，只是跟…',
          'pic1':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t25210/121/1548700074/244688/6eb82716/5bb560a1N7a0ce673.jpg!cc_100x100!q70.dpg.webp',
          'pic2':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/105833/3/76/137482/5da702e2E94fe07d1/45fc6686b7f7b4e9.jpg!cc_100x100!q70.dpg.webp'},
          {'img':'/static/29.png','name':'lyllll','date':'2019-9-3',
          'txt':'经常网购，老有大量包裹要收，写评价要耗费大量时间和精力，不评或随便评评又对不住卖家和客服还有快递，所以我写下这段话，给那些我觉得能拿到我五星好评的卖家的宝贝评价里以示感谢。京东的快递是最棒的，送货快，服务还很好。希望能再接再厉，做得更大更强，把更好的东西和服务带给大家…',
          'pic1':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/7588/37/13023/161762/5c3ef239Ec7efd1af/c808d627dcf4ffe9.jpg!cc_100x100!q70.dpg.webp',
          'pic2':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/99366/8/2831/368232/5dd8e1f7Ef0136d86/a23e16321490f746.jpg!cc_100x100!q70.dpg.webp'}
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
    top: 5px;
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

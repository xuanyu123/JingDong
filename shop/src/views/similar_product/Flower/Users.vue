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
          'txt':'临时更改了地址，送货员也很快送到了。东西收到了，质量不错，和描述的一样。客服也给好评。鲜花很新鲜，家人收到很开心。性价比最高。',
          'pic1':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/34221/13/8902/379593/5cd11a49Ec43e2c1d/5c474f0027ece1b4.jpg!cc_100x100!q70.dpg.webp',
          'pic2':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/36479/18/9680/421580/5cd11a49Eaecb0bf9/28032171c44da8b8.jpg!cc_100x100!q70.dpg.webp'},
          {'img':'/static/29.png','name':'lyllll','date':'2019-9-3',
          'txt':'花花很新鲜 送花速度超快 价格实惠又美丽 好评满满 哈哈',
          'pic1':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/46584/13/7875/91329/5d575e71E7b1f61a3/ad87f663582f80f4.jpg!cc_100x100!q70.dpg.webp',
          'pic2':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/42240/16/12164/74963/5d575e73Ef8cd81e9/c52e6db36fcc2ab8.jpg!cc_100x100!q70.dpg.webp'}
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

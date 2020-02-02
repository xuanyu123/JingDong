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
          {'img':'/static/similar_img/28.png','name':'贵和同享','date':'2019-10-16',
          'txt':'京造的质量还是很好的。一直在找一个电动牙刷，终于等到了京东的自有品牌，所以就没有犹豫。电动的比普通的刷牙要更干净，而且更省事一些。本款是无线充电的，用起来非常方便。充电时有蜂鸣的电流声，充满还是比较快的。京造作为自有产品会有很好的保证。以后还会支持的。',
          'pic1':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/106494/28/9520/64015/5e10483eEb4b6e890/d3748628052dfba2.jpg!cc_100x100!q70.dpg.webp',
          'pic2':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/88482/17/9592/60618/5e10483fE51d050c1/f591da7c021b277b.jpg!cc_100x100!q70.dpg.webp'},
          {'img':'/static/similar_img/29.png','name':'lyllll','date':'2019-9-3',
          'txt':'这个牙刷的颜值很高，白色的确实很漂亮，其他的颜色不知道。几种不同的模式，振动的方式和振动的频率都不一样。充电完全是感应的。噪音也不大，手柄的震感也不是很强，一点也不麻手。买完之后立刻刷了一下，感觉刷完确实很干净。有一种滑滑的感觉。就是只有一个刷头，以后用完了，不知道到哪里买刷头。',
          'pic1':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/46911/32/16416/47097/5dd51a3eEc5543912/8010a24ac8b84002.jpg!cc_100x100!q70.dpg.webp',
          'pic2':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/78877/37/15689/74027/5dd51a3eE6dd0668d/308ae8d000a1a547.jpg!cc_100x100!q70.dpg.webp'}
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

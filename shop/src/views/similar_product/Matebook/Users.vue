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
          {'img':'/static/30.png','name':'m***o','date':'2019-10-16',
          'txt':'运行速度快，屏幕效果细腻',
          'pic1':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/83730/14/15826/45437/5dd78901Ee291f5ca/314b10b864e53d4e.jpg!cc_100x100!q70.dpg.webp',
          'pic2':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/75812/34/15899/52179/5dd78901E6c145bc0/e0c780a1bf90d7da.jpg!cc_100x100!q70.dpg.webp'},
          {'img':'/static/31.png','name':'w**8o','date':'2019-9-3',
          'txt':'散热性能 没感觉到发热，无声响',
          'pic1':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/103300/20/1984/69771/5dc96d24Ed2b65615/2fc87f33c553dd45.jpg!cc_100x100!q70.dpg.webp',
          'pic2':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/49867/30/15569/60012/5dc96d24Eb4c88857/dc5ed9edf212ef30.jpg!cc_100x100!q70.dpg.webp'}
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

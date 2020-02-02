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
	name:"Users",
	data(){
		return{
        list:[
          {'img':'/static/similar_img/28.png','name':'最可爱丫','date':'2019-12-28',
          'txt':'颜值很高，拆开第一眼确实是惊艳到我了，很好的一款，拿到的时候时间都是调好的很精准，首推吧，店家服务态度也是非常好的，点个赞</div>…',
          'pic1':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/85993/23/8747/284179/5e071567Eef8bf8f5/19b50a6ecf74da24.jpg!cc_100x100!q70.dpg.webp',
          'pic2':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/100736/3/8648/282068/5e07156aEba938a9f/cb864e15abd02d17.jpg!cc_100x100!q70.dpg.webp'},
          {'img':'/static/similar_img/29.png','name':'lyllll','date':'2019-9-12',
          'txt':'表还算不错，低调却有内涵，平凡却不显俗气，建议表盘做大一点快递还算比较快。先体验一下，给个四星好评，怕你骄傲，待后续评价。</div>',
          'pic1':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/76369/17/10027/62798/5d7a083eEce394e2b/855bfb52efe5dc75.jpg!cc_100x100!q70.dpg.webp',
          'pic2':'https://img30.360buyimg.com/shaidan/s128x96_jfs/t1/79484/40/15261/239774/5dccc4efEbe2b32ba/4329308efe6a1077.jpg!cc_100x100!q70.dpg.webp'}
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

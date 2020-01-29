<template>
  <div>
    <div class="top">
      <a name="D">猜你喜欢</a>
    </div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <van-grid :border="false" :column-num="3">
            <van-grid-item  v-for="(item,index) in list" :key="index">
              <van-image :src="item.img" />
              <p class="good">{{item.txt}}</p>
              <div class="left">
                <span>￥</span><b>{{item.price}}</b><span>{{item.second}}</span>
              </div>
              </van-grid-item>
        </van-grid>
      </van-swipe-item>
      <van-swipe-item>
        <van-grid :border="false" :column-num="3">
            <van-grid-item  v-for="(item,index) in list2" :key="index">
              <van-image :src="item.img" />
              <p class="good">{{item.txt}}</p>
              <div class="left">
                <span>￥</span><b>{{item.price}}</b><span>{{item.second}}</span>
              </div>
              </van-grid-item>
        </van-grid>
      </van-swipe-item>
    </van-swipe>

  </div>
</template>

<script>
export default{
	name:"Favorate",
	data(){
		return{
      list:[
        {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/100553/24/11175/140264/5e2ea5b1Ee5cd62ba/367f846ec471f7a0.jpg!q70.dpg.webp',
         'txt':'<德国 PADEMA 帕德玛S3…',
         'price':'499.','second':'90'},
         {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/79980/12/12928/48238/5da56d97E2a9e3189/2a9e45fbfa62c0db.jpg!q70.dpg.webp',
          'txt':'京东京造 声波电动牙刷R3 极简…',
          'price':'158.','second':'90'},
          {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/94449/22/10029/91526/5e1484e0Eaaaea225/0741b63d71166bc7.jpg!q70.dpg.webp',
           'txt':'欧可林（Oclean）小米有品爆款 旗舰智能触…',
           'price':'269.','second':'90'}
      ],
      list2:[
        {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/94449/22/10029/91526/5e1484e0Eaaaea225/0741b63d71166bc7.jpg!q70.dpg.webp',
         'txt':'京东京造 声波电动牙刷N5…',
         'price':'199.','second':'90'},
         {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/102137/20/9384/62046/5e0f4bf0Eed69a5ab/b34afc89cf3b37b1.jpg!q70.dpg.webp',
          'txt':'罗曼 电动牙刷成人情侣 声波口腔护理充…',
          'price':'199.','second':'90'},
          {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/72622/1/13066/102255/5da587cbE7774e47a/3854e91a6b47f272.jpg!q70.dpg.webp',
           'txt':'京东京造 声波电动牙刷X8 轻奢版 薄荷…',
           'price':'299.','second':'90'}
      ]
		}
	},
	methods:{

	}
}
</script>

<style scoped>
  .top>a{
    font-size: 14px;
    color: #333333;
    margin-left: 10px;
  }
  .good{
    color: #333333;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }
  .left{
    color: red;
    font-size:10px;
    float: left;
    margin-left: -55px;
  }
  .left>b{
    font-size: 16px;
  }
</style>

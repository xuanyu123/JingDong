<template>
  <div>
    <div class="top">
      <a name="D">猜你喜欢</a>
    </div>
    <van-swipe :autoplay="5000" indicator-color="white">
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
        {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t4264/269/3137120970/474551/ef34ed70/58db20e0N5168ec25.jpg!q70.dpg.webp',
         'txt':'现代中式屏风隔断客厅茶楼酒店大',
         'price':'358.','second':'00'},
         {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t7753/292/4085524204/261676/e998e432/5a002235Ndc9ed25b.jpg!q70.dpg.webp',
          'txt':'屏风实木隔断客厅现代简约玄关处…',
          'price':'660.','second':'00'},
          {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t7597/126/2018222711/472108/74b2e38/59a68bc3Nc7fde5a7.jpg!q70.dpg.webp',
           'txt':'诚乐美客厅玄关办公室卧室书房现…',
           'price':'95.','second':'04'}
      ],
      list2:[
        {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t16510/255/1363312029/276940/32197b44/5a517e2eN06044a09.jpg!q70.dpg.webp',
         'txt':'屏风隔断客厅实木现代简约中式办…',
         'price':'170.','second':'00'},
         {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t26485/215/2491935057/103503/3694157a/5c029d5eN596ec346.jpg!q70.dpg.webp',
          'txt':'办公室移动折叠屏风玄关 隔断 客厅…',
          'price':'398.','second':'00'},
          {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t20158/246/2131095298/259691/e46b03e5/5b45a6faN3fefc819.jpg!q70.dpg.webp',
           'txt':'实木中式仿古屏风折叠可移动酒店…',
           'price':'640.','second':'00'}
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
  }
  .left{
    color: red;
    font-size:10px;
    float: left;
    margin-left: -50px;
  }
  .left>b{
    font-size: 16px;
  }
</style>

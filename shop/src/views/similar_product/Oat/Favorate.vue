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
        {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/48734/2/838/605126/5ce8e36cE16d5b839/ed0c34a6bb997758.jpg!q70.dpg.webp',
         'txt':'嘉谷 原味即食燕麦片 无添加蔗糖 免…',
         'price':'29.','second':'90'},
         {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/80392/20/7100/601795/5d537134Eaaf169cd/a95a714d76162932.jpg!q70.dpg.webp',
          'txt':'金日禾野 燕麦片青稞片2合1太极燕…',
          'price':'39.','second':'90'},
          {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t29041/34/145709639/389668/56d602c0/5be9342aNf1ccbe04.jpg!q70.dpg.webp',
           'txt':'西麦 燕麦片 营养早餐食品 牛奶好搭…',
           'price':'25.','second':'90'}
      ],
      list2:[
        {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/48734/2/838/605126/5ce8e36cE16d5b839/ed0c34a6bb997758.jpg!q70.dpg.webp',
         'txt':'金日禾野 纯燕麦片900g  冲饮麦片…',
         'price':'68.','second':'90'},
         {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/21117/39/9805/151345/5c81e293Eadca2896/eaf20fc04b7fcd97.jpg!q70.dpg.webp',
          'txt':'桂格（QUAKER） 经典原味燕麦片…',
          'price':'27.','second':'90'},
          {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t30466/37/142093809/448876/135a191c/5be933c8N9a1f773f.jpg!q70.dpg.webp',
           'txt':'西麦 燕麦片 营养早餐食品 牛奶好搭…',
           'price':'16.','second':'90'}
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
    margin-left: -55px;
  }
  .left>b{
    font-size: 16px;
  }
</style>

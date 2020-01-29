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
        {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1174/9/37058058/650886/f3b7961/54fd01dfN91990a8c.jpg!q70.dpg.webp',
         'txt':'中礼鲜花速递33枝红玫瑰花束全国…',
         'price':'188.','second':'00'},
         {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/51271/20/15983/132234/5dd15406Ecebbc2f2/086dbcc4de9bfb83.jpg!q70.dpg.webp',
          'txt':'浪漫季节鲜花速递33朵红玫瑰满天…',
          'price':'158.','second':'90'},
          {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t16975/259/864430280/306610/29349b24/5aaf68b2Nc951ee07.jpg!q70.dpg.webp',
           'txt':'艾美珈生日花束玫瑰花礼盒同城送花皂…',
           'price':'99.','second':'90'}
      ],
      list2:[
        {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t13417/329/2533637957/137077/fb6718de/5a436beaN260a05aa.jpg!q70.dpg.webp',
         'txt':'恋森鲜花速递33朵红玫瑰花束蓝色…',
         'price':'148.','second':'90'},
         {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/41600/36/11715/189883/5d536725Ee18642f8/82bff1a7ee10ed80.jpg!q70.dpg.webp',
          'txt':'鲜花速递康乃馨玫瑰花鲜花百合花…',
          'price':'136.','second':'90'},
          {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/27127/34/272/206330/5c08b9c8E69fcdbce/aac3f4ef3ecf23d1.jpg!q70.dpg.webp',
           'txt':'初卉 鲜花速递红玫瑰花情人节礼物送…',
           'price':'148.','second':'90'}
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

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
        {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/27170/4/15238/161463/5caf0722Ea67a3dab/2bf705ef7631cbeb.jpg!q70.dpg.webp',
         'txt':'西亚尼（CIRNI）全自动机械表男士…',
         'price':'1299.','second':'00'},
         {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/45107/15/11349/207288/5d844828E8ed70d5a/33d58c75562888b5.jpg!q70.dpg.webp',
          'txt':'卡罗莱男士手表防水时尚2019新款…',
          'price':'1198.','second':'00'},
          {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/77806/36/15164/175958/5dc9901eEde5185b2/63c034b9e5a14d89.jpg!q70.dpg.webp',
           'txt':'卡西欧(CASIO)手表男edifice系列…',
           'price':'1341.','second':'00'}
      ],
      list2:[
        {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/21775/9/13564/146648/5c9f490eE92baba50/c2e87adba8afb525.jpg!q70.dpg.webp',
         'txt':'卡罗莱（CALUOLA）全自',
         'price':'2280.','second':'00'},
         {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/25019/20/905/455111/5c0e31a5Ede809acf/ff93742d7e54c745.jpg!q70.dpg.webp',
          'txt':'卡罗莱（CALUOLA）全自',
          'price':'1198.','second':'00'},
          {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/89491/31/10909/221709/5e23d6a1E07c242ab/69048692a5874ec3.jpg!q70.dpg.webp',
           'txt':'卡罗莱（CALUOLA）全自',
           'price':'2888.','second':'00'}
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
    margin-left: -45px;
  }
  .left>b{
    font-size: 16px;
  }
</style>

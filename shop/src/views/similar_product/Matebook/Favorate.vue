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
        {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/87957/34/9972/174883/5e180da8Edf33682f/c9ac87f55d285ed5.jpg!q70.dpg.webp',
         'txt':'华为笔记本 MateBook 14 第三方Linux版超薄本全面屏超极本轻薄本学生商务手提笔记本电脑 深空灰|i7-8565U 8G 512G独显(现货）',
         'price':'6599.','second':'00'},
         {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/71846/32/13469/292050/5dae7d7eEc491fb59/1621508d562069a5.jpg!q70.dpg.webp',
          'txt':'华为(HUAWEI)MateBook 14 第三方Linux版 全面屏轻薄性能笔记本电脑 英特尔酷睿(i7 8+512GB 2k 独显)灰',
          'price':'6699.','second':'00'},
          {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/84791/36/9626/189476/5e0ff6d6E8ba240b3/ddec0c597e025bfd.jpg!q70.dpg.webp',
           'txt':'华为笔记本MateBook D 14 15 全面屏轻薄本AMD锐龙版商务办公学生手提笔记本电脑超极本 14英寸银丨R5-3500U 8G 512G固态',
           'price':'3999.','second':'00'}
      ],
      list2:[
        {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/64738/22/13182/120357/5da447deE6deb3f21/14fa4b7aca3e945a.jpg!q70.dpg.webp',
         'txt':'华为笔记本MateBook X Pro 第三方Linux版13.9英寸全面屏轻薄本超极本笔记本电脑 深空灰 i7 8565U 8G 512G独显',
         'price':'9998.','second':'00'},
         {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/105689/28/11096/321656/5e27f870E5fd05bbc/6ef5b70f12b234c9.jpg!q70.dpg.webp',
          'txt':'ThinkPad联想 E580 15.6寸轻薄本商务办公笔记本ibm手提电脑i5-8250U独显 16G内存 512G固态定制@24CD',
          'price':'4499.','second':'00'},
          {'img':'https://img14.360buyimg.com/mobilecms/s270x270_jfs/t1/85079/20/10888/349835/5e2276c7Efb59309c/1b560543843ec365.jpg!q70.dpg.webp',
           'txt':'华硕（ASUS）VivoBook14S/VivoBook15S轻薄笔记本电脑学生办公手提',
           'price':'4999.','second':'00'}
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
    margin-left: -45px;
  }
  .left>b{
    font-size: 16px;
  }
</style>

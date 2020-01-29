<template>
  <div>
    <div class="title_wrap">
      <img style="width:100%" src="https://img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png">
    </div>
    <div>
      <van-grid style="width: 94%;margin-left: 10px"  :border="false" :column-num="2">
        <van-grid-item class="van-grid-item__content" v-for="(item,index) in list" :key="index">
          <router-link :to="item.link">
            <van-image :src="item.img1" />
            <span class="text">
            <img style="height: 13px" :src="item.img2">
            <img style="height: 13px" :src="item.img3">
            {{item.txt1}}
          </span>
          </router-link>
          <p class="price">
            <span class="product_price">￥&nbsp;<span style="font-size: 16px">{{item.txt2}}</span></span>
            <span class="guess_btn">看相似</span>
          </p>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="click_loading">
      <a style="color: #686868;" href="javascript:void(0);">点击继续加载</a>
    </div>
  </div>
</template>
<script>
    export default {
        name: '',
        data() {
            return {
              list:[
                {'img1':'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/28912/23/3037/127708/5c23a69aE159a5c21/7660fcadae6ebe68.jpg!q70.dpg.webp',
                  'img2':'https://img10.360buyimg.com/jdphoto/jfs/t1/67472/23/16111/1062/5dd66228Ed3249693/c561eee12d153d56.png',
                  'img3':'https://img12.360buyimg.com/img/jfs/t1/100793/24/9412/2753/5e0ddf46E04e83f78/f1920050a8273df0.png.webp',
                  'txt1':'雅朵鲜花速递同城送花33朵红玫瑰花束生日礼物表白礼盒',
                  'txt2':'168.00',
                  'link':'/index_flower'},
                {'img1':'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/85358/12/9694/337732/5e1289e2E29ca9e5c/2cce418aac17828e.jpg!q80.dpg.webp',
                  // 'img2':'https://img10.360buyimg.com/jdphoto/jfs/t1/67472/23/16111/1062/5dd66228Ed3249693/c561eee12d153d56.png',
                  'img3':'https://img12.360buyimg.com/img/jfs/t1/100793/24/9412/2753/5e0ddf46E04e83f78/f1920050a8273df0.png.webp',
                  'txt1':'华为笔记本 MateBook 14 第三方Linux版 超轻薄本',
                  'txt2':'6599.00',
                  'link':'/index_matebook'},
                {'img1':'http://m.360buyimg.com/mobilecms/s750x750_jfs/t1/108917/2/2351/670026/5e059ab0E28d5fbb2/660b82826c43b6c1.jpg!q80.dpg.webp',
                  'img2':'https://img10.360buyimg.com/jdphoto/jfs/t1/67472/23/16111/1062/5dd66228Ed3249693/c561eee12d153d56.png',
                  'img3':'https://img12.360buyimg.com/img/jfs/t1/100793/24/9412/2753/5e0ddf46E04e83f78/f1920050a8273df0.png.webp',
                  'txt1':'金日禾野 纯燕麦片 共1800g 两罐装 无加蔗糖 澳洲麦源 即食早餐 代餐免煮',
                  'txt2':'39.90',
                  'link':'/index_oat'},
                {'img1':'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/85979/17/5991/398574/5df051f3Ee553fa0a/e623831100db5797.jpg!q70.dpg.webp',
                  'img2':'https://img10.360buyimg.com/jdphoto/jfs/t1/67472/23/16111/1062/5dd66228Ed3249693/c561eee12d153d56.png',
                  //'img3':'https://img12.360buyimg.com/img/jfs/t1/100793/24/9412/2753/5e0ddf46E04e83f78/f1920050a8273df0.png.webp',
                  'txt1':'京东京造 声波电动牙刷X5 白 5种模式（自带刷头*1） USB无线充电 高密度杜邦牙刷',
                  'txt2':'229.00',
                  'link':'/index_tooth'},
                {'img1':'https://m.360buyimg.com/mobilecms/s843x843_jfs/t1/52044/39/8355/93605/5d5cf99eE360ae228/c62c4fed67654c25.jpg!q70.dpg.webp',
                  'img2':'https://img10.360buyimg.com/jdphoto/jfs/t1/67472/23/16111/1062/5dd66228Ed3249693/c561eee12d153d56.png',
                  'img3':'https://img12.360buyimg.com/img/jfs/t1/100793/24/9412/2753/5e0ddf46E04e83f78/f1920050a8273df0.png.webp',
                  'txt1':'卡罗莱（CALUOLA）男士手表全自动机械表运动男表防水多功能时尚学生真皮带精钢带夜光腕表 银色黑色钢带 CA1112',
                  'txt2':'1198.00',
                  'link':'/index_watch'},
                {'img1':'https://m.360buyimg.com/mobilecms/s750x750_jfs/t19810/303/663686830/737202/20736077/5b039308N19c4dd68.jpg!q80.dpg.webp',
                  //'img2':'https://img10.360buyimg.com/jdphoto/jfs/t1/67472/23/16111/1062/5dd66228Ed3249693/c561eee12d153d56.png',
                  'img3':'https://img12.360buyimg.com/img/jfs/t1/100793/24/9412/2753/5e0ddf46E04e83f78/f1920050a8273df0.png.webp',
                  'txt1':'屏风隔断客厅实木中式玄关移动酒店办公室茶室中医养生馆双面画折屏 3d梅兰竹菊四扇一套',
                  'txt2':'600.00',
                  'link':'/index_window'},
              ]
            }
        },
        methods: {}
    }
</script>
<style scoped>
  .title_wrap{
    width: 94%;
    margin-top: 8px;
    margin-left: 10px;
  }
  .text{
    box-sizing: border-box;
    height: 31px;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    color: #232326;
    margin-top: 5px;
    line-height: 16px;
    margin-bottom: 3px;
    padding: 0 4px;
  }
  .price{
    font-size: 13px;
    overflow: hidden;
    position: relative;
    height: 26px;
    width:100%
  }
  .product_price{
    color: #f23030;
    display: inline-block;
    padding: 0 5px 0 4px;
    position: relative;
    top: 1px;
    height: 25px;
    line-height: 25px
  }
  .guess_btn{
    display: block;
    position: absolute;
    top: 2px;
    right: 2px;
    text-align: center;
    color: #686868;
    font-size: 12px;
    width: 49px;
    height: 24px;
    line-height: 25px;
  }
  .van-grid-item__content{
    padding: 2px 2px;
  }
  .click_loading{
    width: 100%;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #7f7f7f;
    text-align: center;
  }
</style>

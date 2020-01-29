<template>
  <div id="wrap">
    <van-row>
      <van-col span="8">
        <div>
          <img src="https://img14.360buyimg.com/jdphoto/jfs/t1/77298/12/10667/2170/5d80ce19Efefd7bc0/36e4d4d6e4bbb577.png.webp"/>
        </div>
        <div>首页</div>
        </van-col>
      <van-col span="8">
        <div>
          <img src="https://img30.360buyimg.com/jdphoto/jfs/t1/44599/31/11613/954/5d80ce29E14dfac8e/79f561a2a89b8206.png.webp"/>
        </div>
        <div>找东西</div>
      </van-col>
      <van-col span="8">
        <div>
          <img src="https://img14.360buyimg.com/jdphoto/jfs/t1/56880/27/11092/1162/5d80ce36E552228df/92d2015dedf57695.png.webp"/>
        </div>
        <div>我的</div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
  name:'jd_foot',
  data(){
    return{

    }
  },
   methods: {

    }
  }
</script>

<style scoped>
  #wrap{
    background-color: #fff;
    width: 100vw;
    height: 7.8vh;
    position: fixed;
    bottom: 0vh;
    left: 0vw;
    z-index: 100;
    text-align: center;
    font-size: 20px;
  }
  #wrap>.van-row>.van-col>div{
    font-size: 0.65em;
    color: #A2A2A2;
  }
  #wrap>.van-row>.van-col>div:nth-child(1){
    margin-top: 0.8vh;
  }
  #wrap>.van-row>.van-col>div>img{
    width: 5.3334vw;
    height: 3vh;
  }
</style>
<!-- 一个未点击的图片地址和两个点击后的图片地址
https://img12.360buyimg.com/jdphoto/jfs/t1/79634/35/10733/1398/5d80ce1cEeb2be87a/4a0c2250790fbf8b.png.webp
https://img12.360buyimg.com/jdphoto/jfs/t1/68258/19/10581/958/5d80ce26E61b3cf2f/e1443532a2b26b16.png.webp
https://img10.360buyimg.com/jdphoto/jfs/t1/43467/19/14850/1188/5d80ce34Eec6e9b25/346bd802b8cc026d.png.webp -->

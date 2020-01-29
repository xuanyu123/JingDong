<template>
  <div class="wrap">
    <img style="width: 100%;height: 35px" src="https://m.360buyimg.com/mobilecms/s750x80_jfs/t1/104532/40/2146/24646/5dcc2957E83954979/5ec2bb870605dcb3.png!q70.jpg.dpg">
    <div class="show">
      <div class="content" style="border-radius: 5px 0 0 0">
        <div class="text">
          <span class="graphic_txt1">数码宝贝</span>
          <p class="graphic_txt2">精选你的热爱</p>
        </div>
        <div style="position: relative">
          <img class="graphic" src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/102152/16/1633/58255/5dc3898bE751f2e0b/9923969f505c3b82.jpg!q70.jpg.dpg" alt="">
          <img class="graphic" src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/91402/34/3363/76313/5ddf6bdeEa376c7b5/3ade035e538a1a56.jpg!q70.jpg.dpg">
        </div>
      </div>
      <div class="content" style="border-radius: 0 5px 0 0">
        <div class="text">
          <span class="graphic_txt1">极客世界</span>
          <p class="graphic_txt2">多一度热爱</p>
        </div>
        <div>
          <img class="graphic" src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/80038/27/1231/60890/5cf72b97E424c8642/578a9ad76eaad066.jpg!q70.jpg.dpg">
          <img class="graphic" src="https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/7449/16/13282/128015/5c3ec537Eef970465/471c989800e83bef.jpg!q70.jpg.dpg">
        </div>
      </div>
    </div>
     <div class="show2">
       <div class="floor_content" :style="item.style" v-for="item in list2">
         <div class="text">
           <span class="graphic_txt1" style="color: black">{{item.txt1}}</span>
           <p class="graphic_txt2">{{item.txt2}}</p>
         </div>
         <div>
           <img class="graphic" :src="item.img" alt="">
         </div>
       </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
              list2:[
                {'img':'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/104796/5/10878/135289/5e211187E3677671b/2a8f28c7480a932c.jpg!q70.jpg.dpg',
                  'txt1':'科技潮玩','txt2':'科技好物',
                  'style':'border-bottom-left-radius: 5px;'},
                {'img':'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/84621/7/8821/223179/5d649e65E41787b9e/7b6340e602f2b8b8.jpg!q70.jpg.dpg',
                  'txt1':'品质生活','txt2':'音乐首选',
                  'style':''},
                {'img':'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/57089/3/7119/429973/5d49a3fcEb38566d5/1b8ad99236434478.jpg!q70.jpg.dpg',
                  'txt1':'自拍必备','txt2':'美颜拍照',
                  'style':''},
                {'img':'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/106960/6/10934/210130/5e227527E2af7b709/4b1ac56b4c5e40ec.jpg!q70.jpg.dpg',
                  'txt1':'时尚男鞋','txt2':'舒适男鞋',
                  'style':'border-bottom-right-radius: 5px'}
              ]
            }
        },
        methods: {}
    }
</script>
<style scoped>
  .wrap{
    width: 100%;
    height: 290px;
    background: #e45041;
    position: relative;

  }
  .show{
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    margin-left: 10px;
  }
  .show>.content{
    width: 177px;
    height: 120px;
    box-sizing: border-box;
    margin-top: 35px;
    background: #ffffff;
    float: left;
  }
  .text{
    width: 100px;
    height: 28px;
  }
  .graphic_txt1{
    font-size: 16px;
    margin-left:  8px;
    font-weight: 700;
    background: linear-gradient(90deg, #45CAFF,#1471FB);
    color: transparent;
    -webkit-background-clip: text;
    position: absolute;
    margin-top: 4px;
  }
  .graphic_txt2{
    position: absolute;
    font-size: 13px;
    margin-left: 8px;
    margin-top: 25px;
  }
  .graphic{
    margin-top: 24px;
    margin-left: 21px;
    width: 60px;
    height: 60px;
  }
  .show2{
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    margin-left: 10px;
  }
  .show2>.floor_content{
    width: 86.5px;
    height: 120px;
    border: 1px solid #fff;
    background: #ffffff;
    position: relative;
    float: left;
    margin-top: 155.5px;
  }
</style>

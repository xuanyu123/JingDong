<template>
  <div class="wrap">
    <img style="width: 100%;height: 35px;background: #e45041" src="https://m.360buyimg.com/mobilecms/s750x80_jfs/t1/103080/1/6315/23804/5df25d68E3eae6519/deef719dfdfe2844.png!q70.jpg.dpg">
    <div class="show">
      <div class="content" :style="item.style" v-for="item in list">
        <div class="text">
          <span class="graphic_txt1" :style="item.txt_style">{{item.txt1}}</span>
          <p class="graphic_txt2">{{item.txt2}}</p>
        </div>
        <div>
          <img class="graphic" :src="item.img" alt="">
        </div>
      </div>
    </div>
    <div class="show">
      <div class="floor_content" :style="item.style" v-for="item in list2">
        <div class="text">
          <span class="graphic_txt1" :style="item.txt_style">{{item.txt1}}</span>
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
              list:[
                {'img':'https://m.360buyimg.com/n1/s150x150_jfs/t29566/227/1464891645/10350/a5b133e2/5ce20cdcNd9cdd972.jpg!q70.jpg.dpg',
                  'txt1':'免息星球','txt2':'白条免息购',
                  'style':'border-top-left-radius: 5px',
                  'txt_style':'background: -webkit-linear-gradient(left,#FF2A2A,#F139D2);background: linear-gradient(90deg, #FF2A2A,#F139D2);color: transparent;-webkit-background-clip: text;'},
                {'img':'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/85072/25/5818/20921/5def3796Eeb18104b/fed4740b6b58d144.jpg!q70.jpg.dpg',
                  'txt1':'每日特价','txt2':'9块9疯抢',
                  'style':'',
                  'txt_style':'background: -webkit-linear-gradient(left,#FE8537,#F02B2B);background: linear-gradient(90deg, #FE8537,#F02B2B);color: transparent;-webkit-background-clip: text;'},
                {'img':'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/100430/19/5671/35161/5def3b36Eda0d4e24/cae78ce556a995c7.png!q70.jpg.dpg',
                  'txt1':'品牌闪购','txt2':'汇大牌好价',
                  'style':'',
                  'txt_style':'background: -webkit-linear-gradient(left,#FF765C,#FF23B3);background: linear-gradient(90deg, #FF765C,#FF23B3);color: transparent;-webkit-background-clip: text;'},
                {'img':'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/75300/31/13658/33045/5daeb773Ebbbd91bd/47a1bdf9047ed568.jpg!q70.jpg.dpg',
                  'txt1':'京东直播','txt2':'好货即刻买',
                  'style':'border-top-right-radius: 5px',
                  'txt_style':'background: -webkit-linear-gradient(left,#FF2A00,#FF00AF);background: linear-gradient(90deg, #FF2A00,#FF00AF);color: transparent;-webkit-background-clip: text;'}
              ],
              list2:[
                {'img':'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/71612/30/758/62076/5cefa5a6E2494c8c2/13aac3e0bb1b4e55.png!q70.jpg.dpg',
                  'txt1':'排行榜','txt2':'销量排行推荐',
                  'style':'border-bottom-left-radius: 5px',
                  'txt_style':'background: -webkit-linear-gradient(left,#D400FF,#FF320A);background: linear-gradient(90deg, #D400FF,#FF320A);color: transparent;-webkit-background-clip: text;'},
                {'img':'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/34938/26/11155/70774/5cefa0c6E5a90edb2/47b686712510d44e.png!q70.jpg.dpg',
                  'txt1':'拍拍好物','txt2':'二手优品',
                  'style':'',
                  'txt_style':'background: -webkit-linear-gradient(left,#D400FF,#FF320A);background: linear-gradient(90deg, #D400FF,#FF320A);color: transparent;-webkit-background-clip: text;'},
                {'img':'https://m.360buyimg.com/n1/s150x150_jfs/t11128/25/2817168750/9187/72b53c/5cdaa568N8f652eb8.jpg!q70.jpg.dpg',
                  'txt1':'新品首发','txt2':'京东小魔方',
                  'style':'',
                  'txt_style':'background: -webkit-linear-gradient(left,#D400FF,#FF320A);background: linear-gradient(90deg, #D400FF,#FF320A);color: transparent;-webkit-background-clip: text;'},
                {'img':'https://m.360buyimg.com/mobilecms/s150x150_jfs/t1/38988/36/7707/54292/5cefa2b0E1cce5cfa/64e76ed6c67568bf.png!q70.jpg.dpg',
                  'txt1':'发现好货','txt2':'发现品质生活',
                  'style':'border-bottom-right-radius: 5px',
                  'txt_style':'background: -webkit-linear-gradient(left,#D400FF,#FF320A);background: linear-gradient(90deg, #D400FF,#FF320A);color: transparent;-webkit-background-clip: text;'}
              ]
            }
        },
        methods: {}
    }
</script>
<style scoped>
  .wrap{
    height: 285px;
    width: 100%;background: #e45041;
  }
  .show{
    width: 100%;
    height: 127px;
    margin-top: -4px;
    box-sizing: border-box;
    padding-left: 11px;
    display: block;
  }
  .text{
    width: 86px;
    height: 28px;
  }
  .graphic{
    margin-top: 24px;
    margin-left: 21px;
    width: 60px;
    height: 60px;
  }
  .show>.content{
    width: 85.5px;
    height: 120px;
    border: 1px solid #fff;
    background: #ffffff;
    float: left;
  }
  .graphic_txt1{
    font-size: 17px;
    margin-left:  8px;
    font-weight: 700;
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
  .show>.floor_content{
    width: 85.5px;
    height: 120px;
    border: 1px solid #fff;
    background: #ffffff;
    float: left;
  }
</style>

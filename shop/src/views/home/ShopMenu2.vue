<template>
  <div>
    <img style="width: 100%;height: 54px;" src="https://m.360buyimg.com/mobilecms/s750x108_jfs/t1/88844/35/9114/253819/5e0ae526E8042b26f/751aec7dc018a62b.png.webp">
    <div class="wrap">
      <div class="graphic" v-for="item in list">
        <div>
          <img class="show1" :src="item.img1">
          <img class="show2" :src="item.img2">
          <p class="txt1">{{item.txt1}}</p>
          <p class="txt2">{{item.txt2}}</p>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="graphic" v-for="item in list2">
        <div>
          <img class="show1" style="top: 8px"  :src="item.img1">
          <img class="show2" :src="item.img2">
          <p class="txt2" style="font-size: 7px;top: -6.5px">{{item.txt1}}</p>
          <p class="txt2" style="font-size: 14px">{{item.txt2}}</p>
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
                {'img1':'https://m.360buyimg.com/n1/s240x240_jfs/t20140/13/1925551860/271166/f4788cde/5b3cb638N5c89b2db.jpg!q70.jpg.dpg',
                  'img2':'https://m.360buyimg.com/mobilecms/s240x174_jfs/t1/104415/37/8966/48287/5e099982Ef4c574ca/7663786095e1421d.png!q70.jpg.dpg',
                  'txt1':'精选基围虾', 'txt2':'热销爆款'},
                {'img1':'https://m.360buyimg.com/n1/s240x240_jfs/t30412/128/852656931/522977/2050387e/5bffa901N731564e1.jpg!q70.jpg.dpg',
                  'img2':'https://m.360buyimg.com/mobilecms/s240x174_jfs/t1/104415/37/8966/48287/5e099982Ef4c574ca/7663786095e1421d.png!q70.jpg.dpg',
                  'txt1':'猕猴桃榜', 'txt2':'年货好礼'},
                {'img1':'https://m.360buyimg.com/mobilecms/s240x240_jfs/t1/52129/37/4016/259405/5d1b06a9E101f7b83/5222e49926ebfb24.jpg!q70.jpg.dpg',
                  'img2':'https://m.360buyimg.com/mobilecms/s240x174_jfs/t1/104415/37/8966/48287/5e099982Ef4c574ca/7663786095e1421d.png!q70.jpg.dpg',
                  'txt1':'全球美酒', 'txt2':'世界美酒'},
                {'img1':'https://m.360buyimg.com/mobilecms/s240x240_jfs/t18553/257/1531158385/326442/22558d1e/5acdd99dN253e9f0e.jpg!q70.jpg.dpg',
                  'img2':'https://m.360buyimg.com/mobilecms/s240x174_jfs/t1/104415/37/8966/48287/5e099982Ef4c574ca/7663786095e1421d.png!q70.jpg.dpg',
                  'txt1':'酥香浓郁', 'txt2':'爽脆香甜'},
              ],
              list2:[
                {'img1':'https://m.360buyimg.com/n1/s240x240_jfs/t1/28914/2/9602/169287/5c811c99E614c73c8/94f153a0eaf439ec.jpg!q70.jpg.dpg',
                  'img2':'https://m.360buyimg.com/mobilecms/s184x242_jfs/t1/86994/10/8983/55217/5e09ac39Ee211bdc2/22dfd4ee03dbbbed.png!q70.jpg.dpg',
                  'txt1':'车品3件7折','txt2':'生活服务'},
                {'img1':'https://m.360buyimg.com/n1/s240x240_jfs/t1/98728/32/9226/131545/5e0dc642E8eebc355/90a9cde259edf74d.jpg!q70.jpg.dpg',
                  'img2':'https://m.360buyimg.com/mobilecms/s184x242_jfs/t1/86994/10/8983/55217/5e09ac39Ee211bdc2/22dfd4ee03dbbbed.png!q70.jpg.dpg',
                  'txt1':'每满300减50','txt2':'时尚女装'},
                {'img1':'https://m.360buyimg.com/n1/s240x240_jfs/t1/79768/9/12864/187925/5da16ea0E06ea4371/6e23e562a87ed3ba.jpg!q70.jpg.dpg',
                  'img2':'https://m.360buyimg.com/mobilecms/s184x242_jfs/t1/86994/10/8983/55217/5e09ac39Ee211bdc2/22dfd4ee03dbbbed.png!q70.jpg.dpg',
                  'txt1':'满200减20','txt2':'探鲜集市'},
                {'img1':'https://m.360buyimg.com/n1/s240x240_jfs/t23515/258/2341094109/248613/41d39b06/5b7aa54bNdf518718.jpg!q70.jpg.dpg',
                  'img2':'https://m.360buyimg.com/mobilecms/s184x242_jfs/t1/86994/10/8983/55217/5e09ac39Ee211bdc2/22dfd4ee03dbbbed.png!q70.jpg.dpg',
                  'txt1':'低至3件7折','txt2':'文具办公'},
              ]
            }
        },
        methods: {}
    }
</script>
<style scoped>
  .wrap{
    width: 100%;
    height: 128px;
    background-color: #e45041;
    display: flex;
    margin-top: -4px;
    position: relative;
  }
  .graphic{
    position: relative;
    width: 25%;
    float: left;
    margin-left: 10.3px;
    margin-right: -15px;
  }
  .show1{
    position: absolute;
    top: 26px;
    left: 9.6px;
    width:70px;
    height: 67px;
  }
  .show2{
    position: absolute;
    top: 0;
    left: 0;
    width:87px;
    height: 120px;
   }
  .txt1{
    width:100%;
    height: 20px;
    text-align: center;
    position: absolute;
    top: 0;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
  .txt2{
    width: 100%;
    height: 20px;
    top: 12px;
    text-align: center;
    position: absolute;
    color: #fff;
    margin-top: 79px;
    font-size: 12px;
  }
</style>

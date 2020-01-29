<template>
  <div id="wrap">
    <div id="top">
      <div v-for="a in array">
        <span>
          {{a.title}}
        </span>
        <span>
          {{a.name}}
        </span>
        <div>
          <img :src="a.imgone"/>
          <span>
            {{a.textone}}
          </span>
          <img :src="a.imgtwo"/>
          <span>
            {{a.texttwo}}
          </span>
        </div>
      </div>
    </div>
    <jd_spot></jd_spot>
    <img class="one" src="https://img13.360buyimg.com/jdphoto/jfs/t1/54439/2/8477/2933/5d5d3459ed16d6493/05266712e43149ba.gif"/>
    <img class="two" src="https://img13.360buyimg.com/jdphoto/jfs/t1/54439/2/8477/2933/5d5d3459ed16d6493/05266712e43149ba.gif"/>
  </div>
</template>

<script>
  import jd_spot from '@/views/Point_gift/jd_spot'
  export default {
  name:'jd_finehair',
  components:{ jd_spot },
  data(){
    return{
      array:[
        {'title':'工厂直供',
        'name':'验货保证',
        'imgone':'https://img10.360buyimg.com/mobilecms/s158x158_jfs/t1/102372/39/11122/48295/5e251f40e803c4477/90947b74121e7be1.jpg!q70.dpg.webp',
        'textone':'产自辽宁沈阳',
        'imgtwo':'https://img10.360buyimg.com/mobilecms/s158x158_jfs/t1/104986/35/5673/92336/5def3a1ae5d300f0f/c194b69eff95ce0d.jpg!q70.dpg.webp',
        'texttwo':'超值爆款',
        },
        {'title':'京喜直播',
        'name':'工厂好物',
        'imgone':'https://m.360buyimg.com/ceco/s158x202_jfs/t1/104042/11/10687/223959/5e217d19ea8127a57/75c93a8c4349953d.jpg!cc_158x202!q70.dpg.webp',
        'textone':'直播购机福利',
        'imgtwo':'https://m.360buyimg.com/ceco/s158x202_jfs/t1/101846/40/10865/250075/5e21a28ae56016ace/6f536b0e67fb0502.jpg!cc_158x202!q70.dpg.webp',
        'texttwo':'直播专属优惠'
        },
      ]
    }
  },
   methods: {

    }
  }
</script>

<style scoped>
  #wrap{
    width: 100vw;
    height: 20vh;
    position: relative;
    top: 0;
    left: 0;
  }
  #wrap>.one{
    width: 11vw;
    height: 1.8vh;
    position: absolute;
    top: 4.9vh;
    left: 51vw;
    border-radius: 5px;
  }
  #wrap>.two{
    width: 11vw;
    height: 1.8vh;
    position: absolute;
    top: 4.9vh;
    left: 76vw;
    border-radius: 5px;
  }
  #wrap>#top{
    display: flex;
  }
  #wrap>#top>div{
    flex: 1;
  }
  #wrap>#top>div>span:nth-child(1){
    font-size: 0.8em;
    font-weight: bold;
    margin-left: 7px;
  }
  #wrap>#top>div>span:nth-child(2){
    font-size: 0.5em;
    color: #A2A2A2;
  }
  #wrap>#top>div:nth-child(1)>div>img{
    width: 21.07vw;
    height: 11.845vh;
    margin: 1vh 1vw;
  }
  #wrap>#top>div:nth-child(1)>div>span{
    width: 21.07vw;
    text-align: center;
    color: #fff;
    background-color: #00f;
    border-radius: 5px;
  }
  #wrap>#top>div:nth-child(1)>div>span:nth-child(2){
    font-size: 0.5em;
    position: absolute;
    bottom: 1vh;
    left: 1.7vw;
  }
  #wrap>#top>div:nth-child(1)>div>span:nth-child(4){
    font-size: 0.5em;
    position: absolute;
    bottom: 1vh;
    left: 25.6vw;
  }
  #wrap>#top>div:nth-child(2)>div>img{
    width: 21.07vw;
    height: 15.134vh;
    margin: 1vh 1vw;
  }
  #wrap>#top>div:nth-child(2)>div>span{
    width: 21.07vw;
    text-align: center;
    color: #fff;
    background-color: #f00;
    border-radius: 5px;
  }
  #wrap>#top>div:nth-child(2)>div>span:nth-child(2){
    font-size: 0.5em;
    position: absolute;
    bottom: -2.3vh;
    left: 51vw;
  }
  #wrap>#top>div:nth-child(2)>div>span:nth-child(4){
    font-size: 0.5em;
    position: absolute;
    bottom: -2.3vh;
    left: 75.7vw;
  }
</style>

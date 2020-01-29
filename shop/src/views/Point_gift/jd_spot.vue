<template>
  <div id="under">
    <div id="board">
      <div v-for="a in array">
        <img :src="a.img"/>
        <p>{{a.name}}</p>
        <p>{{a.text}}</p>
      </div>
    </div>
    <div id="wow">
      <van-row>
        <van-col span="8">
          <p>猜你喜欢</p>
          <P>为你推荐</P>
        </van-col>
        <van-col span="8">
          <p>京东商城</p>
          <p>春节不打烊</p>
        </van-col>
        <van-col span="8">
          <p>好货视频</p>
          <p>边买边看</p>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
  export default {
  name:'jd_spot',
  data(){
    return{
      array:[
        {
          'img':'https://img14.360buyimg.com/mobilecms/s170x170_jfs/t1/62426/8/8915/84854/5d6c899ce12bff21d/beb04694b0fbaf5a.jpg!q70.dpg.webp',
          'name':'运动户外',
          'text':'运动1元起'
        },
        {
          'img':'https://img10.360buyimg.com/mobilecms/s170x170_jfs/t1/87512/26/375/85019/5dac0fcae89d5c487/6c6ede292d011e7f.jpg!q70.dpg.webp',
          'name':'礼品医药',
          'text':'礼品9.9元拼'
        },
        {
          'img':'https://img12.360buyimg.com/mobilecms/s170x170_jfs/t1/108982/20/3896/58494/5e15a8dfe7993be95/4d66ca2d11e6ab84.jpg!q70.dpg.webp',
          'name':'居家生活',
          'text':'万件1元拼'
        },
        {
          'img':'https://img13.360buyimg.com/mobilecms/s170x170_jfs/t1/96610/9/2219/62391/5dccb206e322356d9/7f7d7924615487bc.jpg!q70.dpg.webp',
          'name':'运动鞋包',
          'text':'鞋包低至1元'
        },
      ]
    }
  },
   methods: {

    }
  }
</script>

<style scoped>
  #under{
    width: 100vw;
    height: 32vh;
    font-size: 20px;
    margin-top: 1vh;
    position: relative;
    top: 0;
    left: 0;
  }
  #under>#board{
    width: 100vw;
    height: 24vh;
	  background-image: url(http://img12.360buyimg.com/img/s750x324_jfs/t1/87487/13/10824/23525/5e203222e67e915f7/19413e73d9dd4a36.png.webp);
    background-size: 100vw 24vh;
    background-repeat: no-repeat;
  }
  #under>#board>div>img{
    width: 22.934vw;
    height: 12.894vh;
    border-radius: 5px;
  }
  #under>#board>div>p{
    color: #fff;
  }
  #under>#board>div>p:nth-child(2){
    font-size: 0.7em;
    font-weight: bold;
  }
  #under>#board>div>p:nth-child(3){
    font-size: 0.5em;
  }
  #under>#board>div:nth-child(1)>img{
    position: absolute;
    top: 4.6vh;
    left: 2.6vw;
  }
  #under>#board>div:nth-child(1)>p:nth-child(2){
    position: absolute;
    top: 17.3vh;
    left: 7vw;
  }
  #under>#board>div:nth-child(1)>p:nth-child(3){
    position: absolute;
    top: 20.2vh;
    left: 7vw;
  }
  #under>#board>div:nth-child(2)>img{
    position: absolute;
    top: 4.6vh;
    left: 26.6vw;
  }
  #under>#board>div:nth-child(2)>p:nth-child(2){
    position: absolute;
    top: 17.3vh;
    left: 31vw;
  }
  #under>#board>div:nth-child(2)>p:nth-child(3){
    position: absolute;
    top: 20.2vh;
    left: 31vw;
  }
  #under>#board>div:nth-child(3)>img{
    position: absolute;
    top: 4.6vh;
    left: 50.6vw;
  }
  #under>#board>div:nth-child(3)>p:nth-child(2){
    position: absolute;
    top: 17.3vh;
    left: 55vw;
  }
  #under>#board>div:nth-child(3)>p:nth-child(3){
    position: absolute;
    top: 20.2vh;
    left: 55vw;
  }
  #under>#board>div:nth-child(4)>img{
    position: absolute;
    top: 4.6vh;
    left: 74.6vw;
  }
  #under>#board>div:nth-child(4)>p:nth-child(2){
    position: absolute;
    top: 17.3vh;
    left: 79vw;
  }
  #under>#board>div:nth-child(4)>p:nth-child(3){
    position: absolute;
    top: 20.2vh;
    left: 79vw;
  }
  #under>#wow{
    width: 100vw;
    height: 20vh;
    background-color: #e2e2e2;
  }
  #under>#wow>.van-row>.van-col{
    padding-top: 20px;
    box-sizing: border-box;
  }
  #under>#wow>.van-row>.van-col:nth-child(1)>p{
    color: #f00;
  }
  #under>#wow>.van-row>.van-col:nth-child(1)>p:nth-child(2){
    color: #f00;
  }
  #under>#wow>.van-row>.van-col>p{
    text-align: center;

  }
  #under>#wow>.van-row>.van-col>p:nth-child(1){
    font-size: 0.8em;
    font-weight: bold;
  }
  #under>#wow>.van-row>.van-col>p:nth-child(2){
    font-size: 0.5em;
    color: #757575;
  }
</style>

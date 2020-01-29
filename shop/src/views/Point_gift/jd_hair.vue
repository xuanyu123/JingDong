<template>
  <div id="wrap">
    <div id="title">
      <div>
        今日直销
      </div>
      <div>
        限时抢
      </div>
      <div>
        18:56:03
      </div>
      <div>
        更多
      </div>
      <div>
        <van-icon name="arrow" />
      </div>
    </div>
    <div id="meat">
      <div v-for="a in array">
        <div>
          <img :src="a.img"/>
        </div>
        <div>
          {{a.text}}
        </div>
        <div>
          {{a.num}}
        </div>
      </div>
    </div>
    <jd_finehair></jd_finehair>
  </div>
</template>

<script>
  import jd_finehair from '@/views/Point_gift/jd_finehair'
  export default {
  name:'jd_hair',
  components:{ jd_finehair },
  data(){
    return{
      array:[
        {'img':'https://img10.360buyimg.com/n1/jfs/t1/83299/25/12711/73808/5d9fdef8e63ac3cf0/2767606d76f2e55b.jpg!q70.dpg.webp','text':'￥9.5','num':'3651人已拼'},
        {'img':'https://img10.360buyimg.com/n1/jfs/t1/86523/10/10933/138521/5e21198ee45a10a34/47f43227aafbd0f5.jpg!q70.dpg.webp','text':'￥59','num':'739人已拼'},
        {'img':'https://img10.360buyimg.com/n1/jfs/t1/106662/28/371/234812/5dac4ca9e0eb61785/08dd27e302ea7d0e.jpg!q70.dpg.webp','text':'￥8.5','num':'3381人已拼'},
        {'img':'https://img10.360buyimg.com/n1/jfs/t1/84832/3/7709/169336/5dfeee8beb7ff0600/831aa12223006ea3.jpg!q70.dpg.webp','text':'￥6.89','num':'976人已拼'},
        {'img':'https://img10.360buyimg.com/n1/jfs/t1/19968/24/8211/144990/5c74f608e4b770a5d/67bd9b7a9474c2d8.jpg!q70.dpg.webp','text':'￥4.8','num':'1.8万人已拼'},
        {'img':'https://img10.360buyimg.com/n1/jfs/t1/101722/36/7041/121465/5df828eee91d9bbfc/5f50bb9dc8499874.jpg!q70.dpg.webp','text':'￥18.9','num':'3500人已拼'},
        {'img':'https://img10.360buyimg.com/n1/jfs/t1/78969/31/12607/126270/5da050a8ea32e768d/a258b68d060aae85.jpg!q70.dpg.webp','text':'￥9.8','num':'1764人已拼'},
        {'img':'https://img10.360buyimg.com/n1/jfs/t1/102551/13/7134/78609/5df9d3dcedc5d2ba1/29abb114e452228c.jpg!q70.dpg.webp','text':'￥39.9','num':'1.1万人已拼'},
        {'img':'https://img10.360buyimg.com/n1/jfs/t1/38388/34/3105/250952/5cc3fd53e91018097/d12800c068662e83.jpg!q70.dpg.webp','text':'￥15.9','num':'1.5万人已拼'},
        {'img':'https://img10.360buyimg.com/n1/jfs/t1/89917/4/4308/189983/5de655a6eb44ebbaa/1cca3349115b0e97.jpg!q70.dpg.webp','text':'￥8.8','num':'4.5万人已拼'},
        {'img':'https://img10.360buyimg.com/n1/jfs/t1/30919/35/7923/93005/5c9afe46ea0ffea34/3a540fe3450279c5.jpg!q70.dpg.webp','text':'￥7.5','num':'10.5万人已拼'},
        {'img':'https://img10.360buyimg.com/n1/jfs/t1/87244/9/8149/125096/5e02fa16e2334c08a/2b3268666b3659c3.jpg!q70.dpg.webp','text':'￥9.8','num':'212人已拼'},
        {'img':'https://img10.360buyimg.com/n1/jfs/t1/88325/17/4039/171334/5de4b742e31ff9cb6/5ef5dfa9123e5389.jpg!q70.dpg.webp','text':'￥19.9','num':'1030人已拼'},
        {'img':'https://img10.360buyimg.com/n1/jfs/t1/96055/13/3106/118403/5ddc9b48ea4048da6/79ddfdd3c90ad15c.jpg!q70.dpg.webp','text':'￥7.9','num':'1775人已拼'},
        {'img':'https://img10.360buyimg.com/n1/jfs/t1/91461/19/7792/79939/5dfedff9ec7067387/17dbc298eb71b7b5.jpg!q70.dpg.webp','text':'￥9.8','num':'622人已拼'},
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
    height: 2vh;
    font-size: 20px;
    position: relative;
    top: 0;
    left: 0;
  }
  #wrap>#title>div{
    position: relative;
    top: 0;
    left: 0;
  }
  #wrap>#title>div:nth-child(1){
    font-size: 0.8em;
    font-weight: bold;
    position: absolute;
    left: 3vw;
  }
  #wrap>#title>div:nth-child(2){
    font-size: 0.5em;
    color: #f00;
    border: 1px solid #f00;
    background-color: #fff;
    border-radius: 5px 0 0 5px;
    position: absolute;
    top: 0.23vh;
    left: 21vw;
  }
  #wrap>#title>div:nth-child(3){
    font-size: 0.5em;
    font-weight: 800;
    color: #fff;
    border: 1px solid #f00;
    background-color: #f00;
    border-radius: 0 5px 5px 0;
    position: absolute;
    top: 0.234vh;
    left: 33vw;
  }
  #wrap>#title>div:nth-child(4){
    font-size: 0.5em;
    font-weight: 800;
    color: #A2A2A2;
    position: absolute;
    top: 0.27vh;
    left: 89vw;
  }
  #wrap>#title>div:nth-child(5){
    font-size: 0.5em;
    font-weight: 800;
    color: #A2A2A2;
    position: absolute;
    top: 0.39vh;
    left: 96vw;
  }
  #wrap>#meat{
    width: 97%;
    height: 29.162vh;
    margin:auto;
    padding-top: 7vw;
    box-sizing: border-box;
    display: -webkit-box;
    overflow-x: scroll;
    overflow-y: hidden;
    list-style: none;
    white-space:nowrap
  }
  #wrap>#meat::-webkit-scrollbar{
    background-color: transparent;
  }
  #wrap>#meat>div{
    margin: 1em 0 2em 1em;
  }
  #wrap>#meat>div>div{
    font-size: 0.6em;
  }
  #wrap>#meat>div>div:nth-child(2){
    font-weight: bold;
    color: #f00;
    text-align: center;
  }
  #wrap>#meat>div>div:nth-child(3){
    color: #A2A2A2;
  }
  #wrap>#meat>div>div>img{
    width: 22.134vw;
    height: 14.445vh;
  }
</style>

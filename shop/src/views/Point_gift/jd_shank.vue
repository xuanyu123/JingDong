<template>
  <div id="wrap">
    <div v-for="a in array">
      <div>
        {{a.price}}
      </div>
      <div>
        <img :src="a.img"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  name:'jd_shank',
  data(){
    return{
      array:[
        {'price':'￥79.9','img':'https://img12.360buyimg.com/img/s72x28_jfs/t1/85126/30/10756/23193/5e21c1a9Ed0185bf1/77fa5f1ba4f49c9d.png'},
        {'price':'￥9.9','img':'https://img12.360buyimg.com/img/s72x28_jfs/t1/85126/30/10756/23193/5e21c1a9Ed0185bf1/77fa5f1ba4f49c9d.png'},
        {'price':'￥9.9','img':'https://img12.360buyimg.com/img/s72x28_jfs/t1/85126/30/10756/23193/5e21c1a9Ed0185bf1/77fa5f1ba4f49c9d.png'},
        {'price':'￥29.9','img':'https://img12.360buyimg.com/img/s72x28_jfs/t1/85126/30/10756/23193/5e21c1a9Ed0185bf1/77fa5f1ba4f49c9d.png'},
      ]
    }
  },
   methods: {

    }
  }
</script>

<style scoped>
  #wrap{
    font-size: 20px;
    position: relative;
    top: 0;
    left: 0;
  }
  #wrap>div{
    font-size: 0.5em;
    color: #FFF;
    font-weight: 400;
    display: flex;
  }
  #wrap>div>div{
    padding-left: 3px;
    box-sizing: border-box;
  }
  #wrap>div>div>img{
    width: 10vw;
    height: 2.5vh;
  }
  #wrap>div:nth-child(1){
    position: absolute;
    top: 19vh;
    left: 4vw;
  }
  #wrap>div:nth-child(2){
    position: absolute;
    top: 19vh;
    left: 30vw;
  }
  #wrap>div:nth-child(3){
    position: absolute;
    top: 19vh;
    left: 54vw;
  }
  #wrap>div:nth-child(4){
    position: absolute;
    top: 19vh;
    left: 76vw;
  }
</style>

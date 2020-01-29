<template>
  <div class="wrap">
    <div class="top">
      <p><van-tag type="danger">默认</van-tag></p>
      <span>天津东丽区天津空港经济区</span>
      <p>西七道26号438东软</p>
      <p>sherry 181****5962</p>
      <div class="logo"><van-icon style="margin: auto" name="arrow" color="#000" size="18px"/></div>
    </div>
    <div class="bottom">
    </div>
  </div>

</template>

<script>
  export default{
    name:'',
    data(){
      return{
      }
    },
    methods:{
    }
  }
</script>

<style scoped>
  .wrap{
    background: #FFFFFF;
    border-radius: 0px 0px 10px 10px;
  }
  .top{
    font-size: 10px;
    position: relative;
    padding-left: 20px;
    padding-top: 5px;
  }
  .top>span{
    font-size: 1.2em;
    position: absolute;
    left:58px;
    top:7px;
  }
  .top>p:nth-child(3){
    font-size: 1.8em;
    font-weight: bold;
    position: absolute;
    left: 20px;
    top:30px;
  }
  .top>p:nth-child(4){
    font-size: 1.3em;
    position: absolute;
    left: 20px;
    top: 55px;
  }
  .logo{
    float: right;
  }
  .bottom{
    background: url(../../../assets/9.png);
    background-size: cover;
    height: 7px;
    margin-top: 51px;
    margin-left: 5px;
    width: 97%;
  }
</style>
